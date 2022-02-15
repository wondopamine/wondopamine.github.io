$(function() {
  $.scrollify({
    section : "section",
    overflowScroll: true,
    interstitialSection: ".footer-bar",
    setHeights: true,
  });
});

function scrollifyTop() {
  $.scrollify.move("#featured");
}

$(document).ready(function() {
  $.scrollify.update();
});

$(document).scroll(function () {
   $('section').each(function () {
       if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
           // console.log($(this).attr('id'));
           if($(this).attr('id') == 'panel-2') {
             $('header').css('background-color', '#00581B');
           } else {
             $('header').css('background-color', 'black');
           }
       }
   });
});
