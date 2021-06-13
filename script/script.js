var balls = document.getElementsByTagName('img');

for (var i = 0; i < balls.length; i++) {
    var ball = balls[i];
    ball.style.cursor = 'pointer';
    ball.style.position = 'absolute';
    ball.addEventListener('mousedown', mouseDown)

    ball.ondragstart = function() {
        return false;
    };
}

function mouseDown(event) {

    var elem = event.target;
    var posElem = getElemPos(elem);
    var shiftX = event.pageX - posElem.left;
    var shiftY = event.pageY - posElem.top;

    document.body.append(elem);

    document.onmousemove = function(event) {
        elem.style.left = event.pageX - shiftX + 'px';
        elem.style.top = event.pageY - shiftY + 'px';
    };

    elem.onmouseup = function() {
        document.onmousemove = null;
        elem.onmouseup = null;
    };

}

function getElemPos(elem) {
    var bbox = elem.getBoundingClientRect();
    return {
        left: bbox.left + window.pageXOffset,
        top: bbox.top + window.pageYOffset
    };
}