window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    {   // tabs

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
    }

    {   // timer

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
    }

    {   // modal window

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
    }

    {   // form

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


                let postData = (json) => {

                    let promise = new Promise((resolve, reject) => {

                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                        request.onreadystatechange = function () {
                            console.log(`${request.readyState} | ${request.status}`);
                            if (request.readyState < 4) {
                                statusMessage.innerHTML = message.loading;
                            } else if (request.readyState == 4 && request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        };

                        request.send(json);
                    });

                    return promise;
                };

                let formData = new FormData(form[i]);
                let obj = {};
                formData.forEach((value, key) => {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                postData(json)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure);

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

    }

    {   // slider

        let sliderIndex = 1,
            sliderItem = document.querySelectorAll('.slider-item'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot'),
            slidePrev = document.querySelector('.prev'),
            slideNext = document.querySelector('.next');

        let slideShow = (n) => {
            if (n < 1) n = sliderIndex = sliderItem.length;
            if (n > sliderItem.length) n = sliderIndex = 1;
            n--;

            sliderItem.forEach((item) => item.style.display = 'none');
            sliderItem[n].style.display = 'block';

            dots.forEach((item) => item.classList.remove('dot-active'));
            dots[n].classList.add('dot-active');
        };

        slideShow(sliderIndex);
        slidePrev.addEventListener('click', () => slideShow(--sliderIndex));
        slideNext.addEventListener('click', () => slideShow(++sliderIndex));

        // dotsWrap.addEventListener('click', (e) => {
        //     dots.forEach((item, i) => {
        //         if (e.target == item) {
        //             sliderIndex = i + 1;
        //             slideShow(sliderIndex);
        //         }
        //     });
        // });

        /**
         * тут разницы в коде нету, даже проще, 
         * чем использовать родительский элемент dotsWrap
         */
        dots.forEach((item, i) => {
            item.addEventListener('click', () => {
                sliderIndex = i + 1;
                slideShow(sliderIndex);
            });
        });

    }

    {   //calc

        let addEventListenerMulti = (elem, events, func) => {
            events.split(' ').forEach(e => elem.addEventListener(e, func, false));
        }

        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.querySelector('#select'),
            total = document.querySelector('#total'),
            personsVal = 0,
            restDaysVal = 0,
            placeVal = +place.options[place.selectedIndex].value;

        let totalVal = () => {
            return 700 * personsVal * restDaysVal * placeVal;
        };

        addEventListenerMulti(persons, 'input', () => {
            personsVal = +persons.value;
            if (persons.value != '' && restDays.value != '') {
                total.innerText = totalVal();
            } else {
                total.innerText = 0;
            }
        });

        addEventListenerMulti(restDays, 'input', () => {
            restDaysVal = +restDays.value;
            if (persons.value != '' && restDays.value != '') {
                total.innerText = totalVal();
            } else {
                total.innerText = 0;
            }
        });

        addEventListenerMulti(place, 'change click', () => {
            placeVal = +place.options[place.selectedIndex].value;
            if (persons.value != '' && restDays.value != '') {
                total.innerText = totalVal();
            } else {

            }
        });

    }
});