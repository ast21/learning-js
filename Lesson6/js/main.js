let start = document.getElementById('start'),

    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    
    expenses = document.querySelectorAll('.expenses-item'),

    approveExpensesBtn = document.getElementsByTagName('button')[0],
    approveOptExpensesBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2],
    
    optExpenses = document.querySelectorAll('.optionalexpenses-item'),
    
    income = document.querySelector('#income'), 
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money = "",
    time;

start.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    appData.budget = +prompt("Ваш бюджет на месяц?", "")
    budgetValue.innerText = appData.budget;

    year.value = new Date( Date.parse(time) ).getFullYear();
    month.value = new Date( Date.parse(time) ).getMonth() + 1;
    day.value = new Date( Date.parse(time) ).getDate();

        if (+budgetValue.innerText > 0) {
            calculateBtn.style.background = enableBtnColor;
            calculateBtn.disabled = false;
        } else {
            calculateBtn.style.background = disableBtnColor;
            calculateBtn.disabled = true;
            daybudgetValue.innerText = "";
            levelValue.innerText = "";
        }
});

approveExpensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        let key = expenses[i].value,
            val = expenses[++i].value;
        if (typeof(key) === "string" && key && val && key.length <= 50) {
            console.log("done");
            appData.expences[key] = val;
            sum += +val;
        }
    }
    expensesValue.innerText = sum;
});

approveOptExpensesBtn.addEventListener('click', function () {
    let sum = "";
    for (let i = 0; i < optExpenses.length; i++) {
        let opt = optExpenses[i].value;
        
        if (typeof(opt) === "string" && opt && opt.length <= 50) {
            console.log("done");
            appData.optionalExpences[i] = opt;
            sum += opt + ", ";
        }
    }
    optExpensesValue.innerText = sum.slice(0, -2);
});

calculateBtn.addEventListener('click', function () {
    appData.moneyPerDay = ((appData.budget - +expensesValue.innerText) / 30).toFixed();
    daybudgetValue.innerText = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.innerText = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        levelValue.innerText = "Средний уровень достатка";
    } else if (appData.moneyPerDay >= 2000) {
        levelValue.innerText = "Высокий уровень достатка";
    } else {
        levelValue.innerText = "Произошла ошибка";
    }
});

income.addEventListener('change', function () {
    let items = income.value;
    appData.income = items.split(", ");
    incomeValue.innerText = appData.income;
});

savings.addEventListener('change', function () {
    (savings.checked) ? appData.savings = true: appData.savings = false;
    savingsCalc();
});

sum.addEventListener('input', function () {
    savingsCalc();
});

percent.addEventListener('input', function () {
    savingsCalc();
});

function savingsCalc() {
    if (appData.savings == true) {
        let save = +sum.value,
            perc = +percent.value;

        appData.monthIncome = save / 100 / 12 * perc;
        appData.yearIncome = save / 100 * perc;
        
        monthsavingsValue.innerText = appData.monthIncome.toFixed(1);
        yearsavingsValue.innerText = appData.yearIncome.toFixed(1);
    } else {
        monthsavingsValue.innerText = "";
        yearsavingsValue.innerText = "";
    }
}

let appData = {
        budget: money,
        timeData: time,
        expences: {},
        optionalExpences: {},
        income: [],
        savings: false,
    };

let enableBtnColor = "linear-gradient(#ffbd75, #ff964b)",
    disableBtnColor = "linear-gradient(#d0cdcb, #867c75)";

approveExpensesBtn.disabled = true;
approveOptExpensesBtn.disabled = true;
calculateBtn.disabled = true;

approveExpensesBtn.style.background = disableBtnColor;
approveOptExpensesBtn.style.background = disableBtnColor;
calculateBtn.style.background = disableBtnColor;

expenses.forEach(function (item) {
    item.addEventListener('input', function () {
        if ( (expenses[0].value && expenses[1].value) || (expenses[3].value && expenses[4]).value ) {
            approveExpensesBtn.style.background = enableBtnColor;
            approveExpensesBtn.disabled = false;
        } else {
            expensesValue.innerText = "";
            approveExpensesBtn.style.background = disableBtnColor;
            approveExpensesBtn.disabled = true;
        }
    });
});

optExpenses.forEach(function (item) {
    item.addEventListener('input', function () {
        if ( optExpenses[0].value || optExpenses[1].value || optExpenses[2].value ) {
            approveOptExpensesBtn.style.background = enableBtnColor;
            approveOptExpensesBtn.disabled = false;
        } else {
            optExpensesValue.innerText = "";
            approveOptExpensesBtn.style.background = disableBtnColor;
            approveOptExpensesBtn.disabled = true;
        }
    });
});