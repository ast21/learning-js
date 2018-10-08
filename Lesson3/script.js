"use strict";

let money = "",
    time,
    appData = {
        budget: money,
        timeData: time,
        expences: {},
        optionalExpences: {},
        income: "",
        savings: true
    };

function start() {
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    time = prompt("Введите дату в формате DD-MM-YYYY", "");
}

function chooseExpenses() {
    for (let i = 1; i <= 2; i++) {
        let a = prompt(i + ". Введите обязат. статью расходов в этом месяце", ""),
            b = prompt(i + ". Во сколько обойдется?", "");
        
        if (typeof(a) === "string" && a != null && b != null &&
                a != "" && b != "" && a.length <= 50) {
            console.log("done");
            appData.expences[a] = b;
        } else {
            i--;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимвльный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("произошла ошибка");
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", "");
            let percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(i + ". Статья необязательных расходов?", "");
        
        if (typeof(a) === "string" && a != null && a != "" && a.length <= 50) {
            console.log("done");
            appData.optionalExpences[i] = a;
        } else {
            i--;
        }
    }
}

start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();

function debug(){
    console.log(appData);
}
debug();