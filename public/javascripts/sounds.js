(function(){
  var allSounds = {
    l1a: '/audio/L1_a.wav',
    l2a: '/audio/L2_a.wav',
    l3a: '/audio/L3_a.wav',
    l4a: '/audio/L4_a.wav',
    l5a: '/audio/L5_a.wav',
    l6a: '/audio/L6_a.wav',
    l7a: '/audio/L7_a.wav'
  }

  var soundTracking;


  window.loadSounds = function(options){
    soundManager.setup({
      debugMode: false,
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
            onload: handleLoaded,
            loops: 1000
          });
        }
      }
    });
  }
  window.fadeInSound = function(id){
    if(!soundTracking){
      soundTracking = new Date()
    }
    var fadeTime = 2000;
    var sound = soundManager.getSoundById(id);
    var offset = new Date() - soundTracking;


    var position = offset % sound.duration;
//    console.log('Duration', sound.duration, 'Offset', offset, 'New Position', position);

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