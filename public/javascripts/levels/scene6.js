$(function(){
  sceneSetup['scene6'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene6').addClass('godVisible');
      $('#scene6 .exit').click(function(){
        $('#scene6').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);
  }
  $("#husbands").click(function() {
      loadScene('scene7');
  });
  $("#trojan-horse").click(function() {
      loadScene('scene7');
  });
  $("#ice-cream2").click(function() {
      scorePoint();
      loadScene('scene7');
  });
});

