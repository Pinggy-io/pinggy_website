const IPV6_HOSTNAME_REGEX = /^\[([A-Fa-f0-9:]+)](?::(\d{1,5}))?$/;
const IPV4_HOSTNAME_REGEX =
  /^((?:\d{1,3}\.){3}\d{1,3}|[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)(?::(\d{1,5}))?$/;


document.addEventListener("alpine:init", () => {
  const defaultHttpConfig = {
    localPort: 8000,
    webdebugCheck: false,
    webdebugPort: 4300,
    selectedRegion: "a.pinggy.io",
    rsaCheck: true,
    keepalive: true,
    qrCheck: false,
    platformselect: "unix"
  };


  Alpine.store("advModal", {
    httpConfig:
      JSON.parse(localStorage.getItem("httpConfig")) || defaultHttpConfig,

    parseLocalAddress: function () {
      let config = this.tryItYourself;
      let url = config.localaddress;

      let protocol = config.selectedProtocol,
        host = 'localhost',
        port = 8000,
        error = null,
        warning = null;

      if (!url || typeof url !== 'string') {
        return { protocol, host, port, warning, error };
      }

      // Split by "://"
      const parts = url.split('://');
      if (parts.length > 2) {
        return { protocol, host, port, warning, error: 'Invalid URL format' };
      }
      if (parts.length == 2) {
        protocol = parts[0].toLowerCase();
        url = parts[1];
      }
      // Split by "/"
      const urlparts = url.split('/');
      if (urlparts.length > 1) {
        url = urlparts[0];
      }

      if (url.includes('[') || url.includes(']')) {
        // **IPv6 Parsing**
        const match = url.match(IPV6_HOSTNAME_REGEX);
        if (!match) {
          return { protocol, host, port, warning, error: 'Invalid IPv6 format' };
        }
        host = `[${match[1]}]`;
        port = match[2] ? parseInt(match[2], 10) : protocol;
      } else if (url.includes(':')) {
        // **IPv4 or Domain Parsing**
        const match = url.match(IPV4_HOSTNAME_REGEX);
        if (!match) {
          return { protocol, host, port, warning, error: 'Invalid host format' };
        }
        host = match[1];
        port = match[2] ? parseInt(match[2], 10) : protocol;
      } else {
        // No colon — could be port-only or a host without port
        const parsedInt = parseInt(url, 10);

        if (/[a-zA-Z]/.test(url)) {
          host = url;
        } else if (parsedInt >= 1 && parsedInt <= 65535) {
          // Port-only, assume localhost
          port = parsedInt;
        } else {
          host = url;
          warning = 'Invalid port value, assuming it as hostname';
        }
      }

      if (isNaN(port) || port < 1 || port > 65535) {
        return {
          protocol,
          host,
          port,
          warning,
          error: `Invalid port: "${port}"`,
        };
      }

      return { protocol, host, port, warning, error };
    },

    getError: function () {
      let { protocol, host, port, warning, error }  = this.parseLocalAddress();
      return error || warning
    },

    tryItYourselfCommand: function () {

      let { protocol, host, port, warning, error }  = this.parseLocalAddress();
      let config = this.tryItYourself;

      // Hostnames
      if(host === "localhost" && getOS() === "windows") {
        host = "127.0.0.1";
      }
      let localhostStr = getOS() === "windows" ? "127.0.0.1" : "localhost";

      // User string
      let userStr = "";
      if(config.qrCheck) {
        userStr = "qr";
      }
      if (config.selectedProtocol === "TCP") {
        userStr = userStr + (userStr ? "+tcp" : "tcp")
      }
      if (config.selectedProtocol === "UDP") {
        userStr = userStr + (userStr ? "+udp" : "udp")
      }

      // SSH / CLI
      let program = config.selectedProtocol === "UDP" ? (getOS() === "windows" ? "pinggy.exe" : "./pinggy") : "ssh";

      // Args
      let args = "";
      if(config.selectedProtocol === "HTTP" && protocol.toLowerCase() === "https") {
        args = " x:localServerTls:" + host
      }

      let command =
        program + " -p 443 -R0:" + host + ":" +
        port +
        (config.webdebugCheck ? " -L4300:" + localhostStr + ":4300" : "") +
        (userStr ? (" " + userStr + "@") : " ") +
        "free.pinggy.io" + args;

      return command;
    },

    resetHttpConfig: function () {
      this.httpConfig = JSON.parse(JSON.stringify(defaultHttpConfig));
      localStorage.setItem("httpConfig", JSON.stringify(this.httpConfig));
    },
  });

  Alpine.store('location', {
    country: 'Unknown',
    currency: '$',
    detectCountry() {
      console.log("detecting currency");
      fetch('https://ipapi.co/json/') // Public IP Geolocation API
        .then(response => response.json())
        .then(data => {
          this.country = data.country_name;
          if (this.country === 'India') {
            this.currency = 'INR';
          } else {
            this.currency = '$';
          }
        })
        .catch(error => {
          console.error('Error detecting country:', error);
        });
    }
  });

});


// =======================================================
function copytoclipboard(element, inputselector) {
  var portcommand = $(inputselector)[0];
  // Get the text field
  portcommand.select();
  portcommand.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(portcommand.value);
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
  var emailinput = $("#trialemail2").val();
  if (isEmail(emailinput)) {
    var encoded = encodeURIComponent(emailinput);
    window.location = "https://dashboard.pinggy.io/starttrial?email=" + encoded + "&monthly=" + (!$("#toggleswitch").is(':checked'));
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

// OS detection script
document.addEventListener('DOMContentLoaded', function () {
  var userOS = getOS();
  var tabId = userOS + '-tab';
  var tabElement = document.getElementById(tabId);

  if (tabElement) {
    var tab = new bootstrap.Tab(tabElement);
    tab.show();
  } else {
    // Fallback to Windows tab if the detected OS tab doesn't exist
    var windowsTab = document.getElementById('windows-tab');
    if (windowsTab) {
      var tab = new bootstrap.Tab(windowsTab);
      tab.show();
    }
  }
});