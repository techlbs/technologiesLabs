const width = 1215;
const delay = 3000;
const speed = '0.7s';
const direction = -1;
const image_blocks = 3;
var page = 1;

var t = setInterval(mv, delay);

function mv() {
    if(direction === -1) {//right to left
        if(page >= image_blocks) {
            setMargin(0);
            page = 1;
        } else {
            rightToLeft();
        }
    } else {
        if(page <= 1) {
            setMargin(-1*(image_blocks - 1) * width);
            page = image_blocks;
        } else {
            leftToRight();
        }
    }
}

function getStyleVal(slider, key) {
    var cs = window.getComputedStyle(slider);
    var tmp = cs.getPropertyValue(key);
    return parseFloat(tmp);
}

function move(val) {
    var slider = document.getElementById('slider');
    var tmp = getStyleVal(slider, 'margin-left');
    slider.style.transitionDuration = speed;
    slider.style.marginLeft = (tmp + val) + 'px';
}

function rightToLeft() {
    if (page < image_blocks) {
        move(width * -1);
        page++;
        clearInterval(t);
        t = setInterval(mv, delay);
    }
}
function leftToRight() {
    if (page > 1) {
        move(width);
        page--;
        clearInterval(t);
        t = setInterval(mv, delay);
    }
}

function setMargin(val) {
    var slider = document.getElementById('slider');
    slider.style.transitionDuration = speed;
    slider.style.marginLeft = val+'px';
}
