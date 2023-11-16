/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("scrollerfx", [], factory);
	else if(typeof exports === 'object')
		exports["scrollerfx"] = factory();
	else
		root["scrollerfx"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities/index.js\");\n\r\n\r\n// Set the scroll speed factor (adjust this value to control the scroll speed)\r\nconst scrollSpeedFactor = 4; // Adjust as needed\r\nlet currentBreakCount = 0;\r\nlet currentCount = 0;\r\nlet touchStartY;\r\n/**\r\n * To handle scroll event\r\n * @param {*} event - event parameter.\r\n */\r\n\r\nlet allowScrolling = false;\r\nlet activateScroll = false;\r\n// function handleScroll(event, settings) {\r\n//   if (!allowScrolling) {\r\n//     event.preventDefault(); // Prevent the default scroll behavior\r\n//   } else {\r\n//     const currentScrollTop =\r\n//       window.scrollY || document.documentElement.scrollTop;\r\n//     const delta = event.deltaY * settings; // Adjust the scroll speed\r\n//     window.scrollTo({\r\n//       top: currentScrollTop + delta,\r\n//       behavior: \"smooth\", // Use smooth scrolling for a nicer effect\r\n//     });\r\n//   }\r\n// }\r\n\r\nfunction isClassVisible(className, count, callback) {\r\n  const elements = document.querySelectorAll(className);\r\n  if (elements.length === 0) {\r\n    return false; // Return false if no elements with the class exist\r\n  }\r\n\r\n  const options = {\r\n    threshold: 0.85, // Custom threshold for 75% visibility\r\n  };\r\n\r\n  const observer = new IntersectionObserver((entries) => {\r\n    entries.forEach((entry) => {\r\n      if (entry.isIntersecting) {\r\n        callback(entry.target);\r\n        // Perform your action when an element with the class is visible here\r\n      }\r\n    });\r\n  }, options);\r\n\r\n  elements.forEach((element) => {\r\n    observer.observe(element);\r\n  });\r\n}\r\n\r\n/**\r\n * Set scroll speed function\r\n * @param {*} getOption - scroll speed option.\r\n */\r\n\r\nfunction setSpeed(getOption) {\r\n  switch (getOption) {\r\n    case \"slow\":\r\n      return 1;\r\n    case \"fast\":\r\n      return 5;\r\n    case \"default\":\r\n      return 4;\r\n    default:\r\n      return null;\r\n  }\r\n}\r\n\r\n/**\r\n * Scroller function\r\n * @param {*} options - event options\r\n */\r\n\r\nfunction scrollerFx(options) {\r\n  // Default options\r\n  const defaults = {\r\n    scrollSpeed: scrollSpeedFactor, // You can define the default scroll speed\r\n    breaks: [], // An array to store class names for breaks\r\n  };\r\n  let getSpeed = setSpeed(options[\"scrollSpeed\"]);\r\n  // Merge user options with defaults\r\n  const settings = Object.assign({}, defaults, options);\r\n  // Function to initialize the library\r\n  this.init = function () {\r\n    // Add the wheel event listener to the window\r\n    document.body.style.overflow = \"hidden\";\r\n    window.addEventListener(\r\n      \"wheel\",\r\n      function (event) {\r\n        (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.handleScroll)(\r\n          event,\r\n          getSpeed ? getSpeed : options[\"scrollSpeed\"],\r\n          allowScrolling,\r\n          event.deltaY\r\n        );\r\n      },\r\n      {\r\n        passive: false,\r\n      }\r\n    );\r\n\r\n    window.addEventListener(\"touchstart\", function (event) {\r\n      // Store the initial touch position\r\n      touchStartY = event.touches[0].clientY;\r\n      console.log(touchStartY, \"tap\");\r\n    });\r\n\r\n    window.addEventListener(\"touchmove\", function (event) {\r\n      // Calculate the distance moved\r\n      const deltaY = touchStartY - event.touches[0].clientY;\r\n      console.log(deltaY, event);\r\n      // Pass the distance to your scroll handler function\r\n      (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.handleScroll)(\r\n        event,\r\n        getSpeed ? getSpeed : options[\"scrollSpeed\"],\r\n        allowScrolling,\r\n        deltaY\r\n      );\r\n\r\n      // Prevent default scrolling behavior\r\n      event.preventDefault();\r\n    });\r\n\r\n    window.addEventListener(\"touchend\", function () {\r\n      // Clear the touch start position\r\n      touchStartY = null;\r\n    });\r\n\r\n    // Find all elements with the provided class names in the breaks array\r\n    settings.breaks.forEach((breakClassName, i) => {\r\n      const element = document.querySelector(`${breakClassName}`);\r\n      if (!element) {\r\n        return;\r\n      }\r\n      currentBreakCount += 1;\r\n      element.classList.add(\"sc-paused\");\r\n      isClassVisible(\r\n        breakClassName,\r\n        settings.breaks.length,\r\n        (visibleElement) => {\r\n          activateScroll = false;\r\n          visibleElement.classList.remove(\"sc-paused\");\r\n          element.addEventListener(\"animationend\", () => {\r\n            // Your custom code when an element with the class is clicked\r\n            element.classList.add(\"sc-finished\");\r\n            allowScrolling = true;\r\n          });\r\n\r\n          element.addEventListener(\"animationstart\", () => {\r\n            allowScrolling = false;\r\n          });\r\n        }\r\n      );\r\n    });\r\n  };\r\n\r\n  // Automatically initialize the library when the DOM is ready\r\n  document.addEventListener(\"DOMContentLoaded\", () => {\r\n    this.init();\r\n  });\r\n}\r\n\r\nif (window) window.scrollerFx = scrollerFx;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollerFx);\r\n\n\n//# sourceURL=webpack://scrollerfx/./src/index.js?");

/***/ }),

/***/ "./src/utilities/handlescroll.js":
/*!***************************************!*\
  !*** ./src/utilities/handlescroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleScroll: () => (/* binding */ handleScroll)\n/* harmony export */ });\nfunction handleScroll(event, settings, allowScrolling, customDeltaY) {\r\n  if (!allowScrolling) {\r\n    event.preventDefault(); // Prevent the default scroll behavior\r\n  } else {\r\n    const currentScrollTop =\r\n      window.scrollY || document.documentElement.scrollTop;\r\n    const delta = customDeltaY * settings; // Adjust the scroll speed\r\n    window.scrollTo({\r\n      top: currentScrollTop + delta,\r\n      behavior: \"smooth\", // Use smooth scrolling for a nicer effect\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://scrollerfx/./src/utilities/handlescroll.js?");

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleScroll: () => (/* reexport safe */ _handlescroll__WEBPACK_IMPORTED_MODULE_0__.handleScroll)\n/* harmony export */ });\n/* harmony import */ var _handlescroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlescroll */ \"./src/utilities/handlescroll.js\");\n\r\n\n\n//# sourceURL=webpack://scrollerfx/./src/utilities/index.js?");

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
/******/ 	return __webpack_exports__;
/******/ })()
;
});