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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n        const newFilteredData = cards.filter((card)=>selectedColors.includes(card.Color));\n        setFilteredData(newFilteredData);\n        console.log();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setFilteredData: setFilteredData,\n                setSelectedColors: setSelectedColors,\n                data: cards\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"2FJPcwA4XDl3xQSz/dZKIt3C3yw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNGO0FBQ1g7O0FBRWhCLFNBQVNLLEtBQUssS0FBUyxFQUFFO1FBQVgsRUFBRUMsTUFBSyxFQUFFLEdBQVQ7O0lBQzNCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDSztJQUVqRCxNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDdkQsTUFBTVUsU0FBUztRQUFDO1FBQU87UUFBUztRQUFRO0tBQVM7SUFFakQsU0FBU0Msa0JBQWtCQyxLQUFLLEVBQUU7UUFDaEMsTUFBTUMsb0JBQW9CO2VBQUlMO1NBQWU7UUFFN0MsSUFBSUssa0JBQWtCQyxRQUFRLENBQUNGLFFBQVE7WUFDckMsTUFBTUcsUUFBUUYsa0JBQWtCRyxPQUFPLENBQUNKO1lBQ3hDQyxrQkFBa0JJLE1BQU0sQ0FBQ0YsT0FBTztRQUNsQyxPQUFPO1lBQ0xGLGtCQUFrQkssSUFBSSxDQUFDTjtRQUN6QixDQUFDO1FBRURILGtCQUFrQkk7UUFFbEIsTUFBTU0sa0JBQWtCZCxNQUFNZSxNQUFNLENBQUMsQ0FBQ0MsT0FDcENiLGVBQWVNLFFBQVEsQ0FBQ08sS0FBS0MsS0FBSztRQUVwQ2YsZ0JBQWdCWTtRQUNoQkksUUFBUUMsR0FBRztJQUNiO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDdEIsMERBQU1BO2dCQUNMSyxpQkFBaUJBO2dCQUNqQkUsbUJBQW1CQTtnQkFDbkJnQixNQUFNcEI7Ozs7OztZQUVQSyxPQUFPZ0IsR0FBRyxDQUFDLENBQUNkLHNCQUNYLDhEQUFDZTs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsU0FBU3ZCLGVBQWVNLFFBQVEsQ0FBQ0Y7Z0NBQ2pDb0IsVUFBVSxJQUFNckIsa0JBQWtCQzs7Ozs7OzRCQUVuQ0E7Ozs7Ozs7bUJBUEtBOzs7OzswQkFXWiw4REFBQ2U7Z0JBQUlNLFdBQVU7MEJBQ1ozQix5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNvQixHQUFHLENBQUMsQ0FBQ0wsT0FBUztvQkFDM0IsSUFBSUEsS0FBS2EsSUFBSSxLQUFLLE9BQU8xQixlQUFlTSxRQUFRLENBQUNPLEtBQUtULEtBQUssR0FBRzt3QkFDNUQscUJBQ0UsOERBQUNiLHdEQUFJQTs0QkFFSG9DLElBQUlkLEtBQUtlLE1BQU07NEJBQ2ZDLEtBQUtoQixLQUFLaUIsTUFBTTs0QkFDaEIxQixPQUFPUyxLQUFLVCxLQUFLOzJCQUhaUyxLQUFLa0IsR0FBRzs7Ozs7b0JBTW5CLENBQUM7Z0JBQ0g7Ozs7Ozs7O0FBSVIsQ0FBQztHQTVEdUJuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJkbGlzdC5qcz83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBzZXQgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNhcmRzIH0pIHtcbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKGNhcmRzKTtcblxuICBjb25zdCBbc2VsZWN0ZWRDb2xvcnMsIHNldFNlbGVjdGVkQ29sb3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY29sb3JzID0gW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIsIFwiUHVycGxlXCJdO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yKSB7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRDb2xvcnMgPSBbLi4uc2VsZWN0ZWRDb2xvcnNdO1xuXG4gICAgaWYgKG5ld1NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBuZXdTZWxlY3RlZENvbG9ycy5pbmRleE9mKGNvbG9yKTtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnB1c2goY29sb3IpO1xuICAgIH1cblxuICAgIHNldFNlbGVjdGVkQ29sb3JzKG5ld1NlbGVjdGVkQ29sb3JzKTtcblxuICAgIGNvbnN0IG5ld0ZpbHRlcmVkRGF0YSA9IGNhcmRzLmZpbHRlcigoY2FyZCkgPT5cbiAgICAgIHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNhcmQuQ29sb3IpXG4gICAgKTtcbiAgICBzZXRGaWx0ZXJlZERhdGEobmV3RmlsdGVyZWREYXRhKTtcbiAgICBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaFxuICAgICAgICBzZXRGaWx0ZXJlZERhdGE9e3NldEZpbHRlcmVkRGF0YX1cbiAgICAgICAgc2V0U2VsZWN0ZWRDb2xvcnM9e3NldFNlbGVjdGVkQ29sb3JzfVxuICAgICAgICBkYXRhPXtjYXJkc31cbiAgICAgIC8+XG4gICAgICB7Y29sb3JzLm1hcCgoY29sb3IpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2NvbG9yfT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY29sb3IpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtjb2xvcn1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy01IG14LWF1dG8gXCI+XG4gICAgICAgIHtmaWx0ZXJlZERhdGE/Lm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkLm5hbWUgIT09IFwiLVwiIHx8IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNhcmQuY29sb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17Y2FyZC5faWR9XG4gICAgICAgICAgICAgICAgaWQ9e2NhcmQuY2FyZElkfVxuICAgICAgICAgICAgICAgIGFsdD17Y2FyZC5hbHRBcnR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhcmQuY29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhcmRzXCIpO1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhcmRzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwic2V0IiwiSG9tZSIsImNhcmRzIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwic2VsZWN0ZWRDb2xvcnMiLCJzZXRTZWxlY3RlZENvbG9ycyIsImNvbG9ycyIsImhhbmRsZUNvbG9yQ2hhbmdlIiwiY29sb3IiLCJuZXdTZWxlY3RlZENvbG9ycyIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsIm5ld0ZpbHRlcmVkRGF0YSIsImZpbHRlciIsImNhcmQiLCJDb2xvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJuYW1lIiwiaWQiLCJjYXJkSWQiLCJhbHQiLCJhbHRBcnQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});