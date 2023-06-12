let loader = document.querySelector('.loader');
let bodi  = document.querySelector('.body');

window.addEventListener('load', () => {
    loader.classList.add('hideloader');
    setTimeout( () => { 
        loader.remove();
    }, 600 );
    bodi.classList.remove('bodyoverflow');
});

    

$(document).ready(function() {
    //SLICK SLIDER
    $('.forwhom-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/slider-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/slider-next.png"></button>'
    });

    //SMOOTH SCROLL
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});


    //WOW SCRIPT
    new WOW().init();


    //VALIDATION FORM
    $('#form').validate({
        rules: {
            username: "required",
            userphone: "required",
            useremail: {
            email: true,
            required: true
        },
            usermessage: "required"
        },
        messages: {
            username: "Пожалуйста введите ваше имя",
            userphone: "Пожалуйста введите ваш номер телефона",
            usermessage: "Отсутствует текст сообщения",
            useremail: {
                required: "Пожалуйста введите вашу почту",
                email: "Указан неверный формат почты"
            },
        }
    });

    //MASK NUMBER
    $('#userphone').mask("+7 (999) 999-9999");
});