(function() {
  var Q;

  Q = window.Q = Quintus({
    audioSupported: ['mp3', 'ogg']
  }).include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, Audio").enableSound();

  document.addEventListener('DOMContentLoaded', function() {
    Q.setup({
      maximize: true
    }).touch(Q.SPRITE_ALL);;
    return Q.stageScene("intro");
  });

}).call(this);
