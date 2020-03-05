// Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве firstDigit)
// - десятки (в свойстве secondDigit)
// - сотни (в свойстве thirdDigit)
// Например, для числа 45 мы должны получить следующий объект:
//
//     ```
// {
//   firstDigit: 5,
//   secondDigit: 4,
//   thirdDigit: 0,
// }
// ```
//
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

'use Strict'

//Задание 1

let max = 999;
let digit = {
    number: Math.round(Math.random() * max(prompt('Введите число от 0 до 999'))),
    first: 0,
    second: 0,
    third: 0,
};
if (numberDigit <= 9){
    unitsDigit = numberDigit;
} else if (numberDigit <= 999){
    firstDigit = Math.floor(numberDigit % 10);
    secondDigit = Math.floor(numberDigit / 10 % 10);
    thirdDigit = Math.floor(numberDigit / 100 % 10);
}else {
    numberDigit = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);
