$(document).ready(function() {
  let lastScrollTop = 0;
  const p01Top = $('.p01').offset().top;
  const p02Top = $('.p02').offset().top;
  const p03Top = $('.p03').offset().top;
  const p01Bottom = $('.p01End').offset().top + ($('.p01End').height() - $(window).height()) / 2; // container.top + (container.height - window.height) / delay_bumper
  const p02Bottom = $('.p02End').offset().top + ($('.p02End').height() - $(window).height()) / 2;
  const p03Bottom = $('.p03End').offset().top + ($('.p03End').height() - $(window).height()) / 2;

  $(window).scroll(function(event) {
    const scrollTop = $(this).scrollTop();
    let brightnessVal = 50;
    let borderWidthVal = 0;

    if (scrollTop > lastScrollTop) {   // scroll down
      brightnessVal = 50;
      borderWidthVal = 0;
      if(scrollTop >= p01Top) {
        $('.p01').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
        $('.p01').css('border-width', borderWidthVal);
      } if(scrollTop >= p02Top) {
        $('.p02').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
        $('.p02').css('border-width', borderWidthVal);
      } if(scrollTop >= p03Top) {
        $('.p03').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
        $('.p03').css('border-width', borderWidthVal);
      }
    } else {  // scroll up
      brightnessVal = 100;
      borderWidthVal = 50;
      if(scrollTop <= p01Bottom) {
        $('.p01').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
        $('.p01').css('border-width', borderWidthVal);
      } if(scrollTop <= p02Bottom) {
        $('.p02').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
        $('.p02').css('border-width', borderWidthVal);
      } if(scrollTop <= p03Bottom) {
        $('.p03').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
        $('.p03').css('border-width', borderWidthVal);
      }
    }
    lastScrollTop = scrollTop;

    // if(scrollTop >= p01Top && scrollTop <= p01Bottom) {
    //   $('.p01').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
    //   $('.p01').css('border-width', borderWidthVal);
    // } else if(scrollTop >= p02Top && scrollTop <= p02Bottom) {
    //   $('.p02').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
    //   $('.p02').css('border-width', borderWidthVal);
    // } else if(scrollTop >= p03Top && scrollTop <= p03Bottom) {
    //   $('.p03').children('.project-image').css('filter', 'brightness('+ brightnessVal +'%)');
    //   $('.p03').css('border-width', borderWidthVal);
    // }
  });
});

function toTop() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}
