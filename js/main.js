$('.direction-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1
});
$(document).ready(function () {
    var menuBtn = $('.top-nav_btn')
    var sidebarBtn = $('.left-sidebar_btn')
    var menu = $('.top-nav_menu')
    var sidebarmenu = $('.left-sidebar_menu')

    menuBtn.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active')
    });
    sidebarBtn.on('click', function (event) {
        event.preventDefault();
        sidebarmenu.toggleClass('left-sidebar__active')
    });
});