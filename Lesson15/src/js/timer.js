export default function timer() {

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