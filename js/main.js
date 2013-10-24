function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

jQuery(document).ready(function() {

    // Smooth Scroll

    jQuery('.button.next').each(function(){

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

    // Memorials

    var date_first_kiss = new Date(2005, 10, 22);
    var date_valentines_day = new Date(2006, 02, 14);
    var date_going_out = new Date(2008, 10, 24);
    var today = new Date();

    var since_first_kiss = Math.round((today - date_first_kiss) / (1000 * 60 * 60 * 24));
    var since_first_kiss_comma = numberWithCommas(since_first_kiss);

    var since_going_out = Math.round((today - date_going_out) / (1000 * 60 * 60 * 24));
    var since_going_out_comma = numberWithCommas(since_going_out);

    jQuery('#since-first-kiss').text(since_first_kiss_comma);
    jQuery('#since-going-out').text(since_going_out_comma);

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

    // Answer No Trick

    jQuery('#answer-no').mouseover(function(answer){
        var current_choice = jQuery(this).text();
        if (current_choice == 'No') {
            jQuery('#answer-no').text('Yes');
            jQuery('#answer-yes').text('No');
        }
    });

    jQuery('#answer-yes').mouseover(function(){
        var current_choice = jQuery(this).text();
        if (current_choice == 'No') {
            jQuery('#answer-yes').text('Yes');
            jQuery('#answer-no').text('No');
        }
    });

    jQuery('#answer-yes, #answer-no').click(function(event){
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
        jQuery('#proposal .phase1').hide();
        jQuery('#proposal .phase2').show();
        return false;
    });

    // Translation

    jQuery('.lyric').tooltip();

});
