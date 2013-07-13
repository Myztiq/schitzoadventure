(function(){
  var allSounds = {
    one: '/audio/buildUp.ogg',
    two: '/audio/loopDark.ogg',
    three: '/audio/loopLight.ogg'
  }


  window.loadSounds = function(options){

    soundManager.setup({
      url: '/swf',
      flashVersion: 9, // optional: shiny features (default = 8)
      onready: function() {
        var keys = Object.keys(allSounds);
        var counter = keys.length;
        var handleLoaded = function(){
          counter--;
          options.progress((keys.length-counter)/keys.length * 100);
          if(counter == 0){
            options.complete();
          }
        }

        for(var i=0;i<keys.length;i++){
          var key = keys[i]
          var url = allSounds[key];
          soundManager.createSound({
            id: key,
            url: url,
            autoLoad: true,
            onload: handleLoaded
          });
        }
      }
    });
  }

  window.fadeInSound = function(id, position, fadeTime){
    var sound = soundManager.getSoundById(id);
    sound.setPosition(position);
    sound.setVolume(0);
    sound.play();
    var timer = new Date();

    var handleFade = function(){
      var x = setTimeout(function(){
        clearTimeout(x);
        var duration = new Date()-timer;
        var currentStat = Math.floor(duration/fadeTime*100);
        if(currentStat < 200){
          if(currentStat > 100){
            currentStat = 100;
            sound.setVolume(currentStat);
            return;
          }
          sound.setVolume(currentStat);
          handleFade();
        }
      },10)
    }
    handleFade()
  }

})()