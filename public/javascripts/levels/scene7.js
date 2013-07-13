$(function(){
  sceneSetup['scene7'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene7').addClass('godVisible');
      $('#scene7 .exit').click(function(){
        $('#scene7').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);
  }
  $("#ice-cream3").click(function() {
      loadScene('end');
  });
  $("#education").click(function() {
      scorePoint();
      loadScene('end');
  });
  $("#take-nap").click(function() {
      loadScene('end');
  });
});


