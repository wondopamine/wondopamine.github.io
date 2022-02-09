$(document).ready(function() {
  let lastScrollTop = 0;
  const p01Top = $('#p01').offset().top + ($('#p01End').height() - $(window).height()) * 1/3;
  const p02Top = $('#p02').offset().top + ($('#p02End').height() - $(window).height()) * 1/3;
  const p03Top = $('#p03').offset().top + ($('#p03End').height() - $(window).height()) * 1/3;
  const p01Bottom = $('#p01End').offset().top + ($('#p01End').height() - $(window).height()) * 2/3; // container.top + (container.height - window.height) * delay_bumper
  const p02Bottom = $('#p02End').offset().top + ($('#p02End').height() - $(window).height()) * 2/3;
  const p03Bottom = $('#p03End').offset().top + ($('#p03End').height() - $(window).height()) * 2/3;

  $(window).scroll(function(event) {
    const scrollTop = $(this).scrollTop();
    let brightnessVal = 50;
    let borderWidthVal = 0;
    let borderRadiusVal = 0;
    let marginLeftVal = 0;

    if (scrollTop > lastScrollTop) {   // scroll down
      brightnessVal = 50;
      borderWidthVal = 0;
      borderRadiusVal = 0;
      marginLeftVal = 0;
      if(scrollTop >= p01Top) {
        $('#p01').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p01').css('border-width', borderWidthVal);
        $('#p01Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p01End').css('margin-left', marginLeftVal+'px');
      } if(scrollTop >= p02Top) {
        $('#p02').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p02').css('border-width', borderWidthVal);
        $('#p02Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p02End').css('margin-left', marginLeftVal+'px');
      } if(scrollTop >= p03Top) {
        $('#p03').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p03').css('border-width', borderWidthVal);
        $('#p03Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p03End').css('margin-left', marginLeftVal+'px');
      }
    } else {  // scroll up
      brightnessVal = 100;
      borderWidthVal = 64;
      borderRadiusVal = 30;
      marginLeftVal = 64;
      if(scrollTop <= p01Bottom) {
        $('#p01').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p01').css('border-width', borderWidthVal);
        $('#p01Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p01End').css('margin-left', marginLeftVal+'px');
      } if(scrollTop <= p02Bottom) {
        $('#p02').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p02').css('border-width', borderWidthVal);
        $('#p02Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p02End').css('margin-left', marginLeftVal+'px');
      } if(scrollTop <= p03Bottom) {
        $('#p03').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
        $('#p03').css('border-width', borderWidthVal);
        $('#p03Thumbnail').css('border-radius', borderRadiusVal+'px');
        $('#p03End').css('margin-left', marginLeftVal+'px');
      }
    }
    lastScrollTop = scrollTop;

    // if(scrollTop >= p01Top && scrollTop <= p01Bottom) {
    //   $('#p01').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
    //   $('#p01').css('border-width', borderWidthVal);
    // } else if(scrollTop >= p02Top && scrollTop <= p02Bottom) {
    //   $('#p02').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
    //   $('#p02').css('border-width', borderWidthVal);
    // } else if(scrollTop >= p03Top && scrollTop <= p03Bottom) {
    //   $('#p03').children('.home-project-thumbnail').css('filter', 'brightness('+ brightnessVal +'%)');
    //   $('#p03').css('border-width', borderWidthVal);
    // }
  });
});

function toTop() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}
