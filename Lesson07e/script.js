let rippleGlow = document.querySelector('#rippleglow'),
    way = 'right',
    speed = 5,
    x = 0, y = 0;

rippleGlow.style.left = 20;
rippleGlow.style.top = 20;

function step() {
    // console.log("x = " + x + ", y = " + y);
    requestAnimationFrame(step);
    switch (way) {
        case 'right':
            if (x < document.documentElement.clientWidth - 200) {
                rippleGlow.style.left = (x += speed) + 'px';
            } else {
                way = 'bottom';
            }
            break;
        case 'bottom':
            if (y < document.documentElement.clientHeight - 200) {
                rippleGlow.style.top = (y += speed) + 'px';
            } else {
                way = 'left';
            }
            break;
        case 'left':
            if (x > 20) {
                rippleGlow.style.left = (x -= speed) + 'px';
            } else {
                way = 'top';
            }
            break;
        case 'top':
            if (y > 20) {
                rippleGlow.style.top = (y -= speed) + 'px';
            } else {
                way = 'right';
            }
            break;
    }
}

step();