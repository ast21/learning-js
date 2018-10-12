// 2.1
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    newMenuItem = document.createElement('li');

menuItem[1].innerHTML = 'Второй пункт';
menuItem[2].innerHTML = 'Третий пункт';

newMenuItem.classList.add('menu-item');
menu.appendChild(newMenuItem);
newMenuItem.innerHTML = 'Пятый пункт';

// 2.2
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

// 2.3
let title = document.querySelector('#title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// 2.4
let column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');
column[1].removeChild(adv);

// 2.5
let answerToPrompt = document.querySelector('#prompt');
/* без этой функции после prompt страница не всегда загружается */
answerToPrompt.addEventListener('click', () => {
    let answer = prompt("какого Ваше отношение к технике apple?", "");
    answerToPrompt.innerHTML = answer;
    answerToPrompt.style.fontSize = '50px';
});