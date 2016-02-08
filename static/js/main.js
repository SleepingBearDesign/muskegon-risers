var todaysDate = moment().format('MMMM Do');
var currentTime = moment().format('h:mm a');
var yesterdaysDate = moment().subtract(1, 'days').format('MMMM Do');
var tomorrowsDate = moment().add(1, 'days').format('MMMM Do');
var eventsArray = [];

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

    // INSTAGRAM FEED
    if ($('#instafeed').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: 1094447323,
            accessToken: '5751603.1677ed0.ac25029e824d4109bf8e38479a2b820d',
            resolution: 'standard_resolution',
            sortby: 'least-recent',
            limit: 4,
            template: '<div class="col-md-3 col-sm-4"><div class="card-image"><a href="{{link}}"><img src="{{image}}" class="img-rounded img-responsive" /></a></div></div>'
        });
        feed.run();
    }
    // END INSTAGRAM
    // TWITTER FEED
    if (typeof $('#twitterfeed').data("widgetid") !== "undefined") {
        wid = $('#twitterfeed').data("widgetid");
        var twitter = {
          "id": wid,
          "domId": 'twitterfeed',
          "maxTweets": 1,
          "enableLinks": true,
          "showUser": false,
          "showTime": false,
          "showRetweet": false,
          "showInteraction": false,
          "showImages": true
        };
        twitterFetcher.fetch(twitter);
        
    }
    $('.media').addClass("card-image");
    $('#twitterfeed img').addClass("img-rounded img-responsive");
    // END TWITTER

    fbevents();
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


function fbevents() {
    var pageAccessToken = 'CAAHnTHhhurwBAPJQbAuOSm9zCvPePt2h37LZBv8mkgUPZB6vZAQPGICGW4U6Ebis80YLyDQUXS4e3BZCYMhgZCLYPZAROphK0NtjzCN6M67tIWmlfyjHMc01wZA0GweVZCDBzL5LIl19FIgfUd781rpGfJuhVj7LZCvvvpnrJXEXnyZBTGQO1TGheqcnDwEmV5dy9YlHGVtdFMmQZDZD';
    if (typeof $('#facebook').data("pageid") !== "undefined") {
        pid = $('#facebook').data("pageid");
        $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
            FB.init({
              appId: '535790599912124',
              version: 'v2.5'
            });     
            /* make the API call */
            FB.api(
                "/"+ pid +"/events",{
                  access_token : pageAccessToken
                },
                function (response) {
                  if (response && !response.error) {
                    /* handle the result */
                    var eventsData = response.data;
                    

                    // go through each of the sets of data
                    $.each(eventsData, function(i) {
                        //create an array to store the info we need         
                        eventArray = {
                            description: eventsData[i].description,
                            id: eventsData[i].id,
                            name: eventsData[i].name,
                            startTime: eventsData[i].start_time,
                            endTime: eventsData[i].end_time,
                            location: eventsData[i].place.name,
                            city: eventsData[i].place.location.city,
                            state: eventsData[i].place.location.state
                        };
                        // push this array to the global array to access later
                        eventsArray.push(eventArray);
                    });
                  }
                  else {
                    console.log("Facebook Response Error: " + JSON.stringify(response));
                  }
                  // go through each of the arrays in the eventsArray object
                    // var i=0;
                    for (i = 0; i < eventsArray.length; i++) {
                        date = moment(eventsArray[i].startTime).format('MMMM Do');
                        console.log("Event Data: "+eventsArray[i].name);
                        console.log("Event Date: "+date);
                        console.log("Todays date: "+todaysDate);
                        if(date < todaysDate){
                            i--;
                            // store the info we need with the associated HTML
                            date = moment(eventsArray[i].startTime).format('MMMM Do');
                            name = '<h2>' + eventsArray[i].name + '</h2>';
                            time = '<li>' + moment(eventsArray[i].startTime).format('h:mm a') + ' - ' + moment(eventsArray[i].endTime).format('h:mm a') + '</li>';
                            place = '<li>' + eventsArray[i].city + ', ' + eventsArray[i].state + '</li>';
                            description = '<p>' + eventsArray[i].description + '</p>';
                            link = '<a class="selfclear" href="http://www.facebook.com/events/' + eventsArray[i].id + '/" target="_blank">Join the Event</a>';

                            // if the date of the post matches todays date
                            if (date === todaysDate) {
                                date = '<li> Today </li>';
                            }

                            // if the date of the post matches tomorrows date
                            else if (date === tomorrowsDate) {
                                date = '<li> Tomorrow </li>';
                            }

                            // if the date of the post matches yesterdays date
                            else if (date === yesterdaysDate) {
                                date = '<li> Yesterday </li>';
                            }

                            // if the date of the post doens't match yesterday or todays
                            else {
                                date = '<li>' + date + '</li>';
                            }

                            // append the upcoming event html to the UL
                            
                            $('#events').append('<div class="container"><div class="row"><div class="single-event-wrap">' + name + '<ul> ' + date + time + place + '</ul>' + description + link + '</div></div></div>');
                            break;
                        }
                    }
                }
            );
        });
    }
}