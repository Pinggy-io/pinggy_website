const prefillheadermodifications = (wrapperelement) => {
  let headermodificationdata = wrapperelement.data("headermodifications");
  // For each, add a row and set the values
  for (let index = 0; index < headermodificationdata.length; index++) {
    const headermodification = headermodificationdata[index];
    let newrow = wrapperelement
      .find(".headermodificationsample")
      .children()
      .clone();
    wrapperelement.find(".headermodificationcontainer").append(newrow);
    newrow
      .find(".shortcode_headermodificationmode")
      .val(headermodification["mode"]);
    newrow.find(".shortcode_headername").val(headermodification["headername"]);
    if (headermodification["mode"] != "r") {
      newrow.find(".shortcode_headerval").val(headermodification["headerval"]);
    } else {
      newrow.find(".shortcode_headerval").prop("disabled", true).val("");
    }
  }
};

const generateShortcodeCommand = (wrapperelement) => {
  // Get checkbox values
  let keepalive = wrapperelement.find(".shortcode_keepalive").is(":checked");
  let restart = wrapperelement.find(".shortcode_restart").is(":checked");
  let webdebug = wrapperelement.find(".shortcode_webdebugCheck").is(":checked");
  let rsacheck = wrapperelement.find(".shortcode_rsaCheck").is(":checked");
  let localPort = wrapperelement.find(".shortcode_localPort").val();
  let webdebugPort = wrapperelement.find(".shortcode_webdebugPort").val();
  let platform = wrapperelement.find(".shortcode_platformselect").val();
  let mode = wrapperelement.data("mode");

  let options = "";
  let headercommands = "";
  let modestring = "";

  if (mode == "tcp") {
    modestring = "tcp";
  }
  if (mode == "tls") {
    modestring = "tls";
  }

  if (webdebug) {
    wrapperelement.find(".shortcode_webdebuggerportselector").slideDown();
    let webdebugoption = `-L${webdebugPort}:localhost:${webdebugPort}`;
    options += " " + webdebugoption;
    // update url
    wrapperelement
      .find(".shortcode_webdebugurl > a")
      .attr("href", `http://localhost:${webdebugPort}`);
    wrapperelement
      .find(".shortcode_webdebugurl > a")
      .text(`http://localhost:${webdebugPort}`);
    wrapperelement.find(".shortcode_webdebugurl").slideDown();
  } else {
    wrapperelement.find(".shortcode_webdebugurl").slideUp();
    wrapperelement.find(".shortcode_webdebuggerportselector").slideUp();
  }

  if (!rsacheck) {
    options += " -o StrictHostKeyChecking=no";
  }
  if (keepalive) {
    options += " -o ServerAliveInterval=30";
  }

  let headermodificationrows = wrapperelement
    .find(".headermodificationcontainer")
    .children();
  for (let i = 0; i < headermodificationrows.length; i++) {
    let headermode = $(headermodificationrows[i])
      .children(".shortcode_headermodificationmode")
      .val();
    let headername = $(headermodificationrows[i])
      .children(".shortcode_headername")
      .val();
    let headerval = $(headermodificationrows[i])
      .children(".shortcode_headerval")
      .val();

    let thiscommand = `\\\"${headermode}:${headername}${
      headerval ? ":" + headerval : ""
    }\\\"`;
    headercommands += " " + thiscommand;
  }
  if (headercommands != "") {
    options += " -t";
  }

  command =
    `ssh -p 443${options} -R0:localhost:${localPort} ${
      modestring != "" ? modestring + "@" : ""
    }a.pinggy.io` + headercommands;

  // restarting
  if (restart) {
    if (platform == "unix") {
      command = "while true; do \n    " + command + "; \nsleep 10; done";
      wrapperelement
        .find(".pinggytunnelshortcode_advancedcommand")
        .attr("rows", 4);
    } else {
      command = "FOR /L %N IN () DO (" + command + "\ntimeout /t 10)";
      wrapperelement
        .find(".pinggytunnelshortcode_advancedcommand")
        .attr("rows", 4);
    }
    wrapperelement.find(".shortcode_platformselect_div").slideDown();
    wrapperelement.find(".shortcode_alert").slideDown();
  } else {
    wrapperelement
      .find(".pinggytunnelshortcode_advancedcommand")
      .attr("rows", 2);
    wrapperelement.find(".shortcode_alert").slideUp();
    wrapperelement.find(".shortcode_platformselect_div").slideUp();
  }

  wrapperelement.find(".pinggytunnelshortcode_advancedcommand").val(command);
};

// Trigger change on toggle buttons
$(".pinggytunnelshortcode").on(
  "change",
  ".shortcode_keepalive, .shortcode_restart, .shortcode_webdebugCheck, .shortcode_rsaCheck, .shortcode_platformselect",
  function () {
    generateShortcodeCommand($(this).closest(".pinggytunnelshortcode"));
  }
);

// Trigger change on port changes and header changes
$(".pinggytunnelshortcode").on(
  "input",
  ".shortcode_webdebugPort, .shortcode_localPort, .shortcode_headername, .shortcode_headerval",
  function () {
    generateShortcodeCommand($(this).closest(".pinggytunnelshortcode"));
  }
);

// Add header button
$(".pinggytunnelshortcode").on("click", ".shortcode_addheaderbtn", function () {
  // add header row
  $(this)
    .siblings(".headermodificationcontainer")
    .append($(this).siblings(".headermodificationsample").children().clone());
  generateShortcodeCommand($(this).closest(".pinggytunnelshortcode"));
});
// Remove header button
$(".pinggytunnelshortcode").on(
  "click",
  ".shortcode_removeheadermodificationrow",
  function () {
    let wrapper = $(this).closest(".pinggytunnelshortcode");
    $(this).closest(".shortcode_headermodificationgroup").remove();
    generateShortcodeCommand(wrapper);
  }
);

$(".pinggytunnelshortcode").on(
  "change",
  ".shortcode_headermodificationmode",
  function () {
    if ($(this).val() == "r") {
      $(this).siblings(".shortcode_headerval").prop("disabled", true).val("");
    } else {
      $(this).siblings(".shortcode_headerval").prop("disabled", false);
    }
    generateShortcodeCommand($(this).closest(".pinggytunnelshortcode"));
  }
);

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

$(function () {
  $(".pinggytunnelshortcode").each(function () {
    prefillheadermodifications($(this));
  });
  $(".pinggytunnelshortcode").each(function () {
    generateShortcodeCommand($(this));
  });
});
