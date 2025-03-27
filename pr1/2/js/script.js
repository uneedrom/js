'use strict';

const lastName = prompt('Введите вашу фамилию:');
const nameM = prompt('Введите ваше имя:');
const middleName = prompt('Введите ваше отчество:');

console.log('Фамилия:', lastName);
console.log('Имя:', nameM);
console.log('Отчество:', middleName);

const isTrue = confirm(`Проверьте правильность введенных данных:\nФамилия: ${lastName}\nИмя: ${nameM}\nОтчество: ${middleName}`);
console.log('Результат:', isTrue);