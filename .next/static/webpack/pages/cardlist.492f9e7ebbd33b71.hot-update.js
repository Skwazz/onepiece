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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        ...cards\n    ]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let updatedCards = filteredData;\n        // need to use filtered array but it does not update when deleting, data does, find some solution.\n        const newArr = updatedCards = updatedCards.filter((item)=>{\n            return item.name.toLowerCase().includes(search.toLowerCase());\n        });\n        setFilteredData(newArr);\n    }, [\n        search\n    ]);\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        selectedColors\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"DrRYKr+s+MVVOBEO6uOzlkRzXq8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3BhZ2VzL2NhcmRsaXN0LmpzPzc0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCB7IHNldCB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShjYXJkcyk7XG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShbLi4uY2FyZHNdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29sb3JzLCBzZXRTZWxlY3RlZENvbG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb2xvcnMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJQdXJwbGVcIl07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdXBkYXRlZENhcmRzID0gZmlsdGVyZWREYXRhO1xuICAgIC8vIG5lZWQgdG8gdXNlIGZpbHRlcmVkIGFycmF5IGJ1dCBpdCBkb2VzIG5vdCB1cGRhdGUgd2hlbiBkZWxldGluZywgZGF0YSBkb2VzLCBmaW5kIHNvbWUgc29sdXRpb24uXG4gICAgY29uc3QgbmV3QXJyID0gKHVwZGF0ZWRDYXJkcyA9IHVwZGF0ZWRDYXJkcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgfSkpO1xuICAgIHNldEZpbHRlcmVkRGF0YShuZXdBcnIpO1xuICB9LCBbc2VhcmNoXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZENvbG9ycyA9IFsuLi5zZWxlY3RlZENvbG9yc107XG4gICAgaWYgKG5ld1NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBuZXdTZWxlY3RlZENvbG9ycy5pbmRleE9mKGNvbG9yKTtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnB1c2goY29sb3IpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RlZENvbG9ycyhuZXdTZWxlY3RlZENvbG9ycyk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbHRlcmVkRGF0YSA9IGNhcmRzLmZpbHRlcigoY2FyZCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb2xvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBjYXJkLmNvbG9yLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3JzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGNhcmQuY29sb3Iuc3BsaXQoXCIvXCIpO1xuICAgICAgICByZXR1cm4gY29sb3JzLnNvbWUoKGMpID0+IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEobmV3RmlsdGVyZWREYXRhKTtcbiAgfSwgW3NlbGVjdGVkQ29sb3JzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaCBzZXRTZWFyY2g9e3NldFNlYXJjaH0gLz5cbiAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y29sb3J9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcil9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NvbG9yfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNSBteC1hdXRvIFwiPlxuICAgICAgICB7ZmlsdGVyZWREYXRhPy5tYXAoKGNhcmQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZC5uYW1lICE9PSBcIi1cIiB8fCBzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjYXJkLmNvbG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NhcmQuX2lkfVxuICAgICAgICAgICAgICAgIGlkPXtjYXJkLmNhcmRJZH1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmQuYWx0QXJ0fVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjYXJkLmNvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKTtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXJkcyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldCIsIkhvbWUiLCJjYXJkcyIsImRhdGEiLCJzZXREYXRhIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwic2VsZWN0ZWRDb2xvcnMiLCJzZXRTZWxlY3RlZENvbG9ycyIsInNlYXJjaCIsInNldFNlYXJjaCIsImNvbG9ycyIsInVwZGF0ZWRDYXJkcyIsIm5ld0FyciIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZUNvbG9yQ2hhbmdlIiwiY29sb3IiLCJuZXdTZWxlY3RlZENvbG9ycyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJuZXdGaWx0ZXJlZERhdGEiLCJjYXJkIiwibGVuZ3RoIiwic3BsaXQiLCJzb21lIiwiYyIsIm1hcCIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiaWQiLCJjYXJkSWQiLCJhbHQiLCJhbHRBcnQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});