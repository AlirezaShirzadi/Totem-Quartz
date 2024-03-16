AOS.init({disable: 'mobile'});

$(window).on("scroll", function () {
    var scrollYpos = $(document).scrollTop();
    var navHeight = $('#main-header').height();
    if (scrollYpos > navHeight) {
        $("#main-header").addClass('sticky')
    } else {
        $("#main-header").removeClass('sticky')
    }
})