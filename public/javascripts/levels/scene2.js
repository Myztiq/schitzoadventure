$(function(){
  sceneSetup['scene2'] = function(){
    godSpoken = false;
    setTimeout(function(){
        $('#dialogueClicker').addClass('scene2Dialogue');
        speak(choice, talkStage);
    }, 1000);
    console.log('scene 2 loaded');
  }

    $(document).on('click', ".scene2Dialogue", function() {
        console.log('Dialogue clicked');
        endSpeak()
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                setTimeout(function(){
                    $('#scene2').addClass('godVisible');
                    $('#scene2 .exit').click(function(){
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

  $("#french-maid").click(function() {
    fadeInSound('l2a');
    scorePoint();
    postChoice('scene2-maid');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene2Dialogue');
  });
  $("#tank-top").click(function() {
    fadeInSound('l2c');
    postChoice('scene2-tank');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene2Dialogue');
  });
  $("#plate-armor").click(function() {
    fadeInSound('l2b');
    postChoice('scene2-plate');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene2Dialogue');
  });
});
