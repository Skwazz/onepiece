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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    const categories = [\n        \"Leader\",\n        \"Event\",\n        \"Stage\",\n        \"Character\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        const newFilteredCate = cards.filter((card)=>{\n            if (selectedCategory.length === 0) {\n                return true;\n            } else {\n                console.log(card[0].category);\n                return card.category.toLowerCase().includes(selectedCategory[0].toLowerCase());\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        cards,\n        selectedColors,\n        search\n    ]);\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    function handleCategoryChange(category) {\n        const newCategory = [\n            ...selectedCategory\n        ];\n        if (newCategory.includes(category)) {\n            const index = newCategory.indexOf(category);\n            newCategory.splice(index, 1);\n        } else {\n            newCategory.push(category);\n        }\n        setSelectedCategory(newCategory);\n    }\n    console.log(cards.category);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)),\n            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedCategory.includes(category),\n                                onChange: ()=>handleCategoryChange(category)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                }, category, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wfpTz/Eaz9Gz4jMsDluGumqQsV0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQ0U7OzBCQUNFLDhEQUFDNUIsMERBQU1BO2dCQUFDWSxXQUFXQTs7Ozs7O1lBQ2xCQyxPQUFPd0IsR0FBRyxDQUFDLENBQUNuQixzQkFDWCw4REFBQ29COzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTbkMsZUFBZVksUUFBUSxDQUFDRDtnQ0FDakN5QixVQUFVLElBQU1kLGtCQUFrQlg7Ozs7Ozs0QkFFbkNBOzs7Ozs7O21CQVBLQTs7Ozs7WUFXWEosV0FBV3VCLEdBQUcsQ0FBQyxDQUFDVCx5QkFDZiw4REFBQ1U7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVNqQyxpQkFBaUJVLFFBQVEsQ0FBQ1M7Z0NBQ25DZSxVQUFVLElBQU1SLHFCQUFxQlA7Ozs7Ozs0QkFFdENBOzs7Ozs7O21CQVBLQTs7Ozs7MEJBWVosOERBQUNVO2dCQUFJTSxXQUFVOzBCQUNadkMseUJBQUFBLDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFjZ0MsR0FBRyxDQUFDLENBQUNuQyxPQUFTO29CQUMzQixJQUFJQSxLQUFLcUIsSUFBSSxLQUFLLE9BQU9oQixlQUFlWSxRQUFRLENBQUNqQixLQUFLZ0IsS0FBSyxHQUFHO3dCQUM1RCxxQkFDRSw4REFBQ3JCLHdEQUFJQTs0QkFFSGdELElBQUkzQyxLQUFLNEMsTUFBTTs0QkFDZkMsS0FBSzdDLEtBQUs4QyxNQUFNOzRCQUNoQjlCLE9BQU9oQixLQUFLZ0IsS0FBSzsyQkFIWmhCLEtBQUsrQyxHQUFHOzs7OztvQkFNbkIsQ0FBQztnQkFDSDs7Ozs7Ozs7QUFJUixDQUFDO0dBNUd1QjlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmRsaXN0LmpzPzc0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCB7IHNldCB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDb2xvcnMsIHNldFNlbGVjdGVkQ29sb3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb2xvcnMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJQdXJwbGVcIl07XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJMZWFkZXJcIiwgXCJFdmVudFwiLCBcIlN0YWdlXCIsIFwiQ2hhcmFjdGVyXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3RmlsdGVyZWREYXRhID0gY2FyZHNcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBjYXJkLmNvbG9yLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3JzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb2xvcnMgPSBjYXJkLmNvbG9yLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4gY29sb3JzLnNvbWUoKGMpID0+IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGMpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IG5ld0ZpbHRlcmVkQ2F0ZSA9IGNhcmRzXG4gICAgICAuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRbMF0uY2F0ZWdvcnkpO1xuICAgICAgICAgIHJldHVybiBjYXJkLmNhdGVnb3J5XG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluY2x1ZGVzKHNlbGVjdGVkQ2F0ZWdvcnlbMF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEobmV3RmlsdGVyZWREYXRhKTtcbiAgfSwgW2NhcmRzLCBzZWxlY3RlZENvbG9ycywgc2VhcmNoXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZENvbG9ycyA9IFsuLi5zZWxlY3RlZENvbG9yc107XG4gICAgaWYgKG5ld1NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBuZXdTZWxlY3RlZENvbG9ycy5pbmRleE9mKGNvbG9yKTtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkQ29sb3JzLnB1c2goY29sb3IpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RlZENvbG9ycyhuZXdTZWxlY3RlZENvbG9ycyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDYXRlZ29yeUNoYW5nZShjYXRlZ29yeSkge1xuICAgIGNvbnN0IG5ld0NhdGVnb3J5ID0gWy4uLnNlbGVjdGVkQ2F0ZWdvcnldO1xuICAgIGlmIChuZXdDYXRlZ29yeS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbmV3Q2F0ZWdvcnkuaW5kZXhPZihjYXRlZ29yeSk7XG4gICAgICBuZXdDYXRlZ29yeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDYXRlZ29yeS5wdXNoKGNhdGVnb3J5KTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShuZXdDYXRlZ29yeSk7XG4gIH1cbiAgY29uc29sZS5sb2coY2FyZHMuY2F0ZWdvcnkpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoIHNldFNlYXJjaD17c2V0U2VhcmNofSAvPlxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtjb2xvcn0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNvbG9yKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKGNvbG9yKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y29sb3J9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDYXRlZ29yeS5pbmNsdWRlcyhjYXRlZ29yeSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDYXRlZ29yeUNoYW5nZShjYXRlZ29yeSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNSBteC1hdXRvIFwiPlxuICAgICAgICB7ZmlsdGVyZWREYXRhPy5tYXAoKGNhcmQpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZC5uYW1lICE9PSBcIi1cIiB8fCBzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjYXJkLmNvbG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NhcmQuX2lkfVxuICAgICAgICAgICAgICAgIGlkPXtjYXJkLmNhcmRJZH1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmQuYWx0QXJ0fVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjYXJkLmNvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXJkc1wiKTtcbiAgY29uc3QgY2FyZHMgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXJkcyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldCIsImNhcmQiLCJIb21lIiwiY2FyZHMiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJzZWxlY3RlZENvbG9ycyIsInNldFNlbGVjdGVkQ29sb3JzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjb2xvcnMiLCJjYXRlZ29yaWVzIiwibmV3RmlsdGVyZWREYXRhIiwiZmlsdGVyIiwibGVuZ3RoIiwiY29sb3IiLCJpbmNsdWRlcyIsInNwbGl0Iiwic29tZSIsImMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdGaWx0ZXJlZENhdGUiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnkiLCJoYW5kbGVDb2xvckNoYW5nZSIsIm5ld1NlbGVjdGVkQ29sb3JzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImhhbmRsZUNhdGVnb3J5Q2hhbmdlIiwibmV3Q2F0ZWdvcnkiLCJtYXAiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImlkIiwiY2FyZElkIiwiYWx0IiwiYWx0QXJ0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});