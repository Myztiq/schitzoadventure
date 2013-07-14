$(function () {

  sceneSetup['scene1'] = function () {
    godSpoken = false;
    $('#dialogueClicker').addClass('scene1Dialogue');
    speak(choice, talkStage);
    console.log('scene 1 loaded');

    fadeOutSound('l1a');
    fadeOutSound('l2a');
    fadeOutSound('l3a');
    fadeOutSound('l4a');
    fadeOutSound('l5a');
    fadeOutSound('l6a');
    fadeOutSound('l7a');
  }

  $(document).on('click', ".scene1Dialogue", function () {
    console.log('Dialogue clicked');
    endSpeak();
    talkStage++;
    if (talkStage >= maxTalk) {
      if (!godSpoken) {
        setTimeout(function () {
          playSound('visionAppear');
          $('#scene1').addClass('godVisible');
          $('#scene1 .exit').click(function () {
            playSound('visionConfirm');
            $('#scene1').addClass('godHasSpoken').removeClass('godVisible');
            $('#dialogueClicker').removeClass('scene1Dialogue');
          })
        }, 1000);
      }
      else {
        $('#dialogueClicker').removeClass('scene1Dialogue');
        postChoice('scene2-intro');
        loadScene('scene2');
//        endSpeak();
//        loadScene('end');
      }
    }
    else {
      speak(choice, talkStage);
    }
  });

  $('#peasants').click(function () {
    postChoice('scene1-peasant');
    recruit = 'peasants';
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene1Dialogue');
    fadeInSound('l1b');
  });
  $('#pheasants').click(function () {
    scorePoint();
    recruit = 'pheasants';
    postChoice('scene1-pheasant');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene1Dialogue');
    fadeInSound('l1a');
  });
  $('#nobility').click(function () {
    fadeInSound('l1c');
    recruit = 'nobles';
    postChoice('scene1-nobility');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene1Dialogue');
  });
});
