document.addEventListener('DOMContentLoaded', () => {

    function consultModal(openTrigger,modalWindow, closeTrigger){
        const openBtn = document.querySelector(openTrigger);
        const closeBtn = document.querySelector(closeTrigger);
        const modal = document.querySelector(modalWindow);
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    consultModal('.header-contact__modaltriger','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.prices-item__button_1','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.prices-item__button_2','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.prices-item__button_3','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.footer-contact__button','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.header-mobile__button','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.header-mobile__navigation_button','#consult-modal', '#consult-modal .dialog__close' );
    consultModal('.company-descr__button','#consult-modal', '#consult-modal .dialog__close' );
    
    
    
    

    

    //QualityModal(from sections)
    const qualityBtnTriger = document.querySelector('.quality-speak__button');
    const qualityModal = document.querySelector('#quality-modal');
    const qualityCloseModal = document.querySelector('#quality-modal .dialog__close');
    qualityBtnTriger.addEventListener('click', () => {
        qualityModal.style.display = 'flex';
    });
    qualityCloseModal.addEventListener('click', () => {
        qualityModal.style.display = 'none';
    });



    //Header Change on Scroll
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    window.addEventListener('scroll', checkScroll);
    function checkScroll() {
        if(window.scrollY >  80) {
            header.classList.add('header_scroll')
        } else {
            header.classList.remove('header_scroll');
        }
    }

    //Prices open list
    function openList(component,btn){
        const list = document.querySelector(component);
        const openListBtn = document.querySelector(btn);

        openListBtn.addEventListener('click', () => {
            list.classList.toggle('prices-item__list_open');
            if (list.classList.contains('prices-item__list_open')) {
                openListBtn.innerHTML = `
                        Скрыть
                        <div class="triangle triangle_up"></div>
                `
            } else {
                openListBtn.innerHTML = `
                        Показать полный список
                        <div class="triangle"></div>
                `
            }
        });
        
    }
    openList('.prices-item__list_1', '.prices-item__more_1');
    openList('.prices-item__list_2', '.prices-item__more_2');
    openList('.prices-item__list_3', '.prices-item__more_3');


    //DROPDOWN QUESTION ITEM
    const questionTriggers = document.querySelectorAll('.question-item__wrapper');

    questionTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            const questionDescr = item.nextElementSibling;
            questionDescr.classList.toggle('opened');
        });
    })

    //HEADER MOBILE MENU
    const mobileMenuOpenBtn = document.querySelector('.header-mobile__hamburger');
    const mobileMenuCloseBtn = document.querySelector('.header-mobile__navigation_close');
    const mobileMenu = document.querySelector('.header-mobile__menu');

    mobileMenuOpenBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open-menu');
    });

    mobileMenuCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open-menu');
    });
});

