jQuery('.button').each(function(){

    // Smooth Scroll

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

    // RoyalSlider

    jQuery('#travel-slider').royalSlider({
        arrowsNav: true,
        arrowsNavAutoHide: false,
        fadeinLoadedSlide: true,
        controlNavigation: 'none',
        imageScaleMode: 'fill',
        imageAlignCenter:true,
        loop: false,
        loopRewind: false,
        numImagesToPreload: 4,
        slidesOrientation: 'vertical',
        keyboardNavEnabled: true,
        video: {
            autoHideArrows:true,
            autoHideControlNav:true
        },
        /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
        imgWidth: '100%',
        imgHeight: 360
    });

});
