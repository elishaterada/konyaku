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

    // Answer No Trick

    jQuery('#answer-no').mouseover(function(){
        var current_choice = jQuery(this).text();
        if (current_choice = 'No') {
            jQuery(this).text('Yes');
            jQuery('#answer-yes').text('No');
        } else {
            jQuery(this).text('No');
            jQuery('#answer-yes').text('Yes');
        }
    });

    jQuery('#answer-yes').mouseover(function(){
        var current_choice = jQuery(this).text();
        if (current_choice = 'No') {
            jQuery(this).text('Yes');
            jQuery('#answer-no').text('No');
        } else {
            jQuery(this).text('No');
            jQuery('#answer-no').text('Yes');
        }
    });

    // RoyalSlider

    jQuery('#travel-slider').royalSlider({
        autoPlay: {
            // autoplay options go gere
            enabled: true,
            pauseOnHover: true
        },
        arrowsNav: true,
        arrowsNavAutoHide: false,
        fadeinLoadedSlide: true,
        controlNavigation: 'none',
        imageScaleMode: 'fill',
        imageAlignCenter: true,
        loop: false,
        loopRewind: false,
        numImagesToPreload: 4,
        slidesOrientation: 'vertical',
        keyboardNavEnabled: true,
        /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
        imgWidth: 545,
        imgHeight: 545
    });

});
