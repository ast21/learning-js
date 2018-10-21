'use strict';

let num = 33721,
    summ = 1;

while ( num > 0 ) {
    summ *= num % 10; 
    num = Math.floor(num / 10);
}
console.log(summ); 

summ = summ ** 3;
alert(summ.toString().substring(0,2));