$(function () {
  $("#start").click(function () {
    console.log("clicked start button");
    $('#dialogueClicker').addClass('introDialogue');
    speak('intro', 0);

    $("#start").hide();
    //loadScene('scene1');

  });
  $("#credits").click(function () {
    loadScene('credit-screen')
  });

  /*$(".introDialogue").click(function() {
   console.log('Dialogue clicked');
   $('#currentDialogue').fadeTo(0.5, 0);
   $('#currentDialogue').removeClass('introDialogue');
   loadScene('scene1');
   });*/

  $(document).on('click', ".introDialogue", function () {
    console.log('Dialogue clicked');
    endSpeak()
    setTimeout(function () {
      $('#dialogueClicker').removeClass('introDialogue');
    }, 500);
    postChoice('scene1-intro');
    loadScene('scene1');
  });
});
