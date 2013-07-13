$(document).ready(function(){
    var score = $("#score").text();

    $("#french-maid").click(function() {
        $("#scene2").hide();
        score++;
        $("#score").text(score.toString());
        $("#end").show();
    });
    $("#tank-top").click(function() {
        $("#scene2").hide();
        $("#end").show();
    });
    $("#plate-armor").click(function() {
        $("#scene2").hide();
        $("#end").show();
    });
});
