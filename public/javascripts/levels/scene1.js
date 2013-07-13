$(function(){

  var talkStage = 0;
  const maxTalk = 2;

  sceneSetup['scene1'] = function(){
    $("#scene1 .dialogue #talk0").fadeTo(0.5, 1);
    console.log("scene loaded");
    //Scene is loading, lets set our timers
    /*setTimeout(function(){
      $('#scene1').addClass('godVisible');
      $('#scene1 .exit').click(function(){
        $('#scene1').addClass('godHasSpoken').removeClass('godVisible');
      })
    }, 1000);*/
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
