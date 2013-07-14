$(function () {
  $("#credit-screen").click(function () {
    console.log('Load Main Menu!');
    loadScene('main-menu');
  });
  $('#credit-screen a').click(function (e) {
    e.stopPropagation()
  });
});
