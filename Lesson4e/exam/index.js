let start, end;

function sum(number) {
    let total = 0;
    for (let i = 1; i < number / 2 + 1; i++) {
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
 * 
 * s1 - делитель i
 * s2 - делитель s1
 */
function getFriendlyNumbers(start, end) {

    if (start && end && 0 < start && start <= end && typeof(start + end) !== "string") {
        let mass = [];

        for (let i = start; i <= end; i++) {
            let s1 = sum(i);

            if (start < s1 && s1 <= end) {
                let s2 = sum(s1);

                if (s2 == i && s1 != i && i < s1) {
                    mass.push([i, s1]);
                }
            } else {
                continue;
            }
        }
        return mass;
    } else {
        return false;
    }
}

module.exports = {
    firstName: 'Anastas',
    secondName: 'Mironov',
    task: getFriendlyNumbers
};