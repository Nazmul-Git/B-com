/**
*
* -----------------------------------------------------------------------------
*
* Template : Bcom - Consulting Business HTML Template
  Author : rs-theme
  Author URI : http://www.rstheme.com/ 
*
* -----------------------------------------------------------------------------
*
**/
(function($) {
	"use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });
	
    //window load
   $(window).on( 'load', function() {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
        })
    })

   // onepage nav
   var navclose = $('#onepage-menu');
   if(navclose.length){
       $(".nav-menu li a").on("click", function () {
           if ($(".showhide").is(":visible")) {
               $(".showhide").trigger("click");
           }
       });
       
       if ($.fn.onePageNav) {
           $(".nav-menu").onePageNav({
               currentClass: "current-menu-item"
           });
       }
    }

    // collapse hidden  
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     }); 

    jQuery(document).ready(function($) {
        $(".rs-animated-heading .cd-words-wrapper p:first-child").addClass("is-visible");
    });

    // add current active class accordion
    win.on('load', function(){
        $('.card:first-child').addClass("current");
    });

    $('.card-header').on('click', function(e) {
        e.preventDefault();
      let $this = $(this);
      if ( $this.hasClass( 'current' ) ) {
          $this.parent().parent().removeClass('current');
      } else {
          $this.parent().parent().find('.card').removeClass('current');
          $this.parent().toggleClass('current');
      }
    });
   
    //Project Slider
    if ($('.project-slide-1').length) {
        $('.project-slide-1').slick({
            autoplay: false,
            infinite: true,
            centerMode: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    } 
    //Project Slider
    if ($('.project-slide-2').length) {
        $('.project-slide-2').slick({
            autoplay: false,
            infinite: true,
            centerMode: true,
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }
    //Project Slider
    if ($('.project-slide-3').length) {
        $('.project-slide-3').slick({
            autoplay: false,
            infinite: true,
            centerMode: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 1499,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              }, 
              {
              breakpoint: 1366,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              }, 
              {
              breakpoint: 1299,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }

    //Project Slider
    if ($('.project-slide-4').length) {
        $('.project-slide-4').slick({
            autoplay: false,
            infinite: true,
            centerMode: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }   

    //Testimonials Slider
    if ($('.testi-slide-1').length) {
        $('.testi-slide-1').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    } 

    //Testimonials Slider
    if ($('.testi-slide-2').length) {
        $('.testi-slide-2').slick({
            autoplay: false,
            infinite: true,
            centerMode: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    } 

    //Testimonials Slider
    if ($('.testi-slide-3').length) {
        $('.testi-slide-3').slick({
            autoplay: false,
            infinite: true,
            centerMode: true,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }

    //Testimonials Slider
    if ($('.testi-slide-4').length) {
        $('.testi-slide-4').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    } 

    //blog Slider
    if ($('.blog-slide-1').length) {
        $('.blog-slide-1').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }

    //blog Slider
    if ($('.blog-slide-2').length) {
        $('.blog-slide-2').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }
  
    //Partner Slider
    if ($('.partner-slide-1').length) {
        $('.partner-slide-1').slick({
            autoplay: true,
            infinite: true,
            arrows: false,
            dots: false,
            centerMode: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
              },
              {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    } 

    //Partner Slider
    if ($('.partner-slide-2').length) {
        $('.partner-slide-2').slick({
            autoplay: true,
            infinite: true,
            arrows: false,
            dots: false,
            centerMode: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
              },
              {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }

    //Team Slider
    if ($('.team-slide-1').length) {
        $('.team-slide-1').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
              breakpoint: 1299,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
              }, 
              {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
              },
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }

    // Slider Demo
    if ($('.slider-slide-1').length) {
        $('.slider-slide-1').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    } 

     // Slider Demo
    if ($('.slider-slide-2').length) {
        $('.slider-slide-2').slick({
            autoplay: false,
            infinite: true,
            centerMode: false,
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
              },
              {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
              {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
       });
    }  

  /*----------------------------
      # swiper Screen Slider
  ------------------------------ */
  if ($('.project-slide2').length) {
      var swiper = new Swiper('.project-slide2', {
         spaceBetween: 30,
         slidesPerGroup: 1,
         slidesPerView: 3,
         loop: true,
         loopFillGroupWithBlank: true,
         centeredSlides: false,
         mousewheel: false,
         direction: 'horizontal',
         grabCursor: false,
         autoplay: {
             delay: 200000,
             disableOnInteraction: true,
         },
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },  
            fadeEffect: {
                crossFade: true
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                snapOnRelease: true
              },
          breakpoints: {
              320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
              },
              481: {
                  slidesPerView: 1,
                  spaceBetween: 30,
              },
              576: {
                  slidesPerView: 2,
                  spaceBetween: 30,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
              },
              992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
          }
      });
  }

  if ($('.project-slide2').length) {
      $(".project-slide2").on('hover', function() {
          (this).swiper.autoplay.stop();
      }, function() {
          (this).swiper.autoplay.start();
      });
  }

  /*----------------------------
      # swiper Pricing Slider
  ------------------------------ */

  if ($('.swiper-container.pricing').length) {
      var swiper = new Swiper('.swiper-container.pricing', {
          spaceBetween: 0,
          slidesPerGroup: 1,
          slidesPerView: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          centeredSlides: true,
          mousewheel: false,
          direction: 'horizontal',
          grabCursor: false,
          autoplay: {
              delay: 2000000,
              disableOnInteraction: true,
          },
          navigation: {
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
          },
          breakpoints: {
              320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
              },
              481: {
                  slidesPerView: 1,
                  spaceBetween: 0,
              },
              576: {
                  slidesPerView: 3,
                  spaceBetween: 0,
              },
              768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
              },
              992: {
                  slidesPerView: 3,
                  spaceBetween: 0,
              },
          }
      });
    }

    // wow init
    new WOW().init();

    // image loaded portfolio init
    var gridfilter = $('.grid');
        if(gridfilter.length){
        $('.grid').imagesLoaded(function() {
            $('.gridFilter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }   
    
    // magnificPopup init
    var imagepopup = $('.image-popup');
    if(imagepopup.length){
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }

    //Price Table
    jQuery(document).ready(function($){
        //hide the subtle gradient layer (.pricing-list > li::after) when pricing table has been scrolled to the end (mobile version only)
        checkScrolling($('.pricing-body'));
        $(window).on('resize', function(){
            window.requestAnimationFrame(function(){checkScrolling($('.pricing-body'))});
        });
        $('.pricing-body').on('scroll', function(){ 
            var selected = $(this);
            window.requestAnimationFrame(function(){checkScrolling(selected)});
        });

        function checkScrolling(tables){
            tables.each(function(){
                var table= $(this),
                    totalTableWidth = parseInt(table.children('.pricing-features').width()),
                    tableViewport = parseInt(table.width());
                if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
                    table.parent('li').addClass('is-ended');
                } else {
                    table.parent('li').removeClass('is-ended');
                }
            });
        }

        //switch from monthly to annual pricing tables
        bouncy_filter($('.pricing-container'));

        function bouncy_filter(container) {
            container.each(function(){
                var pricing_table = $(this);
                var filter_list_container = pricing_table.children('.pricing-switcher'),
                    filter_radios = filter_list_container.find('input[type="radio"]'),
                    pricing_table_wrapper = pricing_table.find('.pricing-wrapper');

                //store pricing table items
                var table_elements = {};
                filter_radios.each(function(){
                    var filter_type = $(this).val();
                    table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="'+filter_type+'"]');
                });

                //detect input change event
                filter_radios.on('change', function(event){
                    event.preventDefault();
                    //detect which radio input item was checked
                    var selected_filter = $(event.target).val();

                    //give higher z-index to the pricing table items selected by the radio input
                    show_selected_items(table_elements[selected_filter]);

                    //rotate each pricing-wrapper 
                    //at the end of the animation hide the not-selected pricing tables and rotate back the .pricing-wrapper
                    
                    if( !Modernizr.cssanimations ) {
                        hide_not_selected_items(table_elements, selected_filter);
                        pricing_table_wrapper.removeClass('is-switched');
                    } else {
                        pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {        
                            hide_not_selected_items(table_elements, selected_filter);
                            pricing_table_wrapper.removeClass('is-switched');
                            //change rotation direction if .pricing-list has the .bounce-invert class
                            if(pricing_table.find('.pricing-list').hasClass('bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
                        });
                    }
                });
            });
        }
        function show_selected_items(selected_elements) {
            selected_elements.addClass('is-selected');
        }

        function hide_not_selected_items(table_containers, filter) {
            $.each(table_containers, function(key, value){
                if ( key != filter ) {  
                    $(this).removeClass('is-visible is-selected').addClass('is-hidden');

                } else {
                    $(this).addClass('is-visible').removeClass('is-hidden is-selected');
                }
            });
        }
    });

    $('.rs-mnt').on('click', function(){
        if($('#rsmnt').hasClass('rs-mnt')){
            $('.fieldset').addClass('mnt-ac');
        }
    });

    $('.rs-yrs').on('click', function(){
        if($('#rsyrs').hasClass('rs-yrs')){
            $('.fieldset').removeClass('mnt-ac');
        }
    });

    $('.rs-yrs').on('click', function(){
        if($('#rsyrs').hasClass('rs-yrs')){
            $('.fieldset').addClass('mnt-acs');
        }
    });
    
    $('.rs-mnt').on('click', function(){
        if($('#rsmnt').hasClass('rs-mnt')){
            $('.fieldset').removeClass('mnt-acs');
        }
    });

    // Get a quote popup
    var popupquote = $('.popup-quote');
    if(popupquote.length){
        $('.popup-quote').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#qname',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                    if(win.width() < 800) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#qname';
                    }
                }
            }
        });
    }

    var searchParent = $('.search-parent');
    if(searchParent.length){ 
        $( ".search-parent" ).on( "click", function() {
          $( this).toggleClass( "open_add_class", 1000 );
        });
    }
    
    //preloader
          $(window).on( 'load', function() {
              $("#pre-load").delay(600).fadeOut(500);
              $(".pre-loader").delay(600).fadeOut(500);

          if($(window).width() < 992) {
            $('.rs-menu').css('height', '0');
            $('.rs-menu').css('opacity', '0');
            $('.rs-menu').css('z-index', '-1');
            $('.rs-menu-toggle').on( 'click', function(){
               $('.rs-menu').css('opacity', '1');
               $('.rs-menu').css('z-index', '1');
           });
          }
      })

      //Videos popup jQuery 
      var popupvideos = $('.popup-videos');
            if(popupvideos.length){
            $('.popup-videos').magnificPopup({
            disableOn: 10,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          }); 
      }

      // Team Social Icon Collaps Button
      $('.team-social-collaps').on('click', function() {
          $(this).parents('.team-inner-wrap').toggleClass('is-open')
      });

    // Skill bar 
    var skillbar = $('.skillbar');
    if(skillbar.length) {
        $('.skillbar').skillBars({  
            from: 0,    
            speed: 4000,    
            interval: 100,  
            decimals: 0,    
        });
    }
		
    // Counter Up
    var counter = $('.rs-count');
    if(counter.length) {  
        $(".rs-count").counterUp({time:3000});
    }
    
    // scrollTop init	
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander, #nav-close, #nav-close2, .offwrap').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
	
	/*----------------------------
    single-productjs active
    ------------------------------ */
    var singleproductimage = $('.single-product-image');
    if(singleproductimage.length){
        $('.single-product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product-nav'
        });
    }

    var singleproductnav = $('.single-product-nav');
    if(singleproductnav.length){
        $('.single-product-nav').slick({
            slidesToShow: 3,
            asNavFor: '.single-product-image',
            dots: false,
            focusOnSelect: true,
            centerMode:false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 591,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ] 
        });
    }

   /******** Mobile Menu Start ********/
   
   $('.mobile-navbar-menu a').each(function(){
       var href = $(this).attr("href");
       if(href ="#"){
           $(this).addClass('hash');
       }else{
           $(this).removeClass('hash');
       }
   });

   $.fn.menumaker = function(options) {
     var mobile_menu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);

       return this.each(function() {
       mobile_menu.find('li ul').parent().addClass('has-sub');
       var multiTg = function() {
           mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
           mobile_menu.find(".hash").parent().addClass('hash-has-sub');
           mobile_menu.find('.submenu-button').on('click', function() {
               $(this).toggleClass('submenu-opened');
               if ($(this).siblings('ul').hasClass('open-sub')) {
                   $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').hide('fadeIn');                                     
               }
               else {
                   $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').slideToggle().show('fadeIn');
               }
           });
       };

       if (settings.format === 'multitoggle') multiTg();
       else mobile_menu.addClass('dropdown');
       if (settings.sticky === true) mobile_menu.css('position', 'fixed');
      var resizeFix = function() {
           if ($( window ).width() > 991) {
               mobile_menu.find('ul').show('fadeIn');
               mobile_menu.find('ul.sub-menu').hide('fadeIn');
           }          
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
       });
   };

   $(document).ready(function(){
       $("#mobile-navbar-menu").menumaker({
       format: "multitoggle"
       });
   });

})(jQuery);