let rippleGlow = document.querySelector('#rippleglow');
let way = 'right',
    x = rippleGlow.style.left = 0,
    y = rippleGlow.style.top = 0,
    speed = 5;

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
console.log(react(2).toFixed() + 'px');
function react(num) {
    if (num > 2) {
        return num * num / (num - 1);
    } else {
        return num;
    }
}

step();