$(function(){

  var talkStage = 0;
  const maxTalk = 2;

  sceneSetup['scene1'] = function(){
    $("#scene1 .dialogue #talk0").fadeTo(0.5, 1);
    console.log("scene loaded");
  }

  $(".dialogue").click(function() {
      console.log("Dialogue clicked");
      $("#scene1 .dialogue #talk"+talkStage).fadeTo(0.5, 0);
      talkStage++;
      if (talkStage >= maxTalk) {
          $('#scene1Dialogue').removeClass('dialogue');
          setTimeout(function(){
              $('#scene1').addClass('godVisible');
              $('#scene1 .exit').click(function(){
                  $('#scene1').addClass('godHasSpoken').removeClass('godVisible');
              })
          }, 1000);
      }
      else {
        $("#scene1 .dialogue #talk"+talkStage).fadeTo(0.5, 1);
      }
  });

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
