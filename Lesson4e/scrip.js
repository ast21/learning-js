/**
 * Числа называются дружественными, 
 * если каждое из них равно сумме делителей другого, 
 * не считая самого числа.
 * 
 * то есть 8 и 9 являются дружественными, поскольку делители
 * для 8 это 2 и 4, сумма 2+4=6, 
 * для 9 это 3 и 3, сумма 3+3=6, 
 * 6 = 6 , итого 8 и 9 дружественные числа
 */

let start = 1,
    end = 20,
    founded = false,
    total = 0,
    sum,
    mass = {
        null: null
    };

function getFriendlyNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        sum = sumdel(i);
        if (sum == 0) continue;
        
        for (let key in mass) {
            if (key == sum) {
                mass[key]++;
                founded = true;
                break;
            }
        }
        if (founded == true) {
            founded = false;
        } else {
            mass[sum] = 1;
        }
    }
    console.log(mass);

    for (let key in mass) {
        if (mass[key] > 1) {
            total += mass[key];
            // console.log("Найдено дружественных чисел: " + total);
        }
    }
    return total;
}

// возвращает сумму делителей
function sumdel(num) {
    let summ = 0;
    for (let i = 1; i <= num / 2; i++) {
        // если делится
        if (num % i == 0) {
            summ += i; // суммируем
            if (num / i == i) summ += i; // если квадрат, то добавляем еще раз
            console.log("у числа " + num + " сумма делителей = " + summ);
        }
    }
    return summ;
}

console.log("\nНайдено дружественных чисел: " + getFriendlyNumbers(start, end));