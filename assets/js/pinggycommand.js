document.addEventListener("alpine:init", () => {
  const defaultStore = {
    connectiontype: "ssh",
    platformselect: "unix",
    token: "",
  };

  Alpine.store("pinggyCommand", {
    commandConfig:
      JSON.parse(localStorage.getItem("commandConfig")) || defaultStore,
    
    cliOrSSH() {
      const { connectiontype, clionly } = this.commandConfig;
      return connectiontype === "ssh" && clionly != true ? "ssh" : "cli";
    },

    retrieveCommand({ cmd }) {
      const { platformselect, token } = this.commandConfig;
      const connectionType = this.cliOrSSH();
      const platformType = platformselect === "unix" ? "linux" : "windows";
      const commandTemplate = cmd?.[connectionType]?.[platformType]?.ps || "";

      // Validate token format
      if (!/^[a-zA-Z0-9-]+$/.test(token)) {
        return commandTemplate;
      }

      // Inject the token into the command where applicable
      return commandTemplate.replace(
        /(tlstcp|tcp|tls|qr|force|udp)?@?a.pinggy.io/g,
        (match, protocol) => {
          if (protocol) {
            return `${token}+${protocol}@a.pinggy.io`;
          }
          return `${token}@a.pinggy.io`;
        }
      );
    },
  });
});
