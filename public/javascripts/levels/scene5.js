$(function(){
  sceneSetup['scene5'] = function(){
      godSpoken = false;
      setTimeout(function(){
          $('#dialogueClicker').addClass('scene5Dialogue');
          $('#currentDialogue').text(story[choice][0].text);
          $('#currentDialogue').fadeTo(0.5, 1);
      }, 1000);
      console.log('scene 5 loaded');
  }

    $(document).on('click', ".scene5Dialogue", function() {
        console.log('Dialogue clicked');
        $('#currentDialogue').fadeTo(0.5, 0);
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                $('#dialogueClicker').removeClass('dialogueTakeover');
                setTimeout(function(){
                    $('#scene5').addClass('godVisible');
                    $('#scene5 .exit').click(function(){
                        $('#scene5').addClass('godHasSpoken').removeClass('godVisible');
                        $('#dialogueClicker').removeClass('scene5Dialogue');
                    })
                }, 1000);
            }
            else {
                $('#dialogueClicker').removeClass('scene5Dialogue');
                postChoice('scene6-intro');
                loadScene('scene6');
            }
        }
        else {
            story[choice][talkStage].text = story[choice][talkStage].text.replace(/[recruited]/g, recruit);
            $('#currentDialogue').text(story[choice][talkStage].text);
            $('#currentDialogue').fadeTo(0.5, 1);
        }
    });

  $("#ice-cream").click(function() {
      postChoice('scene5-icecream');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene5Dialogue');
      fadeInSound('l5a');
  });
  $("#flogging").click(function() {
      postChoice('scene5-flogging');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene5Dialogue');
  });
  $("#twilight").click(function() {
      scorePoint();
      postChoice('scene5-twilight');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene5Dialogue');
  });
});

