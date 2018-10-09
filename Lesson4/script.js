"use strict";

let money = "",
    time;

function start() {
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    time = prompt("Введите дату в формате DD-MM-YYYY", "");
}
start();

let appData = {
        budget: money,
        timeData: time,
        expences: {},
        optionalExpences: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
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
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log("Минимвльный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("произошла ошибка");
            }
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?", "");
                    let percent = +prompt("Под какой процент?", "");
        
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i <= 3; i++) {
                let opt = prompt(i + ". Статья необязательных расходов?", "");
                
                if (typeof(opt) === "string" && opt != null && opt != "" && opt.length <= 50) {
                    console.log("done");
                    appData.optionalExpences[i] = opt;
                } else {
                    i--;
                }
            }
        },
        chooseIncome: function() {
            // 1
            for (let i = 1; i <= 1; i++) {
                let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
                if (typeof(items) === "string" && items != null && items != "") {
                    appData.income = items.split(", ");

                    let addLastItem = prompt("Может что-то еще?", "");
                    if (addLastItem != null && addLastItem != "") {
                        appData.income.push(addLastItem);
                    }
                    appData.income.sort();

                    // 2
                    let earnings = "Способы доп. заработка: ";
                    appData.income.forEach(function(item, i) {
                        earnings += "\n" + (i + 1) + ". " + item;
                    });
                    alert(earnings);

                } else {
                    i--;
                }
            }
            
        }
    };

// 3 (надо ли выводить значения???)
let ourProgram = "Наша программа включает в себя данные: ";
for (let key in appData) {
    ourProgram += "\n" + (key) + ": " + appData[key];
}
console.log(ourProgram);


function debug(){
    console.log(appData);
}
debug();