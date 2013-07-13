$(function(){
  sceneSetup['scene6'] = function(){
      godSpoken = false;
      setTimeout(function(){
          $('#dialogueClicker').addClass('scene6Dialogue');
        speak(choice, talkStage);
      }, 1000);
      console.log('scene 6 loaded');
  }

    $(document).on('click', ".scene6Dialogue", function() {
        console.log('Dialogue clicked');
        endSpeak()
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {

                setTimeout(function(){
                    $('#scene6').addClass('godVisible');
                    $('#scene6 .exit').click(function(){
                        $('#scene6').addClass('godHasSpoken').removeClass('godVisible');
                        $('#dialogueClicker').removeClass('scene6Dialogue');
                    })
                }, 1000);
            }
            else {
                $('#dialogueClicker').removeClass('scene6Dialogue');
                postChoice('scene7-intro');
                loadScene('scene7');
            }
        }
        else {
          speak(choice, talkStage);
        }
    });

  $("#husbands").click(function() {
    fadeInSound('l6b');
      diplomacy = 'seduction';
      postChoice('scene6-husbands');

      $('#dialogueClicker').addClass('scene6Dialogue');
  });
  $("#trojan-horse").click(function() {
    fadeInSound('l6c');
      diplomacy = 'trojan horse';
      postChoice('scene6-trojan');

      $('#dialogueClicker').addClass('scene6Dialogue');
  });
  $("#ice-cream2").click(function() {
      scorePoint();
      diplomacy = 'ice cream';
      postChoice('scene6-icecream');

      $('#dialogueClicker').addClass('scene6Dialogue');
  });
});

