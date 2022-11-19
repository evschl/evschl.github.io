$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true,
        captions: true,
        pager: true,
        pagerSelector: "#id_pager",
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        speed: 3000
    });
});