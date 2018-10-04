'use strict';

let money,
    time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате DD-MM-YYYY", "");

let appData = {
        budget: money,
        timeData: time,
        expences: "",
        optionalExpences: "",
        income: "",
        savings: false
    }

console.log(appData.budget + " " + appData.timeData);