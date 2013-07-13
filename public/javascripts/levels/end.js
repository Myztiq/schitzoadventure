$(function(){
  sceneSetup['end'] = function(){
    console.log('Setup Score!');
    if (score > 5) {
      $("#endResult").text(story['end-success'][0].text);
    } else {
      $("#endResult").text(story['end-failure'][0].text);
    }
    $("#score").text(score);
    $("#endNote").html('<p id="endNote">' + story['end-notes'][0].text + '</p>');
  }
})