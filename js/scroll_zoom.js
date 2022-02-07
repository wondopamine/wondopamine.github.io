let lastScrollTop = 0;
let scrollBoosterD = 2;
let scrollBoosterU = 2;

$(window).scroll(function(event) {
  const st = $(this).scrollTop();
  if (st > lastScrollTop) {
    scrollBoosterD = 2;    // scroll down
    scrollBoosterU = 1;
  } else {
    scrollBoosterD = 1;  // scroll up
    scrollBoosterU = 2;
  }
  lastScrollTop = st;

  const scrollTop = $(this).scrollTop();
  const windowHeight = $(this).innerHeight();
  const elementMarginTop = $('.container').offset().top - $('.main-description').innerHeight() - $('header').innerHeight();

  $('.full-screen-sticky').each(function() {
    if($(this).offset().top == $(window).scrollTop()) {
      const elementHeight = $($(this).parent().children('.container')).innerHeight();
      const elementTop = $($(this).parent().children('.container')).offset().top;
      const stickyStart = elementTop - elementMarginTop;

      $(this).css({
        borderWidth: function() {
          let border = scrollBoosterU * (30 - 30 * ((scrollBoosterD * (scrollTop-stickyStart)) / (elementHeight+elementTop-windowHeight-stickyStart)));
          if(border < -1) {border = -1;}
          if(border > 30) {border = 30;}
          console.log(border);
          return border + 'px';
        }
      });

      $(this).children('.project-image').css({
        filter: function() {
          const brightness = 100 - 75 * ((scrollTop-stickyStart) / (elementHeight+elementTop-windowHeight-stickyStart));
          return 'brightness(' + brightness + '%)';
        }
      });
    }
  });
});
