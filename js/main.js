jQuery(document).ready(function($) {
    "use strict";
    // Ajax search

    $('.js-slider-v3').on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').append('<div class="pagingInfo"');
    });
  
    $('.js-slider-v3').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true,
      autoplay: true,
    autoplaySpeed: 4000,
      
    });
        // owl category
    $('.js-owl-cate').owlCarousel({
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: false,
        navText: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 4

            },
            1200: {
                items: 6,
                nav: false
            },
            1600: {
                items: 6,
                nav: false
            }
        }
    });
        $('.js-owl-cate2').owlCarousel({
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: false,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            1024: {
                items: 3

            },
            1200: {
                items: 3,
                nav: false
            },
            1600: {
                items: 3,
                nav: false
            }
        }
    });
                $('.js-owl-cate3').owlCarousel({
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: false,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            1024: {
                items: 4

            },
            1200: {
                items: 4,
                nav: false
            },
            1600: {
                items: 4,
                nav: false
            }
        }
    });

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
    $('.js-owl-cate4').owlCarousel({
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: false,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            1024: {
                items: 4

            },
            1200: {
                items: 4,
                nav: false
            },
            1600: {
                items: 4,
                nav: false
            }
        }
    });
        $('.js-owl-cate5').owlCarousel({
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: false,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 1

            },
            1200: {
                items: 1,
                nav: false
            },
            1600: {
                items: 1,
                nav: false
            }
        }
    });
                $('.js-owl-cate6').owlCarousel({
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: false,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3

            },
            1200: {
                items: 3,
                nav: false
            },
            1600: {
                items: 3,
                nav: false
            }
        }
    });
    $('.js-owl-cate7').owlCarousel({
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: false,
        dots: false,
        nav: false,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3

            },
            1200: {
                items: 3,
                nav: false
            },
            1600: {
                items: 3,
                nav: false
            }
        }
    });

    // Scroll to TOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });

    $('.scroll_top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 500) {
            $(".intro").hide();
            $(".scroll_down").hide();
        }
    });
    // 
        $(".sidebar-blog li .icon-sub-menu").on("click", function() {

        $(this).toggleClass('up-icon');
        $(this).parent().find(".js-open-menu").slideToggle('fast', function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
    });


    $('.js-click-product-normal').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-product-slider-normal',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
    });
    $('.js-product-slider-normal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.js-click-product-normal'
    });



    var quantitiy = 0;
    $('.js-plus').on("click", function(e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('.js-number').val(), 10);

        // If is not undefined

        $('.js-number').val(quantity + 1);


        // Increment    
    });
        $('.js-minus').on("click", function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('.js-number').val(), 10);

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('.js-number').val(quantity - 1);
        }
    });
            $("#mm-blocker").on("click", function() {
         $("#mm-1").removeClass('mm-current mm-opened');
        $('#nav-mobile').removeClass('mm-current mm-opened');
        $('html').removeClass('mm-opened mm-blocking mm-background mm-opening');

    });
    $('.menu-bar').on("click", function() {
        $("#mm-1").addClass('mm-current mm-opened');
        $('#nav-mobile').addClass('mm-current mm-opened');
        $('html').addClass('mm-opened mm-blocking mm-background mm-opening');
    })
    
        $('.v1.mm-next').on("click", function() {
        $("#mm-2").addClass('mm-current mm-opened ');
        $("#mm-1").addClass('mm-subopened ');
    })
        
        $('.v2.mm-next').on("click", function() {
        $("#mm-3").addClass('mm-current mm-opened ');
        $("#mm-2").addClass('mm-subopened ');
        $("#mm-1").addClass('mm-hidden ');
        $("#mm-3").removeClass('mm-hidden ');

        
    })
        $('.v2.mm-prev').on("click", function() {
        $("#mm-2").removeClass('mm-current mm-opened');
        $("#mm-1").removeClass('mm-subopened ');
        $("#mm-3").addClass('mm-hidden ');
        $("#mm-1").removeClass('mm-hidden ');
    })
    $('.v3.mm-prev').on("click", function() {
        $("#mm-3").removeClass('mm-current mm-opened');
        $("#mm-2").removeClass('mm-subopened ');
    })


      $('.open-filters').on('click',function(){
    if($(this).attr('data-click-state') == 0) {
    $(this).attr('data-click-state', 1);
    $('.open-filters').addClass('open');
    $('.filter-product').addClass('open');
    $('.opacity_filter').addClass('open')
} else {
    $(this).attr('data-click-state', 0);
    $('.open-filters').removeClass('open');
    $('.filter-product').removeClass('open');
    $('.opacity_filter').removeClass('open');
}
});


            $('.tabsv1').on('click',function(){
    if($(this).attr('data-click-state') == 0) {
    $(this).attr('data-click-state', 1);
    $('.title-2 .nav.nav-tabs.v1').addClass('open');
} else {
    $(this).attr('data-click-state', 0);
    $('.title-2 .nav.nav-tabs.v1').removeClass('open');
}
});
    $('.tabsv2').on('click',function(){
    if($(this).attr('data-click-state') == 0) {
    $(this).attr('data-click-state', 1);
    $('.title-2 .nav.nav-tabs.v2').addClass('open');
} else {
    $(this).attr('data-click-state', 0);
    $('.title-2 .nav.nav-tabs.v2').removeClass('open');
}
});


      
          $(".cliked").on("click", function() {

        $(this).toggleClass('up-icon');
        $(this).parent().find(".ummm").slideToggle('fast', function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
    });


});

 function initialize() {
        if ($("#googleMap").length) {
            // Center
            var center = new google.maps.LatLng(21.02936, 105.8362);

            // Map Options      
            var mapOptions = {
                zoom: 15,
                center: center,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
            var image = 'assets/images/google-map-icon.png';

        }
    }
         $(window).on("orientationchange load resize", function() {
        $('.awe-page-loading').delay(1000).fadeOut('400', function() {
            $(this).fadeOut()
        });
        initialize();
        var widthwindow = $(window).width();
        var width_iframe = widthwindow - 60;
        var height_iframe;
        $('#box-user iframe').css({
            "height": height_iframe + "px"
        });
        $("#googleMap").css({
            "height": $(".contact-form").innerHeight() + "px"
        });
    });

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}