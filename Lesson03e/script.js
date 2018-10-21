// 1 
let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substring(1);

console.log(str);

// 2
let symb = "-";
for (let i = 0; i < str.length; i++) {
    let foundPos = str.indexOf(symb, i);
    if (foundPos != -1) {
        i = foundPos;
        str = str.substring(0, foundPos) + " " + str.substring(foundPos + 1);
    } else {
        break;
    }
}
console.log(str);

// 3
let word = "легким",
    foundWord,
    startPos,
    endPos;

startPos = str.indexOf(word);
endPos = str.indexOf(word) + word.length;
foundWord = str.substring(startPos, endPos);
foundWord = foundWord.slice(0, -2) + "оо";

console.log(foundWord);

// 4
let arr = [20, 33, 1, "Человек", 2, 3],
    total = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) !== "number") continue;
    total += (arr[i]) ** 3;
    // console.log(arr[i] ** 3 + " | " + total);
}

console.log(Math.sqrt(total));

// 5 
function taskFive(arg) {
    // 5.1
    if (typeof(arg) == "string") {
        alert("Введена строка");
    } 
    // 5.2
    arg = arg.trim();
    // 5.3
    if (arg.length > 50) {
        arg = arg.substring(0,50) + "...";
    }
    return arg;
}
// console.log(taskFive("абвгдеёжзийклмнопрстуфхцчшщъыьэюяабвгдеёжзийклмноп"));