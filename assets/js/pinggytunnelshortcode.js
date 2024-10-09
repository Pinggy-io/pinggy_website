document.addEventListener("alpine:init", () => {
  Alpine.store("pinggyTunnelData", {
    advancedCommand(data) {
      let options = "";
      let headercommands = "";
      let host = "localhost";

      // -------------
      function escapeForBash(code) {
        let bashCode = code.replaceAll("\\", "\\\\\\\\");
        bashCode = bashCode.replaceAll('"', '\\\\\\"');

        bashCode = bashCode.replaceAll(/['&();<>`_|]/g, function (match) {
          return "\\" + match;
        });

        bashCode = bashCode.replaceAll(/[$/! #%\[\]^*@\-+=~.,?]/g, function (match) {
          return "\\\\" + match;
        });

        return bashCode;
      }

      function escapeForCmd(code) {
        let cmdCode = code.replaceAll("\\", "\\\\");

        cmdCode = cmdCode.replaceAll(/[$ ]/g, function (match) {
          return "\\" + match;
        });

        cmdCode = cmdCode.replaceAll('"', '\\\\\\"');

        cmdCode = cmdCode.replaceAll("&", '\\\\"&');
        return cmdCode;
      }

      function escapeForPowershell(code) {
        let powershellCode = code.replaceAll("\\", "\\\\");

        powershellCode = powershellCode.replaceAll('"', '\\\\\\"');
        powershellCode = powershellCode.replaceAll("'", '\\"');
        powershellCode = powershellCode.replaceAll(" ", "\\ ");

        return powershellCode;
      }

      function escapeForZsh(code) {
        let zshCode = code.replaceAll("\\", "\\\\\\\\");
        zshCode = zshCode.replaceAll('"', '\\\\\\"');

        zshCode = zshCode.replaceAll(
          /['&();<>`_|! #%\[\]^*@\-+=~.,?]/g,
          function (match) {
            return "\\" + match;
          }
        );
        return zshCode;
      }

      function escapeForPlatform(code, platform) {
        switch (platform) {
          case "bash":
            return escapeForBash(code);
          case "windows_cmd":
            return escapeForCmd(code);
          case "windows_powershell":
            return escapeForPowershell(code);
          case "unix":
            return escapeForZsh(code);
          default:
            return code;
        }
      }
      // -------------
      async function fetchIpAddresses() {
        let ipv4Address = null;
        let ipv6Address = null;

        try {
          const ipv4Response = await fetch("https://api.ipify.org?format=json");
          if (!ipv4Response.ok) {
            throw new Error(`IPv4 fetch failed`);
          }
          const ipv4Data = await ipv4Response.json();
          ipv4Address = ipv4Data.ip;
        } catch (error) {
          console.error("Error fetching IPv4 address:", error.message);
        }

        try {
          const ipv6Response = await fetch("https://api6.ipify.org?format=json");
          if (!ipv6Response.ok) {
            throw new Error(`IPv6 fetch failed`);
          }
          const ipv6Data = await ipv6Response.json();
          ipv6Address = ipv6Data.ip;
        } catch (error) {
          console.error("Error fetching IPv6 address:", error.message);
        }

        return [ipv4Address, ipv6Address];
      }

      async function updateIpWhitelist() {
        const [ipv4Address, ipv6Address] = await fetchIpAddresses();

        if (ipv4Address) {
          data.ipWhitelist[0] = `${ipv4Address}/24`;
        } else {
          console.error("Unable to update IPv4 address in whitelist.");
        }

        if (ipv6Address) {
          data.ipWhitelist[1] = `${ipv6Address}/128`;
        } else {
          console.error("Unable to update IPv6 address in whitelist.");
        }
      }

      if (data.ipWhitelistCheck && !data.ipWhitelist[0]) {
        updateIpWhitelist();
      }

      // Http only options
      if (data.mode === "http") {
        if (data.webDebugEnabled) {
          let webdebugoption = `-L${data.webDebugPort}:localhost:${data.webDebugPort}`;
          options += " " + webdebugoption;
        }

        if (data.passwordCheck && data.basicusername && data.basicpass) {
          if (
            !data.basicusername.includes(":") &&
            !data.basicpass.includes(":")
          ) {
            let passwordProtectString = `\\"b:${escapeForPlatform(data.basicusername, data.platformselect)}:${escapeForPlatform(data.basicpass, data.platformselect)}\\"`;

            if (data.platformselect === "windows_powershell") {
              if (passwordProtectString) {
                headercommands += " " + "'" + passwordProtectString + "'";
              }
            } else {
              headercommands += " " + passwordProtectString;
            }
          }
        }

        data.headerModifications.forEach((headerMod) => {
          const { mode, headername, headerval } = headerMod;
          let thiscommand = `\\\"${mode}:${escapeForPlatform(headername, data.platformselect)}${headerval ? ":" + escapeForPlatform(headerval, data.platformselect) : ""
            }\\\"`;

          if (data.platformselect === "windows_powershell") {
            thiscommand = "'" + thiscommand + "'";
          }

          headercommands += " " + thiscommand;
        });

        if (data.keyAuthentication) {
          const filteredAuthentications = data.keyAuthentications.filter(
            (keyauthval, i) => keyauthval !== "" || i === 0
          );
          headercommands += filteredAuthentications
            .reverse()
            .map((keyauthval, i) => data.platformselect === "windows_powershell" ?
              ` '\\\"k:${escapeForPlatform(keyauthval, data.platformselect)}\\\"'` :
              ` \\\"k:${escapeForPlatform(keyauthval, data.platformselect)}\\\"`)
            .join("");
        }

        if (data.localServerTLS) {
          if (data.localServerTLSSNI) {
            headercommands +=
              " " + `x:localServerTls:${data.localServerTLSSNI}`;
          }
          else if (!data.localServerTLSSNI && data.forwardHost && data.forwardHostAddress) {
            headercommands +=
              " " + `x:localServerTls:${data.forwardHostAddress}`;
          } else if (!data.localServerTLSSNI && (!data.forwardHost || !data.forwardHostAddress)) {
            headercommands +=
              " " + `x:localServerTls:localhost`;
          } else {
            headercommands +=
              " " + `x:localServerTls`;
          }
        }

        if (data.reverseProxy) {
          if (data.reverseProxyAddress) {
            headercommands +=
              " " + `x:reverseproxy:${data.reverseProxyAddress}`;
          } else if (!data.reverseProxyAddress && data.forwardHost && data.forwardHostAddress) {
            headercommands +=
              " " + `x:reverseproxy:${data.forwardHostAddress}`;
          } else if (!data.reverseProxyAddress && (!data.forwardHost || !data.forwardHostAddress)) {
            headercommands +=
              " " + `x:reverseproxy:localhost`;
          } else {
            headercommands +=
              " " + `x:reverseproxy`;
          }
        }

        if (data.httpsonly) {
          headercommands +=
            " " + `x:https`;
        }

        if (data.corsPreflight) {
          headercommands += " " + `x:passpreflight`;
        }

        if (data.xForwardedFor) {
          headercommands += " " + `x:xff`;
        }

        if (data.fullUrl) {
          headercommands += " " + `x:fullurl`;
        }

      }


      if (data.ipWhitelistCheck) {
        const filteredIPs = data.ipWhitelist.filter((ipval, i) => {
          return (ipval !== "" || i === 0) && ipCidrValidator(ipval);
        });
        filteredIPs.reverse();

        if (data.platformselect === "windows_powershell") {
          headercommands += " " + `'\\\"w:${filteredIPs.join(",")}\\\"'`;
        } else {
          headercommands += " " + `\\\"w:${filteredIPs.join(",")}\\\"`;
        }
      }


      if (!data.manuallyCheckKey && data.connectiontype === "ssh") {
        options += " -o StrictHostKeyChecking=no";
      }

      if (data.keepAlive && data.connectiontype === "ssh") {
        options += " -o ServerAliveInterval=30";
      }



      if (data.forwardHost) {
        if (data.forwardHostAddress) {
          host = data.forwardHostAddress;
        }
        else {
          host = "localhost";
        }
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
        let qrPart = data.qrCheck ? "qr" : "";
        let forcePart = data.force ? "force" : "";
        
        let combinedPart = "";
        if (qrPart && forcePart) {
          combinedPart = `${qrPart}+${forcePart}`;
        } else {
          combinedPart = qrPart + forcePart;
        }
        
        additionalPart = 
          accessTokenPart !== ""
            ? (combinedPart ? `+${combinedPart}@` : "@")
            : (combinedPart ? `${combinedPart}@` : "");
      } else {
        let forcePart = data.force ? "+force" : "";
        additionalPart =
          accessTokenPart !== "" 
            ? `+${data.mode}${forcePart}@` 
            : `${data.mode}${forcePart}@`;
      }

      let selectedRegion = "a.pinggy.io";
      if (data.selectedRegion) {
        selectedRegion = data.selectedRegion;
      }

      let command = "";
      if (data.connectiontype === "ssh" && data.mode !== "udp") {
        command = `ssh -p 443${options} -R0:${host}:${data.localPort} ${accessTokenPart}${additionalPart}${selectedRegion}${headercommands}`;
      } else {
        const pinggyExecutable =
          data.platformselect === "unix" ? "./pinggy" : "./pinggy.exe";
        command = `${pinggyExecutable} -p 443${options} -R0:${host}:${data.localPort} ${accessTokenPart}${additionalPart}${selectedRegion}${headercommands}`;
      }

      if (data.reconnect && data.connectiontype === "ssh") {
        command =
          data.platformselect === "unix"
            ? `while true; do \n    ${command}; \nsleep 10; done`
            : `FOR /L %N IN () DO (\n${command}\ntimeout /t 10)`;
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
