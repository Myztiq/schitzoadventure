$(function(){
  sceneSetup['scene7'] = function(){
      godSpoken = false;
      setTimeout(function(){
          $('#dialogueClicker').addClass('scene7Dialogue');
          $('#currentDialogue').text(story[choice][0].text);
          $('#currentDialogue').fadeTo(0.5, 1);
      }, 1000);
      console.log('scene 7 loaded');
  }

    $(document).on('click', ".scene7Dialogue", function() {
        console.log('Dialogue clicked');
        $('#currentDialogue').fadeTo(0.5, 0);
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                $('#dialogueClicker').removeClass('dialogueTakeover');
                setTimeout(function(){
                    $('#scene7').addClass('godVisible');
                    $('#scene7 .exit').click(function(){
                        $('#scene7').addClass('godHasSpoken').removeClass('godVisible');
                        $('#dialogueClicker').removeClass('scene7Dialogue');
                    })
                }, 1000);
            }
            else {
                $('#dialogueClicker').removeClass('scene7Dialogue');
                $('#dialogueClicker').removeClass('dialogueTakeover');
                loadScene('end');
            }
        }
        else {
            $('#currentDialogue').text(story[choice][talkStage].text);
            $('#currentDialogue').fadeTo(0.5, 1);
        }
    });

  $("#ice-cream3").click(function() {
      postChoice('scene7-icecream');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene7Dialogue');
      fadeInSound('l7a');
  });
  $("#education").click(function() {
      scorePoint();
      postChoice('scene7-education');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene7Dialogue');
  });
  $("#take-nap").click(function() {
      postChoice('scene7-nap');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene7Dialogue');
  });
});


