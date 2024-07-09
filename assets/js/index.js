document.addEventListener("alpine:init", () => {
  const defaultHttpConfig = {
    localPort: 8000,
    webdebugCheck: true,
    webdebugPort: 4300,
    selectedRegion: "a.pinggy.io",
    keyAuthentication: false,
    ipWhitelistCheck: false,
    rsaCheck: true,
    keepalive: true,
    qrCheck: false,
    restart: false,
    platformselect: "unix",
    passwordCheck: false,
    basicusername: "",
    basicpass: "",
    keyAuthentications: [""],
    ipWhitelist: [""],
    headerModification: [],
    accesstoken: false,
    accesstokenvalue: "",
    localServerTLS: false,
    localServerTLSSNI: "",
  };

  const defaultTcpTlsConfig = {
    mode: "tcp",
    selectedRegion: "a.pinggy.io",
    localPort: 8000,
    keepalive: true,
    restart: false,
    platformselect: "unix",
    rsaCheck: true,
    ipWhitelistCheck: false,
    ipWhitelist: [""],
    accesstoken: false,
    accesstokenvalue: "",
  };

  Alpine.store("advModal", {
    httpConfig:
      JSON.parse(localStorage.getItem("httpConfig")) || defaultHttpConfig,

    tcp_tlsConfig:
      JSON.parse(localStorage.getItem("tcp_tlsConfig")) || defaultTcpTlsConfig,

    updateLabelAndCommand: function () {
      const option = this.tryItYourself.selectedOption;
      const optionInfo = {
        python: {
          label: "You may start a local server using:",
          command: "python3 -m http.server",
          port: "8000",
        },
        nodejs: {
          label: "You may start a local server using:",
          command: "npx http-server",
          port: "8080",
        },
        reactjs: {
          label: "You may start a React.js app using:",
          command: "npx create-react-app app && cd app && npm start",
          port: "3000",
        },
        nextjs: {
          label: "You may start a Next.js app using:",
          command: "npx create-next-app app && cd app && npm run dev",
          port: "3000",
        },
        nginx: {
          label: "Apache / Nginx by default runs at port 80",
          command: "",
          port: "80",
        },
        rails: {
          label: "Rails development server runs on port 3000 by default",
          command: "",
          port: "3000",
        },
        laravel: {
          label:
            "Laravel / Symfony development server runs on port 8000 by default",
          command: "",
          port: "8000",
        },
        hugo: {
          label: "Hugo development server runs on port 1313 by default",
          command: "",
          port: "1313",
        },
      };

      if (option in optionInfo) {
        this.tryItYourself.label = optionInfo[option].label;
        this.tryItYourself.command = optionInfo[option].command;
        this.tryItYourself.port = optionInfo[option].port;
      }
    },
    tryItYourselfCommand: function () {
      let config = this.tryItYourself;

      let command =
        "ssh -p 443 -R0:localhost:" +
        config.port +
        (config.webdebugCheck ? " -L4300:localhost:4300" : "") +
        (config.qrCheck ? " qr@" : " ") +
        "a.pinggy.io";

      return command;
    },
    advancedHttpCommand: function () {
      let config = this.httpConfig;
      let options = "";
      let headercommands = "";
      let sshuser = "";

      if (config.webdebugCheck) {
        let webdebugoption = `-L${config.webdebugPort}:localhost:${config.webdebugPort}`;
        options += " " + webdebugoption;
      }
      if (!config.rsaCheck) {
        options += " -o StrictHostKeyChecking=no";
      }
      if (config.keepalive) {
        options += " -o ServerAliveInterval=30";
      }

      config.headerModification.forEach((headerMod) => {
        const { mode, name, value } = headerMod;
        if (name !== "" || value !== "") {
          if (mode === "r") {
            headercommands += ` \\\"${mode}:${name}\\\"`;
          } else {
            headercommands += ` \\\"${mode}:${name}${
              value ? ":" + value : ""
            }\\\"`;
          }
        }
      });

      if (config.keyAuthentication) {
        const filteredAuthentications = config.keyAuthentications.filter(
          (keyauthval, i) => keyauthval !== "" || i === 0
        );
        headercommands += filteredAuthentications
          .reverse()
          .map((keyauthval, i) => ` \\\"k:${keyauthval}\\\"`)
          .join("");
      }

      if (config.ipWhitelistCheck) {
        const filteredIPs = config.ipWhitelist.filter((ipval, i) => {
          return (ipval !== "" || i === 0) && ipCidrValidator(ipval);
        });
        filteredIPs.reverse();
        headercommands += ` \\\"w:${filteredIPs.join(",")}\\\"`;
      }

      if (config.passwordCheck && config.basicusername && config.basicpass) {
        if (
          !config.basicusername.includes(":") &&
          !config.basicpass.includes(":")
        ) {
          headercommands +=
            " " + `\\\"b:${config.basicusername}:${config.basicpass}\\\"`;
        }
      }

      if (config.localServerTLS) {
        if (config.localServerTLSSNI) {
          headercommands +=
            " " + `\\\"x:localServerTls:${config.localServerTLSSNI}\\\"`;
        }
        else {
          headercommands +=
            " " + `\\\"x:localServerTls\\\"`;
        }
      }

      if (headercommands != "") {
        options += " -t";
      }

      sshuser =
        config.accesstoken && /^[a-zA-Z0-9-]+$/.test(config.accesstokenvalue)
          ? `${config.accesstokenvalue}${config.qrCheck ? "+qr" : ""}@`
          : config.qrCheck
          ? "qr@"
          : "";

      let command = `ssh -p 443 -R0:localhost:${config.localPort} ${options} ${sshuser}${config.selectedRegion}${headercommands}`;

      if (config.restart) {
        command =
          config.platformselect === "unix"
            ? `while true; do \n    ${command}; \nsleep 10; done`
            : `FOR /L %N IN () DO (${command}\ntimeout /t 10)`;
      }

      return command;
    },
    resetHttpConfig: function () {
      this.httpConfig = JSON.parse(JSON.stringify(defaultHttpConfig));
      localStorage.setItem("httpConfig", JSON.stringify(this.httpConfig));
    },

    advancedTcpTlsCommand: function () {
      let config = this.tcp_tlsConfig;
      let options = "";
      let headercommands = "";

      if (!config.rsaCheck) {
        options += " -o StrictHostKeyChecking=no";
      }
      if (config.keepalive) {
        options += " -o ServerAliveInterval=30";
      }

      if (config.ipWhitelistCheck) {
        const filteredIPs = config.ipWhitelist.filter((ipval, i) => {
          return (ipval !== "" || i === 0) && ipCidrValidator(ipval);
        });
        headercommands += filteredIPs
          .reverse()
          .map((ipval, i) => ` \\\"w:${ipval}\\\"`)
          .join("");
      }

      if (headercommands != "") {
        options += " -t";
      }

      let command = `ssh -p 443 -R0:localhost:${config.localPort} ${options} ${
        config.accesstoken && /^[a-zA-Z0-9-]+$/.test(config.accesstokenvalue)
          ? config.accesstokenvalue + "+" + config.mode
          : config.mode
      }@${config.selectedRegion}${headercommands}`;

      if (config.restart) {
        command =
          config.platformselect === "unix"
            ? `while true; do \n    ${command}; \nsleep 5; done`
            : `FOR /L %N IN () DO (${command}\ntimeout /t 5)`;
      }

      return command;
    },
    resetTcpTlsConfig: function () {
      this.tcp_tlsConfig = JSON.parse(JSON.stringify(defaultTcpTlsConfig));
      localStorage.setItem("tcp_tlsConfig", JSON.stringify(this.tcp_tlsConfig));
    },
  });
});

// =======================================================
function copytoclipboard(element, inputselector, amplitudemsg) {
  var portcommand = $(inputselector)[0];
  // Get the text field
  portcommand.select();
  portcommand.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(portcommand.value);
  var amplitudeEvent = "SSH url copy button clicked";
  var eventProperties = {
    url: portcommand.value,
  };
  amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
  $(element).children("i").removeClass("bi-clipboard");
  $(element).children("i").addClass("bi-check");
  setTimeout(
    function (element) {
      $(element).children("i").removeClass("bi-check");
      $(element).children("i").addClass("bi-clipboard");
    },
    1000,
    element
  );
}

function trynow() {
  var amplitudeEvent = "Try now button clicked";
  var eventProperties = {};
  amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
  $("html, body").animate(
    {
      scrollTop: $("#bigcodecolumn").offset().top - 100,
    },
    1000
  );
  $("#bigcodecolumn").addClass("shadowhighlight");
  setTimeout(function () {
    $("#bigcodecolumn").removeClass("shadowhighlight");
  }, 2000);
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function starttrial() {
  $("#emailinvalidtooltip").hide();
  var amplitudeEvent = "Trial button clicked";
  var eventProperties = {};
  amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
  var emailinput = $("#trialemail").val();
  if (isEmail(emailinput)) {
    var encoded = encodeURIComponent(emailinput);
    window.location = "https://dashboard.pinggy.io/starttrial?email=" + encoded;
  } else {
    $("#emailinvalidtooltip").show();
  }
}

function starttrial2() {
  $("#emailinvalidtooltip2").hide();
  var amplitudeEvent = "Trial button 2 clicked";
  var eventProperties = {};
  amplitude.getInstance().logEvent(amplitudeEvent, eventProperties);
  var emailinput = $("#trialemail2").val();
  if (isEmail(emailinput)) {
    var encoded = encodeURIComponent(emailinput);
    window.location = "https://dashboard.pinggy.io/starttrial?email=" + encoded + "&yearly=" + $("#toggleswitch").is(':checked');
  } else {
    $("#emailinvalidtooltip2").show();
  }
}

// ---------------- price monthly yearly toggle -------------
$("#toggleswitch").change(function () {
  if (this.checked) {
    $(".monthly").hide();
    $(".yearly").show();
  } else {
    $(".yearly").hide();
    $(".monthly").show();
  }
});

// Download button system auto detect:
os_arch_to_link = {
  windows: {
    amd64: "pinggy_windows_386.exe",
  },
  linux: {
    amd64: "pinggy_linux_amd64",
  },
};

/*** typewriter ***/
$("#textchanger").teletype({
  delay: 70,
  pause: 3000,
  text: [
    "share your web apps!",
    "access your IoT devices!",
    "share your files!",
  ],
});
