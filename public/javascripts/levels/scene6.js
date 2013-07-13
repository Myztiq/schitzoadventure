$(function(){
  sceneSetup['scene6'] = function(){
      godSpoken = false;
      setTimeout(function(){
          $('#dialogueClicker').addClass('scene6Dialogue');
          $('#currentDialogue').text(story[choice][0].text);
          $('#currentDialogue').fadeTo(0.5, 1);
      }, 1000);
      console.log('scene 6 loaded');
  }

    $(document).on('click', ".scene6Dialogue", function() {
        console.log('Dialogue clicked');
        $('#currentDialogue').fadeTo(0.5, 0);
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                $('#dialogueClicker').removeClass('dialogueTakeover');
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
                story['scene7-intro'][0].text = story['scene7-intro'][0].text.replace(/[diplomacy]/g, diplomacy);
                postChoice('scene7-intro');
                loadScene('scene7');
            }
        }
        else {
            story[choice][talkStage].text = story[choice][talkStage].text.replace(/[recruited]/g, recruit);
            story[choice][talkStage].text = story[choice][talkStage].text.replace(/[equipment]/g, equip);
            $('#currentDialogue').text(story[choice][talkStage].text);
            $('#currentDialogue').fadeTo(0.5, 1);
        }
    });

  $("#husbands").click(function() {
      postChoice('scene6-husbands');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene6Dialogue');
      diplomacy = "seduction";
      fadeInSound('l6a');
  });
  $("#trojan-horse").click(function() {
      postChoice('scene6-trojan');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene6Dialogue');
      diplomacy = "trojan horse"
  });
  $("#ice-cream2").click(function() {
      scorePoint();
      postChoice('scene6-icecream');
      $('#currentDialogue').fadeTo(0.5, 1);
      $('#dialogueClicker').addClass('scene6Dialogue');
      diplomacy = "ice cream";
  });
});

