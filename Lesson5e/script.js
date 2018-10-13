/** 
 * 1
 * Выведите на страницу текущую дату и время 
 * в формате '09:59:59 30.05.2018'
 */ 
let date = new Date(),
    optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    },
    optionsDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

console.log( date.toLocaleString("ru", optionsTime) + 
    " " + date.toLocaleString("ru", optionsDate) );

/**
 * 2
 * Напишите функцию, которая будет добавлять 0 перед днями и месяцами, 
 * которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
 */
console.log( twoDigitDate( new Date(2018, 9, 9) ) );

function twoDigit(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}
function twoDigitDate(date) {
    return ( twoDigit( date.getDate() ) + 
        "." + twoDigit( date.getMonth() + 1) + 
        "." + date.getFullYear() );
}

/**
 * 3
 * Напишите функцию, которая выводит на страницу
 * текущий день недели на русском языке (реализацию выбираете сами)
 */
console.log( dayToString(new Date(2018, 2, 2)) );

function dayToString(date) {
    let optionsDay = { weekday: 'long' };
    return date.toLocaleString("ru", optionsDay);
}

/**
 * 4
 * Напишите функцию, которая выводит на страницу 
 * разницу между двумя датами в количестве дней
 */
let dateValues = document.querySelectorAll('.date-value'),
    result = document.querySelector('#result'),
    date1,
    date2,
    diff;

dateValues[0].addEventListener('input', () => {
    diffDate();
});
dateValues[1].addEventListener('input', () => {
    diffDate();
});

function diffDate() {
    date1 = new Date(dateValues[0].value);
    date2 = new Date(dateValues[1].value);
    diff = new Date(date1) - new Date(date2);
    diff = Math.floor(diff / 24 / 60 / 60 / 1000);
    result.value = (diff >= 0) ? diff: diff * -1;
}