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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Set the scroll speed factor (adjust this value to control the scroll speed)\nvar scrollSpeedFactor = 4; // Adjust as needed\nvar currentBreakCount = 0;\nvar currentCount = 0;\n/**\r\n * To handle scroll event\r\n * @param {*} event - event parameter.\r\n */\n\nvar allowScrolling = false;\nvar activateScroll = false;\nfunction handleScroll(event, settings) {\n  if (!allowScrolling) {\n    event.preventDefault(); // Prevent the default scroll behavior\n  } else {\n    var currentScrollTop = window.scrollY || document.documentElement.scrollTop;\n    var delta = event.deltaY * settings; // Adjust the scroll speed\n    window.scrollTo({\n      top: currentScrollTop + delta,\n      behavior: \"smooth\" // Use smooth scrolling for a nicer effect\n    });\n  }\n}\n\nfunction isClassVisible(className, count, callback) {\n  var elements = document.querySelectorAll(className);\n  if (elements.length === 0) {\n    return false; // Return false if no elements with the class exist\n  }\n\n  var options = {\n    threshold: 0.85 // Custom threshold for 75% visibility\n  };\n\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        callback(entry.target);\n        // Perform your action when an element with the class is visible here\n      }\n    });\n  }, options);\n  elements.forEach(function (element) {\n    observer.observe(element);\n  });\n}\n\n/**\r\n * Set scroll speed function\r\n * @param {*} getOption - scroll speed option.\r\n */\n\nfunction setSpeed(getOption) {\n  switch (getOption) {\n    case \"slow\":\n      return 1;\n    case \"fast\":\n      return 5;\n    case \"default\":\n      return 4;\n    default:\n      return null;\n  }\n}\n\n/**\r\n * Scroller function\r\n * @param {*} options - event options\r\n */\n\nfunction scrollerFx(options) {\n  var _this = this;\n  // Default options\n  var defaults = {\n    scrollSpeed: scrollSpeedFactor,\n    // You can define the default scroll speed\n    breaks: [] // An array to store class names for breaks\n  };\n\n  var getSpeed = setSpeed(options[\"scrollSpeed\"]);\n  // Merge user options with defaults\n  var settings = Object.assign({}, defaults, options);\n  // Function to initialize the library\n  this.init = function () {\n    // Add the wheel event listener to the window\n    document.body.style.overflow = \"hidden\";\n    window.addEventListener(\"wheel\", function (event) {\n      handleScroll(event, getSpeed ? getSpeed : options[\"scrollSpeed\"]);\n    }, {\n      passive: false\n    });\n    // Find all elements with the provided class names in the breaks array\n    settings.breaks.forEach(function (breakClassName, i) {\n      var element = document.querySelector(\"\".concat(breakClassName));\n      if (!element) {\n        return;\n      }\n      currentBreakCount += 1;\n      element.classList.add(\"sc-paused\");\n      isClassVisible(breakClassName, settings.breaks.length, function (visibleElement) {\n        activateScroll = false;\n        visibleElement.classList.remove(\"sc-paused\");\n        element.addEventListener(\"animationend\", function () {\n          // Your custom code when an element with the class is clicked\n          element.classList.add(\"sc-finished\");\n          allowScrolling = true;\n        });\n        element.addEventListener(\"animationstart\", function () {\n          allowScrolling = false;\n        });\n      });\n    });\n  };\n\n  // Automatically initialize the library when the DOM is ready\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    _this.init();\n  });\n}\nif (window) window.scrollerFx = scrollerFx;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollerFx);\n\n//# sourceURL=webpack://scrollerfx/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;