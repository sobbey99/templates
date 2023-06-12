$(document).ready(function() {
    $('.promo').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/main_arrowleft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/main_arrowright.svg"></button>'
    });

    $('.collection__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/main_arrowleft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/main_arrowright.svg"></button>'
    });

    $('.header-mobile__hamburger').on('click', function() {
        $('.header-mobile__menu').addClass('header-mobile__menu-active');
        $('body').addClass('bodyoverflow');
    });


    $('.header-mobile__menuclose').on('click', function ()  {
        $('.header-mobile__menu').removeClass('header-mobile__menu-active');
        $('body').removeClass('bodyoverflow');
    } );

    $('.header-mobile__menulink').on('click', function ()  {
        $('.header-mobile__menu').removeClass('header-mobile__menu-active');
        $('body').removeClass('bodyoverflow');
    } );
});