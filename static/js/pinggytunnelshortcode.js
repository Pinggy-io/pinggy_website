document.addEventListener("alpine:init", () => {
  Alpine.store("pinggyTunnelData", {
    tunnelString: "Paste this command to star a tunnel:",
    portString: "Local Port",
    localPort: 8000,
    webDebugPort: 4300,
    webDebugEnabled: false,
    keepAlive: false,
    passwordCheck: false,
    basicusername: "",
    basicpass: "",
    qrCheck: false,
    reconnect: false,
    platformselect: "unix",
    manuallyCheckKey: true,
    mode: "http",
    headerModifications: [],

    advancedCommand(data) {
      let options = "";
      let headercommands = "";

      if (data.webDebugEnabled) {
        let webdebugoption = `-L${data.webDebugPort}:localhost:${data.webDebugPort}`;
        options += " " + webdebugoption;
      }

      if (!data.manuallyCheckKey) {
        options += " -o StrictHostKeyChecking=no";
      }

      if (data.keepAlive) {
        options += " -o ServerAliveInterval=30";
      }

      if (data.passwordCheck && data.basicusername && data.basicpass) {
        headercommands +=
          " " + `\\\"b:${data.basicusername}:${data.basicpass}\\\"`;
      }

      data.headerModifications.forEach((headerMod) => {
        const { mode, headername, headerval } = headerMod;
        const thiscommand = `\\\"${mode}:${headername}${
          headerval ? ":" + headerval : ""
        }\\\"`;
        headercommands += " " + thiscommand;
      });

      if (headercommands != "") {
        options += " -t";
      }

      let command =
        `ssh -p 443${options} -R0:localhost:${data.localPort} ${
          data.mode !== "http" ? data.mode + "@" : ""
        }${data.qrCheck ? "qr@" : ""}a.pinggy.io` + headercommands;

      if (data.reconnect) {
        command =
          data.platformselect === "unix"
            ? `while true; do \n    ${command}; \nsleep 10; done`
            : `FOR /L %N IN () DO (${command}\ntimeout /t 10)`;
      }

      return command;
    },
  });
});

// Copy command button
$(".pinggytunnelshortcode").on(
  "click",
  ".pinggytunnelshortcode_copybutton",
  function () {
    navigator.clipboard.writeText(
      $(this).siblings(".pinggytunnelshortcode_advancedcommand").val()
    );
  }
);
