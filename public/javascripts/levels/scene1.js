$(document).ready(function(){
    var score = $("#score").text();

    $("#peasants").click(function() {
        $("#scene1").hide();
        $("#scene2").show();
    });
    $("#pheasants").click(function() {
        $("#scene1").hide();
        score++;
        $("#score").text(score.toString())
        $("#scene2").show();
    });
    $("#nobility").click(function() {
        console.log("nope button done got clicked");
        $("#scene1").hide();
        $("#scene2").show();
    });
});
