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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    const categories = [\n        \"Leader\",\n        \"Event\",\n        \"Stage\",\n        \"Character\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        }).filter((card)=>{\n            if (selectedCategory.length === 0) {\n                return true;\n            } else {\n                const categories = card.category.split(\"/\");\n                return categories.some((c)=>selectedCategory.includes(c.toLowerCase()));\n            }\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        cards,\n        selectedColors,\n        selectedCategory,\n        search\n    ]);\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    function handleCategoryChange(category) {\n        const newCategory = selectedCategory.length === 0 ? [] : [\n            ...selectedCategory\n        ];\n        if (newCategory.includes(category)) {\n            const index = newCategory.indexOf(category);\n            newCategory.splice(index, 1);\n        } else {\n            newCategory.push(category);\n        }\n        setSelectedCategory(newCategory);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex mx-auto justify-center\",\n                children: \"Color:\"\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex mx-auto justify-center\",\n                children: \"Type:\"\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedCategory.includes(category.toLowerCase()),\n                                onChange: ()=>handleCategoryChange(category.toLowerCase())\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                }, category, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color) || selectedCategory.some((c)=>card.category.includes(c.toLowerCase()))) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color,\n                            category: card.category\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, this);\n                    } else {\n                        return null;\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wfpTz/Eaz9Gz4jMsDluGumqQsV0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBzZXQgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuaW1wb3J0IGNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDb2xvcnMsIHNldFNlbGVjdGVkQ29sb3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb2xvcnMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJQdXJwbGVcIl07XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJMZWFkZXJcIiwgXCJFdmVudFwiLCBcIlN0YWdlXCIsIFwiQ2hhcmFjdGVyXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3RmlsdGVyZWREYXRhID0gY2FyZHNcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBjYXJkLmNvbG9yLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3JzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb2xvcnMgPSBjYXJkLmNvbG9yLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4gY29sb3JzLnNvbWUoKGMpID0+IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGMpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBjYXJkLmNhdGVnb3J5LnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5zb21lKChjKSA9PlxuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeS5pbmNsdWRlcyhjLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgc2V0RmlsdGVyZWREYXRhKG5ld0ZpbHRlcmVkRGF0YSk7XG4gIH0sIFtjYXJkcywgc2VsZWN0ZWRDb2xvcnMsIHNlbGVjdGVkQ2F0ZWdvcnksIHNlYXJjaF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yKSB7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWRDb2xvcnMgPSBbLi4uc2VsZWN0ZWRDb2xvcnNdO1xuICAgIGlmIChuZXdTZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcikpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbmV3U2VsZWN0ZWRDb2xvcnMuaW5kZXhPZihjb2xvcik7XG4gICAgICBuZXdTZWxlY3RlZENvbG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZENvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRDb2xvcnMobmV3U2VsZWN0ZWRDb2xvcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCBuZXdDYXRlZ29yeSA9XG4gICAgICBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aCA9PT0gMCA/IFtdIDogWy4uLnNlbGVjdGVkQ2F0ZWdvcnldO1xuICAgIGlmIChuZXdDYXRlZ29yeS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbmV3Q2F0ZWdvcnkuaW5kZXhPZihjYXRlZ29yeSk7XG4gICAgICBuZXdDYXRlZ29yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDYXRlZ29yeS5wdXNoKGNhdGVnb3J5KTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShuZXdDYXRlZ29yeSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoIHNldFNlYXJjaD17c2V0U2VhcmNofSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBteC1hdXRvIGp1c3RpZnktY2VudGVyXCI+Q29sb3I6PC9wPlxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtjb2xvcn0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y29sb3J9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggbXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiPlR5cGU6PC9wPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDYXRlZ29yeS5pbmNsdWRlcyhjYXRlZ29yeS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTUgbXgtYXV0byBcIj5cbiAgICAgICAge2ZpbHRlcmVkRGF0YT8ubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2FyZC5uYW1lICE9PSBcIi1cIiB8fFxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY2FyZC5jb2xvcikgfHxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkuc29tZSgoYykgPT5cbiAgICAgICAgICAgICAgY2FyZC5jYXRlZ29yeS5pbmNsdWRlcyhjLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17Y2FyZC5faWR9XG4gICAgICAgICAgICAgICAgaWQ9e2NhcmQuY2FyZElkfVxuICAgICAgICAgICAgICAgIGFsdD17Y2FyZC5hbHRBcnR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhcmQuY29sb3J9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhcmQuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKTtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXJkcyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldCIsImNhcmQiLCJIb21lIiwiY2FyZHMiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJzZWxlY3RlZENvbG9ycyIsInNldFNlbGVjdGVkQ29sb3JzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjb2xvcnMiLCJjYXRlZ29yaWVzIiwibmV3RmlsdGVyZWREYXRhIiwiZmlsdGVyIiwibGVuZ3RoIiwiY29sb3IiLCJpbmNsdWRlcyIsInNwbGl0Iiwic29tZSIsImMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJjYXRlZ29yeSIsImhhbmRsZUNvbG9yQ2hhbmdlIiwibmV3U2VsZWN0ZWRDb2xvcnMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJuZXdDYXRlZ29yeSIsInAiLCJjbGFzc05hbWUiLCJtYXAiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImlkIiwiY2FyZElkIiwiYWx0IiwiYWx0QXJ0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});