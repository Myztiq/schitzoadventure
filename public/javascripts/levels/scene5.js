$(function(){
  sceneSetup['scene5'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene5').addClass('godVisible');
      $('#scene5 .exit').click(function(){
        $('#scene5').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);
  }
  $("#ice-cream").click(function() {
      loadScene('scene6');
  });
  $("#flogging").click(function() {
      loadScene('scene6');
  });
  $("#twilight").click(function() {
      scorePoint();
      loadScene('scene6');
  });
});

