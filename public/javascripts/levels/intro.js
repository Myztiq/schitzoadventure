Q.scene('intro', function(stage) {
  stage.insert(new Q.Repeater({
    asset: "background-wall.png",
    speedX: 0.5,
    speedY: 0.5
  }));
  stage.insert(new Q.UI.Button({
    label: 'Play Game!',
    y: 150,
    x: Q.width / 2,
    border: 2,
    fill: 'white'
  }, function() {
    console.log('yay?');
    Q.stageScene('level1');
  }));
});
