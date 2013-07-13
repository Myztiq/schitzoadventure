var score = 0;
var scorePoint = function(amount){
  if(!amount){
    amount = 1;
  }
  score += amount;
}

var sceneSetup = {}

var loadScene = function(sceneName){
  if(sceneSetup[sceneName]){
    sceneSetup[sceneName]()
  }
  $(".scene.active").removeClass('active');
  $('#'+sceneName).addClass('active');
}