$(document).ready(function(){
    var score = 0;

    $("#start").click(function() {
        console.log("Start button done got clicked");
        $(".scene").hide();
        $("#level1").show();
    });
});
