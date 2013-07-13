$(function(){

  sceneSetup['scene1'] = function(){
    godSpoken = false;
    setTimeout(function(){
        $('#dialogueClicker').addClass('scene1Dialogue');
        $('#currentDialogue').text(story[choice][0].text);
        $('#currentDialogue').fadeTo(0.5, 1);
    }, 1000);
    console.log('scene 1 loaded');
  }

  $(document).on('click', ".scene1Dialogue", function() {
      console.log('Dialogue clicked');
      $('#currentDialogue').fadeTo(0.5, 0);
      talkStage++;
      if (talkStage >= maxTalk) {
          if (!godSpoken) {
              $('#dialogueClicker').removeClass('dialogueTakeover');
              setTimeout(function(){
                  $('#scene1').addClass('godVisible');
                  $('#scene1 .exit').click(function(){
                      $('#scene1').addClass('godHasSpoken').removeClass('godVisible');
                      $('#dialogueClicker').removeClass('scene1Dialogue');
                  })
              }, 1000);
          }
          else {
            $('#dialogueClicker').removeClass('scene1Dialogue');
            postChoice('scene2-intro');
            loadScene('scene2');
          }
      }
      else {
        $('#currentDialogue').text(story[choice][talkStage].text);
        $('#currentDialogue').fadeTo(0.5, 1);
      }
  });

  $('#peasants').click(function() {
    postChoice('scene1-peasant');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene1Dialogue');
    fadeInSound('l1a');
  });
  $('#pheasants').click(function() {
    scorePoint();
    postChoice('scene1-pheasant');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene1Dialogue');
  });
  $('#nobility').click(function() {
    postChoice('scene1-nobility');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene1Dialogue');
  });
});
