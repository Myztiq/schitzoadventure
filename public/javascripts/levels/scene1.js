$(function(){
  sceneSetup['scene1'] = function(){
    //Scene is loading, lets set our timers
    setTimeout(function(){
      $('#scene1').addClass('godVisible');
      $('#scene1 .exit').click(function(){
        $('#scene1').addClass('godShown').removeClass('godVisible');
      })
    }, 2000);

  }

  $("#peasants").click(function() {
    loadScene('scene2');
  });
  $("#pheasants").click(function() {
    loadScene('scene2');
    scorePoint();
  });
  $("#nobility").click(function() {
    console.log("nope button done got clicked");
    loadScene('scene2');
  });
});
