/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math */ \"./js/modules/math.js\");\n// import {\n//   somar,\n//   subtrair\n// } from './modules/math'; // Chama cada função de maneira individual.\n\n // Chama todos os pacotes do módulo, importante notar que é necessário atribuir um apelito ao *\n\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sum(20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sum(-20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sum(-20, ));\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sub(20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sub(20, -10));\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div(21433, 5));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div(10, 0));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div('a', 2));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div('🎇', 2));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div('🎇', 0));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div('🎇', 0));\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.mul(20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.mul(20, 1/0));\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sqr(4, 1));\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.equ1(4, 2, 6));\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.pow(4, 2));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.pow(10,'🎇'));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.pow(-0.9, 3));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.pow(-0.9, 1/0));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.pow(0, 1));\n\n\n\n\n//# sourceURL=webpack://modulos/./js/main.js?");

/***/ }),

/***/ "./js/modules/math.js":
/*!****************************!*\
  !*** ./js/modules/math.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ somar),\n/* harmony export */   \"sub\": () => (/* binding */ subtrair),\n/* harmony export */   \"mul\": () => (/* binding */ multiplicar),\n/* harmony export */   \"div\": () => (/* binding */ dividir),\n/* harmony export */   \"pow\": () => (/* binding */ potenciar),\n/* harmony export */   \"sqr\": () => (/* binding */ radiciar),\n/* harmony export */   \"equ1\": () => (/* binding */ equacaoDoPrimeiroGrau)\n/* harmony export */ });\n// Início | Operações Básicas\nfunction somar(parcela_a, parcela_b) {\n  if ((parcela_a + parcela_b) == Infinity) {\n    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'\n  } else if (isNaN(parcela_a + parcela_b)) {\n    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'\n  } else{\n    return parcela_a + parcela_b;\n  }\n};\n\nfunction subtrair(minuendo, subtraendo) {\n  if ((minuendo - subtraendo) == Infinity) {\n    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'\n  } else if (isNaN(minuendo - subtraendo)) {\n    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'\n  } else{\n  return minuendo - subtraendo;\n  }\n};\n\nfunction multiplicar(fator_a, fator_b) {\n  if ((fator_a * fator_b) == Infinity) {\n    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'\n  } else if (isNaN(fator_a * fator_b)) {\n    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'\n  } else{\n  return fator_a * fator_b;\n  }\n};\n\nfunction dividir(dividendo, divisor) {\n  if ((dividendo / divisor) == Infinity) {\n    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'\n  } else if (isNaN(dividendo / divisor)) {\n    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'\n  } else {\n    return dividendo / divisor;\n  }\n};\n\nfunction potenciar(base, expoente) {\n    if (expoente == Infinity || expoente == 0) {\n    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'\n  } else if (base == 0) {\n    return 'A base tem que ser diferente de zero, tente novamente.'\n  } else if (isNaN(base ** expoente)) {\n    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'\n  } else {\n    return base ** expoente;\n  }\n};\n\nfunction radiciar(radicando, indice) {\n  if (indice == 0 || indice == 1) {\n    return 'O índice não pode ser zero ou um, tente novamente.'\n  } else if (isNaN(radicando ** (1 / indice))) {\n    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'\n  } else {\n    return  radicando ** (1 / indice);\n  }\n};\n\n// Fim | Operações Básicas\n\n// Início | Equações Básicos\n\nfunction equacaoDoPrimeiroGrau(a, x, b) {\n\n  return multiplicar(a, x) + b\n};\n\n// Fim | Equações Básicos\n\n\n\n\n\n//# sourceURL=webpack://modulos/./js/modules/math.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;