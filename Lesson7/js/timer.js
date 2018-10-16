window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    setTimeout(setTimer, 1000, new Date());

    function setTimer(date) {
        hours.innerText = twoDigits(date.getHours());
        minutes.innerText = twoDigits(date.getMinutes());
        seconds.innerText = twoDigits(date.getSeconds());
        setTimeout(setTimer, 1000, new Date());
    }
    
    function twoDigits(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

});