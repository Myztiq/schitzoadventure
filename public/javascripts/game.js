var score = 0;
var scorePoint = function(amount){
  if(!amount){
    amount = 1;
  }
  score += amount;
  console.log(score.toString());
}

var sceneSetup = {}

var loadScene = function(sceneName){
  if(sceneSetup[sceneName]){
    sceneSetup[sceneName]()
  }
  $(".scene.active").removeClass('active');
  $('#'+sceneName).addClass('active');
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
