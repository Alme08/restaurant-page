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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\nconst content = document.querySelector('#content');\n\nwindow.addEventListener('click', e=>{\n    switch (e.target.id) {\n        case 'home':\n            (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)(content);\n            break;\n\n        case 'menu':\n            (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.displayMenu)(content);\n            break;\n        \n        case 'contact':\n            (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.displayContact)(content);\n            break;\n        default:\n            break;\n    }\n})\n\n;(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)(content);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContact\": () => (/* binding */ displayContact)\n/* harmony export */ });\nconst displayContact = (content)=>{\n    content.innerHTML= `\n    <div class=\"contact\">\n            <nav class=\"nav\">\n                <a href=\"#\">NO<br><span>RI</span></a>\n                <ul>\n                    <li><button id=\"home\">Home</button></li>\n                    <li><button id=\"menu\">Menu</button></li>\n                    <li><button id=\"contact\">Contact</button></li>\n                    <li><button id=\"about\">About us</button></li>\n                </ul>\n            </nav>\n            <div>\n                <h1>Say <span>hello!</span></h1>\n                <form action=\"\">\n                    <div>\n                        <input type=\"text\" placeholder=\"First Name\">\n                        <input type=\"text\" placeholder=\"Last Name\">\n                    </div>\n    \n                    <input type=\"email\" placeholder=\"E-mail\">\n                    <div>\n                        <textarea name=\"\" id=\"\" cols=\"0\" rows=\"0\" placeholder=\"How we can help you?\"></textarea>\n\n                    </div>\n                </form>\n            </div>\n\n            <footer>\n                <ul>\n                    <li><button id=\"home\">Home</button></li>\n                    <li><button id=\"menu\">Menu</button></li>\n                    <li><button id=\"contact\">Contact us</button></li>\n                </ul>\n                <div>\n                    <hr>\n                </div>\n            </footer>\n        </div>\n    `\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHome\": () => (/* binding */ displayHome)\n/* harmony export */ });\nconst displayHome = (content) =>{\n    content.innerHTML = `\n    <div class=\"hero-container\">\n            <nav class=\"nav\">\n                <a href=\"#\">NO<br><span>RI</span></a>\n                <ul>\n                    <li><button id=\"home\">Home</button></li>\n                    <li><button id=\"menu\">Menu</button></li>\n                    <li><button id=\"contact\">Contact</button></li>\n                    <li><button id=\"about\">About us</button></li>\n                </ul>\n            </nav>\n            <main>\n                <div>\n                    <p>ラーメン</p>\n                    <h1>A BOWL OF LOVE FROM <span>JAPANESE CUISINE</span> FOR YOU</h1>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error minima itaque perspiciatis illo rerum incidunt nulla eaque ex, pariatur delectus odio eligendi aperiam adipisci molestiae ab deserunt autem. Animi.</p>\n                    <button>Order Now</button>\n                    \n                </div>\n                <img src=\"assets/Ramen infographics.png\" alt=\"Ramen\">\n            </main>\n            <footer>\n                <ul>\n                    <li><button id=\"home\">Home</button></li>\n                    <li><button id=\"menu\">Menu</button></li>\n                    <li><button id=\"contact\">Contact us</button></li>\n                </ul>\n                <div>\n                    <hr>\n                </div>\n            </footer>\n        </div>\n    `\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMenu\": () => (/* binding */ displayMenu)\n/* harmony export */ });\nconst displayMenu = (content) =>{\n    content.innerHTML = `\n    <div class=\"menu-container\">\n            <nav class=\"nav\">\n                <a href=\"#\">NO<br><span>RI</span></a>\n                <ul>\n                    <li><button id=\"home\">Home</button></li>\n                    <li><button id=\"menu\">Menu</button></li>\n                    <li><button id=\"contact\">Contact</button></li>\n                    <li><button id=\"about\">About us</button></li>\n                </ul>\n            </nav>\n            <div class=\"menu\">\n                <h1>MENU</h1>\n                <div class=\"card\">\n                    <h2>BOWLS</h2>\n                    <div>\n                        <h3>Takoyaki - $12</h3>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n                    </div>\n                    <div>\n                        <h3>Kinoko </br> bibimbap - $15</h3>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, alias?</p>\n                    </div>\n                    <i class=\"fa-brands fa-gitkraken\"></i>\n                </div>\n                <h2><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i></h2>\n                <div class=\"card\">\n                    <h2>DISHES</h2>\n                    <div>\n                        <h3>Salmon </br> Tataki - $20</h3>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n                    </div>\n                    <div>\n                        <h3>Karahage - $10</h3>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, alias?</p>\n                    </div>\n                    <i class=\"fa-solid fa-fish-fins\"></i>\n                </div>\n                <h2>DRINKS <i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i><i class=\"fa-solid fa-xmark\"></i></h2>\n                <div class=\"drinks\">\n                    <h3>beers</h3>\n                    <ul>\n                        <li><span>Lorem, ipsum dolor - $6</span></li>\n                        <li><span>Lorem, ipsum - $6</span></li>\n                        <hr>\n                        <li>Lorem, ipsum dolor - <span>$4</span></li>\n                        <li>Lorem, ipsum dolor - <span>$4</span></li>\n                        <li>Lorem, ipsum dolor - <span>$4</span></li>\n                        <li>Lorem, ipsum dolor - <span>$4</span></li>\n                        <li>Lorem, ipsum dolor - <span>$4</span></li>\n                    </ul>\n                    <h3>wine</h3>\n                    <div>\n                        <p>\n                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis suscipit - <span>$20</span>\n                        </p>\n                        <p>\n                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis suscipit - <span>$20</span>\n                        </p>\n                        <p>\n                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis suscipit - <span>$20</span>\n                        </p>\n\n                    </div>\n                </div>\n            </div>\n            <footer>\n                <ul>\n                    <li><button id=\"home\">Home</button></li>\n                    <li><button id=\"menu\">Menu</button></li>\n                    <li><button id=\"contact\">Contact us</button></li>\n                </ul>\n                <div>\n                    <hr>\n                </div>\n            </footer>\n        </div>\n    `\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;