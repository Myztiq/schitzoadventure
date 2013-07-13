$(function(){
  sceneSetup['scene4'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene4').addClass('godVisible');
      $('#scene4 .exit').click(function(){
        $('#scene4').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);
  }
  $("#knights").click(function() {
      scorePoint();
      loadScene('scene5');
  });
  $("#kites").click(function() {
      loadScene('scene5');
  });
  $("#lights").click(function() {
      loadScene('scene5');
  });
});

