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

$(function(){
  var useLoader = false;

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
//      fadeInSound('one',0,1000);
//      fadeInSound('two',1000,1000);
//      fadeInSound('three',2000,1000);
    }
  })
})