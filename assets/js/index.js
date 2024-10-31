document.addEventListener("alpine:init", () => {
  const defaultHttpConfig = {
    localPort: 8000,
    webdebugCheck: true,
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
  document.addEventListener('DOMContentLoaded', function() {
  function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.indexOf(platform) !== -1 || iosPlatforms.indexOf(platform) !== -1) {
      return 'mac';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      return 'windows';
    } else if (/Linux/.test(platform)) {
      return 'linux';
    } else {
      return 'windows'; // Default to Windows if unknown
    }
  }

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