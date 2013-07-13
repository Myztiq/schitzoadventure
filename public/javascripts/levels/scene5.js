$(function(){
  sceneSetup['scene5'] = function(){
      godSpoken = false;
      setTimeout(function(){
        $('#dialogueClicker').addClass('scene5Dialogue');
        speak(choice, talkStage);
      }, 1000);
      console.log('scene 5 loaded');
  }

    $(document).on('click', ".scene5Dialogue", function() {
        console.log('Dialogue clicked');
        endSpeak()
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {

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
          speak(choice, talkStage);
        }
    });

  $("#ice-cream").click(function() {
    fadeInSound('l5c');
      postChoice('scene5-icecream');

      $('#dialogueClicker').addClass('scene5Dialogue');
  });
  $("#flogging").click(function() {
    fadeInSound('l5b');
      postChoice('scene5-flogging');

      $('#dialogueClicker').addClass('scene5Dialogue');
  });
  $("#twilight").click(function() {
    fadeInSound('l5a');
      scorePoint();
      postChoice('scene5-twilight');

      $('#dialogueClicker').addClass('scene5Dialogue');
  });
});

