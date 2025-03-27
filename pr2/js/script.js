'use strict';

// 1
let admin, name;
name = "Джон";
admin = name;
alert(admin);

// 2
const city = prompt('название города:');
const year = parseInt(prompt('год основания:'));
const pop = parseInt(prompt('население города:'));
const now = new Date().getFullYear();
const age = now - year;

alert(`Городу ${city} исполнилось ${age} лет с момента его образования. Население - ${pop} человек`);

// 3
const r = parseFloat(prompt('радиус круга:'));
const s = Math.PI * Math.pow(r, 2);
alert(`Площадь круга с радиусом ${r} равна ${s}`);

// 4
const x = parseFloat(prompt('первое число:'));
const y = parseFloat(prompt('второе число:'));

alert(`Сумма: ${x + y}\nРазность: ${x - y}\nЧастное: ${x / y}\nПроизведение: ${x * y}`);