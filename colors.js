function colorHandler(self) {
  const slide = document.querySelector(".animsition-overlay-slide");

  // slide.style.transitionDelay = ".5s";
  slide.style.transitionDuration = "2s";

  if(self.id == "color-home"){
    slide.style.backgroundColor = "white";
  }else if(self.id == "color-design"){
    slide.style.backgroundColor = "#f0c8b6";
  }else if(self.id == "color-about"){
    slide.style.backgroundColor = "#cbb0ab";
  }else if(self.id == "color-blog"){
    slide.style.backgroundColor = "#817f95";
  }else if(self.id == "color-sayhello"){
    slide.style.backgroundColor = "#5c678a";
  }
}
