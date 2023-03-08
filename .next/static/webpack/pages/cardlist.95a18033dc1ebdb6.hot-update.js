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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    const categories = [\n        \"Leader\",\n        \"Event\",\n        \"Stage\",\n        \"Character\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const newFilteredData = cards.filter((card)=>{\n            if (selectedColors.length === 0) {\n                return true;\n            } else if (selectedColors.length === 1) {\n                return card.color.includes(selectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>selectedColors.includes(c));\n            }\n        }).filter((card)=>{\n            return card.name.toLowerCase().includes(search.toLowerCase());\n        });\n        setFilteredData(newFilteredData);\n    }, [\n        cards,\n        selectedColors,\n        search\n    ]);\n    function handleColorChange(color1) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color1)) {\n            const index = newSelectedColors.indexOf(color1);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color1);\n        }\n        setSelectedColors(newSelectedColors);\n    }\n    function handleCategoryChange(category) {\n        const newCategory = [\n            ...selectedCategory\n        ];\n        if (newCategory.includes(category)) {\n            const index = newCategory.indexOf(category);\n            newCategory.splice(index, 1);\n        } else {\n            newCategory.push(category);\n        }\n        setSelectedCategory(newCategory);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            colors.map((color1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color1),\n                                onChange: ()=>handleColorChange(color1)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            color1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, color1, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)),\n            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedCategory.includes(category),\n                                onChange: ()=>handleCategoryChange(category)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, category, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"wfpTz/Eaz9Gz4jMsDluGumqQsV0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNGO0FBQ1g7O0FBRWhCLFNBQVNLLEtBQUssS0FBUyxFQUFFO1FBQVgsRUFBRUMsTUFBSyxFQUFFLEdBQVQ7O0lBQzNCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ1Usa0JBQWtCQyxvQkFBb0IsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUUzRCxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFFckMsTUFBTWMsU0FBUztRQUFDO1FBQU87UUFBUztRQUFRO0tBQVM7SUFDakQsTUFBTUMsYUFBYTtRQUFDO1FBQVU7UUFBUztRQUFTO0tBQVk7SUFFNURkLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNZSxrQkFBa0JYLE1BQ3JCWSxNQUFNLENBQUMsQ0FBQ0MsT0FBUztZQUNoQixJQUFJVixlQUFlVyxNQUFNLEtBQUssR0FBRztnQkFDL0IsT0FBTyxJQUFJO1lBQ2IsT0FBTyxJQUFJWCxlQUFlVyxNQUFNLEtBQUssR0FBRztnQkFDdEMsT0FBT0QsS0FBS0UsS0FBSyxDQUFDQyxRQUFRLENBQUNiLGNBQWMsQ0FBQyxFQUFFO1lBQzlDLE9BQU87Z0JBQ0wsTUFBTU0sU0FBU0ksS0FBS0UsS0FBSyxDQUFDRSxLQUFLLENBQUM7Z0JBQ2hDLE9BQU9SLE9BQU9TLElBQUksQ0FBQyxDQUFDQyxJQUFNaEIsZUFBZWEsUUFBUSxDQUFDRztZQUNwRCxDQUFDO1FBQ0gsR0FDQ1AsTUFBTSxDQUFDLENBQUNDLE9BQVM7WUFDaEIsT0FBT0EsS0FBS08sSUFBSSxDQUFDQyxXQUFXLEdBQUdMLFFBQVEsQ0FBQ1QsT0FBT2MsV0FBVztRQUM1RDtRQUNGbkIsZ0JBQWdCUztJQUNsQixHQUFHO1FBQUNYO1FBQU9HO1FBQWdCSTtLQUFPO0lBRWxDLFNBQVNlLGtCQUFrQlAsTUFBSyxFQUFFO1FBQ2hDLE1BQU1RLG9CQUFvQjtlQUFJcEI7U0FBZTtRQUM3QyxJQUFJb0Isa0JBQWtCUCxRQUFRLENBQUNELFNBQVE7WUFDckMsTUFBTVMsUUFBUUQsa0JBQWtCRSxPQUFPLENBQUNWO1lBQ3hDUSxrQkFBa0JHLE1BQU0sQ0FBQ0YsT0FBTztRQUNsQyxPQUFPO1lBQ0xELGtCQUFrQkksSUFBSSxDQUFDWjtRQUN6QixDQUFDO1FBQ0RYLGtCQUFrQm1CO0lBQ3BCO0lBRUEsU0FBU0sscUJBQXFCQyxRQUFRLEVBQUU7UUFDdEMsTUFBTUMsY0FBYztlQUFJekI7U0FBaUI7UUFDekMsSUFBSXlCLFlBQVlkLFFBQVEsQ0FBQ2EsV0FBVztZQUNsQyxNQUFNTCxRQUFRTSxZQUFZTCxPQUFPLENBQUNJO1lBQ2xDQyxZQUFZSixNQUFNLENBQUNGLE9BQU87UUFDNUIsT0FBTztZQUNMTSxZQUFZSCxJQUFJLENBQUNFO1FBQ25CLENBQUM7UUFDRHZCLG9CQUFvQndCO0lBQ3RCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDakMsMERBQU1BO2dCQUFDVyxXQUFXQTs7Ozs7O1lBQ2xCQyxPQUFPc0IsR0FBRyxDQUFDLENBQUNoQix1QkFDWCw4REFBQ2lCOzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTakMsZUFBZWEsUUFBUSxDQUFDRDtnQ0FDakNzQixVQUFVLElBQU1mLGtCQUFrQlA7Ozs7Ozs0QkFFbkNBOzs7Ozs7O21CQVBLQTs7Ozs7WUFXWEwsV0FBV3FCLEdBQUcsQ0FBQyxDQUFDRix5QkFDZiw4REFBQ0c7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVMvQixpQkFBaUJXLFFBQVEsQ0FBQ2E7Z0NBQ25DUSxVQUFVLElBQU1ULHFCQUFxQkM7Ozs7Ozs0QkFFdENkOzs7Ozs7O21CQVBLYzs7Ozs7MEJBWVosOERBQUNHO2dCQUFJTSxXQUFVOzBCQUNackMseUJBQUFBLDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFjOEIsR0FBRyxDQUFDLENBQUNsQixPQUFTO29CQUMzQixJQUFJQSxLQUFLTyxJQUFJLEtBQUssT0FBT2pCLGVBQWVhLFFBQVEsQ0FBQ0gsS0FBS0UsS0FBSyxHQUFHO3dCQUM1RCxxQkFDRSw4REFBQ3JCLHdEQUFJQTs0QkFFSDZDLElBQUkxQixLQUFLMkIsTUFBTTs0QkFDZkMsS0FBSzVCLEtBQUs2QixNQUFNOzRCQUNoQjNCLE9BQU9GLEtBQUtFLEtBQUs7MkJBSFpGLEtBQUs4QixHQUFHOzs7OztvQkFNbkIsQ0FBQztnQkFDSDs7Ozs7Ozs7QUFJUixDQUFDO0dBOUZ1QjVDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmRsaXN0LmpzPzc0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCB7IHNldCB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDb2xvcnMsIHNldFNlbGVjdGVkQ29sb3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBjb2xvcnMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJQdXJwbGVcIl07XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJMZWFkZXJcIiwgXCJFdmVudFwiLCBcIlN0YWdlXCIsIFwiQ2hhcmFjdGVyXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3RmlsdGVyZWREYXRhID0gY2FyZHNcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBjYXJkLmNvbG9yLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3JzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb2xvcnMgPSBjYXJkLmNvbG9yLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICByZXR1cm4gY29sb3JzLnNvbWUoKGMpID0+IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGMpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShuZXdGaWx0ZXJlZERhdGEpO1xuICB9LCBbY2FyZHMsIHNlbGVjdGVkQ29sb3JzLCBzZWFyY2hdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcikge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkQ29sb3JzID0gWy4uLnNlbGVjdGVkQ29sb3JzXTtcbiAgICBpZiAobmV3U2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG5ld1NlbGVjdGVkQ29sb3JzLmluZGV4T2YoY29sb3IpO1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMucHVzaChjb2xvcik7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkQ29sb3JzKG5ld1NlbGVjdGVkQ29sb3JzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGNhdGVnb3J5KSB7XG4gICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yeV07XG4gICAgaWYgKG5ld0NhdGVnb3J5LmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgY29uc3QgaW5kZXggPSBuZXdDYXRlZ29yeS5pbmRleE9mKGNhdGVnb3J5KTtcbiAgICAgIG5ld0NhdGVnb3J5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NhdGVnb3J5LnB1c2goY2F0ZWdvcnkpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KG5ld0NhdGVnb3J5KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2ggc2V0U2VhcmNoPXtzZXRTZWFyY2h9IC8+XG4gICAgICB7Y29sb3JzLm1hcCgoY29sb3IpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2NvbG9yfT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY29sb3IpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtjb2xvcn1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENhdGVnb3J5LmluY2x1ZGVzKGNhdGVnb3J5KX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGNhdGVnb3J5KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y29sb3J9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy01IG14LWF1dG8gXCI+XG4gICAgICAgIHtmaWx0ZXJlZERhdGE/Lm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkLm5hbWUgIT09IFwiLVwiIHx8IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNhcmQuY29sb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17Y2FyZC5faWR9XG4gICAgICAgICAgICAgICAgaWQ9e2NhcmQuY2FyZElkfVxuICAgICAgICAgICAgICAgIGFsdD17Y2FyZC5hbHRBcnR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhcmQuY29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhcmRzXCIpO1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhcmRzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwic2V0IiwiSG9tZSIsImNhcmRzIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwic2VsZWN0ZWRDb2xvcnMiLCJzZXRTZWxlY3RlZENvbG9ycyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiY29sb3JzIiwiY2F0ZWdvcmllcyIsIm5ld0ZpbHRlcmVkRGF0YSIsImZpbHRlciIsImNhcmQiLCJsZW5ndGgiLCJjb2xvciIsImluY2x1ZGVzIiwic3BsaXQiLCJzb21lIiwiYyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZUNvbG9yQ2hhbmdlIiwibmV3U2VsZWN0ZWRDb2xvcnMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UiLCJjYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwibWFwIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJpZCIsImNhcmRJZCIsImFsdCIsImFsdEFydCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});