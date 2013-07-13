$(function(){
  sceneSetup['scene3'] = function(){
      godSpoken = false;
      setTimeout(function(){
          $('#dialogueClicker').addClass('scene3Dialogue');
          $('#currentDialogue').text(story[choice][0].text);
          $('#currentDialogue').fadeTo(0.5, 1);
      }, 1000);
      console.log('scene 3 loaded');
  }

    $(document).on('click', ".scene3Dialogue", function() {
        console.log('Dialogue clicked');
        $('#currentDialogue').fadeTo(0.5, 0);
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                $('#dialogueClicker').removeClass('dialogueTakeover');
                setTimeout(function(){
                    $('#scene3').addClass('godVisible');
                    $('#scene3 .exit').click(function(){
                        $('#scene3').addClass('godHasSpoken').removeClass('godVisible');
                        $('#dialogueClicker').removeClass('scene3Dialogue');
                    })
                }, 1000);
            }
            else {
                $('#dialogueClicker').removeClass('scene3Dialogue');
                postChoice('scene4-intro');
                loadScene('scene4');
            }
        }
        else {
            $('#currentDialogue').text(story[choice][talkStage].text);
            $('#currentDialogue').fadeTo(0.5, 1);
        }
    });

  $("#high-road").click(function() {
    fadeInSound('l3c');
      postChoice('scene3-high');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene3Dialogue');
  });

  $("#low-road").click(function() {
    fadeInSound('l3a');
      scorePoint();
      postChoice('scene3-low');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene3Dialogue');
  });

  $("#yellowbrick").click(function() {
    fadeInSound('l3b');
      postChoice('scene3-yellow');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene3Dialogue');
  });
});
