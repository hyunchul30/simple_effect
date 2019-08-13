$(function() {
$("button#green").click(function(){
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#yellow").click(function(){
  $("body").removeClass();
  $("body").addClass("yellow-background")
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background")
});
});




$(function() {
$ ("h1").click(function() {
  alert("this is");
});
$("h2").click(function() {
  alert("MyHouse");

});
$("img").click(function() {
  alert("MyHouse");
  alert("but I will sell!");



  });
});

$(function() {
  $("h1").click(function() {
    $(".dog-showing").fadeIn();
    $(".dog-hidden").fadeOut();

  });
});
$(function() {
  $("div").click(function() {
    $("home-showing").slideDown();
    $("home-hidden").slideUp();
  });
});
