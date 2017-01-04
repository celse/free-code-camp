lat = 45.693161;
lng = 9.671575;

function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
            $(".navbar-collapse").collapse('hide');
        }
    });
	

  	//  ============================
    //  = Google MAP  =
    //  ===========================

    //var lat = 28.65850;
    //var lng =   77.20341;

    function initMap() {
        var location = new google.maps.LatLng(lat, lng);
        var mapCanvas = document.getElementById('contact_maps')
        var mapOptions = {
            center: location,
            zoom: 17,
            panControl: false,
            scrollwheel: false,
            mapTypeControl:false,
            streetViewControl:false,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'marker.png';
        
        var marker = new google.maps.Marker({
            position: location,
            map : map,
            icom : markerImage   
         });
        /*marker.addDomListener('click', function(){
            infowindow.open(map, marker);
        });*/
    }

    google.maps.event.addDomListener(window, 'load', initMap);




    //  ============================
    //  = Scroll event function =
    //  ===========================
    var goScrolling = function(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

        
	//  =======================
    //  = Progress bars =
    //  =======================
    $('.progress_skill .bar').data('width', $(this).width()).css({
        width : 0,
        height:0
    });
    $(window).scroll(function() {
        $('.progress_skill .bar').each(function() {
            if (goScrolling($(this))) {
                $(this).css({
                    width : $(this).attr('data-value') + '%',
                    height : $(this).attr('data-height') + '%'
                });
            }
        });
    });
    // Nivo Lightbox 
    /*
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
*/
}());


}
main();