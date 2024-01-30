const filterQuickstartCards = function () {
  $(".quickstartcard").show();
  var filter = $(this).val(); // get the value of the input, which we filter on
  $(".quickstartcard-container")
    .find(".quickstartcard")
    .filter(function () {
      return (
        $(this).data("title").toLowerCase().indexOf(filter.toLowerCase()) < 0
      );
    })
    .hide();
};

$("#quickstart-search-input").on("input", filterQuickstartCards);
$("#quickstart-search-input").change(filterQuickstartCards);
