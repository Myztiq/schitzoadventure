(function () {

  var allSounds = {
    'amb1': 'https://s3.amazonaws.com/joansadventure/amb1.ogg',
    'amb2': 'https://s3.amazonaws.com/joansadventure/amb2.ogg',
    'amb3': 'https://s3.amazonaws.com/joansadventure/amb3.ogg',
    'amb4': 'https://s3.amazonaws.com/joansadventure/amb4.ogg',
    'visionAppear': 'https://s3.amazonaws.com/joansadventure/vision_appear.ogg',
    'visionConfirm': 'https://s3.amazonaws.com/joansadventure/vision_confirm.ogg',
    'uiChoice': 'https://s3.amazonaws.com/joansadventure/ui_choice.ogg',
    'uiConfirm': 'https://s3.amazonaws.com/joansadventure/ui_confirm.ogg',
    'uiHover': 'https://s3.amazonaws.com/joansadventure/ui_hover.ogg',
    'general1': 'https://s3.amazonaws.com/joansadventure/general_1.ogg',
    'general2': 'https://s3.amazonaws.com/joansadventure/general_2.ogg',
    'general3': 'https://s3.amazonaws.com/joansadventure/general_3.ogg',
    'general4': 'https://s3.amazonaws.com/joansadventure/general_4.ogg',
    'general5': 'https://s3.amazonaws.com/joansadventure/general_5.ogg',
    'joan1': 'https://s3.amazonaws.com/joansadventure/joan_1.ogg',
    'joan2': 'https://s3.amazonaws.com/joansadventure/joan_2.ogg',
    'joan3': 'https://s3.amazonaws.com/joansadventure/joan_3.ogg',
    'joan4': 'https://s3.amazonaws.com/joansadventure/joan_4.ogg'
  }

  for (var i = 1; i <= 7; i++) {
    allSounds['l' + i + 'a'] = 'https://s3.amazonaws.com/joansadventure/L' + i + '_a.wav'
    allSounds['l' + i + 'b'] = 'https://s3.amazonaws.com/joansadventure/L' + i + '_b.wav'
    allSounds['l' + i + 'c'] = 'https://s3.amazonaws.com/joansadventure/L' + i + '_c.wav'
  }

  var levels = {
    'l1b': 40,
    'l2b': 40,
    'l3b': 40,
    'l4b': 40,
    'l5b': 40,
    'l6b': 40,
    'l7b': 40,
    'amb1': 80,
    'amb2': 80,
    'amb3': 80,
    'amb4': 80
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
            soundManager.getSoundById('amb1').setVolume(levels['amb1']).play({loops: 1000});
            soundManager.getSoundById('amb2').setVolume(levels['amb2']).play({loops: 1000});
            soundManager.getSoundById('amb3').setVolume(levels['amb3']).play({loops: 1000});
            soundManager.getSoundById('amb4').setVolume(levels['amb4']).play({loops: 1000});
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
            loops: 1
          });
        }
      }
    });
  }

  window.playSound = function (id) {
    console.log('Playind sound: ',id);
    var sound = soundManager.getSoundById(id);
    var volume = 100;
    if(levels[id]){
      volume = levels[id];
    }

    console.log(sound);
    sound.setVolume(volume);
    if(sound.playState != 1){
      soundTimers[id] = new Date()-30;
    }
    if((new Date()-soundTimers[id]) > 20){
      sound.setPosition(0);
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
    sound.play({loops: 1000});

    var targetLevel = .5;
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