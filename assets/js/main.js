var medicana;
$(function() {

    "use strict";

    medicana = {
        init: function() {
            this.mianMenu();
        },
        //===== 01. Main Menu
        mianMenu() {
            // Variables
            var var_window = $(window),
                navContainer = $('.nav-container'),
                pushedWrap = $('.nav-pushed-item'),
                pushItem = $('.nav-push-item'),
                pushedHtml = pushItem.html(),
                pushBlank = '',
                navbarToggler = $('.navbar-toggler'),
                navMenu = $('.nav-menu'),
                navMenuLi = $('.nav-menu ul li ul li'),
                closeIcon = $('.navbar-close');
            // navbar toggler
            navbarToggler.on('click', function() {
                navbarToggler.toggleClass('active');
                navMenu.toggleClass('menu-on');
            });
            // close icon
            closeIcon.on('click', function() {
                navMenu.removeClass('menu-on');
                navbarToggler.removeClass('active');
            });

            // adds toggle button to li items that have children
            navMenu.find('li a').each(function() {
                if ($(this).next().length > 0) {
                    $(this)
                        .parent('li')
                        .append(
                            '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
                        );
                }
            });
            // expands the dropdown menu on each click
            navMenu.find('li .dd-trigger').on('click', function(e) {
                e.preventDefault();
                $(this)
                    .parent('li')
                    .children('ul')
                    .stop(true, true)
                    .slideToggle(350);
                $(this).parent('li').toggleClass('active');
            });

            // check browser width in real-time
            function breakpointCheck() {
                var windoWidth = window.innerWidth;
                if (windoWidth <= 991) {
                    navContainer.addClass('breakpoint-on');

                    pushedWrap.html(pushedHtml);
                    pushItem.hide();
                } else {
                    navContainer.removeClass('breakpoint-on');

                    pushedWrap.html(pushBlank);
                    pushItem.show();
                }
            }

            breakpointCheck();
            var_window.on('resize', function() {
                breakpointCheck();
            });
        },
    };
    // Document Ready
    $(document).ready(function() {
        medicana.init();
    });
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 190) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //====== Magnific Popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    //===== Magnific Popup
    $('.play-btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //===== Back to top

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    // easyPieChart
    $('.chart-circle').easyPieChart({
        barColor: '#1D8107',
        size: 70,
        trackColor: '#EBF3E4',
        easing: 'easeInOut',
        scaleColor: false,
        lineCap: 'circle',
        lineWidth: 6,
        animate: 2000
    });
    //=====  Slick Slider js
    var hero_content_slide = $('.hero_slide');
    var sliderArrows = $('#arrows');
    hero_content_slide.slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500,
        appendArrows: sliderArrows,
        appendDots: $(".sliderDots"),
        prevArrow: '<div class="slick-arrow prev-arrow"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-arrow next-arrow"><i class="fas fa-angle-right"></i></div>'
    });
    $('.service-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.recent-product-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.product-big-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        asNavFor: '.product-thumb-slide',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.product-thumb-slide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        focusOnSelect: true,
        asNavFor: '.product-big-slide',
        prevArrow: '<div class="arrow prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="arrow next"><i class="fas fa-angle-right"></i></div>',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.testimonial_slide_v1').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.testimonial-content-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //Isotope js
    $('#product-filter').imagesLoaded(function() {
        var $grid = $('.product-grid').isotope({
            itemSelector: '.grid-column',
            layoutMode: 'fitRows'
        })
        $('.filter-button').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.filter-button').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.active-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
            });
        });
    });
    $('#masonry-gallery').imagesLoaded(function() {
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.grid_column',
            percentPosition: true,
            masonry: {
                columnWidth: 0
            }
        });
    });
    // jquery ui 
    $("#slider-range").slider({
        range: true,
        min: 25,
        max: 300,
        values: [0, 100],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    // jquery nice number js
    $('input[type="number"]').niceNumber({
        buttonDecrement: '<i class="far fa-minus"></i>',
        buttonIncrement: '<i class="far fa-plus"></i>'
    });

    // jquery nice select js
    $('select').niceSelect();
});