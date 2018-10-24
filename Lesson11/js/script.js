window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    const showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (e) => {
        let target = e.target;
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

    const getTimeRemaining = (endtime) => {

        const twoDigits = (number) => {
            if (number < 10 && number >= 0) {
                number = "0" + number;
            }
            return number;
        };

        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = twoDigits(Math.floor((t / 1000) % 60)),
            minutes = twoDigits(Math.floor((t / 1000 / 60) % 60)),
            hours = twoDigits(Math.floor((t / 1000 / 60 / 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    };

    const setClock = (id, endtime) => {
        let timer = document.querySelector('#' + id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(() => {
                let t = getTimeRemaining(endtime);

                if (t.total >= 0) {
                    hours.innerText = t.hours;
                    minutes.innerText = t.minutes;
                    seconds.innerText = t.seconds;
                } else {
                    clearInterval(timeInterval);
                }
            }, 1000);
    };

    setClock('timer', deadline);

    // modal window

    let more = document.querySelectorAll('.more, .description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach((item) => {
        item.addEventListener('click', () => {
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.forEach((item) => {
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    });

    // form

    let message = {
        loading: 'Загрузка ...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так ...',
    };

    let form = document.getElementsByTagName('form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    for (let i = 0; i < form.length; i++) {

        let input = form[i].getElementsByTagName('input');

        form[i].addEventListener('submit', (event) => {
            event.preventDefault();
            form[i].appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(form[i]);
            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState == 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let j = 0; j < input.length; j++) {
                input[j].value = '';
            }

        });
    }

    // phone valid
    let input = document.getElementsByName('phone');
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('input', () => {
            input[i].value = input[i].value.replace(/[^\+\d]/g, '');
        });
    }
});