jQuery('.button').each(function(){

      jQuery(this).click(function(e){
        var href = jQuery(this).attr('href'),
        offsetTop = href === '#' ? 0 : jQuery(href).offset().top;
        noScroll = true;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        },{
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function() {
                setTimeout(function(){ noScroll = false; }, 10);
            }
        });
        e.preventDefault();
    });

});
