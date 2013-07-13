$(document).ready(function(){
    $("#peasants").click(function() {
        $("#level1").hide();
        $("#score").text(score.toString())
        $("#end").show();
    });
    $("#pheasants").click(function() {
        $("#level1").hide();
        score++;
        $("#score").text(score.toString())
        $("#end").show();
    });
    $("#nobility").click(function() {
        console.log("nope button done got clicked");
        $("#level1").hide();
        $("#score").text(score.toString())
        $("#end").show();
    });
    $("#nope").click(function() {
        console.log("nope button done got clicked");
        $("#level1").hide();
        $("#main-menu").show();
    });
});
