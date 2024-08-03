document.addEventListener("alpine:init", () => {
  Alpine.store("pinggyTunnelData", {
    advancedCommand(data) {
      let options = "";
      let headercommands = "";
      let host = "localhost";

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
          data.ipWhitelist[0] = `${ipAddress}/${
            ipAddress.includes(":") ? "128" : "24"
          }`;
        } else {
          console.error("Unable to fetch IP address.");
        }
      }

      if (data.ipWhitelistCheck && !data.ipWhitelist[0]) {
        updateIpWhitelist();
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
        const filteredIPs = data.ipWhitelist.filter((ipval, i) => {
          return (ipval !== "" || i === 0) && ipCidrValidator(ipval);
        });
        filteredIPs.reverse();
        headercommands += ` \\\"w:${filteredIPs.join(",")}\\\"`;
      }

      if (data.localServerTLS) {
        if (data.localServerTLSSNI) {
          headercommands +=
            " " + `\\\"x:localServerTls:${data.localServerTLSSNI}\\\"`;
        }
        else if(!data.localServerTLSSNI && data.forwardHost && data.forwardHostAddress){
          headercommands +=
            " " + `\\\"x:localServerTls:${data.forwardHostAddress}\\\"`;
        } else if(!data.localServerTLSSNI && (!data.forwardHost || !data.forwardHostAddress)){
          headercommands +=
            " " + `\\\"x:localServerTls:localhost\\\"`;
        } else {
          headercommands +=
            " " + `\\\"x:localServerTls\\\"`;
        }
      }

      if (data.reverseProxy) {
        if (data.reverseProxyAddress) {
          headercommands +=
            " " + `\\\"x:reverseproxy:${data.reverseProxyAddress}\\\"`;
        } else if(!data.reverseProxyAddress && data.forwardHost && data.forwardHostAddress) {
          headercommands +=
            " " + `\\\"x:reverseproxy:${data.forwardHostAddress}\\\"`;
        } else if(!data.reverseProxyAddress && (!data.forwardHost || !data.forwardHostAddress)) {
          headercommands +=
            " " + `\\\"x:reverseproxy:localhost\\\"`;
        } else {
          headercommands +=
            " " + `\\\"x:reverseproxy\\\"`;
        }
      }

      if (data.httpsonly){
        headercommands += 
            " " + `\\\"x:https\\\"`;;
      }

      if(data.forwardHost){
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

      let selectedRegion = "a.pinggy.io";
      if (data.selectedRegion) {
        selectedRegion = data.selectedRegion;
      }

      let command = "";
      if (data.connectiontype === "ssh") {
        command = `ssh -p 443${options} -R0:${host}:${data.localPort} ${accessTokenPart}${additionalPart}${selectedRegion}${headercommands}`;
      } else if (data.connectiontype === "cli") {
        const pinggyExecutable =
          data.platformselect === "unix" ? "./pinggy" : "./pinggy.exe";
        command = `${pinggyExecutable} -p 443${options} -R0:${host}:${data.localPort} ${accessTokenPart}${additionalPart}${selectedRegion}${headercommands}`;
      }

      if (data.reconnect && data.connectiontype === "ssh") {
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
