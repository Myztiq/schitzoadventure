$(function(){
  sceneSetup['scene3'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene3').addClass('godVisible');
      $('#scene3 .exit').click(function(){
        $('#scene3').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);
  }
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
