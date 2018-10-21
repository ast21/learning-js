// 1 
let out = '',
    week = [
        'понедельник', 
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресение'
    ];

for (let i = 0; i < week.length; i++) {
    out += (i == weekDay()) ? "<i>": '';
    out += (i == 5 || i ==6) ? "<b>": '';
    out += week[i] + '<br>';
    out += (i == 5 || i ==6) ? "</b>": '';
    out += (i == weekDay()) ? "</i>": '';
}

/**
 * return one value of [0,1,2,3,4,5,6] 
 * which means current week day [пн,вт,ср,чт,пт,сб,вс]
 */
function weekDay() {
    let date = new Date();
    return ((date.getDay() == 0) ? 7 : date.getDay()) - 1;
}

document.getElementById('div').innerHTML = out;

// 2
let arr = [
    347328946,
    213128992,
    143454734,
    333426746,
    435034509,
    790349572,
    394037299
];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString()[0] == '3' || arr[i].toString()[0] == '7') {
        console.log(arr[i]);
    }
}