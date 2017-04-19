var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var pages = Math.ceil(slideCount/3);

function nextSlide() {
    if (slideNow == slideCount/3 || slideNow <= 0 || slideNow > slideCount/3) {
        // $('#slidewrapper').css('transform', 'translate(0, 0)');
        // slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
function prevSlide() {
    if (slideNow <= 1) {
        // slideNow = pages;
        // console.log('this is start; pages='+pages+'; now='+(slideNow));
        // $('#slidewrapper').css('transform', 'translate(-'+$('#viewport').width() * (slideNow-1)+'px, 0)');
    } else {
        translateWidth = -$('#viewport').width() * (slideNow-=2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}