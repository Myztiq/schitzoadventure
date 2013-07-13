$(function(){
  sceneSetup['scene2'] = function(){
    godSpoken = false;
    setTimeout(function(){
        $('#dialogueClicker').addClass('scene2Dialogue');
        $('#currentDialogue').text(story[choice][0].text);
        $('#currentDialogue').fadeTo(0.5, 1);
    }, 1000);
    console.log('scene 2 loaded');
  }

    $(document).on('click', ".scene2Dialogue", function() {
        console.log('Dialogue clicked');
        $('#currentDialogue').fadeTo(0.5, 0);
        talkStage++;
        if (talkStage >= maxTalk) {
            if (!godSpoken) {
                $('#dialogueClicker').removeClass('dialogueTakeover');
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
                story['scene3-intro'][0].text = story['scene3-intro'][0].text.replace(/[recruited]/g, recruit);
                story['scene3-intro'][0].text = story['scene3-intro'][0].text.replace(/[equipment]/g, equip);
                postChoice('scene3-intro');
                loadScene('scene3');
            }
        }
        else {
            story[choice][talkStage].text = story[choice][talkStage].text.replace(/[recruited]/g, recruit);
            $('#currentDialogue').text(story[choice][talkStage].text);
            $('#currentDialogue').fadeTo(0.5, 1);
        }
    });

  $("#french-maid").click(function() {
    fadeInSound('l2a');
    scorePoint();
    postChoice('scene2-maid');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene2Dialogue');
    equip = "french maid outfits";
  });
  $("#tank-top").click(function() {
    postChoice('scene2-tank');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene2Dialogue');
    equip = "tank tops and booty shorts"
  });
  $("#plate-armor").click(function() {
    postChoice('scene2-plate');
    $('#currentDialogue').fadeTo(0.5, 1);
    $('#dialogueClicker').addClass('scene2Dialogue');
    equip = "plate armor"
  });
});
