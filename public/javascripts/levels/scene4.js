$(function(){
  sceneSetup['scene4'] = function(){
      godSpoken = false;
      setTimeout(function(){
          $('#dialogueClicker').addClass('scene4Dialogue');
          $('#currentDialogue').text(story[choice][0].text);
          $('#currentDialogue').fadeTo(0.5, 1);
      }, 1000);
      console.log('scene 4 loaded');
  }

    $(document).on('click', ".scene4Dialogue", function() {
        console.log('Dialogue clicked');
        $('#currentDialogue').fadeTo(0.5, 0);
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                $('#dialogueClicker').removeClass('dialogueTakeover');
                setTimeout(function(){
                    $('#scene4').addClass('godVisible');
                    $('#scene4 .exit').click(function(){
                        $('#scene4').addClass('godHasSpoken').removeClass('godVisible');
                        $('#dialogueClicker').removeClass('scene4Dialogue');
                    })
                }, 1000);
            }
            else {
                $('#dialogueClicker').removeClass('scene4Dialogue');
                postChoice('scene5-intro');
                loadScene('scene5');
            }
        }
        else {
            $('#currentDialogue').text(story[choice][talkStage].text);
            $('#currentDialogue').fadeTo(0.5, 1);
        }
    });

  $("#knights").click(function() {
      scorePoint();
      postChoice('scene4-knights');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene4Dialogue');
      fadeInSound('l4a');
  });

  $("#kites").click(function() {
      postChoice('scene4-kites');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene4Dialogue');
  });
  $("#lights").click(function() {
      postChoice('scene4-lights');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene4Dialogue');
  });
});

