$(function(){
    // Check if you have a bottom defined to prevent z-index that make the bottom of the page invisible
    if($('.is-bottom-menu').length > 0){
        $('.is-main-container').css({
            'padding-bottom': $('.is-bottom-menu').height() + 40
        });
    }

    // Profil picture
    $('.is-profil-picture').each(function(){
        $(this).css({
            'background': 'url('+ $(this).attr('data-image') +')',
            'background-size': 'cover'
        });
    });

    // Modal part
    $('[data-toggle="modal"]').click(function(){
        var modal = $(this).attr('data-target');

        $('' + modal).css({
            'display': 'block'
        });
    });


    // To close a modal
    $('.is-modal-close').click(function(){
        $(this).parent('.is-modal-top').css({
            'display': 'none'
        });
        $(this).parent('.is-modal-middle').css({
            'display': 'none'
        });
        $(this).parent('.is-modal-bottom').css({
            'display': 'none'
        });
    });
});