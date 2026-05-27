---
title: "Theseus: Translating Win32 Statically to WebAssembly"
description: "How do you run synchronous, blocking x86 Windows binaries inside a strictly non-blocking browser event loop? Evan Martin's Theseus compiler solves it using static binary translation, Web Workers, and WebAssembly Memory Atomics."
date: 2026-05-27T12:00:00+05:30
draft: false
tags: ["webassembly", "retro-emulation", "win32", "web-workers", "wasm-atomics"]
categories: ["Technology", "Emulation", "WebAssembly"]
outputs:
  - HTML
  - AMP
---

Statically translating legacy Windows executables directly into WebAssembly is now possible. Evan Martin's project, Theseus, is a static win32/x86 binary compiler that parses x86 instruction blocks, converts them to Rust code, and compiles the result into WebAssembly to run right in the browser. 

While static compilation gives you highly optimized Wasm machine code, running a synchronous desktop application inside the strictly non-blocking event loop of a web browser presents a significant architectural hurdle. 

{{% tldr %}}
1. **Static Binary Translation**: Instead of interpreting instructions at runtime, Theseus compiles x86 instruction sequences to Rust code, which is then compiled into a native binary or a `.wasm` file.
2. **The Blocking Dilemma**: Win32 programs rely on synchronous, blocking APIs like `GetMessage` or `Sleep`. The browser's main UI thread, however, cannot block without freezing the page.
3. **The Async Trap**: An earlier emulator, retrowin32, attempted to make all Windows API calls asynchronous. This introduced heavy control-flow overhead, complex state management, and polluted native stack traces.
4. **The Worker + Atomics Solution**: Theseus runs the compiled program inside a Web Worker. When a blocking win32 API is called, the worker sends a message to the main thread and suspends itself using WASM atomic wait operations (`Atomics.wait`).
5. **Synchronization Loop**: The main thread handles the browser event, writes the result to shared memory (`SharedArrayBuffer`), and wakes the worker thread via `Atomics.notify` to resume execution synchronously.
{{% /tldr %}}

## Static Binary Translation vs Runtime Emulation

Most emulators work by loading an executable and running an instruction-decode loop at runtime. Every cycle, they fetch an instruction, decode the opcode, change the registers, and write to virtual memory. This is highly flexible, but it carries a massive interpretation overhead.

Theseus takes a different path: static binary translation. It reads the `.exe` file ahead of time, decodes the x86 basic blocks, and generates equivalent Rust code. The Rust code is then compiled directly to native code or WebAssembly.

For example, a simple loop in the original assembly is translated into a native Rust function:

```rust
// A simplified view of compiled x86 basic blocks in Rust
fn basic_block_0x401000(cpu: &mut Cpu) {
    cpu.regs.eax = cpu.regs.ebx + 4;
    if cpu.regs.eax == 0 {
        // Jump to target block
        basic_block_0x401020(cpu);
    } else {
        basic_block_0x401015(cpu);
    }
}
```

Because the target is Rust, the compiler (rustc/LLVM) can optimize register allocation, loop unrolling, and call sequences. You get high-performance execution without the cost of a runtime decoder.

## The Architectural Choice: To Block or Not to Block

When emulating an operating system, the biggest design decision is how to handle threads. Win32 programs expect to block. A program calling `GetMessage` will halt execution entirely until a user moves the mouse or presses a key.

In a previous iteration of this emulator, retrowin32, the author chose to make the emulator asynchronous. Control was periodically yielded back to the browser. But this came with severe tradeoffs:

- Every Windows API call that could eventually trigger a callback or wait for an event (like `MoveWindow` or `GetMessage`) had to be made async.
- Native Rust stack traces became useless because they were split across multiple async micro-tasks.
- Debugging was painful. A simple crash yielded a stack trace containing only generic async runtimes instead of the actual call stack.
- The control-flow overhead of suspending and resuming execution in tight loops significantly slowed down execution.

To fix these issues, Theseus made all translated code and Win32 APIs perfectly synchronous. Native builds use real OS threads. This preserves clean, nested stack traces. If the program crashes, you can hook up a debugger and inspect the exact chain of function calls leading to the error.

## Blocking on the Web

The synchronous approach is highly effective for native builds, but it hits a wall in the browser. You cannot block the main thread. 

If you call a synchronous loop that blocks waiting for an event on the main thread, the browser freezes. Paint events stop firing, user input is ignored, and the browser eventually prompts the user to terminate the unresponsive page.

The fundamental solution is to run the emulator on a separate Web Worker thread. While the main thread must remain free to handle rendering and user interactions, worker threads are permitted to block.

## The Web Worker + Atomics Architecture

Theseus achieves synchronous execution in the browser by running the entire Wasm binary inside a Web Worker and coordinating with the main thread using shared memory.

The communication loop operates as follows:

```
[Web Worker (Emulator Thread)]                [Main Thread (UI Thread)]
      |                                              |
      |-- 1. Calls GetMessage()                      |
      |-- 2. Sends postMessage("need_event")         |
      |-- 3. Blocks via Atomics.wait()               |
      |                                              |-- 4. Receives browser event
      |                                              |-- 5. Writes event to SharedArrayBuffer
      |                                              |-- 6. Wakes worker via Atomics.notify()
      |                                              v
      |<-- 7. Resumes execution with event data
      v
```

### 1. The Worker Suspends Execution
When the translated x86 code calls a blocking Win32 API (such as `GetMessage`), the worker sends a message to the main thread indicating it needs input. It then halts its own execution thread.

Instead of writing complex async state machines, the worker suspends itself using the WebAssembly atomics API. It calls a wait instruction on a specific memory address:

```rust
// WebAssembly memory atomic wait
use std::arch::wasm32;

pub fn thread_sleep(state_ptr: *mut i32) {
    unsafe {
        // Wait on the state pointer until another thread changes it from 0
        wasm32::memory_atomic_wait32(state_ptr, 0, -1);
    }
}
```

In Javascript, this is equivalent to calling `Atomics.wait` on an `Int32Array` backed by a `SharedArrayBuffer`:

```javascript
// Worker thread waiting for the main thread
const state = new Int32Array(sharedBuffer);
// Suspends worker thread indefinitely until state[0] changes from 0
Atomics.wait(state, 0, 0); 
```

### 2. The Main Thread Resumes Execution
While the worker thread is asleep, the main thread remains responsive. It captures mouse clicks, window movements, and keyboard input. 

When an event occurs, the main thread writes the event data directly into the `SharedArrayBuffer` at a pre-allocated offset. It then modifies the synchronization index and wakes the sleeping worker:

```javascript
// Main thread wakes the worker
const state = new Int32Array(sharedBuffer);
Atomics.store(state, 0, 1); // Change state value
Atomics.notify(state, 0, 1); // Wake 1 waiting thread
```

Once notified, the Web Worker resumes execution immediately at the exact instruction after `memory_atomic_wait32`. To the translated x86 code, the call to `GetMessage` behaved exactly like a synchronous, blocking system call.

## The Tradeoffs of Atomics

While the Worker + Atomics architecture keeps the Wasm compiler output clean and fast, it introduces its own set of challenges:

1. **Security Headers**: Using `SharedArrayBuffer` requires the website to be served with strict HTTP headers:
   - `Cross-Origin-Opener-Policy: same-origin`
   - `Cross-Origin-Embedder-Policy: require-corp`
   Without these headers, modern browsers disable `SharedArrayBuffer` to mitigate Spectre-style side-channel attacks.
2. **Context Switching**: While passing pointers through shared memory is highly efficient, waking a sleeping thread via the browser's scheduling sub-system still incurs a minor context-switch latency.
3. **Complexity of Shared State**: Reading and writing to the same memory space from the main thread and a worker introduces the potential for race conditions. Theseus mitigates this by strictly separating the UI state buffer from the emulated RAM space.

## Conclusion

By leveraging Web Workers and Wasm Memory Atomics, Theseus demonstrates that you do not need to rewrite synchronous systems into async state machines to run them in a browser. 

Statically compiling basic blocks removes the CPU decoding bottleneck, while low-level browser primitives allow the emulator to block safely. This makes the browser a viable runtime for complex, legacy desktop architectures.
