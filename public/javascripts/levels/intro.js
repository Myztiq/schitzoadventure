$(function(){
  $("#start").click(function() {
    console.log("clicked start button");
    $('#dialogueClicker').addClass('dialogueTakeover');
    $('#dialogueClicker').addClass('introDialogue');
    $('#currentDialogue').text(story['intro'][0].text);
    $('#currentDialogue').fadeTo(0.5, 1);
    $("#start").hide();
    //loadScene('scene1');
  });

  /*$(".introDialogue").click(function() {
    console.log('Dialogue clicked');
    $('#currentDialogue').fadeTo(0.5, 0);
    $('#currentDialogue').removeClass('introDialogue');
    loadScene('scene1');
  });*/

  $(document).on('click', ".introDialogue", function() {
      console.log('Dialogue clicked');
      $('#currentDialogue').fadeTo(0.5, 0);
      $('#dialogueClicker').removeClass('introDialogue');
      postChoice('scene1-intro');
      loadScene('scene1');
  });
});
