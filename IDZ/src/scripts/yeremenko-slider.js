$(document).ready(function() {
    $('#tabs').tabs({active:0});
    $('#slider1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $(".cb1").colorbox({rel:'.cb1'});
});