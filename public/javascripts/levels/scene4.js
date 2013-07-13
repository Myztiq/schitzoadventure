$(function(){
  sceneSetup['scene4'] = function(){
      godSpoken = false;
      $('#dialogueClicker').addClass('scene4Dialogue');
      speak(choice, talkStage);
      console.log('scene 4 loaded');
  }

    $(document).on('click', ".scene4Dialogue", function() {
        console.log('Dialogue clicked');
        endSpeak()
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {

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
                story['scene5-intro'][0].text = story['scene5-intro'][0].text.replace(/[recruited]/g, recruit);
                postChoice('scene5-intro');
                loadScene('scene5');
            }
        }
        else {
          speak(choice, talkStage);
        }
    });

  $("#knights").click(function() {
    fadeInSound('l4a');
      scorePoint();
      postChoice('scene4-knights');
      $('#dialogueClicker').addClass('scene4Dialogue');
  });

  $("#kites").click(function() {
    fadeInSound('l4b');
      postChoice('scene4-kites');
      $('#dialogueClicker').addClass('scene4Dialogue');
  });
  $("#lights").click(function() {
    fadeInSound('l4c');
      postChoice('scene4-lights');
      $('#dialogueClicker').addClass('scene4Dialogue');
  });
});

