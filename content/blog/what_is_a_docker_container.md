---
title: "What Is a Docker Container? Build One With unshare, chroot and cgroups"
description: "A Docker container is a normal Linux process with namespaces, a chroot and cgroup limits. Build one by hand with unshare, chroot and a memory cgroup, then reach it through a Pinggy tunnel."
date: 2026-10-23T10:00:00+05:30
lastmod: 2026-10-23T10:00:00+05:30
draft: false
tags: ["Docker", "localhost", "tunneling"]
og_image: "images/what_is_a_docker_container/what_is_a_docker_container_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIldoYXQgSXMgYSBEb2NrZXIgQ29udGFpbmVyPyBCdWlsZCBPbmUgV2l0aCB1bnNoYXJlLCBjaHJvb3QgYW5kIGNncm91cHMiLAogICJkZXNjcmlwdGlvbiI6ICJBIERvY2tlciBjb250YWluZXIgaXMgYSBub3JtYWwgTGludXggcHJvY2VzcyB3aXRoIG5hbWVzcGFjZXMsIGEgY2hyb290IGFuZCBjZ3JvdXAgbGltaXRzLiBCdWlsZCBvbmUgYnkgaGFuZCB3aXRoIHVuc2hhcmUsIGNocm9vdCBhbmQgYSBtZW1vcnkgY2dyb3VwLCB0aGVuIHJlYWNoIGl0IHRocm91Z2ggYSBQaW5nZ3kgdHVubmVsLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy93aGF0X2lzX2FfZG9ja2VyX2NvbnRhaW5lci93aGF0X2lzX2FfZG9ja2VyX2NvbnRhaW5lcl9iYW5uZXIud2VicCIsCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0yM1QxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTIzVDEwOjAwOjAwKzA1OjMwIiwKICAiYXV0aG9yIjogewogICAgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsCiAgICAibmFtZSI6ICJQaW5nZ3kiCiAgfSwKICAicHVibGlzaGVyIjogewogICAgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsCiAgICAibmFtZSI6ICJQaW5nZ3kiLAogICAgImxvZ28iOiB7CiAgICAgICJAdHlwZSI6ICJJbWFnZU9iamVjdCIsCiAgICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYXNzZXRzL3BpbmdneV9sb2dvLnBuZyIKICAgIH0KICB9LAogICJtYWluRW50aXR5T2ZQYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvd2hhdF9pc19hX2RvY2tlcl9jb250YWluZXIvIgp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "what_is_a_docker_container/what_is_a_docker_container_banner.webp" "A container is a process: a root filesystem plus namespaces plus a memory limit equals docker run" >}}

A Docker container is a normal Linux process. It shows up in the host's `ps`, it has a host PID, and the host kernel runs it. What makes it feel like a small machine is three things the kernel does to that process: **namespaces** change what it can see, a **chroot-style root swap** gives it its own filesystem, and **cgroups** cap what it can use. You can do all three yourself with `unshare`, `chroot` and a few writes under `/sys/fs/cgroup`, no Docker installed.

This post builds that by hand on one machine with an Alpine root filesystem, checks each step from the host side, and finishes by putting the hand-made container behind a public URL.

{{% tldr %}}
1. A container is **one process with restrictions**, not a virtual machine. The host sees it in `/proc` like any other process.
2. **Namespaces** (PID, mount, UTS, network and others) decide what the process can see. `unshare` creates them in one command.
3. An **image is a directory tree**. `chroot` (Docker uses `pivot_root`) makes it the process's `/`.
4. **cgroups** decide how much it can use. A memory limit written to a file gets the process killed with exit code 137 when it goes over.
5. Docker automates this with `runc` and adds networking, image layers and a daemon. Rootless setups are possible, but rootless networking is the awkward part.
{{% /tldr %}}

## The setup: Alpine, root and util-linux

Everything below ran as root on Ubuntu 24.04 with kernel 6.18 and `unshare` from util-linux 2.39.3. The root filesystem is Alpine's minimal tarball (about 3.7 MB), the same kind of tree a `FROM alpine` image unpacks to:

```bash
mkdir rootfs
curl -sfLO https://dl-cdn.alpinelinux.org/alpine/v3.22/releases/x86_64/alpine-minirootfs-3.22.2-x86_64.tar.gz
tar xzf alpine-minirootfs-3.22.2-x86_64.tar.gz -C rootfs
ls rootfs
```

```text
bin  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

That is the whole "image": a folder. Nothing runs yet.

## Step 1: namespaces change what the process sees

Every process already lives in a set of namespaces. You can list them for your own shell:

```bash
ls -l /proc/self/ns
```

Each entry is a link such as `pid -> pid:[4026531836]`. Two processes with the same number share that view of the system. Docker's trick is to start a process with *new* numbers.

`unshare` does exactly that. This command starts a shell in a new PID, mount, UTS (hostname) and network namespace:

```bash
unshare --pid --fork --mount --uts --net sh -c 'sleep 30' &
```

Now compare, from the host, the namespace IDs of that `sleep` against your own shell. These are the numbers from my run (host PID 589):

```text
sleep (host PID 589)        my shell
mnt -> mnt:[4026532264]     mnt -> mnt:[4026531832]
net -> net:[4026532267]     net -> net:[4026531833]
pid -> pid:[4026532266]     pid -> pid:[4026531836]
uts -> uts:[4026532265]     uts -> uts:[4026531838]
```

Every ID differs. The `sleep` is an ordinary process the host can see and `kill`, but inside its new namespaces it believes it is alone. There is also a user namespace, an IPC one, a cgroup one and a time one, which Docker uses depending on the options you pass.

{{< image "what_is_a_docker_container/namespaces_host_vs_container.webp" "Table comparing the mnt, net, pid and uts namespace IDs of a normal shell with those of a process started by unshare, all different" >}}

*Namespace IDs read from /proc/PID/ns on one machine. Same kernel, different IDs.*

## Step 2: a directory becomes the root filesystem

Namespaces alone do not give the process a different filesystem. The mount namespace only means mounts made inside it do not leak out. The new `/` comes from `chroot`:

```bash
unshare --pid --fork --mount --uts --ipc --net sh -c '
  mount --make-rprivate /
  mount --bind rootfs rootfs
  mount -t proc proc rootfs/proc
  hostname mybox
  chroot rootfs /bin/sh -c "hostname; ps; head -2 /etc/os-release"
'
```

```text
mybox
PID   USER     TIME  COMMAND
    1 root      0:00 sh -c  mount --make-rprivate / ; ...
    6 root      0:00 /bin/sh -c hostname; ps; head -2 /etc/os-release
    8 root      0:00 ps
NAME="Alpine Linux"
ID=alpine
```

Three things to read off that output. The hostname is `mybox` while the host's is unchanged (UTS namespace). `ps` lists three processes and the first is PID 1, because the PID namespace restarts numbering and `/proc` was mounted fresh inside the new root. And `/etc/os-release` says Alpine on an Ubuntu host: the shell is running Alpine's userland on the host's kernel.

`--make-rprivate` matters. Without it, the `mount` calls can propagate back to the host's mount table on systems where `/` is shared. Docker does this swap with `pivot_root` rather than `chroot`, which also lets it unmount the old root so the process cannot walk back to it. For a demo `chroot` is enough, but it is not a security boundary on its own.

The network namespace was created with `--net` and I configured nothing inside it, so it has no route to anywhere. Docker connects that namespace to a bridge with a veth pair; I did not do that here, because the `ip` tool is not in the Alpine tarball.

## Step 3: cgroups cap what it can use

Namespaces and the root swap isolate what the process sees. Nothing so far stops it from eating all the RAM. That is the job of **cgroups**, a kernel tree of groups with resource limits, controlled through files.

On a current distro with cgroup v2, a 50 MB memory cap looks like this (untested here, see the note below):

```bash
sudo mkdir /sys/fs/cgroup/demo
echo 50M | sudo tee /sys/fs/cgroup/demo/memory.max
echo $$   | sudo tee /sys/fs/cgroup/demo/cgroup.procs   # move this shell in
```

The machine I tested on uses the older cgroup v1 layout, so I ran the v1 equivalent, `memory.limit_in_bytes` under `/sys/fs/cgroup/memory/demo`. After moving my shell in and allocating 200 MB in Python, the process died:

```text
52428800
/bin/bash: line 11:   599 Killed   python3 -c "b=bytearray(200*1024*1024) ..."
exit=137
```

`52428800` is the 50M limit in bytes. Exit code 137 is 128 + 9: the kernel's OOM killer sent `SIGKILL`. This is the same thing that happens when `docker run -m 50m` hits its limit. Docker writes those values for you into a cgroup it creates per container; `--cpus` and `--pids-limit` map to the `cpu` and `pids` controllers.

{{< image "what_is_a_docker_container/container_kernel_features.webp" "docker run calls runc, which applies namespaces, pivot_root and cgroups to one process on a shared Linux kernel" >}}

*A container is these three kernel features applied to one process.*

## What runc adds on top

Docker the daemon pulls images and manages state, but the actual start is done by `runc`, a small runtime written in Go. A few things follow from that:

- The runtime has to enter namespaces before Go starts several threads, because some of those system calls only work on a single-threaded process. `runc` solves this with a C constructor (`nsenter`) that runs first, then Go takes over.
- Go has no usable `fork()`, so `runc` starts a child by re-executing itself via `/proc/self/exe` with an `init` argument. That child applies the restrictions and then `exec`s your command.
- The daemon normally runs as root, because most of these calls (creating namespaces, mounting, writing cgroups) have historically needed it. Rootless Docker and Podman exist and work, but they have to give the container a user-space network stack, which is the part that costs throughput and features.

On macOS and Windows none of this happens natively: Docker runs a small Linux VM and the containers are processes inside it.

## Reaching the container from outside with Pinggy

The hand-made container is a good test bed for one practical question: how do you get to a server that lives inside it? I left out `--net`, so it shares the host's network, and wrote a minimal HTTP responder with BusyBox's `nc` (Alpine's BusyBox has no `httpd`). Save this as `rootfs/serve.sh` and `chmod +x` it:

```sh
#!/bin/sh
while true; do
  printf 'HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nConnection: close\r\n\r\nhello from pid %s in %s\n' "$$" "$(hostname)" | nc -l -p 8080
done
```

Start it in its own PID, mount and UTS namespaces:

```bash
unshare --pid --fork --mount --uts sh -c '
  mount --make-rprivate /; mount --bind rootfs rootfs
  mount -t proc proc rootfs/proc; hostname mybox
  exec chroot rootfs /serve.sh'
```

From the host, `curl -si localhost:8080` returned:

```text
HTTP/1.1 200 OK
Content-Type: text/plain
Connection: close

hello from pid 1 in mybox
```

PID 1 and hostname `mybox` come from inside the namespaces, while the port is the host's. That is the same thing `docker run --network host` does. A normal Docker setup would use `-p 8080:8080` and a NAT rule instead.

To share that port with someone outside your network, open a tunnel in a second terminal. The `-T` flag skips the pseudo-terminal, and `free.pinggy.io` needs no account:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io -T" >}}
{{< /ssh_command >}}

Pinggy prints an HTTPS URL of the form `https://xxxx.run.pinggy-free.link`. Opening it reaches the `nc` loop inside the container: the request goes to Pinggy, down the SSH connection your machine opened, and to `localhost:8080`. The free tunnel lasts 60 minutes and gets a new random URL each time, and I did not run this last step against a live Pinggy session here, so check the printed URL yourself. The same applies to a real container: publish its port to the host with `-p`, then point the tunnel at that host port. For SSH access to a container instead of HTTP, see [SSH into a Docker container](/blog/ssh_into_docker_container/).

## Conclusion

Next time you run `docker run`, look at what it did: `docker inspect -f '{{.State.Pid}}' <container>` gives the host PID, and `ls -l /proc/<pid>/ns` shows the namespaces it was given. If you want to go further, add a veth pair for networking, or try `unshare --user --map-root-user` to run the whole thing without root. Both are the parts I would build next, and the places where hand-rolling shows why `runc` exists.
