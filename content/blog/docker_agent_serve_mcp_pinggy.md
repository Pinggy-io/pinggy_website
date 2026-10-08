---
title: "Serve a Docker Agent Over MCP and Share It With a Tunnel"
description: "Docker Agent turns a YAML file into an AI agent and can serve it over MCP, A2A, HTTP or an OpenAI-style chat API. Here is how each mode works and how to reach one from outside your machine."
date: 2026-10-08T10:00:00+05:30
lastmod: 2026-10-08T10:00:00+05:30
draft: false
tags: ["Docker Agent", "Docker", "MCP", "AI agents", "tunneling"]
og_image: "images/docker_agent_serve_mcp_pinggy/docker_agent_serve_mcp_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiU2VydmUgYSBEb2NrZXIgQWdlbnQgb3ZlciBNQ1AgYW5kIHNoYXJlIGl0IHdpdGggYSB0dW5uZWwiLAogICJkZXNjcmlwdGlvbiI6ICJEb2NrZXIgQWdlbnQgdHVybnMgYSBZQU1MIGZpbGUgaW50byBhbiBBSSBhZ2VudCBhbmQgY2FuIHNlcnZlIGl0IG92ZXIgTUNQLCBBMkEsIEhUVFAgb3IgYW4gT3BlbkFJLXN0eWxlIGNoYXQgQVBJLiBIZXJlIGlzIGhvdyBlYWNoIG1vZGUgd29ya3MgYW5kIGhvdyB0byByZWFjaCBvbmUgZnJvbSBvdXRzaWRlIHlvdXIgbWFjaGluZS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvZG9ja2VyX2FnZW50X3NlcnZlX21jcF9waW5nZ3kvZG9ja2VyX2FnZW50X3NlcnZlX21jcF9waW5nZ3lfYmFubmVyLndlYnAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0wOFQxMDowMDowMCswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJXcml0ZSB0aGUgYWdlbnQgZmlsZSIsICJ0ZXh0IjogIkNyZWF0ZSBhZ2VudC55YW1sIHdpdGggYSByb290IGFnZW50LCBhIG1vZGVsIHN1Y2ggYXMgYW50aHJvcGljL2NsYXVkZS1zb25uZXQtNC01LCBhbiBpbnN0cnVjdGlvbiBhbmQgdG9vbHNldHMsIHRoZW4gdGVzdCBpdCB3aXRoIGRvY2tlciBhZ2VudCBydW4gYWdlbnQueWFtbC4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTZXJ2ZSBpdCBvdmVyIE1DUCIsICJ0ZXh0IjogIlJ1biBkb2NrZXIgYWdlbnQgc2VydmUgbWNwIGFnZW50LnlhbWwgLS1odHRwIC0tbGlzdGVuIDEyNy4wLjAuMTo4MDgxIC0tYXV0aC10b2tlbiBcIiRNQ1BfVE9LRU5cIi4gVGhlIHNlcnZlciBsaXN0ZW5zIG9uIHBvcnQgODA4MS4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJPcGVuIGEgdHVubmVsIiwgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgxIGZyZWUucGluZ2d5LmlvIGFuZCBjb3B5IHRoZSBIVFRQUyBVUkwgaXQgcHJpbnRzLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlJlZ2lzdGVyIHRoZSBVUkwgd2l0aCBhbiBNQ1AgY2xpZW50IiwgInRleHQiOiAiUnVuIGNsYXVkZSBtY3AgYWRkIC0tdHJhbnNwb3J0IGh0dHAgcmVzZWFyY2gtYWdlbnQgaHR0cHM6Ly9hYmMxMjMuYS5waW5nZ3kubGluayAtLWhlYWRlciBcIkF1dGhvcml6YXRpb246IEJlYXJlciAkTUNQX1RPS0VOXCIuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiTG9jayBpdCBkb3duIiwgInRleHQiOiAiU2VydmUgb25seSBhZ2VudHMgd2l0aCBoYXJtbGVzcyB0b29sc2V0cywgYWRkIC0tIGs6JE1DUF9UT0tFTiB0byB0aGUgU1NIIGNvbW1hbmQgc28gdGhlIHR1bm5lbCBjaGVja3MgdGhlIGJlYXJlciB0b2tlbiwgYW5kIGNsb3NlIHRoZSB0dW5uZWwgd2hlbiBmaW5pc2hlZC4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "docker_agent_serve_mcp_pinggy/docker_agent_serve_mcp_pinggy_banner.webp" "Serve a Docker Agent over MCP: agent.yaml, Docker Agent, a public tunnel and an MCP client in a row" >}}
{{< llm-context >}}To serve a Docker Agent over MCP with Pinggy - run `docker agent serve mcp agent.yaml --http --listen 127.0.0.1:8081` (starts on port 8081), then in a new terminal run `ssh -p 443 -R0:localhost:8081 free.pinggy.io` to get a public HTTPS URL that an MCP client can call.{{< /llm-context >}}

`docker agent serve mcp agent.yaml --http` turns a YAML file into an MCP server listening on `127.0.0.1:8081`. Any MCP client can then call your agent as a tool. Docker Agent (the open-source tool from Docker that used to be called cagent) has three more `serve` modes for the same file: an HTTP API, the A2A protocol, and an OpenAI-compatible chat endpoint. All four bind to loopback by default, which is the right default and also the reason a client on another machine can't reach them.

This post walks through what each mode is for, serves one agent over MCP, and then puts a tunnel in front of it so a remote client can call it. I couldn't install the binary in the sandbox I wrote this in, so every `docker agent` command here comes from the {{< link href="https://docker.github.io/docker-agent/" >}}official docs{{< /link >}} and was not run by me. Check flags against `docker agent serve --help` on your version.

{{% tldr %}}
1. Docker Agent defines an agent in one YAML file: a **model, an instruction and a list of toolsets**. `docker agent run agent.yaml` runs it in a terminal UI.
2. `docker agent serve` exposes the same file as **`api`, `mcp`, `a2a` or `chat`**, on ports 8080, 8081, 8082 and 8083 by default, always on `127.0.0.1`.
3. A non-loopback listener needs `--auth-token`. If you reach the server through a tunnel, **set a token anyway**, because the tunnel URL is public.
4. A Pinggy tunnel on port 8081 gives a remote MCP client an HTTPS URL. Don't serve an agent with `shell` or `filesystem` toolsets that way unless you mean it.
{{% /tldr %}}

## What a Docker Agent file contains

Docker Agent is Apache-2.0 licensed and lives at {{< link href="https://github.com/docker/docker-agent" >}}github.com/docker/docker-agent{{< /link >}} (about 4,100 stars on 8 October 2026; the Go module proxy lists v1.149.0 as the latest tag). Docker Desktop 4.63 and later ship it as a CLI plugin, so `docker agent` works without an install. Otherwise use `brew install docker-agent`, or download a binary from the releases page and symlink it into `~/.docker/cli-plugins/docker-agent`.

An agent is a block in YAML. Here is the one I'll use for the rest of the post, a small research helper:

```yaml
agents:
  root:
    model: anthropic/claude-sonnet-4-5
    description: A research helper
    instruction: |
      Answer questions clearly and say which search results you used.
    toolsets:
      - type: think
      - type: mcp
        ref: docker:duckduckgo
```

The `think` toolset gives the model a scratchpad. The `mcp` toolset with `ref: docker:duckduckgo` starts the DuckDuckGo MCP server as a container, so it needs Docker running. The model string is `provider/model`, and OpenAI, Anthropic, Gemini, Bedrock, Mistral, xAI and local models through Docker Model Runner all work. Export the key for your provider first:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
docker agent run agent.yaml
```

That opens the terminal UI. For a one-shot, non-interactive run, add `--exec`: `docker agent run --exec agent.yaml "What changed in the MCP spec this year?"`.

## Four ways to serve the same file

`docker agent serve` takes the same YAML, or an OCI registry reference like `myorg/agent:tag`, and picks the protocol with a subcommand. The defaults below are from the {{< link href="https://docker.github.io/docker-agent/features/cli/" >}}CLI reference{{< /link >}}.

{{< image "docker_agent_serve_mcp_pinggy/docker_agent_serve_modes.webp" "One agent.yaml file feeding four docker agent serve modes: api, mcp, a2a and chat, each with its default loopback port" >}}

*One agent file, four protocols. Defaults as listed in the {{< link href="https://docker.github.io/docker-agent/features/cli/" >}}Docker Agent CLI reference{{< /link >}}.*
- **`serve api`** is a REST API with sessions. You `POST /api/sessions`, then `POST /api/sessions/:id/agent/:agent` with a messages array and read the answer as a server-sent event stream. It also has `--session-db` (default `session.db`), `--max-request-size` and `--session-workingdir-root`.
- **`serve mcp`** exposes each agent in the file as an MCP tool. Stdio is the default transport, and `--http` switches to streamable HTTP on `127.0.0.1:8081`. The HTTP transport is stateless and only answers POST; GET and DELETE return 405. In a multi-agent file every agent becomes its own tool, and `--agent` and `--tool-name` narrow or rename that.
- **`serve a2a`** speaks Google's Agent-to-Agent protocol on `127.0.0.1:8082`. The docs say support is still evolving: tool calls stay internal, and artifacts and memory aren't wired in yet.
- **`serve chat`** is an OpenAI-compatible Chat Completions server on `127.0.0.1:8083`, so anything that lets you set a custom base URL can talk to your agent. It takes `--api-key` or `--api-key-env` instead of `--auth-token`.
- **`serve acp`** is the odd one out: it talks over stdio so an editor can launch it as a child process. Nothing to expose there.

MCP is the one I'd start with, because the clients people already use (Claude Code, Claude Desktop, Cursor) speak it.

## Serve the agent over MCP

Locally, over stdio, Claude Code can start the agent itself. This is the example from the docs:

```bash
claude mcp add --transport stdio research-agent \
  --env ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
  -- docker agent serve mcp ./agent.yaml --working-dir "$PWD"
```

Stdio is fine until the client lives somewhere else: a hosted assistant, a teammate's laptop, a CI job. For those you need HTTP:

```bash
export MCP_TOKEN=$(openssl rand -hex 32)
docker agent serve mcp agent.yaml --http --listen 127.0.0.1:8081 --auth-token "$MCP_TOKEN"
```

The server is now on port 8081 of your machine. The Docker docs require `--auth-token` for any non-loopback address (or an explicit `--insecure-no-auth` if you're behind a trusted boundary). Loopback is exempt, but I pass the token anyway because the next step makes this port public.

## Reach it from outside with a Pinggy tunnel

The MCP server only listens on loopback, so a remote client can't connect. A tunnel solves that without changing the listen address: your machine opens an SSH connection out to Pinggy, and Pinggy forwards HTTPS requests down it to port 8081. For the background, see [how SSH reverse tunnelling works](/blog/ssh_reverse_tunnelling/).

In a second terminal:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8081 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8081 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8081 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8081 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8081 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8081 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8081 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8081 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8081 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints an HTTPS URL like `https://abc123.a.pinggy.link`. A free tunnel lasts 60 minutes and the URL changes on every reconnect, which is fine for a demo and annoying for anything longer. A Pro tunnel keeps a stable subdomain.

{{< image "docker_agent_serve_mcp_pinggy/docker_agent_mcp_through_pinggy.webp" "Sequence diagram of an MCP tool call from a remote client through the Pinggy server and an SSH connection to docker agent serve mcp on port 8081" >}}

*One MCP tool call from a remote client to an agent running on your laptop.*
Now register the public URL with a client. With Claude Code:

```bash
claude mcp add --transport http research-agent https://abc123.a.pinggy.link \
  --header "Authorization: Bearer $MCP_TOKEN"
```

I haven't confirmed which URL path Docker Agent mounts the MCP endpoint on. If the bare URL gets a 404, look at the line `docker agent serve mcp` prints when it starts and append that path. Then run `/mcp` inside Claude Code: the agent should appear as a tool named `root`, after the agent in the YAML, or whatever you set with `--tool-name`.

To check the tunnel before involving a client, send an unauthenticated POST. I'd expect a 401 or similar rejection rather than a 200 (untested):

```bash
curl -i -X POST https://abc123.a.pinggy.link -H "Content-Type: application/json" -d '{}'
```

## Lock it down before you share the URL

A public URL to an agent is a public URL to whatever that agent can do. Three things to settle first:

- **Pick the toolsets deliberately.** The research helper above only searches. An agent with `shell` or `filesystem` toolsets running on your laptop would let anyone holding the token run commands as you. Serve those over stdio only.
- **Add a second gate at the tunnel.** Pinggy can enforce a key before a request reaches your machine. Append `-- k:$MCP_TOKEN` to the SSH command and the tunnel rejects any request without `Authorization: Bearer <token>`. Using the same token twice is fine; the two checks are independent. IP allow-lists work the same way with `w:203.0.113.0/24`.
- **Leave `--safety` alone.** Over HTTP it defaults to `restricted`, and the docs list `strict` and `balanced` as the other policies in YAML. `autonomous` can only be set from the CLI flag, and I wouldn't set it on anything public.

Rotate the token when you're done. `Ctrl+C` on the SSH command closes the tunnel immediately, and the old URL stops working.

## What each mode costs you

A short list of rough edges worth knowing before you build on this:

- The A2A and MCP-over-HTTP paths are young. The docs themselves flag A2A gaps, and the HTTP transport supports the `2026-07-28` MCP spec revision, and older clients fall back to the legacy `initialize` handshake.
- Every call uses your model API key. A public MCP endpoint is a public way to spend your tokens, which is another reason for the bearer token and for a spend limit on the provider side.
- `serve api` keeps sessions in a SQLite file in the working directory unless you pass `--session-db`.
- The agent runs on your machine's network and credentials. Anything the container or process can reach, the agent can reach.

## Conclusion

Docker Agent's useful trick is that the YAML you debug in the terminal is the same file you serve. Start with `docker agent run agent.yaml`, switch to `serve mcp --http` when another client needs it, and put a tunnel and a token in front when that client isn't on your machine. To go further, the same tunnel works for the other modes: change the port to 8080 for `serve api`, 8082 for `serve a2a` or 8083 for `serve chat`. For more on exposing MCP servers, see [how to expose a local MCP server with Pinggy](/blog/expose_mcp_server_with_pinggy/) and [sharing a local MCP server](/blog/share_local_mcp_server_with_pinggy/).
