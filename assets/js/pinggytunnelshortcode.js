document.addEventListener("alpine:init", () => {
  Alpine.store("pinggyTunnelData", {
    advancedCommand(data) {
      let options = "";
      let headercommands = "";
      let ipWhitelistUpdated = false;

      async function fetchIpAddress() {
        try {
          const response = await fetch("https://api.ipify.org?format=json");
          const ipAddressData = await response.json();
          return ipAddressData.ip;
        } catch (error) {
          console.error("Error fetching IP address:", error.message);
          return null;
        }
      }

      async function updateIpWhitelist() {
        const ipAddress = await fetchIpAddress();
        if (ipAddress) {
          const cidrIpAddress = ipAddress + '/24';
          data.ipWhitelist[0] = cidrIpAddress;
          ipWhitelistUpdated = true;
        } else {
          console.error("Unable to fetch IP address.");
        }
      }

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
        if (
          !data.basicusername.includes(":") &&
          !data.basicpass.includes(":")
        ) {
          headercommands +=
            " " + `\\\"b:${data.basicusername}:${data.basicpass}\\\"`;
        }
      }

      data.headerModifications.forEach((headerMod) => {
        const { mode, headername, headerval } = headerMod;
        const thiscommand = `\\\"${mode}:${headername}${
          headerval ? ":" + headerval : ""
        }\\\"`;
        headercommands += " " + thiscommand;
      });

      if (data.keyAuthentication) {
        const filteredAuthentications = data.keyAuthentications.filter(
          (keyauthval, i) => keyauthval !== "" || i === 0
        );
        headercommands += filteredAuthentications
          .reverse()
          .map((keyauthval, i) => ` \\\"k:${keyauthval}\\\"`)
          .join("");
      }

      if (data.ipWhitelistCheck) {
        updateIpWhitelist();
        const filteredIPs = data.ipWhitelist.filter((ipval, i) => {
          return (ipval !== "" || i === 0) && ipCidrValidator(ipval);
        });
        filteredIPs.reverse();
        headercommands += ` \\\"w:${filteredIPs.join(",")}\\\"`;
      }

      if (headercommands != "") {
        options += " -t";
      }

      let accessTokenPart =
        data.accesstoken && /^[a-zA-Z0-9-]+$/.test(data.accesstokenvalue)
          ? `${data.accesstokenvalue}`
          : "";

      let additionalPart = "";

      if (data.mode === "http") {
        additionalPart =
          accessTokenPart !== ""
            ? data.qrCheck
              ? "+qr@"
              : "@"
            : data.qrCheck
            ? "qr@"
            : "";
      } else {
        additionalPart =
          accessTokenPart !== "" ? `+${data.mode}@` : `${data.mode}@`;
      }

      let command = `ssh -p 443${options} -R0:localhost:${data.localPort} ${accessTokenPart}${additionalPart}a.pinggy.io${headercommands}`;

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
