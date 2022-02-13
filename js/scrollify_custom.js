$(function() {
  $.scrollify({
    section : "section",
    overflowScroll: true
  });
});

function scrollifyTop() {
  $.scrollify.move("#featured");
}

// $.scrollify.update() when the accordions open or close.

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
