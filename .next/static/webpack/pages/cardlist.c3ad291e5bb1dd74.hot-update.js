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

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n\n\n\nconst Search = (param)=>{\n    let { setFilteredData , selectedColors , data , filteredData  } = param;\n    const filterBySearch = (input)=>{\n        let updatedCards = [\n            ...filteredData\n        ]; // need to use filtered array but it does not update when deleting, data does, find some solution.\n        updatedCards = updatedCards.filter((item)=>{\n            return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1;\n        });\n        setFilteredData(updatedCards);\n        console.log(filteredData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>filterBySearch(e.target.value),\n                placeholder: \"Type To Search Cards!\"\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/components/Search.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/slava/onepiece/components/Search.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/slava/onepiece/components/Search.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLE1BQU1JLFNBQVMsU0FBNkQ7UUFBNUQsRUFBRUMsZ0JBQWUsRUFBRUMsZUFBYyxFQUFFQyxLQUFJLEVBQUVDLGFBQVksRUFBRTtJQUNyRSxNQUFNQyxpQkFBaUIsQ0FBQ0MsUUFBVTtRQUNoQyxJQUFJQyxlQUFlO2VBQUlIO1NBQWEsRUFBRSxrR0FBa0c7UUFDeElHLGVBQWVBLGFBQWFDLE1BQU0sQ0FBQyxDQUFDQyxPQUFTO1lBQzNDLE9BQU9BLEtBQUtDLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxPQUFPLENBQUNOLE1BQU1LLFdBQVcsUUFBUSxDQUFDO1FBQ25FO1FBQ0FWLGdCQUFnQk07UUFDaEJNLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDZDtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDVjtnQkFDQ1csTUFBSztnQkFDTEMsVUFBVSxDQUFDQyxJQUFNZCxlQUFlYyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQzlDQyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0tBckJNdEI7QUF1Qk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/ZGUxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuXG5jb25zdCBTZWFyY2ggPSAoeyBzZXRGaWx0ZXJlZERhdGEsIHNlbGVjdGVkQ29sb3JzLCBkYXRhLCBmaWx0ZXJlZERhdGEgfSkgPT4ge1xuICBjb25zdCBmaWx0ZXJCeVNlYXJjaCA9IChpbnB1dCkgPT4ge1xuICAgIGxldCB1cGRhdGVkQ2FyZHMgPSBbLi4uZmlsdGVyZWREYXRhXTsgLy8gbmVlZCB0byB1c2UgZmlsdGVyZWQgYXJyYXkgYnV0IGl0IGRvZXMgbm90IHVwZGF0ZSB3aGVuIGRlbGV0aW5nLCBkYXRhIGRvZXMsIGZpbmQgc29tZSBzb2x1dGlvbi5cbiAgICB1cGRhdGVkQ2FyZHMgPSB1cGRhdGVkQ2FyZHMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgfSk7XG4gICAgc2V0RmlsdGVyZWREYXRhKHVwZGF0ZWRDYXJkcyk7XG4gICAgY29uc29sZS5sb2coZmlsdGVyZWREYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGZpbHRlckJ5U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgVG8gU2VhcmNoIENhcmRzIVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZCIsIlNlYXJjaCIsInNldEZpbHRlcmVkRGF0YSIsInNlbGVjdGVkQ29sb3JzIiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImZpbHRlckJ5U2VhcmNoIiwiaW5wdXQiLCJ1cGRhdGVkQ2FyZHMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Search.js\n"));

/***/ })

});