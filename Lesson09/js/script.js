window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // timer

    let deadline = new Date(new Date().setMinutes(new Date().getMinutes() + 15));

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = twoDigits(Math.floor((t/1000) % 60)),
            minutes = twoDigits(Math.floor((t/1000/60) % 60)),
            hours = twoDigits(Math.floor((t/1000/60/60)));

        function twoDigits(number) {
            if (number < 10 && number >= 0) {
                number = "0" + number;
            }
            return number;
        }

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.querySelector('#' + id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.total >= 0) {
                hours.innerText = t.hours;
                minutes.innerText = t.minutes;
                seconds.innerText = t.seconds;
            } else {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // modal window

    let more = document.querySelectorAll('.more, .description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(function (item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.forEach(function (item) {
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    });

});