document.addEventListener("alpine:init", () => {
  const defaultStore = {
    connectiontype: "ssh",
    platformselect: "unix",
    token: "",
  };

  Alpine.store("pinggyCommand", {
    commandConfig:
      JSON.parse(localStorage.getItem("commandConfig")) || defaultStore,

    retrieveCommand({ cmd }) {
      const { connectiontype, platformselect, token } = this.commandConfig;
      const connectionType = connectiontype === "ssh" ? "ssh" : "cli";
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
