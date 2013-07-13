$(function(){
  var score = $("#score").text();
  $("#french-maid").click(function() {
    loadScene('end');
    scorePoint();
  });
  $("#tank-top").click(function() {
    loadScene('end');
  });
  $("#plate-armor").click(function() {
    loadScene('end');
  });
});
