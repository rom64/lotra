$( document ).ready(function() {

    /*loadSvg*/
    $('[data-svg]').each(function(){
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt){
            if(statusTxt == "success"){
                $this.find('svg').addClass('svg svg-'+$filename+'');
            }
        });
    });
    thumbImg();
    /*menu*/
    $('.header__toggle-menu').on('click', function () {
        var $this = $(this);
        $this.closest('.header').toggleClass('menu-open');
    });


    // $('.gallery-slider-js').slick({
    //   infinite: true,
    //   dots: false,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: false,
    //   arrows: true,
    //   responsive: [
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         infinite: false,
    //         dots: false
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: false,
    //         dots: false
    //       }
    //     }

    //   ]
    // });


});


    function fontSize() {
    if($(window).width() < 767){

        $('html').css({fontSize: 15+'px'});
    }

    if($(window).width() > 767){
        var width = 1366; // ширина, от которой идет отсчет
        var fontSize = 15; // минимальный размер шрифта
        var bodyWidth = $('html').width();
        var multiplier = bodyWidth / width;
        if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
        if ($('html').width() < width) fontSize = Math.floor(fontSize * multiplier);
        $('html').css({fontSize: fontSize+'px'});
    }
}

$(function() { fontSize(); });
$(window).resize(function() { fontSize(); });


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1300);
});



function thumbImg() {
    $('[data-thumb]').each(function () {
        var $this = $(this);
        var img = $this.find('img').attr('src');
        var size = $this.data('thumb');
        $this.css({
            'background-image': 'url(' + img + ')',
            'background-size': '' + size + ''
        });
    });
    return false;
}
$('.promo__fly').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.team__items').slick({
    //dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    //variableWidth: true,
    responsive:[
        {
            breakpoint: 767,
            settings: {
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,

                prevArrow: "<img src='../img/left.svg' class='slick-prev' alt=left'>",
                nextArrow: "<img src='../img/right.svg' class='slick-next' alt='right'>",
            }
        }
    ]
});

$('.header__mob-btn').on('click', function () {
    $('.menu').toggleClass('open');

    $('body').toggleClass('overflow-hidden');
});


$('.menu__link').on('click', function () {
    $('.menu').toggleClass('open');

    $('body').toggleClass('overflow-hidden');
});
$('.header__contacts-item').on('click', function () {
    $('.menu').toggleClass('open');

    $('body').toggleClass('overflow-hidden');
});

var $element = $(".stages__img");
if($(window).width() > 768){
    $(window).scroll(function() {
        var $minusHeight = $element.height() / 3.4;
        var scroll = $(window).scrollTop() + $element.height();
        var offset = $element.offset().top + $element.height();
        var stopMove = offset + $element.height() - $minusHeight;

        if (scroll > offset) {
            $(".stages__transport").css({"top": ($(window).scrollTop() - $element.offset().top + 20) + "px"});
        }
        else{
            $(".stages__transport").css({"top": "-1rem"});
        }

        if(scroll > stopMove) {
            $(".stages__transport").css({"top": "auto"});
            $(".stages__transport").css({"bottom": "-4rem"});
        }
    });
}
