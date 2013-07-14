$(function () {
  sceneSetup['scene2'] = function () {
    godSpoken = false;
    setTimeout(function () {
      $('#dialogueClicker').addClass('scene2Dialogue');
    }, 1000);
    console.log('scene 2 loaded');
  }

  $(document).on('click', ".scene2Dialogue", function () {
    console.log('Dialogue clicked');
    endSpeak()
    talkStage++;
    if (talkStage >= maxTalk) {
      if (!godSpoken) {
        setTimeout(function () {
          playSound('visionAppear')
          $('#scene2').addClass('godVisible');
          $('#scene2 .exit').click(function () {
            $('#scene2').addClass('godHasSpoken').removeClass('godVisible');
            $('#dialogueClicker').removeClass('scene2Dialogue');
          })
        }, 1000);
      }
      else {
        $('#dialogueClicker').removeClass('scene2Dialogue');
        postChoice('scene3-intro');
        loadScene('scene3');
      }
    }
    else {
      speak(choice, talkStage);
    }
  });

  $("#french-maid").click(function () {
    fadeInSound('l2a');
    scorePoint();
    equip = 'french maid outfits';
    postChoice('scene2-maid');
    $('#dialogueClicker').addClass('scene2Dialogue');
  });
  $("#tank-top").click(function () {
    fadeInSound('l2c');
    equip = 'tank tops and booty shorts';
    postChoice('scene2-tank');
    $('#dialogueClicker').addClass('scene2Dialogue');
  });
  $("#plate-armor").click(function () {
    fadeInSound('l2b');
    equip = 'plate armor';
    postChoice('scene2-plate');
    $('#dialogueClicker').addClass('scene2Dialogue');
  });
});
