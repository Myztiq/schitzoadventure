$(function(){
    $("#high-road").click(function() {
        loadScene('scene4');
    });
    $("#low-road").click(function() {
        loadScene('scene4');
    });
    $("#yellowbrick").click(function() {
        scorePoint();
        loadScene('scene4');
    });
});