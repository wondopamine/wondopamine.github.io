$(document).scroll(function () {
   $('section').each(function () {
       if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
           // console.log($(this).attr('id'));
           if($(this).attr('id') == 'panel-2') {
             $('header').css('background-color', '#F4C900');
             $('header a').css('color', 'black');
           } else {
             $('header').css('background-color', 'black');
             $('header a').css('color', '#FAF7F2');
           }
       }
   });
});
