$(document).ready(function() {
  let lastScrollTop = 0;
  $(window).resize(function() {
    if($(this).width() >= 600) {
      $('.project-section').find('.project-thumbnail').css('border-radius', 30 +'px');
      $('.project-section').find('.scroll-zoom').css('border-width', 4.25 +'em');  /* scroll-zoom-variables */
      $('.project-section').find('.project-title').css('margin-left', 4.25 +'em'); /* scroll-zoom-variables */
    } else {
      $('.project-section').find('.project-thumbnail').css('border-radius', 0 +'px');
      $('.project-section').find('.scroll-zoom').css('border-width', 0 +'em');  /* scroll-zoom-variables */
      $('.project-section').find('.project-title').css('margin-left', 0 +'em'); /* scroll-zoom-variables */
    }
  });
  $(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    $('.project-section').each(function(index, item) {
      const projectTop = $(this).offset().top;
      const projectBottom = projectTop + ($(this).height() * 1/2);
      if (scrollTop > lastScrollTop) {    // SCROLL DOWN
        if(scrollTop > projectTop) {
          $(this).find('.project-thumbnail').css('filter', 'brightness('+ 50 +'%)');
          $(this).find('.project-thumbnail').css('border-radius', 0 +'px');
          $(this).find('.scroll-zoom').css('border-width', 0 +'em');
          $(this).find('.project-title').css('margin-left', 0 +'em');
        }
      } else {                            // SCROLL UP
        if(scrollTop < projectBottom) {
          $(this).find('.project-thumbnail').css('filter', 'brightness('+ 100 +'%)');
          if($(this).width() >= 600) {
            $(this).find('.project-thumbnail').css('border-radius', 30 +'px');
            $(this).find('.scroll-zoom').css('border-width', 4.25 +'em');  /* scroll-zoom-variables */
            $(this).find('.project-title').css('margin-left', 4.25 +'em'); /* scroll-zoom-variables */
          } else {
            $(this).find('.project-thumbnail').css('border-radius', 0 +'px');
            $(this).find('.scroll-zoom').css('border-width', 0 +'em');  /* scroll-zoom-variables */
            $(this).find('.project-title').css('margin-left', 0 +'em'); /* scroll-zoom-variables */
          }
        }
      }
    });
    lastScrollTop = scrollTop;
  });
});
