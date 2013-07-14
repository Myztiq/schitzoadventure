$(function () {
  sceneSetup['scene7'] = function () {
    godSpoken = false;
    setTimeout(function () {
      $('#dialogueClicker').addClass('scene7Dialogue');
    }, 1000);
    console.log('scene 7 loaded');
  }

  $(document).on('click', ".scene7Dialogue", function () {
    console.log('Dialogue clicked');
    endSpeak()
    talkStage++;
    if (talkStage >= maxTalk) {
      if (!godSpoken) {
        setTimeout(function () {
          playSound('visionAppear');
          $('#scene7').addClass('godVisible');
          $('#scene7 .exit').click(function () {
            playSound('visionConfirm');
            $('#scene7').addClass('godHasSpoken').removeClass('godVisible');
            $('#dialogueClicker').removeClass('scene7Dialogue');
          })
        }, 1000);
      }
      else {
        $('#dialogueClicker').removeClass('scene7Dialogue');
        loadScene('end');
      }
    }
    else {
      speak(choice, talkStage);
    }
  });

  $("#ice-cream3").click(function () {
    fadeInSound('l7b');
    attack = 'ice cream';
    postChoice('scene7-icecream');

    $('#dialogueClicker').addClass('scene7Dialogue');
  });
  $("#education").click(function () {
    fadeInSound('l7a');
    scorePoint();
    attack = 'educational';
    postChoice('scene7-education');

    $('#dialogueClicker').addClass('scene7Dialogue');
  });
  $("#take-nap").click(function () {
    fadeInSound('l7c');
    attack = 'naptime';
    postChoice('scene7-nap');

    $('#dialogueClicker').addClass('scene7Dialogue');
  });
});
