$(document).ready(function(){
	var $contactForm = $('.contact-form');
	var $contactMessage = $('#contact-message');
	$contactForm.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: '//formspree.io/brody.berson@gmail.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				$contactMessage.append('<div class="alert alert-info alert--loading"><div class="container text-center"><h5>Sending message…</h5></div></div>');
			},
			success: function(data) {
				$contactMessage.find('.alert--loading').hide();
				$contactMessage.append('<div class="alert alert-success"><div class="container text-center"><h5>Message Sent!</h5></div></div>');
			},
			error: function(err) {
				$contactMessage.find('.alert--loading').hide();
				$contactMessage.append('<div class="alert alert-danger"><div class="container text-center"><h5>Ops, there was an error sending the message.</h5></div></div>');
			}
		});
	});

	scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    // initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        // scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}