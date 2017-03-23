var heightCheck = function(height) {
  if (height >= 42) {

    $(".col-md-10").show()
    $(".under-height").css("background-color", "");
  } else {
    $(".col-md-10").show()
    $(".under-height").css("background-color", "green");
  }
};

$(document).ready(
  function() {
    $("#some-form").submit(function(event) {
      event.preventDefault();
      var someInput = $("input#some-input").val();
      heightCheck(someInput);
    });
  }
);
