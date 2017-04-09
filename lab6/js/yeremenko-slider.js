const width = 1215;
const fluency = 5; //плавность
const speed = 5; //скорость
const delay = 3000 + width; //задержка
const direction = -1; //направление (1: слева на право; -1: справа на лево)

function move(val) {
    var slider = document.getElementById('slider');
    var cs = window.getComputedStyle(slider);
    var tmp = cs.getPropertyValue('margin-left');
    tmp = parseInt(tmp);
    slider.style.marginLeft = (tmp + (val * direction)) + 'px';
}
var t = setInterval(function() {
    var moved = 0;
    t2 = setInterval(function() {
        if(moved >= width) {
            clearInterval(t2);
        }
        var step = fluency;
        if(moved + fluency > width) {
            step = moved + fluency - width;
        }
        moved += step;
        move(step);
    },speed);
}, delay);
