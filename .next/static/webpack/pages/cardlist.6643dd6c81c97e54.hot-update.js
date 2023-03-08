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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        ...cards\n    ]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(search);\n        const newArr = filteredData.filter((item)=>{\n            return item.name.toLowerCase().includes(search.toLowerCase());\n        });\n        setFilteredData(newArr);\n    }, [\n        search\n    ]);\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        selectedColors\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"DrRYKr+s+MVVOBEO6uOzlkRzXq8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9jYXJkbGlzdC5qcz83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBzZXQgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNhcmRzIH0pIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoY2FyZHMpO1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoWy4uLmNhcmRzXSk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbG9ycywgc2V0U2VsZWN0ZWRDb2xvcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29sb3JzID0gW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIsIFwiUHVycGxlXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VhcmNoKTtcbiAgICBjb25zdCBuZXdBcnIgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShuZXdBcnIpO1xuICB9LCBbc2VhcmNoXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZENvbG9ycyA9IFsuLi5zZWxlY3RlZENvbG9yc107XG4gICAgaWYgKG5ld1NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBuZXdTZWxlY3RlZENvbG9ycy5pbmRleE9mKGNvbG9yKTtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnB1c2goY29sb3IpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RlZENvbG9ycyhuZXdTZWxlY3RlZENvbG9ycyk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbHRlcmVkRGF0YSA9IGNhcmRzLmZpbHRlcigoY2FyZCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb2xvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjYXJkLmNvbG9yLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3JzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGNhcmQuY29sb3Iuc3BsaXQoXCIvXCIpO1xuICAgICAgICByZXR1cm4gY29sb3JzLnNvbWUoKGMpID0+IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEobmV3RmlsdGVyZWREYXRhKTtcbiAgfSwgW3NlbGVjdGVkQ29sb3JzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaCBzZXRTZWFyY2g9e3NldFNlYXJjaH0gLz5cbiAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y29sb3J9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcil9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NvbG9yfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNSBteC1hdXRvIFwiPlxuICAgICAgICB7ZmlsdGVyZWREYXRhPy5tYXAoKGNhcmQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZC5uYW1lICE9PSBcIi1cIiB8fCBzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjYXJkLmNvbG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NhcmQuX2lkfVxuICAgICAgICAgICAgICAgIGlkPXtjYXJkLmNhcmRJZH1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmQuYWx0QXJ0fVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjYXJkLmNvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKTtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXJkcyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldCIsIkhvbWUiLCJjYXJkcyIsImRhdGEiLCJzZXREYXRhIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwic2VsZWN0ZWRDb2xvcnMiLCJzZXRTZWxlY3RlZENvbG9ycyIsInNlYXJjaCIsInNldFNlYXJjaCIsImNvbG9ycyIsImNvbnNvbGUiLCJsb2ciLCJuZXdBcnIiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVDb2xvckNoYW5nZSIsImNvbG9yIiwibmV3U2VsZWN0ZWRDb2xvcnMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwibmV3RmlsdGVyZWREYXRhIiwiY2FyZCIsImxlbmd0aCIsInNwbGl0Iiwic29tZSIsImMiLCJtYXAiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImlkIiwiY2FyZElkIiwiYWx0IiwiYWx0QXJ0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});