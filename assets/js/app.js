$(function() {
    // Check if you have a bottom defined to prevent z-index that make the bottom of the page invisible
    if ($('.is-bottom-menu').length > 0) {
        $('.is-main-container').css({
            'padding-bottom': $('.is-bottom-menu').height() + 40
        });
    }

    // Profil picture
    $('.is-profil-picture').each(function () {
        $(this).css({
            'background': 'url(' + $(this).attr('data-image') + ')',
            'background-size': 'cover'
        });
    });

    // Alert part
    $('[data-toggle="alert"]').click(function () {
        var alert = $(this).attr('data-target');

        $('' + alert).css({
            'display': 'block'
        });
    });


    // To close an Alert
    $('.is-alert-close').click(function () {
        $(this).parent('.is-alert-top').css({
            'display': 'none'
        });
        $(this).parent('.is-alert-middle').css({
            'display': 'none'
        });
        $(this).parent('.is-alert-bottom').css({
            'display': 'none'
        });
    });

    // Is fullscreen
    $('.is-fullscreen').each(function () {
        $(this).css({
            'background': 'url(' + $(this).attr('data-background') + ')',
            'background-size': 'cover'
        });
    });

});
