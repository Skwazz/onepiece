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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Search = ()=>{\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:3000/api/cards\").then((res)=>res.json()).then((json)=>setData(json));\n    }, []);\n    const handleSearch = (e)=>{\n        setSearchTerm(e.target.value);\n        const filtered = data.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredData(filtered);\n    };\n    const ListItem = (param)=>{\n        let { card  } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: card.cardId,\n                alt: card.altArt\n            }, card._id, false, {\n                fileName: \"/Users/slava/onepiece/components/Search.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        }, card.id, false, {\n            fileName: \"/Users/slava/onepiece/components/Search.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: searchTerm,\n                        onChange: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/Users/slava/onepiece/components/Search.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/slava/onepiece/components/Search.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                searchTerm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center w-auto\",\n                    children: [\n                        data.map((card)=>card.name.toLowerCase().includes(searchTerm.toLowerCase()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                className: \"flex\",\n                                card: card\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/components/Search.js\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, undefined) : null),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/slava/onepiece/components/Search.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/slava/onepiece/components/Search.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/slava/onepiece/components/Search.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"rYnaGEA5GFu2wEhfodkiTwSlhSA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUN6QjtBQUUxQixNQUFNSSxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5EQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RTLE1BQU0sbUNBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0UsT0FBU04sUUFBUU07SUFDNUIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZSxDQUFDQyxJQUFNO1FBQzFCVixjQUFjVSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDNUIsTUFBTUMsV0FBV1osS0FBS2EsTUFBTSxDQUFDLENBQUNDLE9BQzVCQSxLQUFLQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDbkIsV0FBV2tCLFdBQVc7UUFFekRiLGdCQUFnQlM7SUFDbEI7SUFFQSxNQUFNTSxXQUFXLFNBQWM7WUFBYixFQUFFQyxLQUFJLEVBQUU7UUFDeEIscUJBQ0UsOERBQUNDO3NCQUNDLDRFQUFDeEIsNkNBQUlBO2dCQUFnQnlCLElBQUlGLEtBQUtHLE1BQU07Z0JBQUVDLEtBQUtKLEtBQUtLLE1BQU07ZUFBM0NMLEtBQUtNLEdBQUc7Ozs7O1dBRFhOLEtBQUtFLEVBQUU7Ozs7O0lBSXJCO0lBRUEscUJBQ0UsOERBQUNEO2tCQUNDLDRFQUFDQTtZQUFJTSxXQUFVOzs4QkFDYiw4REFBQ047b0JBQUlNLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFNQyxNQUFLO3dCQUFPakIsT0FBT2I7d0JBQVkrQixVQUFVckI7Ozs7Ozs7Ozs7O2dCQUVqRFYsMkJBQ0MsOERBQUNzQjtvQkFBSU0sV0FBVTs7d0JBQ1oxQixLQUFLOEIsR0FBRyxDQUFDLENBQUNYLE9BQ1RBLEtBQUtKLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNuQixXQUFXa0IsV0FBVyxvQkFDckQsOERBQUNFO2dDQUFTUSxXQUFVO2dDQUFPUCxNQUFNQTs7Ozs7NENBQy9CLElBQUk7d0JBQ1A7Ozs7OztnQ0FFSCxJQUFJOzs7Ozs7Ozs7Ozs7QUFJaEI7R0E3Q010QjtLQUFBQTtBQStDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC5qcz9kZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XG5cbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiBzZXREYXRhKGpzb24pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT5cbiAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIHNldEZpbHRlcmVkRGF0YShmaWx0ZXJlZCk7XG4gIH07XG5cbiAgY29uc3QgTGlzdEl0ZW0gPSAoeyBjYXJkIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2NhcmQuaWR9PlxuICAgICAgICA8Q2FyZCBrZXk9e2NhcmQuX2lkfSBpZD17Y2FyZC5jYXJkSWR9IGFsdD17Y2FyZC5hbHRBcnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hUZXJtfSBvbkNoYW5nZT17aGFuZGxlU2VhcmNofSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlYXJjaFRlcm0gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctYXV0b1wiPlxuICAgICAgICAgICAge2RhdGEubWFwKChjYXJkKSA9PlxuICAgICAgICAgICAgICBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpID8gKFxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9XCJmbGV4XCIgY2FyZD17Y2FyZH0gLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiU2VhcmNoIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJkYXRhIiwic2V0RGF0YSIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkxpc3RJdGVtIiwiY2FyZCIsImRpdiIsImlkIiwiY2FyZElkIiwiYWx0IiwiYWx0QXJ0IiwiX2lkIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n"));

/***/ })

});