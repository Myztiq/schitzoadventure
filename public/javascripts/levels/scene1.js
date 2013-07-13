$(function(){

  var talkStage = 0;
  const maxTalk = 2;

  sceneSetup['scene1'] = function(){
    $('#currentDialogue').text(story.scene1-intro.text;
    $('#currentDialogue').fadeTo(0.5, 1);
    console.log('scene loaded');
  }

  $('.dialogueTakeover').click(function() {
      console.log('Dialogue clicked');
      $('#currentDialogue').fadeTo(0.5, 0);
      talkStage++;
      if (talkStage >= maxTalk) {
          $('#dialogueClicker').removeClass('dialogueTakeover');
          setTimeout(function(){
              $('#scene1').addClass('godVisible');
              $('#scene1 .exit').click(function(){
                  $('#scene1').addClass('godHasSpoken').removeClass('godVisible');
              })
              $('#dialogueClicker').addClass('dialogueTakeover');
          }, 1000);
      }
      else {
        $('#currentDialogue').fadeTo(0.5, 1);
      }
  });

  $('#peasants').click(function() {
    loadScene('scene2');
  });
  $('#pheasants').click(function() {
    loadScene('scene2');
    scorePoint();
  });
  $('#nobility').click(function() {
    loadScene('scene2');
  });
});
