$(function(){
  sceneSetup['scene2'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene2').addClass('godVisible');
      $('#scene2 .exit').click(function(){
        $('#scene2').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);
  }
  $("#french-maid").click(function() {
    scorePoint();
    loadScene('scene3');
  });
  $("#tank-top").click(function() {
    loadScene('scene3');
  });
  $("#plate-armor").click(function() {
    loadScene('scene3');
  });
});
