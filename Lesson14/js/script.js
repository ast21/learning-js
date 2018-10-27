$(document).ready(() => {

    $('.main_btn, .main_btna, [href="#sheldure"]').on('click', () => {
        $('.modal').slideDown(1000);
        $('.overlay').fadeTo(1000, 1);
    });

    $('.close').on('click', () => {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
    
});