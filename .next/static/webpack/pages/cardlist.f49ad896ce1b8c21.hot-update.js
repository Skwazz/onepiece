"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cardlist",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst card = (param)=>{\n    let { id , alt , color , category  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: alt === \"-\" ? \"/cards/\".concat(id, \".png\") : \"/cards/\".concat(id, \"_\").concat(alt.toLowerCase(), \".png\"),\n        alt: \"picture of a card\",\n        width: 150,\n        height: 100,\n        className: \"hover:scale-105 mt-2 ml-2\",\n        color: color,\n        category: category\n    }, void 0, false, {\n        fileName: \"/Users/slava/onepiece/components/Card.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (card);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLE9BQU8sU0FBa0M7UUFBakMsRUFBRUMsR0FBRSxFQUFFQyxJQUFHLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFO0lBQ3hDLHFCQUNFLDhEQUFDTCxtREFBS0E7UUFDSk0sS0FDRUgsUUFBUSxNQUNKLFVBQWEsT0FBSEQsSUFBRyxVQUNiLFVBQWdCQyxPQUFORCxJQUFHLEtBQXFCLE9BQWxCQyxJQUFJSSxXQUFXLElBQUcsT0FBSztRQUU3Q0osS0FBSTtRQUNKSyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsV0FBVTtRQUNWTixPQUFPQTtRQUNQQyxVQUFVQTs7Ozs7O0FBR2hCO0FBRUEsK0RBQWVKLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2Q2MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IGNhcmQgPSAoeyBpZCwgYWx0LCBjb2xvciwgY2F0ZWdvcnkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxJbWFnZVxuICAgICAgc3JjPXtcbiAgICAgICAgYWx0ID09PSBcIi1cIlxuICAgICAgICAgID8gYC9jYXJkcy8ke2lkfS5wbmdgXG4gICAgICAgICAgOiBgL2NhcmRzLyR7aWR9XyR7YWx0LnRvTG93ZXJDYXNlKCl9LnBuZ2BcbiAgICAgIH1cbiAgICAgIGFsdD1cInBpY3R1cmUgb2YgYSBjYXJkXCJcbiAgICAgIHdpZHRoPXsxNTB9XG4gICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTEwNSBtdC0yIG1sLTJcIlxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiY2FyZCIsImlkIiwiYWx0IiwiY29sb3IiLCJjYXRlZ29yeSIsInNyYyIsInRvTG93ZXJDYXNlIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n"));

/***/ })

});