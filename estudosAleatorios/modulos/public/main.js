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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math */ \"./js/modules/math.js\");\n// import {\n//   somar,\n//   subtrair\n// } from './modules/math'; // Chama cada função de maneira individual.\n\n // Chama todos os pacotes do módulo, importante notar que é necessário atribuir um apelito ao *\n\n\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sum(20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sub(20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.div(10, 0));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.mul(20, 10));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.pow(4, 2));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.sqr(4, 2));\nconsole.log(_modules_math__WEBPACK_IMPORTED_MODULE_0__.equ1(4, 2, 6));\n\n//# sourceURL=webpack://modulos/./js/main.js?");

/***/ }),

/***/ "./js/modules/math.js":
/*!****************************!*\
  !*** ./js/modules/math.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ somar),\n/* harmony export */   \"sub\": () => (/* binding */ subtrair),\n/* harmony export */   \"mul\": () => (/* binding */ multiplicar),\n/* harmony export */   \"div\": () => (/* binding */ dividir),\n/* harmony export */   \"pow\": () => (/* binding */ potenciar),\n/* harmony export */   \"sqr\": () => (/* binding */ radiciar),\n/* harmony export */   \"equ1\": () => (/* binding */ equacaoDoPrimeiroGrau)\n/* harmony export */ });\n// Início | Operações Básicas\nfunction somar(a, b) {\n  return a + b;\n};\n\nfunction subtrair(a, b) {\n  return a - b;\n};\n\nfunction multiplicar(a, b) {\n  return a * b\n};\n\nfunction dividir(a,b) {\n  return a / b\n};\n\nfunction potenciar(a, b) {\n  return Math.pow(a, b)\n}\n\nfunction radiciar(a, b) {\n  return Math.pow(a, 1/b)\n};\n\n// Fim | Operações Básicas\n\n// Início | Equações Básicos\n\nfunction equacaoDoPrimeiroGrau(a, x, b){\n  return multiplicar(a, x) + b\n};\n\n\n// Fim | Equações Básicos\n\n\n\n\n//# sourceURL=webpack://modulos/./js/modules/math.js?");

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