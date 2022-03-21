$(document).ready(function() {
    $(window).scroll(function() {
			
        $('.image-animation').each(function(i) {
            let top_of_element = $(this).offset().top;
            let bottom_of_element = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > top_of_element) {
                $(this).css('opacity', (bottom_of_window-top_of_element)/(bottom_of_element-top_of_element));
            }
        }); 
    });
});