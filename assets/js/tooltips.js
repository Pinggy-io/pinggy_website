/* Manual-trigger Bootstrap tooltips.

   Lives in the bundle rather than as an inline <script> so the bundle can be
   deferred: an inline script cannot wait for a deferred dependency, and this
   code needs the `bootstrap` global. Deferred scripts run in order before
   DOMContentLoaded, so `bootstrap` is defined by the time this executes.

   Trigger is "manual" so the tooltip survives a mouse move from the trigger
   onto the tooltip itself (used by the info icons in the pinggytunnel
   shortcode, whose tooltips contain links). */
(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  window.tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "manual",
    });

    var tooltipTimeout;
    var currentToolTip;

    tooltipTriggerEl.addEventListener("mouseenter", function () {
      var toolTipID;

      // Clear Set Timeout
      clearTimeout(tooltipTimeout);

      // Show Tooltip
      tooltip.show();

      // Assign current tooltip ID to toolTipID variable
      toolTipID = tooltipTriggerEl.getAttribute("aria-describedby");

      // Assign current tooltip to currentToolTip variable
      currentToolTip = document.querySelector("#" + toolTipID);

      // Hide tooltip on tooltip mouse leave
      if (currentToolTip) {
        currentToolTip.addEventListener("mouseleave", function () {
          tooltip.hide();
        });
      }
    });

    tooltipTriggerEl.addEventListener("mouseleave", function () {
      // SetTimeout before tooltip disappears
      tooltipTimeout = setTimeout(function () {
        // Hide tooltip if not hovered.
        if (!currentToolTip || !currentToolTip.matches(":hover")) {
          tooltip.hide();
        }
      }, 100);
    });

    return tooltip;
  });
})();
