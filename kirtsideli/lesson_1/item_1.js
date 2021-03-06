// Объясните, почему код даёт именно такие результаты?

let a = 1;
c = ++a;
alert(c); // 2
//Ответ: 2, потому что ++a - это префикс, он увеличивает значение и после возвращает уже с обновлённым значением

let b = 1;
d = b++;
alert(d); // 1
//Ответ: 1, потому что b++ - это постфикс, он возвращает старое значение и только после этого производит увелечение значения

let a = 1;
c = 2+ ++a;
alert(c); // 5
//Ответ не верный, потому что ++a и это префикс, возвращаем с обновлённым значением, прибавляем 2 и получаем верный ответ - 4!

let b = 1;
d = 2+ b++;
alert(d); // 4
//Ответ не верный, потому что a++ это постфикс, возвращаем старое значение, прибавляем 2 и получаем верный ответ - 3!

alert(a); // 3
//Прибавляем 1 из первого задания и из третьего и получаем ответ: 3

alert(b); // 3
//Прибавляем 1 из второго задания и из четвёртого и получаем ответ: 3
