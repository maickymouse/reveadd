$(document).ready(function () {
    $('#single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });



    let menu_hamburger = document.getElementById('menu_hamburger');
    let menu = document.querySelector('.menu');
    console.log(menu)
    menu_hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');

    });



});
