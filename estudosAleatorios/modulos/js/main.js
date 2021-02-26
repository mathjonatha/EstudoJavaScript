// import {
//   somar,
//   subtrair
// } from './modules/math'; // Chama cada função de maneira individual.

import * as math from './modules/math' // Chama todos os pacotes do módulo, importante notar que é necessário atribuir um apelito ao *


console.log(math.sum(20, 10));
console.log(math.sum(-20, 10));
console.log(math.sum(-20, ));

console.log(math.sub(20, 10));
console.log(math.sub(20, -10));

console.log(math.div(21433, 5));
console.log(math.div(10, 0));
console.log(math.div('a', 2));
console.log(math.div('🎇', 2));
console.log(math.div('🎇', 0));
console.log(math.div('🎇', 0));

console.log(math.mul(20, 10));
console.log(math.mul(20, 1/0));

console.log(math.sqr(4, 1));

console.log(math.equ1(4, 2, 6));

console.log(math.pow(4, 2));
console.log(math.pow(10,'🎇'));
console.log(math.pow(-0.9, 3));
console.log(math.pow(-0.9, 1/0));
console.log(math.pow(0, 1));


