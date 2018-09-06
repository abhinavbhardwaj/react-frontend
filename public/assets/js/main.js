// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

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




	/* ==============================================
  	Geo Location
  	=============================================== */ 
	
	showPosition()
    function showPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
                document.getElementById("result").innerHTML = positionInfo;
            });
        } else{
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    }
	
	
	/*----- scroll to top -----*/		
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.scrollertop').fadeIn(100);
		} else {
			$('.scrollertop').fadeOut(1700);
		}
	});
		//Click event to scroll to top
	$('.scrollertop').on( "click", function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	
	
	
	
	
	/* ==============================================
  	Rating
  	=============================================== */ 
	var $star_rating = $('.star-rating .fa');

	var SetRatingStar = function() {
	  return $star_rating.each(function() {
		if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
		  return $(this).removeClass('fa-star-o').addClass('fa-star');
		} else {
		  return $(this).removeClass('fa-star').addClass('fa-star-o');
		}
	  });
	};
	
	$star_rating.on('click', function() {
	  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
	  return SetRatingStar();
	});
	
	SetRatingStar();
	$(document).ready(function() {
	
	});

/*----- Add Location -----*/		
	$(document).ready(function () {
            var palletsHtml = "<td><input  name='itemName" + i + "' type='text' class='form-control'></td><td><input  name='description" + i + "' type='text' class='form-control'></td><td><input  name='price" + i + "' type='text' class='form-control'></td><td><input type='radio' name='type' value='Veg' checked> Veg <input type='radio' name='type' value='Non-Veg'> Non-Veg</td><td align='left' valign='middle'><a class='delete_truck_row'><i class='fa fa-minus-circle fa-2x'></i> </a></td>"
            var i = 1;
            $(".add_location_row").click(function () {
                $('#addlocation' + i).html(palletsHtml);
                $('#tab_logic1').append('<tr id="addlocation' + (i + 1) + '"></tr>');
                i++;
                $(".delete_truck_row").click(function () {
                    $(this).closest('tr').remove();
                    i--;
                });
            });

        });
    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 900;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	
/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cab a').click(function() {
            $('.cab .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	/*====================================
    Checkout Tabs
    ======================================*/
	
	$(function(){
$('a[title]').tooltip();
});


  	
/*====================================
    Qty Count
    ======================================*/
    $('button').click(function(e){
        var button_classes, value = +$('.counter').val();
        button_classes = $(e.currentTarget).prop('class');        
        if(button_classes.indexOf('up_count') !== -1){
            value = (value) + 1;            
        } else {
            value = (value) - 1;            
        }
        value = value < 0 ? 0 : value;
        $('.counter').val(value);
    });  
    $('.counter').click(function(){
        $(this).focus().select();
    });


}());


}
main();