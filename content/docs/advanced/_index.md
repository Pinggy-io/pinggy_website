---
 title: "Advanced Features" 
 date: 2023-05-02T20:00:00+05:30 
 draft: true 
---

Pinggy provides multiple advanced features with the basic tunneling system. These advaced features are

* Interactive UI in the terminal
* Introspection or live debugging
* Live request header modification

Pinggy supports these features by default. However, users and developer may needs to take extra effort to enable these feature due to the nature of SSH protocol and the ssh command as well.

The advanced features are only available when ssh client starts an interactive session. On top of this, interactive terminal UI also needs the allocation of PTY (psuedo tty).

The `ssh` command in most of system starts an interactive session by default. It also allocate pty if no `commands` are provided. It also provides arguments to enable or disable these behavior. We list some of those flags here. Kindly refer to man page for more details.

```
-T   Disables the psuedo-terminal allocation

-t   Force psuedo-terminal allocation

-N   Do not execute the remote command. This flag instract ssh command not to open a interactive session.
```

