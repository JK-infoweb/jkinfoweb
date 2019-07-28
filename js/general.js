var $ = jQuery.noConflict();
    
//if ($('.business-cantent').is(':visible')) {
//    $('.click-btn').click(function () {
//        $('#mfp-hide').show();
//    });
//} 
////else {
////    $('.popup-text .mfp-close').click(function () {
////        $('#mfp-hide').hide();
////    });
////};
//
//function myFunction() {
//    document.getElementById("mfp-hide").style.display = "none";
//}

//$(document).keydown(function(event){
//    if(event.keyCode==123){
//        return false;
//    }
//    else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
//             return false;
//    }
//});
//$(document).on("contextmenu",function(e){        
//   e.preventDefault();
//});
//document.onkeydown = function(e) {
//        if (e.ctrlKey && 
//            (e.keyCode === 85 )) {
//            return false;
//        }
//};

/*---------------------------------------------*/
/*     * tab js                                */
/*---------------------------------------------*/
$(window).load(function () {
    $('#work-images').mixItUp();
});

/*---------------------------------------------*/
/*     * preloader js                          */
/*---------------------------------------------*/
    $(document).ready(function(){
		$(".loaded").delay(2000).fadeOut();
		$(".preloader").delay(2000).fadeOut("slow");
	});


/*---------------------------------------------*/
/*     * Menu js                               */
/*---------------------------------------------*/
	$(document).ready(function(){
        $('.enumenu_ul').responsiveMenu({
            'menuIcon_text': '',
            menuslide_overlap: true,
            menuslide_direction: 'left',
            onMenuopen: function() {}
        });
        $('.enumenu_ul a').click(function(){
            $('body').removeClass('menu-open');
            $('.menu-icon').removeClass('active');
        });

        
    });
    $(".enumenu_ul a").on("mouseenter", function () {
        $('.enumenu_ul').addClass('hover');
    }).mouseleave(function () {
        $('.enumenu_ul').removeClass('hover');
    });
/*---------------------------------------------*/
/*     * Header sticky js                        */
/*---------------------------------------------*/

$(document).ready(function(){
	var stickyNavTop = $('#header').height()
//	console.log(stickyNavTop);
	var stickyNav = function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('#header').addClass('sticky');
		} else {
			$('#header').removeClass('sticky');
		}
	};

	stickyNav();

	$(window).scroll(function () {
		stickyNav();
	});
});


/*---------------------------------------------*/
/*     * Back to Top js                        */
/*---------------------------------------------*/
$(document).ready(function(){
    $(".mouse").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top - $(".header").outerHeight(true)
        }, 2500, function(){
            if ($(this).scrollTop() != $("#about").offset().top) {
                console.log("false");
                $('html, body').animate({
                    scrollTop: $("#about").offset().top - $(".header.sticky").outerHeight()
                }, 500);
            } else {
                console.log("true");
            }
        });
    });
});

/*---------------------------------------------*/
/*       * active class add js                 */
/*---------------------------------------------*/
(function () {
  'use strict'

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.head.appendChild(msViewportStyle)
  }

}())

/*---------------------------------------------*/
/*     * products-slider                       */
/*---------------------------------------------*/
$(document).ready(function(){
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: false,
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
    });
});
/*---------------------------------------------*/
/*     * worklist popup js                     */
/*---------------------------------------------*/
    $(document).ready(function(){   
        "use strict";

        $(".worklist-wrap li figure").click(function () {
//            var $src = $(this).attr("src");
            var imgLink = $(this).children('img').attr('src');
            $(".mask").fadeIn();
            $(".img-show img").attr("src", imgLink);
            $("body").addClass('overflow');
        });

        $(".close, .overlay").click(function () {
            $(".mask").fadeOut();
            $('body').removeClass('overflow');
            $('.img-show img').attr('src','');
        });

        $(".worklist-wrap li").click(function () {
            var worktarget = $(this).children().attr('data-target');
            $(".visite_site").attr("href", worktarget);
//            $('.worklist-wrap li a').attr('href','javascript:void(0)');            
        });
    });



/*---------------------------------------------*/
/*     * worklist wow slider popup js          */
/*---------------------------------------------*/
   $(window).load(function () {
        "use strict";

        $(".mix-box figure").click(function () {
//            var $src = $(this).attr("src");
            var imgLink = $(this).children('img').attr('src');
            $(".mask").fadeIn();
            $(".img-show img").attr("src", imgLink);
            $("body").addClass('overflow');
        });

        $(".close, .overlay").click(function () {
            $(".mask").fadeOut();
            $('body').removeClass('overflow');
            $('.img-show img').attr('src','');
        });

        $(".mix-box").click(function () {
            var worktarget = $(this).children().attr('data-target');
            $(".visite_site").attr("href", worktarget);
//            $('.worklist-wrap li a').attr('href','javascript:void(0)');            
        });
        
    });
/*---------------------------------------------*/
/*     * career-form file Uplord js            */
/*---------------------------------------------*/
    $('#form_resume').bind('change', function () {
          var filename = $("#form_resume").val();
          if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen..."); 
          }
          else {
            $(".file-upload").addClass('active');
            $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
          }
    });
    $('#fileName,#noFile').click(function(e) {
        $("#form_resume").trigger('click');
        return false;
    });

/*---------------------------------------------*/
/*     * Choose package Uplord js            */
/*---------------------------------------------*/

$('.choose-package').on('click', function(){
    $('.choose-package').removeClass('active');
    $(this).addClass('active');
});

$('.first .checkbox-icon').on('click', function(){
    $('.first .packagesCheckbox').addClass('checked');
    $('.last .packagesCheckbox').removeClass('checked');
});
$('.last .checkbox-icon').on('click', function(){
    $('.last .packagesCheckbox').addClass('checked');
    $('.first .packagesCheckbox').removeClass('checked');
});

$('.msg-wrap-item,.panel-close').click(function(e) {
    $(".chat_msg").fadeToggle();
    return false;
});
/*---------------------------------------------*/
/*     * tab                                   */
/*---------------------------------------------*/
    $(window).load(function () {
        $('.projectprice').customResponsiveTabs('.list-profile', '.tab-content');
    });




/*---------------------------------------------*/
/*   * Menu Icon Append prepend for responsive */
/*---------------------------------------------*/

    $(window).resize(function() {
        //activeNav();
        if ($(this).width() < 767) {
            $("#filter-nav").show();
            $("#work-btn").hide();
        } else {
            $("#work-btn").show();
            $("#filter-nav").hide();
        }
    });

    $(window).resize(function() {
        //activeNav();
        if ($(this).innerWidth() > 767) {
            $('#filter-nav').removeClass('menuopen');
            $("#work-btn").show();
        }
    });
/*---------------------------------------------*/
/*   * Filter menu click                       */
/*---------------------------------------------*/
    $('#filter-nav').click(function(e) {
        $(this).toggleClass('menuopen');
            $(this).next('#work-btn').slideToggle('block');
            return false;
    });

//    $('.filter').bind('change', function () {
//          var buttonname = $(".filter").val();
//          if (/^\s*$/.test(buttonname)) {
////            $(".file-upload2").removeClass('active');
//            $("#filter-nav").text(" Filter Portfolio"); 
//          }
//          else {
////            $(".file-upload2").addClass('active');
//            $("#filter-nav").text(.replace("C:\\fakepath\\", "")); 
//          }
//    });


/*---------------------------------------------*/
/*      * Scroll to top                          */
/*---------------------------------------------*/

// Scroll to top
if ($('.scroll-top').length) {
		var scrollTrigger = $('#header').height() // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.scroll-top').fadeIn();
				} else {
					$('.scroll-top').fadeOut();
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.scroll-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 1500);
		});
	}



/*---------------------------------------------*/
/*     * link path display none                */
/*---------------------------------------------*/

$(window).load(function () {
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    if (a.indexOf('html') > -1) { //Check of html String in URL.
       url = url.substring(0, newURL.lastIndexOf("."));
    }
});
