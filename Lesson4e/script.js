// 1

let start = 220,
    end = 10000,
    iSum, 
    jSum,
    mass = [];


function sum(number) {
    let total = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            total+= i; 
        }
    }
    return total;
}

/**
 * Числа называются дружественными, 
 * если каждое из них равно сумме делителей другого, 
 * не считая самого числа.
 */
function getFriendlyNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        iSum = sum(i);
        // console.log(i + " | " + iSum);
        if (iSum >= start && iSum <= end) {
            jSum = sum(iSum);
        } else {
            continue;
        }
        // console.log(iSum + " | " + jSum);
        if (jSum == i && iSum != i && i < iSum) {
            mass.push([i, iSum]);
            // console.log('Числа ' + i + ' и ' + iSum + ' - дружественные');
        }
    }
    return mass;
}

console.log(getFriendlyNumbers(start, end));