// ---------- try it yourself form ------

$("#techselect").on("change", function () {
  var label = $("option:selected", this).data("label");
  var command = $("option:selected", this).data("command");
  var port = $("option:selected", this).data("port");

  if (label) {
    if (label != $("#tryityourselflabel").text()) {
      $("#tryityourselflabel").animate({ opacity: 0 }, 400, function () {
        $(this).text(label).animate({ opacity: 1 }, 400);
      });
    }
    $("#tryityourselflabel").show("slow");
  } else {
    $("#tryityourselflabel").hide("slow");
  }

  if (command) {
    $("#tryityourselfprecommand").val(command);

    $("#tryityourselfprecommand").css("visibility", "visible");
    $("#copybutton2").css("visibility", "visible");

    $("#tryityourselfprecommand").animate({ opacity: 1 }, 1200);
    $("#copybutton2").animate({ opacity: 1 }, 1200);
  } else {
    $("#tryityourselfprecommand").animate({ opacity: 0 }, 1200);
    $("#copybutton2").animate({ opacity: 0 }, 1200);
    $("#tryityourselfprecommand").css("visibility", "hidden");
    $("#copybutton2").css("visibility", "hidden");
  }

  $("#portform").val(port).trigger("input");
});

$("#webdebuggerinput").change(function () {
  if ($("#webdebuggerinput").is(":checked")) {
    $("#webdebugurl").slideDown();
  } else {
    $("#webdebugurl").slideUp();
  }
  $("#portform").trigger("input");
});

// ---------- ------------

$("#portform").on("input", function () {
  $("#portcommand").val(
    "ssh -p 443 -R0:localhost:" +
      ($("#portform").val() || "8000") +
      ($("#webdebuggerinput").is(":checked") ? " -L4300:localhost:4300" : "") +
      " a.pinggy.io"
  );
});

// Advanced form =========================================
$("#adv_platformselect").change(generateAdvancedCommand);
$("#adv_localPort").on("input", generateAdvancedCommand);
$("#adv_keepalive").change(generateAdvancedCommand);
$("#adv_restart").change(generateAdvancedCommand);
$("#adv_webdebugPort").on("input", generateAdvancedCommand);
$("#adv_rsaCheck").change(generateAdvancedCommand);
$("#headermodificationcontainer").on(
  "change",
  ".headermodificationmode, .headername, .headerval",
  generateAdvancedCommand
);
$("#headermodificationcontainer").on(
  "input",
  ".headername, .headerval",
  generateAdvancedCommand
);
$("#advancedModalButton").on("click", generateAdvancedCommand);

$("#adv_webdebugCheck").change(function () {
  if (this.checked) {
    $("#adv_webdebuggerportselector, #adv_webdebugurl").slideDown();
  } else {
    $("#adv_webdebuggerportselector, #adv_webdebugurl").slideUp();
  }
  generateAdvancedCommand();
});

function addheadermodificationrow() {
  $("#headermodificationcontainer").append(
    $("#headermodificationinputsample").children().clone()
  );
}

$("#headermodificationcontainer").on(
  "click",
  ".removeheadermodificationrow",
  function () {
    $(this).closest(".headermodificationgroup").remove();
    generateAdvancedCommand();
  }
);

function generateAdvancedCommand() {
  let localport = $("#adv_localPort").val();
  let debugport = $("#adv_webdebugPort").val();
  let debugenabled = $("#adv_webdebugCheck").is(":checked");
  let manuelcheck = $("#adv_rsaCheck").is(":checked");
  let keepalive = $("#adv_keepalive").is(":checked");
  let restart = $("#adv_restart").is(":checked");
  let platform = $("#adv_platformselect").val();

  let options = "";
  let headercommands = "";

  if (debugenabled) {
    let webdebugoption = `-L${debugport}:localhost:${debugport}`;
    options += " " + webdebugoption;

    // update url
    $("#adv_webdebugurl > a").attr("href", `http://localhost:${debugport}`);
    $("#adv_webdebugurl > a").text(`http://localhost:${debugport}`);
  }
  if (!manuelcheck) {
    options += " -o StrictHostKeyChecking=no";
  }
  if (keepalive) {
    options += " -o ServerAliveInterval=30";
  }

  let headermodificationrows = $("#headermodificationcontainer").children();
  for (let i = 0; i < headermodificationrows.length; i++) {
    let mode = $(headermodificationrows[i])
      .children(".headermodificationmode")
      .val();
    mode == "r"
      ? $(headermodificationrows[i])
          .children(".headerval")
          .prop("disabled", true)
          .val("")
      : $(headermodificationrows[i])
          .children(".headerval")
          .prop("disabled", false);
    let headername = $(headermodificationrows[i]).children(".headername").val();
    let headerval = $(headermodificationrows[i]).children(".headerval").val();

    let thiscommand = `\\\"${mode}:${headername}${
      headerval ? ":" + headerval : ""
    }\\\"`;
    headercommands += " " + thiscommand;
  }
  if (headercommands != "") {
    options += " -t";
  }

  command =
    `ssh -p 443 -R0:localhost:${localport} ${options} a.pinggy.io` +
    headercommands;

  // restarting
  if (restart) {
    if (platform == "unix") {
      command = "while true; do \n    " + command + "; \nsleep 5; done";
      $("#advancedcommand").attr("rows", 4);
    } else {
      command = "FOR /L %N IN () DO (" + command + "\ntimeout /t 5)";
      $("#advancedcommand").attr("rows", 4);
    }
    $("#adv_alert").slideDown();
  } else {
    $("#advancedcommand").attr("rows", 2);
    $("#adv_alert").slideUp();
  }

  $("#advancedcommand").val(command);
}

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
