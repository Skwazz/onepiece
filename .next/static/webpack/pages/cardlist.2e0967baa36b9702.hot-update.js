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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    const categories = [\n        \"Leader\",\n        \"Event\",\n        \"Stage\",\n        \"Character\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        const newFilteredCate = cards.filter((card)=>{\n            if (selectedCategory.length === 0) {\n                return true;\n            } else {\n                console.log(card.category);\n                return card.category.toLowerCase().includes(selectedCategory[0].toLowerCase());\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        cards,\n        selectedColors,\n        search\n    ]);\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    function handleCategoryChange(category) {\n        const newCategory = selectedCategory.length === 0 ? [] : [\n            ...selectedCategory\n        ];\n        if (newCategory.includes(category)) {\n            const index = newCategory.indexOf(category);\n            newCategory.splice(index, 1);\n        } else {\n            newCategory.push(category);\n        }\n        setSelectedCategory(newCategory);\n    }\n    console.log(selectedCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)),\n            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedCategory.includes(category),\n                                onChange: ()=>handleCategoryChange(category)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                }, category, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 104,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wfpTz/Eaz9Gz4jMsDluGumqQsV0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ1oscUJBQ0U7OzBCQUNFLDhEQUFDVCwwREFBTUE7Z0JBQUNZLFdBQVdBOzs7Ozs7WUFDbEJDLE9BQU93QixHQUFHLENBQUMsQ0FBQ25CLHNCQUNYLDhEQUFDb0I7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVNuQyxlQUFlWSxRQUFRLENBQUNEO2dDQUNqQ3lCLFVBQVUsSUFBTWQsa0JBQWtCWDs7Ozs7OzRCQUVuQ0E7Ozs7Ozs7bUJBUEtBOzs7OztZQVdYSixXQUFXdUIsR0FBRyxDQUFDLENBQUNULHlCQUNmLDhEQUFDVTs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsU0FBU2pDLGlCQUFpQlUsUUFBUSxDQUFDUztnQ0FDbkNlLFVBQVUsSUFBTVIscUJBQXFCUDs7Ozs7OzRCQUV0Q0E7Ozs7Ozs7bUJBUEtBOzs7OzswQkFZWiw4REFBQ1U7Z0JBQUlNLFdBQVU7MEJBQ1p2Qyx5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNnQyxHQUFHLENBQUMsQ0FBQ25DLE9BQVM7b0JBQzNCLElBQUlBLEtBQUtxQixJQUFJLEtBQUssT0FBT2hCLGVBQWVZLFFBQVEsQ0FBQ2pCLEtBQUtnQixLQUFLLEdBQUc7d0JBQzVELHFCQUNFLDhEQUFDckIsd0RBQUlBOzRCQUVIZ0QsSUFBSTNDLEtBQUs0QyxNQUFNOzRCQUNmQyxLQUFLN0MsS0FBSzhDLE1BQU07NEJBQ2hCOUIsT0FBT2hCLEtBQUtnQixLQUFLOzJCQUhaaEIsS0FBSytDLEdBQUc7Ozs7O29CQU1uQixDQUFDO2dCQUNIOzs7Ozs7OztBQUlSLENBQUM7R0E3R3VCOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZGxpc3QuanM/NzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgY2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjYXJkcyB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbG9ycywgc2V0U2VsZWN0ZWRDb2xvcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGNvbG9ycyA9IFtcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiLCBcIlB1cnBsZVwiXTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcIkxlYWRlclwiLCBcIkV2ZW50XCIsIFwiU3RhZ2VcIiwgXCJDaGFyYWN0ZXJcIl07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdGaWx0ZXJlZERhdGEgPSBjYXJkc1xuICAgICAgLmZpbHRlcigoY2FyZCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDb2xvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb2xvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGNhcmQuY29sb3IuaW5jbHVkZXMoc2VsZWN0ZWRDb2xvcnNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IGNhcmQuY29sb3Iuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgIHJldHVybiBjb2xvcnMuc29tZSgoYykgPT4gc2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoYykpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoY2FyZCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FyZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgY29uc3QgbmV3RmlsdGVyZWRDYXRlID0gY2FyZHNcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2FyZC5jYXRlZ29yeSk7XG4gICAgICAgICAgcmV0dXJuIGNhcmQuY2F0ZWdvcnlcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoc2VsZWN0ZWRDYXRlZ29yeVswXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShuZXdGaWx0ZXJlZERhdGEpO1xuICB9LCBbY2FyZHMsIHNlbGVjdGVkQ29sb3JzLCBzZWFyY2hdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcikge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkQ29sb3JzID0gWy4uLnNlbGVjdGVkQ29sb3JzXTtcbiAgICBpZiAobmV3U2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG5ld1NlbGVjdGVkQ29sb3JzLmluZGV4T2YoY29sb3IpO1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMucHVzaChjb2xvcik7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkQ29sb3JzKG5ld1NlbGVjdGVkQ29sb3JzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgbmV3Q2F0ZWdvcnkgPVxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGggPT09IDAgPyBbXSA6IFsuLi5zZWxlY3RlZENhdGVnb3J5XTtcbiAgICBpZiAobmV3Q2F0ZWdvcnkuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG5ld0NhdGVnb3J5LmluZGV4T2YoY2F0ZWdvcnkpO1xuICAgICAgbmV3Q2F0ZWdvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2F0ZWdvcnkucHVzaChjYXRlZ29yeSk7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkobmV3Q2F0ZWdvcnkpO1xuICB9XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2F0ZWdvcnkpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoIHNldFNlYXJjaD17c2V0U2VhcmNofSAvPlxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtjb2xvcn0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y29sb3J9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDYXRlZ29yeS5pbmNsdWRlcyhjYXRlZ29yeSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDYXRlZ29yeUNoYW5nZShjYXRlZ29yeSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNSBteC1hdXRvIFwiPlxuICAgICAgICB7ZmlsdGVyZWREYXRhPy5tYXAoKGNhcmQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZC5uYW1lICE9PSBcIi1cIiB8fCBzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjYXJkLmNvbG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NhcmQuX2lkfVxuICAgICAgICAgICAgICAgIGlkPXtjYXJkLmNhcmRJZH1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmQuYWx0QXJ0fVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjYXJkLmNvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKTtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXJkcyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldCIsImNhcmQiLCJIb21lIiwiY2FyZHMiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJzZWxlY3RlZENvbG9ycyIsInNldFNlbGVjdGVkQ29sb3JzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjb2xvcnMiLCJjYXRlZ29yaWVzIiwibmV3RmlsdGVyZWREYXRhIiwiZmlsdGVyIiwibGVuZ3RoIiwiY29sb3IiLCJpbmNsdWRlcyIsInNwbGl0Iiwic29tZSIsImMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdGaWx0ZXJlZENhdGUiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnkiLCJoYW5kbGVDb2xvckNoYW5nZSIsIm5ld1NlbGVjdGVkQ29sb3JzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImhhbmRsZUNhdGVnb3J5Q2hhbmdlIiwibmV3Q2F0ZWdvcnkiLCJtYXAiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImlkIiwiY2FyZElkIiwiYWx0IiwiYWx0QXJ0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});