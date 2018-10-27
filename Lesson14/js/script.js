$(document).ready(() => {

    $('.main_btn, .main_btna, [href="#sheldure"]').on('click', () => {

        // update version 2
        $('.modal').css({'display': 'block', 'top': '-100%'});
        $('.modal').animate({ top: '0px'}, 1000);

        // previous version 1
        // $('.modal').slideDown(1000);

        $('.overlay').fadeTo(1000, 1);
    });

    $('.close').on('click', () => {

        // update version 2
        $('.modal').animate({ top: '-100%'}, 1000);
        $('.modal').css({'display': 'block'});

        // previous version 1
        // $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
    
});