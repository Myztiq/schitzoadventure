var score = 0;
var talkStage = 0;
var maxTalk = 3;
var godSpoken = false;
var choice;
var recruit;
var equip;
var diplomacy;
var attack;

var scorePoint = function(amount){
  if(!amount){
    amount = 1;
  }
  score += amount;
  console.log(score.toString());
}

var postChoice = function(branch) {
    talkStage = 0;
    maxTalk = story[branch].length;
    godSpoken = true;
    choice = branch;
    speak(branch, talkStage)
}

var sceneSetup = {}

var loadScene = function(sceneName){
  if(sceneSetup[sceneName]){
    sceneSetup[sceneName]()
  }
  $(".scene.active").removeClass('active');
  $('#'+sceneName).addClass('active');
}

var speak = function(choice, talkStage){
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[recruited\]/g, recruit);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[equipment\]/g, equip);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[diplomacy\]/g, diplomacy);
  story[choice][talkStage].text = story[choice][talkStage].text.replace(/\[attack\]/g, attack);
  $('#dialogueClicker').addClass('dialogueTakeover');
  $('#currentDialogue').text(story[choice][talkStage].text);
  $('#currentDialogue').fadeTo(0.5, 1);
}

var endSpeak = function(){
  $('#currentDialogue').fadeTo(0.5, 0);
  $('#dialogueClicker').removeClass('dialogueTakeover');
}

$(function(){
  var useLoader = true;

  if(!useLoader){
    $('.loading').removeClass('loading');

//    setTimeout(function(){
//      loadScene('scene1');
//    },10);

    return;
  }
  loadSounds({
    progress: function(percent){
      $('.loaderInner').css('width',percent+'%')
    },
    complete: function(){
      $('.loading').removeClass('loading');
    }
  })
})
