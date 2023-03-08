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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    const categories = [\n        \"LEADER\",\n        \"EVENT\",\n        \"STAGE\",\n        \"CHARACTER\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        const newFilteredCate1 = cards.filter((card)=>{\n            if (selectedCategory.length === 0) {\n                return true;\n            } else {\n                const categories = card.category.split(\"/\");\n                return categories.some((c)=>selectedCategory.includes(c.toLowerCase()));\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        cards,\n        selectedColors,\n        selectedCategory,\n        search\n    ]);\n    console.log(selectedCategory);\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    function handleCategoryChange(category) {\n        const newCategory = selectedCategory.length === 0 ? [] : [\n            ...selectedCategory\n        ];\n        if (newCategory.includes(category)) {\n            const index = newCategory.indexOf(category);\n            newCategory.splice(index, 1);\n        } else {\n            newCategory.push(category);\n        }\n        setSelectedCategory(newFilteredCate);\n    }\n    console.log(selectedCategory);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)),\n            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedCategory.includes(category),\n                                onChange: ()=>handleCategoryChange(category)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                }, category, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color) || selectedCategory.some((c)=>card.category.includes(c.toLowerCase()))) {\n                        console.log(selectedCategory);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color,\n                            category: card.category\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 111,\n                            columnNumber: 15\n                        }, this);\n                    } else {\n                        return null;\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wfpTz/Eaz9Gz4jMsDluGumqQsV0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNGO0FBQ1g7QUFDTzs7QUFFdkIsU0FBU00sS0FBSyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDs7SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkQsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNELE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNZSxTQUFTO1FBQUM7UUFBTztRQUFTO1FBQVE7S0FBUztJQUNqRCxNQUFNQyxhQUFhO1FBQUM7UUFBVTtRQUFTO1FBQVM7S0FBWTtJQUU1RGYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1nQixrQkFBa0JYLE1BQ3JCWSxNQUFNLENBQUMsQ0FBQ2QsT0FBUztZQUNoQixJQUFJSyxlQUFlVSxNQUFNLEtBQUssR0FBRztnQkFDL0IsT0FBTyxJQUFJO1lBQ2IsT0FBTyxJQUFJVixlQUFlVSxNQUFNLEtBQUssR0FBRztnQkFDdEMsT0FBT2YsS0FBS2dCLEtBQUssQ0FBQ0MsUUFBUSxDQUFDWixjQUFjLENBQUMsRUFBRTtZQUM5QyxPQUFPO2dCQUNMLE1BQU1NLFNBQVNYLEtBQUtnQixLQUFLLENBQUNFLEtBQUssQ0FBQztnQkFDaEMsT0FBT1AsT0FBT1EsSUFBSSxDQUFDLENBQUNDLElBQU1mLGVBQWVZLFFBQVEsQ0FBQ0c7WUFDcEQsQ0FBQztRQUNILEdBQ0NOLE1BQU0sQ0FBQyxDQUFDZCxPQUFTO1lBQ2hCLE9BQU9BLEtBQUtxQixJQUFJLENBQUNDLFdBQVcsR0FBR0wsUUFBUSxDQUFDUixPQUFPYSxXQUFXO1FBQzVEO1FBQ0YsTUFBTUMsbUJBQWtCckIsTUFDckJZLE1BQU0sQ0FBQyxDQUFDZCxPQUFTO1lBQ2hCLElBQUlPLGlCQUFpQlEsTUFBTSxLQUFLLEdBQUc7Z0JBQ2pDLE9BQU8sSUFBSTtZQUNiLE9BQU87Z0JBQ0wsTUFBTUgsYUFBYVosS0FBS3dCLFFBQVEsQ0FBQ04sS0FBSyxDQUFDO2dCQUN2QyxPQUFPTixXQUFXTyxJQUFJLENBQUMsQ0FBQ0MsSUFDdEJiLGlCQUFpQlUsUUFBUSxDQUFDRyxFQUFFRSxXQUFXO1lBRTNDLENBQUM7UUFDSCxHQUNDUixNQUFNLENBQUMsQ0FBQ2QsT0FBUztZQUNoQixPQUFPQSxLQUFLcUIsSUFBSSxDQUFDQyxXQUFXLEdBQUdMLFFBQVEsQ0FBQ1IsT0FBT2EsV0FBVztRQUM1RDtRQUNGbEIsZ0JBQWdCUztJQUNsQixHQUFHO1FBQUNYO1FBQU9HO1FBQWdCRTtRQUFrQkU7S0FBTztJQUNwRGdCLFFBQVFDLEdBQUcsQ0FBQ25CO0lBQ1osU0FBU29CLGtCQUFrQlgsS0FBSyxFQUFFO1FBQ2hDLE1BQU1ZLG9CQUFvQjtlQUFJdkI7U0FBZTtRQUM3QyxJQUFJdUIsa0JBQWtCWCxRQUFRLENBQUNELFFBQVE7WUFDckMsTUFBTWEsUUFBUUQsa0JBQWtCRSxPQUFPLENBQUNkO1lBQ3hDWSxrQkFBa0JHLE1BQU0sQ0FBQ0YsT0FBTztRQUNsQyxPQUFPO1lBQ0xELGtCQUFrQkksSUFBSSxDQUFDaEI7UUFDekIsQ0FBQztRQUNEVixrQkFBa0JzQjtJQUNwQjtJQUVBLFNBQVNLLHFCQUFxQlQsUUFBUSxFQUFFO1FBQ3RDLE1BQU1VLGNBQ0ozQixpQkFBaUJRLE1BQU0sS0FBSyxJQUFJLEVBQUUsR0FBRztlQUFJUjtTQUFpQjtRQUM1RCxJQUFJMkIsWUFBWWpCLFFBQVEsQ0FBQ08sV0FBVztZQUNsQyxNQUFNSyxRQUFRSyxZQUFZSixPQUFPLENBQUNOO1lBQ2xDVSxZQUFZSCxNQUFNLENBQUNGLE9BQU87UUFDNUIsT0FBTztZQUNMSyxZQUFZRixJQUFJLENBQUNSO1FBQ25CLENBQUM7UUFDRGhCLG9CQUFvQmU7SUFDdEI7SUFDQUUsUUFBUUMsR0FBRyxDQUFDbkI7SUFDWixxQkFDRTs7MEJBQ0UsOERBQUNULDBEQUFNQTtnQkFBQ1ksV0FBV0E7Ozs7OztZQUNsQkMsT0FBT3dCLEdBQUcsQ0FBQyxDQUFDbkIsc0JBQ1gsOERBQUNvQjs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsU0FBU25DLGVBQWVZLFFBQVEsQ0FBQ0Q7Z0NBQ2pDeUIsVUFBVSxJQUFNZCxrQkFBa0JYOzs7Ozs7NEJBRW5DQTs7Ozs7OzttQkFQS0E7Ozs7O1lBV1hKLFdBQVd1QixHQUFHLENBQUMsQ0FBQ1gseUJBQ2YsOERBQUNZOzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTakMsaUJBQWlCVSxRQUFRLENBQUNPO2dDQUNuQ2lCLFVBQVUsSUFBTVIscUJBQXFCVDs7Ozs7OzRCQUV0Q0E7Ozs7Ozs7bUJBUEtBOzs7OzswQkFZWiw4REFBQ1k7Z0JBQUlNLFdBQVU7MEJBQ1p2Qyx5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNnQyxHQUFHLENBQUMsQ0FBQ25DLE9BQVM7b0JBQzNCLElBQ0VBLEtBQUtxQixJQUFJLEtBQUssT0FDZGhCLGVBQWVZLFFBQVEsQ0FBQ2pCLEtBQUtnQixLQUFLLEtBQ2xDVCxpQkFBaUJZLElBQUksQ0FBQyxDQUFDQyxJQUNyQnBCLEtBQUt3QixRQUFRLENBQUNQLFFBQVEsQ0FBQ0csRUFBRUUsV0FBVyxNQUV0Qzt3QkFDQUcsUUFBUUMsR0FBRyxDQUFDbkI7d0JBQ1oscUJBQ0UsOERBQUNaLHdEQUFJQTs0QkFFSGdELElBQUkzQyxLQUFLNEMsTUFBTTs0QkFDZkMsS0FBSzdDLEtBQUs4QyxNQUFNOzRCQUNoQjlCLE9BQU9oQixLQUFLZ0IsS0FBSzs0QkFDakJRLFVBQVV4QixLQUFLd0IsUUFBUTsyQkFKbEJ4QixLQUFLK0MsR0FBRzs7Ozs7b0JBT25CLE9BQU87d0JBQ0wsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Ozs7Ozs7O0FBSVIsQ0FBQztHQXZIdUI5QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJkbGlzdC5qcz83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBzZXQgfSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBjYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNhcmRzIH0pIHtcbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29sb3JzLCBzZXRTZWxlY3RlZENvbG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29sb3JzID0gW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIsIFwiUHVycGxlXCJdO1xuICBjb25zdCBjYXRlZ29yaWVzID0gW1wiTEVBREVSXCIsIFwiRVZFTlRcIiwgXCJTVEFHRVwiLCBcIkNIQVJBQ1RFUlwiXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ZpbHRlcmVkRGF0YSA9IGNhcmRzXG4gICAgICAuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZENvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZENvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gY2FyZC5jb2xvci5pbmNsdWRlcyhzZWxlY3RlZENvbG9yc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY29sb3JzID0gY2FyZC5jb2xvci5zcGxpdChcIi9cIik7XG4gICAgICAgICAgcmV0dXJuIGNvbG9ycy5zb21lKChjKSA9PiBzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICBjb25zdCBuZXdGaWx0ZXJlZENhdGUgPSBjYXJkc1xuICAgICAgLmZpbHRlcigoY2FyZCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gY2FyZC5jYXRlZ29yeS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuc29tZSgoYykgPT5cbiAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkuaW5jbHVkZXMoYy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEobmV3RmlsdGVyZWREYXRhKTtcbiAgfSwgW2NhcmRzLCBzZWxlY3RlZENvbG9ycywgc2VsZWN0ZWRDYXRlZ29yeSwgc2VhcmNoXSk7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2F0ZWdvcnkpO1xuICBmdW5jdGlvbiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcikge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkQ29sb3JzID0gWy4uLnNlbGVjdGVkQ29sb3JzXTtcbiAgICBpZiAobmV3U2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG5ld1NlbGVjdGVkQ29sb3JzLmluZGV4T2YoY29sb3IpO1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMucHVzaChjb2xvcik7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkQ29sb3JzKG5ld1NlbGVjdGVkQ29sb3JzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgbmV3Q2F0ZWdvcnkgPVxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGggPT09IDAgPyBbXSA6IFsuLi5zZWxlY3RlZENhdGVnb3J5XTtcbiAgICBpZiAobmV3Q2F0ZWdvcnkuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG5ld0NhdGVnb3J5LmluZGV4T2YoY2F0ZWdvcnkpO1xuICAgICAgbmV3Q2F0ZWdvcnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2F0ZWdvcnkucHVzaChjYXRlZ29yeSk7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkobmV3RmlsdGVyZWRDYXRlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3J5KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaCBzZXRTZWFyY2g9e3NldFNlYXJjaH0gLz5cbiAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y29sb3J9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcil9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NvbG9yfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ2F0ZWdvcnkuaW5jbHVkZXMoY2F0ZWdvcnkpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoY2F0ZWdvcnkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTUgbXgtYXV0byBcIj5cbiAgICAgICAge2ZpbHRlcmVkRGF0YT8ubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2FyZC5uYW1lICE9PSBcIi1cIiB8fFxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY2FyZC5jb2xvcikgfHxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkuc29tZSgoYykgPT5cbiAgICAgICAgICAgICAgY2FyZC5jYXRlZ29yeS5pbmNsdWRlcyhjLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3J5KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtjYXJkLl9pZH1cbiAgICAgICAgICAgICAgICBpZD17Y2FyZC5jYXJkSWR9XG4gICAgICAgICAgICAgICAgYWx0PXtjYXJkLmFsdEFydH1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y2FyZC5jb2xvcn1cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2FyZC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhcmRzXCIpO1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhcmRzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwic2V0IiwiY2FyZCIsIkhvbWUiLCJjYXJkcyIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsInNlbGVjdGVkQ29sb3JzIiwic2V0U2VsZWN0ZWRDb2xvcnMiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInNlYXJjaCIsInNldFNlYXJjaCIsImNvbG9ycyIsImNhdGVnb3JpZXMiLCJuZXdGaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJsZW5ndGgiLCJjb2xvciIsImluY2x1ZGVzIiwic3BsaXQiLCJzb21lIiwiYyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0ZpbHRlcmVkQ2F0ZSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNvbG9yQ2hhbmdlIiwibmV3U2VsZWN0ZWRDb2xvcnMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJuZXdDYXRlZ29yeSIsIm1hcCIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiaWQiLCJjYXJkSWQiLCJhbHQiLCJhbHRBcnQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});