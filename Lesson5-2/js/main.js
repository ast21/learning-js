// 2.1
let start = document.getElementById('start');
// console.log(start.classList);

// 2.2
let allDivs = document.querySelectorAll('div'),
    values = [];
// цикл рухнет когда на странице появится элемент с двумя классами
allDivs.forEach(function (item){
    if (item.classList.toString().indexOf('-value') > -1) {
        values.push(item);
    }
});
// console.log(values);

// 2.3
let inputs = document.querySelectorAll('.expenses-item');
// console.log(inputs);


// 2.4
let approveIncomes = document.getElementsByTagName('button')[0],
    approveExpences = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2];
// console.log([approveIncomes, approveExpences, calculate]);

// 2.5
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
// console.log(optionalExpenses);

// 2.6
let income = document.querySelectorAll('#income'), 
    savings = document.querySelectorAll('#savings'),
    sum = document.querySelectorAll('#sum'),
    percent = document.querySelectorAll('#percent'),
    year = document.querySelectorAll('.year-value'),
    month = document.querySelectorAll('.month-value'),
    day = document.querySelectorAll('.day-value');
// console.log([income, savings, sum, percent, year, month, day]);