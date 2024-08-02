"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/RotatingBanner.js":
/*!*********************************!*\
  !*** ./pages/RotatingBanner.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst RotatingBanner = ()=>{\n    _s();\n    const [backgroundImage, setBackgroundImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/bannerimage1.png\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const images = [\n            \"/bannerimage1.png\",\n            \"/bannerimage2.png\",\n            \"/bannerimage3.png\",\n            \"/bannerimage4.png\",\n            \"/bannerimage5.png\",\n            \"/bannerimage6.png\"\n        ];\n        let currentIndex = 0;\n        const intervalId = setInterval(()=>{\n            currentIndex = (currentIndex + 1) % images.length;\n            setBackgroundImage(images[currentIndex]);\n        }, 4000); // Change image every 4 seconds\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-[650px] flex justify-start items-center p-5\",\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                backgroundSize: \"cover\",\n                backgroundPosition: \"fill\",\n                transition: \"background-image 1s ease-in-out\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pl-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"capitalize text-6xl font-semibold text-black mb-3 pb-5\",\n                        children: \"GiftRight\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\janardhan polle\\\\Documents\\\\Codanto\\\\Projects\\\\gift-right-main\\\\pages\\\\RotatingBanner.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/charity-listings\",\n                        className: \"bg-yellow-400 text-black py-3 px-6 rounded-md text-lg font-semibold\",\n                        children: \"Explore Charities\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\janardhan polle\\\\Documents\\\\Codanto\\\\Projects\\\\gift-right-main\\\\pages\\\\RotatingBanner.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\janardhan polle\\\\Documents\\\\Codanto\\\\Projects\\\\gift-right-main\\\\pages\\\\RotatingBanner.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\janardhan polle\\\\Documents\\\\Codanto\\\\Projects\\\\gift-right-main\\\\pages\\\\RotatingBanner.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\janardhan polle\\\\Documents\\\\Codanto\\\\Projects\\\\gift-right-main\\\\pages\\\\RotatingBanner.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RotatingBanner, \"3h9T0qkWS2VOQml2mrWo+7XM1TI=\");\n_c = RotatingBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RotatingBanner);\nvar _c;\n$RefreshReg$(_c, \"RotatingBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Sb3RhdGluZ0Jhbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDZjtBQUU3QixNQUFNRyxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssU0FBUztZQUFDO1lBQW9CO1lBQW9CO1lBQW9CO1lBQW9CO1lBQW9CO1NBQW9CO1FBQ3hJLElBQUlDLGVBQWU7UUFFbkIsTUFBTUMsYUFBYUMsWUFBWTtZQUM3QkYsZUFBZSxDQUFDQSxlQUFlLEtBQUtELE9BQU9JLE1BQU07WUFDakRMLG1CQUFtQkMsTUFBTSxDQUFDQyxhQUFhO1FBQ3pDLEdBQUcsT0FBTywrQkFBK0I7UUFFekMsT0FBTyxJQUFNSSxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNDO1lBQ0NDLFdBQVU7WUFDVkMsT0FBTztnQkFFTFgsaUJBQWlCLE9BQXVCLE9BQWhCQSxpQkFBZ0I7Z0JBQ3hDWSxnQkFBZ0I7Z0JBQ2hCQyxvQkFBb0I7Z0JBQ3BCQyxZQUFZO1lBQ2Q7c0JBRUEsNEVBQUNMO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQUVMLFdBQVU7a0NBQXlEOzs7Ozs7a0NBR3RFLDhEQUFDWixrREFBSUE7d0JBQ0hrQixNQUFLO3dCQUNMTixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0F6Q01YO0tBQUFBO0FBMkNOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1JvdGF0aW5nQmFubmVyLmpzPzNlYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBSb3RhdGluZ0Jhbm5lciA9ICgpID0+IHtcclxuICBjb25zdCBbYmFja2dyb3VuZEltYWdlLCBzZXRCYWNrZ3JvdW5kSW1hZ2VdID0gdXNlU3RhdGUoXCIvYmFubmVyaW1hZ2UxLnBuZ1wiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlcyA9IFtcIi9iYW5uZXJpbWFnZTEucG5nXCIsXCIvYmFubmVyaW1hZ2UyLnBuZ1wiLFwiL2Jhbm5lcmltYWdlMy5wbmdcIixcIi9iYW5uZXJpbWFnZTQucG5nXCIsXCIvYmFubmVyaW1hZ2U1LnBuZ1wiLFwiL2Jhbm5lcmltYWdlNi5wbmdcIl07XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoO1xyXG4gICAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgfSwgNDAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSA0IHNlY29uZHNcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs2NTBweF0gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBwLTVcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiZmlsbFwiLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtOFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB0ZXh0LTZ4bCBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgbWItMyBwYi01XCI+XHJcbiAgICAgICAgICAgIEdpZnRSaWdodFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9jaGFyaXR5LWxpc3RpbmdzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTQwMCB0ZXh0LWJsYWNrIHB5LTMgcHgtNiByb3VuZGVkLW1kIHRleHQtbGcgZm9udC1zZW1pYm9sZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEV4cGxvcmUgQ2hhcml0aWVzXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3RhdGluZ0Jhbm5lcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlJvdGF0aW5nQmFubmVyIiwiYmFja2dyb3VuZEltYWdlIiwic2V0QmFja2dyb3VuZEltYWdlIiwiaW1hZ2VzIiwiY3VycmVudEluZGV4IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/RotatingBanner.js\n"));

/***/ })

});