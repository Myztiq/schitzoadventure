$(function () {
  sceneSetup['scene3'] = function () {
    godSpoken = false;
    setTimeout(function () {
      $('#dialogueClicker').addClass('scene3Dialogue');
    }, 1000);
    console.log('scene 3 loaded');
  }

  $(document).on('click', ".scene3Dialogue", function () {
    console.log('Dialogue clicked');
    endSpeak()
    talkStage++;
    if (talkStage >= maxTalk) {
      if (!godSpoken) {
        setTimeout(function () {
          playSound('visionAppear');
          $('#scene3').addClass('godVisible');
          $('#scene3 .exit').click(function () {
            $('#scene3').addClass('godHasSpoken').removeClass('godVisible');
            $('#dialogueClicker').removeClass('scene3Dialogue');
          })
        }, 1000);
      }
      else {
        $('#dialogueClicker').removeClass('scene3Dialogue');
        story['scene4-intro'][0].text = story['scene4-intro'][0].text.replace(/\[recruited\]/g, recruit);
        postChoice('scene4-intro');
        loadScene('scene4');
      }
    }
    else {
      speak(choice, talkStage);
    }
  });

  $("#high-road").click(function () {
    fadeInSound('l3c');
    postChoice('scene3-high');
    $('#dialogueClicker').addClass('scene3Dialogue');
  });

  $("#low-road").click(function () {
    fadeInSound('l3a');
    scorePoint();
    postChoice('scene3-low');
    $('#dialogueClicker').addClass('scene3Dialogue');
  });

  $("#yellowbrick").click(function () {
    fadeInSound('l3b');
    postChoice('scene3-yellow');
    $('#dialogueClicker').addClass('scene3Dialogue');
  });
});
