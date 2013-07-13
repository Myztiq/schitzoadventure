$(function(){

  var talkStage = 0;
  const maxTalk = 3;

  sceneSetup['scene1'] = function(){
    $('#dialogueClicker').addClass('scene1Dialogue');
    $('#currentDialogue').text(story['scene1-intro'][0].text);
    $('#currentDialogue').fadeTo(0.5, 1);
    console.log('scene loaded');
  }

  $(document).on('click', ".scene1Dialogue", function() {
      console.log('Dialogue clicked');
      $('#currentDialogue').fadeTo(0.5, 0);
      talkStage++;
      if (talkStage >= maxTalk) {
          $('#dialogueClicker').removeClass('dialogueTakeover');
          setTimeout(function(){
              $('#scene1').addClass('godVisible');
              $('#scene1 .exit').click(function(){
                  $('#scene1').addClass('godHasSpoken').removeClass('godVisible');
                  //$('#dialogueClicker').addClass('dialogueTakeover');
                  $('#dialogueClicker').removeClass('scene1Dialogue');
              })
          }, 1000);
      }
      else {
        $('#currentDialogue').text(story['scene1-intro'][talkStage].text);
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
