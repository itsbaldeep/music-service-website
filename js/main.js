$(function() {
    const menu = $('nav ul');

    $('#openup').on('click', e => {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(() => {
        const w = $(this).width();
        if (w > 580 && menu.is(':hidden')) menu.removeAttr('style');
    });

    $('nav li').on('click', e => {
        const w = $(window).width();
        if (w < 580) menu.slideToggle();
    });

    $('.open-menu').height($(window).height());
});

$('.cf a').on('click', function(e) {
    e.preventDefault();
    const hash = this.hash;
    if (hash !== '') {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        })
    }
});