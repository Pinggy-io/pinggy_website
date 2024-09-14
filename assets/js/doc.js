var showsidebar = function () {
  $(".sidebarcol").slideDown();
};

var hidesidebar = function () {
  $(".sidebarcol").slideUp();
};

$(document).ready(function () {
  var currentUrl = window.location.href;
  // Iterate through each <li> element
  $(".doclink").each(function () {
    // If the data attribute value matches the last part of the URL
    var $childATag = $(this).find("a");
    if ($childATag.length === 1) {
      var hrefValue = $childATag.attr("href");
      console.log(currentUrl, hrefValue);
      if (currentUrl.endsWith(hrefValue)) {
        $(this).addClass("active");
        $(this).closest('.collapse').first().collapse('show');
      }
    }
  });
});

function setCheckedIcon(containerSelector) {
  var originalIcon = $(containerSelector).find(".bi-clipboard");
  if (originalIcon.length > 0) {
    containerSelector.addClass("clicked");
    containerSelector.html('<i class="bi bi-check" style="color:green"></i>');
    setTimeout(() => {
      unsetCheckedIcon(containerSelector);
    }, 1000);
  }
}
function unsetCheckedIcon(containerSelector) {
  var originalIcon = $(containerSelector).find(".bi-check");
  containerSelector.removeClass("clicked");
  if (originalIcon.length > 0) {
    containerSelector.html('<i class="bi bi-clipboard"></i>');
  }
}

// clipboard
var clipInit = false;
$("pre > code").each(function () {
  var code = $(this),
    text = code.text();

  if (text.length > 5) {
    if (!clipInit) {
      var text,
        clip = new ClipboardJS(".copy-to-clipboard", {
          text: function (trigger) {
            text = $(trigger).prev("code").text();
            return text.replace(/^\$\s/gm, "");
          },
        });

      var inPre;
      clip.on("success", function (e) {
        e.clearSelection();
        inPre = $(e.trigger).parent().prop("tagName") == "PRE";
        $(e.trigger)
          .attr("aria-label", "Copied to clipboard!")
          .addClass("tooltipped tooltipped-" + (inPre ? "w" : "s"));
        setCheckedIcon($(e.trigger));
      });

      clip.on("error", function (e) {
        inPre = $(e.trigger).parent().prop("tagName") == "PRE";
        $(e.trigger)
          .attr("aria-label", fallbackMessage(e.action))
          .addClass("tooltipped tooltipped-" + (inPre ? "w" : "s"));
        $(document).one("copy", function () {
          $(e.trigger)
            .attr("aria-label", "Copied to clipboard!")
            .addClass("tooltipped tooltipped-" + (inPre ? "w" : "s"));
        });
      });

      clipInit = true;
    }

    code.after(
      '<span class="copy-to-clipboard" title="Copy to clipboard"><i class="bi bi-clipboard"></i></span>'
    );
    code.next(".copy-to-clipboard").on("mouseleave", function () {
      $(this)
        .attr("aria-label", null)
        .removeClass("tooltipped tooltipped-s tooltipped-w");
    });
  }
});

function switchTab(tabGroup, tabId) {
  allTabItems = jQuery("[data-tab-group='" + tabGroup + "']");
  targetTabItems = jQuery(
    "[data-tab-group='" + tabGroup + "'][data-tab-item='" + tabId + "']"
  );

  // if event is undefined then switchTab was called from restoreTabSelection
  // so it's not a button event and we don't need to safe the selction or
  // prevent page jump
  var isButtonEvent = event != undefined;

  if (isButtonEvent) {
    // save button position relative to viewport
    var yposButton = event.target.getBoundingClientRect().top;
  }

  allTabItems.removeClass("active");
  targetTabItems.addClass("active");

  if (isButtonEvent) {
    // reset screen to the same position relative to clicked button to prevent page jump
    var yposButtonDiff = event.target.getBoundingClientRect().top - yposButton;
    window.scrollTo(window.scrollX, window.scrollY + yposButtonDiff);

    // Store the selection to make it persistent
    if (window.localStorage) {
      var selectionsJSON = window.localStorage.getItem("tabSelections");
      if (selectionsJSON) {
        var tabSelections = JSON.parse(selectionsJSON);
      } else {
        var tabSelections = {};
      }
      tabSelections[tabGroup] = tabId;
      window.localStorage.setItem(
        "tabSelections",
        JSON.stringify(tabSelections)
      );
    }
  }
}

function restoreTabSelections() {
  if (window.localStorage) {
    var selectionsJSON = window.localStorage.getItem("tabSelections");
    if (selectionsJSON) {
      var tabSelections = JSON.parse(selectionsJSON);
    } else {
      var tabSelections = {};
    }
    Object.keys(tabSelections).forEach(function (tabGroup) {
      var tabItem = tabSelections[tabGroup];
      switchTab(tabGroup, tabItem);
    });
  }
}
