var loadScene = function(sceneName){
  $(".scene.active").removeClass('active');
  $('#'+sceneName).addClass('active');
}