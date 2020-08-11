$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeIn();
  });
});

$(document).ready(function() {
  $(".click").click(function() {
    $("#dog-showing").fadeIn();
    $("#dog-hiding").fadeIn();
  });
});

$(document).ready(function() {
  $(".food").click(function() {
    $("#hot-dog-showing").toggle();
    $("#hot-dog-hidden").toggle();
  });
});
