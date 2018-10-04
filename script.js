'use strict';

let money,
    time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате DD-MM-YYYY", "");

let appData = {
        budget: money,
        timeData: time,
        expences: {},
        optionalExpences: {},
        income: "",
        savings: false
    };

let a = prompt("1. Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("1. Во сколько обойдется?", ""),
    c = prompt("2. Введите обязательную статью расходов в этом месяце", ""),
    d = prompt("2. Во сколько обойдется?", "");

appData.expences[a] = b;
appData.expences[c] = d;

console.log(appData.expences);