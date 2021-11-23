/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component-js/landing-page.js":
/*!******************************************!*\
  !*** ./src/component-js/landing-page.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

    var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

doc_query;
window.addEventListener("DOMContentLoaded", function () {
  var baybayinLogo = doc_query(".baybayin__logo"); // <- ganito

  var circleVector = doc_query(".circle__vector");
  var handGestures = doc_query_all(".hand__gestures");
  var bannerTwoImage = doc_query_all(".banner__2-image");
  var cardLinkIcon = doc_query_all(".card__link-icon"); // Banner 1 images

  for (var i = 0; i < handGestures.length; i++) {
    handGestures[i].src = "../assets/landing-page/banner-1/hand_gest-".concat(i + 1, ".svg");
    handGestures[i].classList.add("z-index-1");
  } //Banner 2


  for (var _i = 0; _i < bannerTwoImage.length; _i++) {
    bannerTwoImage[_i].src = "../assets/landing-page/banner-2/icon".concat(_i + 1, ".svg");
  } //Banner 3


  for (var _i2 = 0; _i2 < cardLinkIcon.length; _i2++) {
    cardLinkIcon[_i2].src = "../assets/landing-page/banner-3/card-link-icon-".concat(_i2 + 1, ".svg");
  }

  baybayinLogo.src = "../assets/logo/logo.png";

  if (circleVector !== null) {
    circleVector.src = "../assets/landing-page/banner-1/Ellipse_1.svg";
  }
});

/***/ }),

/***/ "./src/component-js/learning-module-2.js":
/*!***********************************************!*\
  !*** ./src/component-js/learning-module-2.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image-l2");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "../assets/learning-module-2/image-".concat(i + 1, ".jpg");
  }
});

/***/ }),

/***/ "./src/component-js/learning-module.js":
/*!*********************************************!*\
  !*** ./src/component-js/learning-module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image");
  var baybayinCultureAsset = doc_query(".baybayin__culture-asset");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "../assets/learning-module/baybayin-def-".concat(i + 1, ".jpg");
  }

  if (baybayinCultureAsset !== null) {
    baybayinCultureAsset.src = "../assets/learning-module/culture_asset.jpg";
  }
});

/***/ }),

/***/ "./src/component-js/query_method.js":
/*!******************************************!*\
  !*** ./src/component-js/query_method.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc_query": () => (/* binding */ doc_query),
/* harmony export */   "doc_query_all": () => (/* binding */ doc_query_all)
/* harmony export */ });
var doc_query = function doc_query(class_name) {
  return document.querySelector(class_name);
};
var doc_query_all = function doc_query_all(class_name) {
  return document.querySelectorAll(class_name);
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// CSS
__webpack_require__(/*! ./style.scss */ "./src/style.scss"); // JS


__webpack_require__(/*! ./component-js/landing-page */ "./src/component-js/landing-page.js");

__webpack_require__(/*! ./component-js/learning-module */ "./src/component-js/learning-module.js");

__webpack_require__(/*! ./component-js/learning-module-2 */ "./src/component-js/learning-module-2.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlLTIuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvcXVlcnlfbWV0aG9kLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL3N0eWxlLnNjc3M/MmU4OCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZG9jX3F1ZXJ5LCBkb2NfcXVlcnlfYWxsIH0gPSByZXF1aXJlKFwiLi9xdWVyeV9tZXRob2RcIik7XHJcblxyXG5kb2NfcXVlcnk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmF5YmF5aW5Mb2dvID0gZG9jX3F1ZXJ5KFwiLmJheWJheWluX19sb2dvXCIpOyAvLyA8LSBnYW5pdG9cclxuICBjb25zdCBjaXJjbGVWZWN0b3IgPSBkb2NfcXVlcnkoXCIuY2lyY2xlX192ZWN0b3JcIik7XHJcbiAgY29uc3QgaGFuZEdlc3R1cmVzID0gZG9jX3F1ZXJ5X2FsbChcIi5oYW5kX19nZXN0dXJlc1wiKTtcclxuICBjb25zdCBiYW5uZXJUd29JbWFnZSA9IGRvY19xdWVyeV9hbGwoXCIuYmFubmVyX18yLWltYWdlXCIpO1xyXG4gIGNvbnN0IGNhcmRMaW5rSWNvbiA9IGRvY19xdWVyeV9hbGwoXCIuY2FyZF9fbGluay1pY29uXCIpO1xyXG5cclxuICAvLyBCYW5uZXIgMSBpbWFnZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRHZXN0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaGFuZEdlc3R1cmVzW2ldLnNyYyA9IGAuLi9hc3NldHMvbGFuZGluZy1wYWdlL2Jhbm5lci0xL2hhbmRfZ2VzdC0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5zdmdgO1xyXG4gICAgaGFuZEdlc3R1cmVzW2ldLmNsYXNzTGlzdC5hZGQoXCJ6LWluZGV4LTFcIik7XHJcbiAgfVxyXG5cclxuICAvL0Jhbm5lciAyXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5uZXJUd29JbWFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgYmFubmVyVHdvSW1hZ2VbaV0uc3JjID0gYC4uL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTIvaWNvbiR7aSArIDF9LnN2Z2A7XHJcbiAgfVxyXG5cclxuICAvL0Jhbm5lciAzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkTGlua0ljb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIGNhcmRMaW5rSWNvbltpXS5zcmMgPSBgLi4vYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMy9jYXJkLWxpbmstaWNvbi0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5zdmdgO1xyXG4gIH1cclxuXHJcbiAgYmF5YmF5aW5Mb2dvLnNyYyA9IFwiLi4vYXNzZXRzL2xvZ28vbG9nby5wbmdcIjtcclxuICBpZiAoY2lyY2xlVmVjdG9yICE9PSBudWxsKSB7XHJcbiAgICBjaXJjbGVWZWN0b3Iuc3JjID0gXCIuLi9hc3NldHMvbGFuZGluZy1wYWdlL2Jhbm5lci0xL0VsbGlwc2VfMS5zdmdcIjtcclxuICB9XHJcbn0pO1xyXG4iLCJjb25zdCB7IGRvY19xdWVyeSwgZG9jX3F1ZXJ5X2FsbCB9ID0gcmVxdWlyZShcIi4vcXVlcnlfbWV0aG9kXCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGJheWJheWluSW50cm9JbWFnZXMgPSBkb2NfcXVlcnlfYWxsKFwiLmJheWJheWluX19kZWYtaW1hZ2UtbDJcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXliYXlpbkludHJvSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYXliYXlpbkludHJvSW1hZ2VzW2ldLnNyYyA9IGAuLi9hc3NldHMvbGVhcm5pbmctbW9kdWxlLTIvaW1hZ2UtJHtcclxuICAgICAgaSArIDFcclxuICAgIH0uanBnYDtcclxuICB9XHJcbn0pO1xyXG4iLCJjb25zdCB7IGRvY19xdWVyeSwgZG9jX3F1ZXJ5X2FsbCB9ID0gcmVxdWlyZShcIi4vcXVlcnlfbWV0aG9kXCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGJheWJheWluSW50cm9JbWFnZXMgPSBkb2NfcXVlcnlfYWxsKFwiLmJheWJheWluX19kZWYtaW1hZ2VcIik7XHJcbiAgY29uc3QgYmF5YmF5aW5DdWx0dXJlQXNzZXQgPSBkb2NfcXVlcnkoXCIuYmF5YmF5aW5fX2N1bHR1cmUtYXNzZXRcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXliYXlpbkludHJvSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYXliYXlpbkludHJvSW1hZ2VzW2ldLnNyYyA9IGAuLi9hc3NldHMvbGVhcm5pbmctbW9kdWxlL2JheWJheWluLWRlZi0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5qcGdgO1xyXG4gIH1cclxuICBpZiAoYmF5YmF5aW5DdWx0dXJlQXNzZXQgIT09IG51bGwpIHtcclxuICAgIGJheWJheWluQ3VsdHVyZUFzc2V0LnNyYyA9IFwiLi4vYXNzZXRzL2xlYXJuaW5nLW1vZHVsZS9jdWx0dXJlX2Fzc2V0LmpwZ1wiO1xyXG4gIH1cclxufSk7XHJcbiIsIiAgZXhwb3J0IGNvbnN0IGRvY19xdWVyeSA9IChjbGFzc19uYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc19uYW1lKTtcclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBkb2NfcXVlcnlfYWxsID0gKGNsYXNzX25hbWUpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzX25hbWUpO1xyXG4gIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBDU1NcclxucmVxdWlyZShcIi4vc3R5bGUuc2Nzc1wiKTtcclxuLy8gSlNcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZVwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZVwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS0yXCIpOyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jX3F1ZXJ5IiwiZG9jX3F1ZXJ5X2FsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYXliYXlpbkxvZ28iLCJjaXJjbGVWZWN0b3IiLCJoYW5kR2VzdHVyZXMiLCJiYW5uZXJUd29JbWFnZSIsImNhcmRMaW5rSWNvbiIsImkiLCJsZW5ndGgiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJiYXliYXlpbkludHJvSW1hZ2VzIiwiYmF5YmF5aW5DdWx0dXJlQXNzZXQiLCJjbGFzc19uYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCJdLCJzb3VyY2VSb290IjoiIn0=