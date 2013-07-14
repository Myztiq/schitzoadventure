(function () {

  var allSounds = {
    'amb1': '/audio/amb1.ogg',
    'amb2': '/audio/amb2.ogg',
    'amb3': '/audio/amb3.ogg',
    'amb4': '/audio/amb4.ogg',
    'visionAppear': '/audio/vision_appear.ogg',
    'visionConfirm': '/audio/vision_confirm.ogg',
    'uiChoice': '/audio/ui_choice.ogg',
    'uiConfirm': '/audio/ui_confirm.ogg',
    'uiHover': '/audio/ui_hover.ogg',
    'general1': '/audio/general_1.ogg',
    'general2': '/audio/general_2.ogg',
    'general3': '/audio/general_3.ogg',
    'general4': '/audio/general_4.ogg',
    'general5': '/audio/general_5.ogg'
  }

  for (var i = 1; i <= 7; i++) {
    allSounds['l' + i + 'a'] = '/audio/L' + i + '_a.wav'
    allSounds['l' + i + 'b'] = '/audio/L' + i + '_b.wav'
    allSounds['l' + i + 'c'] = '/audio/L' + i + '_c.wav'
  }

  var levels = {
    'l1a': 1
  }

  var soundTimers = {}

  var soundTracking;

  window.loadSounds = function (options) {
    soundManager.setup({
      debugMode: false,
      url: '/swf',
      flashVersion: 9, // optional: shiny features (default = 8)
      onready: function () {
        var keys = Object.keys(allSounds);
        var counter = keys.length;
        var handleLoaded = function () {
          counter--;
          options.progress((keys.length - counter) / keys.length * 100);
          if (counter == 0) {
            options.complete();
            soundManager.getSoundById('amb1').play();
            soundManager.getSoundById('amb2').play();
            soundManager.getSoundById('amb3').play();
            soundManager.getSoundById('amb4').play();
          }
        }

        for (var i = 0; i < keys.length; i++) {
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

  window.playSound = function (id) {
    console.log('Playind sound: ',id);
    var sound = soundManager.getSoundById(id);
    sound.setVolume(100);
    if(sound.playState != 1){
      soundTimers[id] = new Date()-30;
    }
    if((new Date()-soundTimers[id]) > 20){
      sound.play({loops: 1});
      soundTimers[id] = new Date();
    }
  }

  window.stopSound = function(id){
    var sound = soundManager.getSoundById(id);
    sound.stop();
  }

  window.fadeOutSound = function(id){
    var sound = soundManager.getSoundById(id);

    var startVolume = sound.volume;
    console.log(startVolume);

    var steps = 100;
    var step = 0;
    var handleFade = function () {
      var x = setTimeout(function () {
        step++;
        clearTimeout(x);
        var newVolume = startVolume * ((steps-step)/steps);
        sound.setVolume(newVolume);
        if(newVolume < 0){
          sound.stop();
        }else{
          handleFade()
        }
      }, 10)
    }
    handleFade()

  }

  window.fadeInSound = function (id) {
    if (!soundTracking) {
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

    var targetLevel = 1;
    if (levels[id]) {
      targetLevel = levels[id];
    }


    var timer = new Date();

    var handleFade = function () {
      var x = setTimeout(function () {
        clearTimeout(x);
        var duration = new Date() - timer;
        var currentStat = Math.floor(duration / fadeTime * 100) * targetLevel;
        if (currentStat < 200) {
          if (currentStat > 100) {
            currentStat = 100;
            sound.setVolume(currentStat);
            return;
          }
          sound.setVolume(currentStat);
          handleFade();
        }
      }, 10)
    }
    handleFade()
  }

})()