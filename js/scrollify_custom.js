$(function() {
  $.scrollify({
    section : "section",
  });
});

function scrollifyTop() {
  $.scrollify.move("#featured");
}

// $.scrollify.update() when the accordions open or close.
