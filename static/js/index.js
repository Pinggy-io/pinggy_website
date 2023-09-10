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

$("#qrinput").change(function () {
  $("#portform").trigger("input");
});

// ---------- ------------

$("#portform").on("input", function () {
  $("#portcommand").val(
    "ssh -p 443 -R0:localhost:" +
      ($("#portform").val() || "8000") +
      ($("#webdebuggerinput").is(":checked") ? " -L4300:localhost:4300" : "") +
      ($("#qrinput").is(":checked") ? " qr@" : " ") +
      "a.pinggy.io"
  );
});

// Advanced form =========================================
$("#adv_platformselect").change(generateAdvancedCommand);
$("#adv_localPort").on("input", generateAdvancedCommand);
$("#adv_keepalive").change(generateAdvancedCommand);
$("#adv_restart").change(() => {
  if ($("#adv_restart").is(":checked")) {
    $("#adv_platformselect_div").slideDown();
  } else {
    $("#adv_platformselect_div").slideUp();
  }
  generateAdvancedCommand();
});

$("#adv_passwordCheck").change(() => {
  if ($("#adv_passwordCheck").is(":checked")) {
    $("#adv_passwordfields").slideDown();
    $( "#adv_keyAuthentication" ).prop( "checked", false ).trigger('change');
  } else {
    $("#adv_passwordfields").slideUp();
  }
  generateAdvancedCommand();
});
$("#adv_qrCheck").on("input", generateAdvancedCommand);
$("#adv_basicusername").on("input", generateAdvancedCommand);
$("#adv_basicpass").on("input", generateAdvancedCommand);

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

$("#keyauthinputcontainer").on("change", ".keyauthval", generateAdvancedCommand);
$("#keyauthinputcontainer").on("input", ".keyauthval", generateAdvancedCommand);


$("#advancedModalButton").on("click", generateAdvancedCommand);

$("#adv_webdebugCheck").change(function () {
  if (this.checked) {
    $("#adv_webdebuggerportselector, #adv_webdebugurl").slideDown();
  } else {
    $("#adv_webdebuggerportselector, #adv_webdebugurl").slideUp();
  }
  generateAdvancedCommand();
});

$("#keyauthinputcontainer").hide();
$("#adv_keyAuthentication").change(function () {
  if (this.checked) {
    $("#keyauthinputcontainer").slideDown();
    $( "#adv_passwordCheck" ).prop( "checked", false ).trigger('change');
  } else {
    $("#keyauthinputcontainer").slideUp();
  }
  generateAdvancedCommand();
});


function addkeyauthinput() {
  $("#keyauthinputsample").children().hide();
  $("#keyauthinputcontainer").prepend(
    $("#keyauthinputsample").children().clone()
  );
  $('#keyauthinputcontainer').find(".keyauthgroup:first").slideDown("fast");
}

$("#keyauthinputcontainer").on(
  "click",
  ".removekeyauthinput",
  function () {
    $(this).closest(".keyauthgroup").slideUp("fast", function() { $(this).remove(); generateAdvancedCommand(); } );
  }
);

function addheadermodificationrow() {
  $("#headermodificationinputsample").children().hide();
  $("#headermodificationcontainer").append(
    $("#headermodificationinputsample").children().clone()
  );
  $('#headermodificationcontainer').find(".headermodificationgroup:last").slideDown("fast");
}

$("#headermodificationcontainer").on(
  "click",
  ".removeheadermodificationrow",
  function () {
    $(this).closest(".headermodificationgroup").slideUp("fast", function() { $(this).remove(); generateAdvancedCommand(); } );
  }
);

function generateAdvancedCommand() {
  let localport = $("#adv_localPort").val();
  let debugport = $("#adv_webdebugPort").val();
  let debugenabled = $("#adv_webdebugCheck").is(":checked");
  let keyauthentication = $("#adv_keyAuthentication").is(":checked");
  let manuelcheck = $("#adv_rsaCheck").is(":checked");
  let keepalive = $("#adv_keepalive").is(":checked");
  let qr = $("#adv_qrCheck").is(":checked");
  let restart = $("#adv_restart").is(":checked");
  let platform = $("#adv_platformselect").val();

  let passwordenabled = $("#adv_passwordCheck").is(":checked");
  let basicusername = $("#adv_basicusername").val();
  let basicpass = $("#adv_basicpass").val();

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


  if(keyauthentication){
    let keyauthrows = $("#keyauthinputcontainer").children();
    for (let i = 0; i < keyauthrows.length; i++) {
      let keyauthval = $(keyauthrows[i])
        .children(".keyauthval")
        .val();
      let thiscommand = `\\\"k:${keyauthval}\\\"`;
      headercommands += " " + thiscommand;
    }
  }

  if(passwordenabled && basicusername && basicpass ) {
    headercommands += " " + `\\\"b:${basicusername}:${basicpass}\\\"`;
  }

  
  if (headercommands != "") {
    options += " -t";
  }

  sshuser = ""
  if(qr){
    sshuser = "qr@"
  }

  command =
    `ssh -p 443 -R0:localhost:${localport} ${options} ${sshuser}a.pinggy.io` +
    headercommands;

  // restarting
  if (restart) {
    if (platform == "unix") {
      command = "while true; do \n    " + command + "; \nsleep 10; done";
      $("#advancedcommand").attr("rows", 4);
    } else {
      command = "FOR /L %N IN () DO (" + command + "\ntimeout /t 10)";
      $("#advancedcommand").attr("rows", 4);
    }
    $("#adv_alert").slideDown();
  } else {
    $("#advancedcommand").attr("rows", 2);
    $("#adv_alert").slideUp();
  }

  $("#advancedcommand").val(command);
}

// Advanced form TCP / TLS =========================================
var mode_tcp = "tcp";
$("#adv_platformselect_tcp").change(advGenerateAdvancedCommand);
$("#adv_localPort_tcp").on("input", advGenerateAdvancedCommand);
$("#adv_keepalive_tcp").change(advGenerateAdvancedCommand);
$("#adv_restart_tcp").change(() => {
  if ($("#adv_restart_tcp").is(":checked")) {
    $("#adv_platformselect_tcp_div").slideDown();
  } else {
    $("#adv_platformselect_tcp_div").slideUp();
  }
  advGenerateAdvancedCommand();
});
$("#adv_rsaCheck_tcp").on("input", advGenerateAdvancedCommand);
$("#advancedModalButton").on("click", advGenerateAdvancedCommand);
$("#tcp-tab").on("click", () => {
  (mode_tcp = "tcp"), advGenerateAdvancedCommand();
});
$("#tls-tab").on("click", () => {
  (mode_tcp = "tls"), advGenerateAdvancedCommand();
});

function advGenerateAdvancedCommand() {
  let localport_tcp = $("#adv_localPort_tcp").val();
  let manuelcheck_tcp = $("#adv_rsaCheck_tcp").is(":checked");
  let keepalive_tcp = $("#adv_keepalive_tcp").is(":checked");
  let restart_tcp = $("#adv_restart_tcp").is(":checked");
  let platform_tcp = $("#adv_platformselect_tcp").val();

  let options_tcp = "";

  if (!manuelcheck_tcp) {
    options_tcp += " -o StrictHostKeyChecking=no";
  }
  if (keepalive_tcp) {
    options_tcp += " -o ServerAliveInterval=30";
  }

  command = `ssh -p 443 -R0:localhost:${localport_tcp} ${options_tcp} ${mode_tcp}@a.pinggy.io`;

  // restarting
  if (restart_tcp) {
    if (platform_tcp == "unix") {
      command = "while true; do \n    " + command + "; \nsleep 5; done";
      $("#advancedcommandtcp").attr("rows", 4);
    } else {
      command = "FOR /L %N IN () DO (" + command + "\ntimeout /t 5)";
      $("#advancedcommandtcp").attr("rows", 4);
    }
    $("#adv_alert").slideDown();
  } else {
    $("#advancedcommandtcp").attr("rows", 2);
    $("#adv_alert").slideUp();
  }

  $("#advancedcommandtcp").val(command);
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


function seatChange(e) {
  var seatVal = $(".seat-spinner > input").val();
  if(seatVal < 1){
    $(".seat-spinner > input").val(1);
    seatVal = $(".seat-spinner > input").val();
  }
  $(".seatval").html(seatVal);
  $(".multipleseat").html(seatVal > 1  ? "s":"");

  seatVal = parseFloat(seatVal);
  // Update
  var monthprice = parseFloat($("#monthprice").data("price"));
  var yearprice = parseFloat($("#yearprice").data("price"));
  $("#monthprice").html((monthprice * seatVal).toFixed(2));
  $("#yearprice").html((yearprice * seatVal).toFixed(2));
}



$(document).on('click', '.seat-spinner button', function () {
	var btn = $(this),
		oldValue = btn.closest('.seat-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.seat-spinner').find('input').val(newVal).change();
});

$(".seat-spinner > input").keyup(seatChange);
$(".seat-spinner > input").change(seatChange);
