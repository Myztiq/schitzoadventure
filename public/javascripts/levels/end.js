$(function () {
  sceneSetup['end'] = function () {
    console.log('Setup Score!');
    $('#end').removeClass('win lose');
    if (score > 5) {
      $('#end').addClass('win');
      story['end-success'][0].text = story['end-success'][0].text.replace(/\[recruited\]/g, recruit);
      story['end-success'][0].text = story['end-success'][0].text.replace(/\[equipment\]/g, equip);
      story['end-success'][0].text = story['end-success'][0].text.replace(/\[attack\]/g, attack);
      $("#endResult").text(story['end-success'][0].text);
    }
    else {
      $('#end').addClass('lose');
      story['end-failure'][0].text = story['end-failure'][0].text.replace(/\[recruited\]/g, recruit);
      story['end-failure'][0].text = story['end-failure'][0].text.replace(/\[equipment\]/g, equip);
      story['end-failure'][0].text = story['end-failure'][0].text.replace(/\[attack\]/g, attack);
      $("#endResult").text(story['end-failure'][0].text);
    }
    $("#score").text("Final Score: " + score);
    $("#endNote").html('<p id="endNote">' + story['end-notes'][0].text + '</p>');
  }

    $("#restart").click(function () {
      location.reload();
    });
    $("#end-credits").click(function () {
        loadScene('credit-screen')
    });
})