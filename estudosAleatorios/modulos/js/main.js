// import {
//   somar,
//   subtrair
// } from './modules/math'; // Chama cada função de maneira individual.

import * as math from './modules/math' // Chama todos os pacotes do módulo, importante notar que é necessário atribuir um apelito ao *


console.log(math.sum(20, 10));
console.log(math.sub(20, 10));
console.log(math.div(10, 0));
console.log(math.mul(20, 10));
console.log(math.pow(4, 2));
console.log(math.sqr(4, 2));
console.log(math.equ1(4, 2, 6));