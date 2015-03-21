$("#one").click(function(e) {
    $("#view-tracks").removeClass("slide-down", 1000);
    $("#view-tracks").addClass("slide-up", 1000);
});
$("#two").click(function(e) {
    $("#view-tracks").removeClass("slide-up", 500);
    $("#view-tracks").addClass("slide-down", 500);
});
$("#three").click(function(e) {
    $("#view-tracks").removeClass("slide-up", 500);
    $("#view-tracks").addClass("slide-down", 500);
});

