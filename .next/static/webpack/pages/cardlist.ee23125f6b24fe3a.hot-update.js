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

/***/ "./pages/cardlist.js":
/*!***************************!*\
  !*** ./pages/cardlist.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [colorFiltered, setColorFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [selectedColor, setSelectedColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    function handleColorChange(color) {\n        setSelectedColor(color);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setFilteredData: setFilteredData,\n                setColorFiltered: setColorFiltered,\n                data: cards\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: [\n                    filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                        if (card.name !== \"-\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                id: card.cardId,\n                                alt: card.altArt\n                            }, card._id, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 24,\n                                columnNumber: 20\n                            }, this);\n                        }\n                    }),\n                    colorFiltered === null || colorFiltered === void 0 ? void 0 : colorFiltered.map((cardColor)=>{\n                        if (cardColor.color === \"Green\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                color: cardColor.color,\n                                alt: cardColor.altArt\n                            }, cardColor._id, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this);\n                        }\n                        {\n                            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                checked: selectedColor === color,\n                                                onChange: ()=>handleColorChange(color)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this),\n                                            color\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, color, false, {\n                                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this));\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"sXuWhbFAApHMFFyw2ikqZv3diqo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDRjs7QUFFM0IsU0FBU0ksS0FBSyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDs7SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUNJO0lBQ2pELE1BQU0sQ0FBQ0csZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDSTtJQUNuRCxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNVyxTQUFTO1FBQUM7UUFBTztRQUFTO1FBQVE7S0FBUztJQUVqRCxTQUFTQyxrQkFBa0JDLEtBQUssRUFBRTtRQUNoQ0gsaUJBQWlCRztJQUNuQjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ1gsMERBQU1BO2dCQUNMSSxpQkFBaUJBO2dCQUNqQkUsa0JBQWtCQTtnQkFDbEJNLE1BQU1WOzs7Ozs7MEJBRVIsOERBQUNXO2dCQUFJQyxXQUFVOztvQkFDWlgseUJBQUFBLDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFjWSxHQUFHLENBQUMsQ0FBQ0MsT0FBUzt3QkFDM0IsSUFBSUEsS0FBS0MsSUFBSSxLQUFLLEtBQUs7NEJBQ3JCLHFCQUFPLDhEQUFDcEIsd0RBQUlBO2dDQUFnQnFCLElBQUlGLEtBQUtHLE1BQU07Z0NBQUVDLEtBQUtKLEtBQUtLLE1BQU07K0JBQTNDTCxLQUFLTSxHQUFHOzs7Ozt3QkFDNUIsQ0FBQztvQkFDSDtvQkFDQ2pCLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZVUsR0FBRyxDQUFDLENBQUNRLFlBQWM7d0JBQ2pDLElBQUlBLFVBQVVaLEtBQUssS0FBSyxTQUFTOzRCQUMvQixxQkFDRSw4REFBQ2Qsd0RBQUlBO2dDQUVIYyxPQUFPWSxVQUFVWixLQUFLO2dDQUN0QlMsS0FBS0csVUFBVUYsTUFBTTsrQkFGaEJFLFVBQVVELEdBQUc7Ozs7O3dCQUt4QixDQUFDO3dCQUNEOzRCQUNFYixPQUFPTSxHQUFHLENBQUMsQ0FBQ0osc0JBQ1YsOERBQUNFOzhDQUNDLDRFQUFDVzs7MERBQ0MsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxTQUFTcEIsa0JBQWtCSTtnREFDM0JpQixVQUFVLElBQU1sQixrQkFBa0JDOzs7Ozs7NENBRW5DQTs7Ozs7OzttQ0FQS0E7Ozs7O3dCQVdkO29CQUNGOzs7Ozs7Ozs7QUFJUixDQUFDO0dBbER1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZGxpc3QuanM/NzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoY2FyZHMpO1xuICBjb25zdCBbY29sb3JGaWx0ZXJlZCwgc2V0Q29sb3JGaWx0ZXJlZF0gPSB1c2VTdGF0ZShjYXJkcyk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbG9yLCBzZXRTZWxlY3RlZENvbG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBjb2xvcnMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJQdXJwbGVcIl07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpIHtcbiAgICBzZXRTZWxlY3RlZENvbG9yKGNvbG9yKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHNldEZpbHRlcmVkRGF0YT17c2V0RmlsdGVyZWREYXRhfVxuICAgICAgICBzZXRDb2xvckZpbHRlcmVkPXtzZXRDb2xvckZpbHRlcmVkfVxuICAgICAgICBkYXRhPXtjYXJkc31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTUgbXgtYXV0byBcIj5cbiAgICAgICAge2ZpbHRlcmVkRGF0YT8ubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcmQubmFtZSAhPT0gXCItXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e2NhcmQuX2lkfSBpZD17Y2FyZC5jYXJkSWR9IGFsdD17Y2FyZC5hbHRBcnR9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICAgIHtjb2xvckZpbHRlcmVkPy5tYXAoKGNhcmRDb2xvcikgPT4ge1xuICAgICAgICAgIGlmIChjYXJkQ29sb3IuY29sb3IgPT09IFwiR3JlZW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NhcmRDb2xvci5faWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhcmRDb2xvci5jb2xvcn1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmRDb2xvci5hbHRBcnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcnMubWFwKChjb2xvcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y29sb3J9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbG9yID09PSBjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7Y29sb3J9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKTtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXJkcyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsIkhvbWUiLCJjYXJkcyIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImNvbG9yRmlsdGVyZWQiLCJzZXRDb2xvckZpbHRlcmVkIiwic2VsZWN0ZWRDb2xvciIsInNldFNlbGVjdGVkQ29sb3IiLCJjb2xvcnMiLCJoYW5kbGVDb2xvckNoYW5nZSIsImNvbG9yIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNhcmQiLCJuYW1lIiwiaWQiLCJjYXJkSWQiLCJhbHQiLCJhbHRBcnQiLCJfaWQiLCJjYXJkQ29sb3IiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});