var score = 0;
var talkStage = 0;
var maxTalk = 3;
var godSpoken = false;
var choice;
var recruit;
var equip;
var diplomacy;
var attack;

var scorePoint = function (amount) {
  if (!amount) {
    amount = 1;
  }
  score += amount;
  console.log(score.toString());
}

var postChoice = function (branch) {
  talkStage = 0;
  maxTalk = story[branch].length;
  godSpoken = true;
  choice = branch;
  speak(branch, talkStage)
}

var sceneSetup = {}

var loadScene = function (sceneName) {
  if (sceneSetup[sceneName]) {
    sceneSetup[sceneName]()
  }
  $(".scene.active").removeClass('active');
  $('#' + sceneName).addClass('active');
}

var speak = function (choice, talkStage) {
  if(choice.indexOf('intro') == -1){
    playSound('uiChoice');
  }else{
    playSound('uiConfirm');

  }
  console.log('speak', choice, talkStage);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[recruited\]/g, recruit);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[equipment\]/g, equip);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[diplomacy\]/g, diplomacy);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[attack\]/g, attack);
  $('#dialogueClicker').addClass('dialogueTakeover');

  $('#dialogueContainer').addClass('hide');
  setTimeout(function () {
    stopSound('general1');
    stopSound('general2');
    stopSound('general3');
    stopSound('general4');
    stopSound('general5');

    stopSound('joan1');
    stopSound('joan2');
    stopSound('joan3');
    stopSound('joan4');

    $('#dialogueContainer').removeClass('joan general narrator');
    $('#dialogueContainer').addClass(story[choice][talkStage].character);
    if(story[choice][talkStage].character == 'general'){
      playSound('general'+Math.floor((Math.random()*5)+1));
    }else if(story[choice][talkStage].character == 'joan'){
      playSound('joan'+Math.floor((Math.random()*4)+1));
    }
    $('#dialogueContainer').removeClass('hide');

    $('#currentDialogue').text(story[choice][talkStage].text);
  }, 500);
}

var endSpeak = function () {
  stopSound('general1');
  stopSound('general2');
  stopSound('general3');
  stopSound('general4');
  stopSound('general5');

  stopSound('joan1');
  stopSound('joan2');
  stopSound('joan3');
  stopSound('joan4');

  console.log('Endspeak');
  playSound('uiConfirm');
  console.log('END',choice);

  $('#currentDialogue').text('');
  $('#dialogueContainer').addClass('hide');
  $('#dialogueClicker').removeClass('dialogueTakeover');
}

$(function () {
  var useLoader = true;

  if (!useLoader) {
    $('.loading').removeClass('loading');

//    setTimeout(function(){
//      loadScene('scene1');
//    },10);

    return;
  }
  loadSounds({
    progress: function (percent) {
      $('.loaderInner').css('width', percent + '%')
    },
    complete: function () {
      fadeInSound('l1a');
      fadeInSound('l2a');
      fadeInSound('l3a');
      fadeInSound('l4a');
      fadeInSound('l5a');
      fadeInSound('l6a');
      fadeInSound('l7a');

//      fadeInSound('l1b');
//      fadeInSound('l2b');
//      fadeInSound('l3b');
//      fadeInSound('l4b');
//      fadeInSound('l5b');
//      fadeInSound('l6b');
//      fadeInSound('l7b');

//      fadeInSound('l1c');
//      fadeInSound('l2c');
//      fadeInSound('l3c');
//      fadeInSound('l4c');
//      fadeInSound('l5c');
//      fadeInSound('l6c');
//      fadeInSound('l7c');

      $('.scene .choices .choice').mouseenter(function(){
        playSound('uiHover');
      })
      $('.loading').removeClass('loading');
    }
  })
})
