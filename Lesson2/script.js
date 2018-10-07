"use strict";

let money,
    time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате DD-MM-YYYY", "");

let appData = {
        budget: money,
        timeData: time,
        expences: {},
        optionalExpences: {},
        income: "",
        savings: false
    };

for (let i = 1; i <= 2; i++) {
    let a = prompt(i + ". Введите обязат. статью расходов в этом месяце", ""),
        b = prompt(i + ". Во сколько обойдется?", "");
    
        if (typeof(a) === "string" && a != null && b != null &&
        a != "" && b != "" && a.length <= 50) {
        console.log("done");
        appData.expences[a] = b;
    }
}

// {
//     let i = 1;
//     while (i++ <= 2) {
//         let a = prompt(i + ". Введите обязат. статью расходов в этом месяце", ""),
//             b = prompt(i + ". Во сколько обойдется?", "");

//         if (typeof(a) === "string" && a != null && b != null &&
//             a != "" && b != "" && a.length <= 50) {
//             console.log("done");
//         appData.expences[a] = b;
//         }
//     }
// }

// {
//     let i = 1;
//     do {
//         let a = prompt(i + ". Введите обязат. статью расходов в этом месяце", ""),
//             b = prompt(i + ". Во сколько обойдется?", "");

//         if (typeof(a) === "string" && a != null && b != null &&
//             a != "" && b != "" && a.length <= 50) {
//             console.log("done");
//         appData.expences[a] = b;
//         }
//     } 
//     while (++i <= 2);
// }

console.log(appData.expences);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимвльный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("произошла ошибка");
}