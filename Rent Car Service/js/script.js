window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_list'),
    menuItem = document.querySelectorAll('.nav_list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('liactive');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('liactive');
        })
    })
})