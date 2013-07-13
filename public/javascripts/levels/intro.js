$(function(){
  $("#start").click(function() {
    /*console.log("clicked start button");
    $('#dialogueClicker').addClass('dialogueTakeover');
    $('#currentDialogue').text(story['intro'][1]);
    $('#currentDialogue').fadeTo(0.5, 1);*/
    loadScene('scene1');
  });

  /*$('.dialogueTakeover').click(function() {
    console.log('Dialogue clicked');
    $('#currentDialogue').fadeTo(0.5, 0);
    loadScene('scene1');
    console.log("STILL IN INTRO YOU FOOL")
  });*/
});
