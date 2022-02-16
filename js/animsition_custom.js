$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-top',
    outClass: 'overlay-slide-out-bottom',
    inDuration: 1500,
    outDuration: 1500,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload()
    }
};


function colorHandler(self) {
  const slide = document.querySelector(".animsition-overlay-slide");

  // slide.style.transitionDelay = ".5s";
  slide.style.transitionDuration = "1.5s";

  if(self.id == "color-home"){
    slide.style.backgroundColor = "#FAF7F2";
  }else if(self.id == "color-work"){
    slide.style.backgroundColor = "black";
  }else if(self.id == "color-about"){
    slide.style.backgroundColor = "#FAF7F2";
  }else if(self.id == "color-blog"){
    slide.style.backgroundColor = "#FAF7F2";
  }
}
