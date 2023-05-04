---
 title: "Advanced Features" 
 date: 2023-05-02T20:00:00+05:30 
 draft: false 
---

Pinggy provides multiple advanced features in addition to the basic tunneling system. These advanced features include:

* An interactive UI in the terminal
* Introspection or live debugging
* Live request header modification

Pinggy supports these features by default. However, users and developers may need to take extra steps to enable these features due to the nature of the SSH protocol and the `ssh` command.

The advanced features are only available when the `ssh` client starts an interactive session. Furthermore, the interactive terminal UI also requires the allocation of a PTY (pseudo tty).

The `ssh` command in most systems starts an interactive session by default. It also allocates a PTY if no `commands` are provided. The command also provides arguments to enable or disable these behaviors. We list some of those flags here. Please refer to the man page for more details.
```
-T: Disables pseudo-terminal allocation

-t: Forces pseudo-terminal allocation

-N: Does not execute the remote command. This flag instructs the `ssh` 
    command not to open an interactive session.
```