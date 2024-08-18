$(window).on("load", function() {
    $('body').addClass('loaded');
});

$(function(){
    
    

    const tmMainNav = $("#tm-main-nav");

    tmMainNav.singlePageNav({
        filter: ':not(.external)'
    });

    $('.navbar-toggler').click(function(e) {
        e.stopPropagation();
        tmMainNav.toggleClass('show');
    });

    $("html").click(function(e) {
        $("#tm-main-nav").removeClass("show");
    });

    
    $(".tm-btn-next").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                
            });
        }
    });

    $('.tm-brand-icon').on('click', function(event) {
        $('html, body').animate({
                scrollTop: $('#Protagonistas').offset().top
            }, 800);
    });

    $('.tm-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});