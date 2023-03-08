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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n        const newFilteredData = cards.filter((card)=>{\n            if (newSelectedColors.length === 0) {\n                return true;\n            } else if (newSelectedColors.length === 1) {\n                return card.color.includes(newSelectedColors[0]);\n            } else {\n                const colors = card.color.split(\"/\");\n                return colors.some((c)=>newSelectedColors.includes(c));\n            }\n        });\n        setFilteredData(newFilteredData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setFilteredData: setFilteredData,\n                setSelectedColors: setSelectedColors,\n                data: cards\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex justify-center align-text-top\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            color.includes(\"/\") ? color.split(\"/\").map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        c,\n                                        \" \"\n                                    ]\n                                }, c, true, {\n                                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 45\n                                }, this)) : color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"2FJPcwA4XDl3xQSz/dZKIt3C3yw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNGO0FBQ1g7O0FBRWhCLFNBQVNLLEtBQUssS0FBUyxFQUFFO1FBQVgsRUFBRUMsTUFBSyxFQUFFLEdBQVQ7O0lBQzNCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDSztJQUVqRCxNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDdkQsTUFBTVUsU0FBUztRQUFDO1FBQU87UUFBUztRQUFRO0tBQVM7SUFFakQsU0FBU0Msa0JBQWtCQyxLQUFLLEVBQUU7UUFDaEMsTUFBTUMsb0JBQW9CO2VBQUlMO1NBQWU7UUFFN0MsSUFBSUssa0JBQWtCQyxRQUFRLENBQUNGLFFBQVE7WUFDckMsTUFBTUcsUUFBUUYsa0JBQWtCRyxPQUFPLENBQUNKO1lBQ3hDQyxrQkFBa0JJLE1BQU0sQ0FBQ0YsT0FBTztRQUNsQyxPQUFPO1lBQ0xGLGtCQUFrQkssSUFBSSxDQUFDTjtRQUN6QixDQUFDO1FBRURILGtCQUFrQkk7UUFFbEIsTUFBTU0sa0JBQWtCZCxNQUFNZSxNQUFNLENBQUMsQ0FBQ0MsT0FBUztZQUM3QyxJQUFJUixrQkFBa0JTLE1BQU0sS0FBSyxHQUFHO2dCQUNsQyxPQUFPLElBQUk7WUFDYixPQUFPLElBQUlULGtCQUFrQlMsTUFBTSxLQUFLLEdBQUc7Z0JBQ3pDLE9BQU9ELEtBQUtULEtBQUssQ0FBQ0UsUUFBUSxDQUFDRCxpQkFBaUIsQ0FBQyxFQUFFO1lBQ2pELE9BQU87Z0JBQ0wsTUFBTUgsU0FBU1csS0FBS1QsS0FBSyxDQUFDVyxLQUFLLENBQUM7Z0JBQ2hDLE9BQU9iLE9BQU9jLElBQUksQ0FBQyxDQUFDQyxJQUFNWixrQkFBa0JDLFFBQVEsQ0FBQ1c7WUFDdkQsQ0FBQztRQUNIO1FBRUFsQixnQkFBZ0JZO0lBQ2xCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDakIsMERBQU1BO2dCQUNMSyxpQkFBaUJBO2dCQUNqQkUsbUJBQW1CQTtnQkFDbkJpQixNQUFNckI7Ozs7OztZQUVQSyxPQUFPaUIsR0FBRyxDQUFDLENBQUNmLHNCQUNYLDhEQUFDZ0I7OEJBQ0MsNEVBQUNDO3dCQUFNQyxXQUFVOzswQ0FDZiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVN6QixlQUFlTSxRQUFRLENBQUNGO2dDQUNqQ3NCLFVBQVUsSUFBTXZCLGtCQUFrQkM7Ozs7Ozs0QkFFbkNBLE1BQU1FLFFBQVEsQ0FBQyxPQUNaRixNQUFNVyxLQUFLLENBQUMsS0FBS0ksR0FBRyxDQUFDLENBQUNGLGtCQUFNLDhEQUFDVTs7d0NBQWNWO3dDQUFFOzttQ0FBTkE7Ozs7NENBQ3ZDYixLQUFLOzs7Ozs7O21CQVRIQTs7Ozs7MEJBY1osOERBQUNnQjtnQkFBSUUsV0FBVTswQkFDWnhCLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY3FCLEdBQUcsQ0FBQyxDQUFDTixPQUFTO29CQUMzQixJQUFJQSxLQUFLZSxJQUFJLEtBQUssT0FBTzVCLGVBQWVNLFFBQVEsQ0FBQ08sS0FBS1QsS0FBSyxHQUFHO3dCQUM1RCxxQkFDRSw4REFBQ2Isd0RBQUlBOzRCQUVIc0MsSUFBSWhCLEtBQUtpQixNQUFNOzRCQUNmQyxLQUFLbEIsS0FBS21CLE1BQU07NEJBQ2hCNUIsT0FBT1MsS0FBS1QsS0FBSzsyQkFIWlMsS0FBS29CLEdBQUc7Ozs7O29CQU1uQixDQUFDO2dCQUNIOzs7Ozs7OztBQUlSLENBQUM7R0F0RXVCckM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZGxpc3QuanM/NzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjYXJkcyB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShjYXJkcyk7XG5cbiAgY29uc3QgW3NlbGVjdGVkQ29sb3JzLCBzZXRTZWxlY3RlZENvbG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGNvbG9ycyA9IFtcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiLCBcIlB1cnBsZVwiXTtcblxuICBmdW5jdGlvbiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcikge1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkQ29sb3JzID0gWy4uLnNlbGVjdGVkQ29sb3JzXTtcblxuICAgIGlmIChuZXdTZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcikpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbmV3U2VsZWN0ZWRDb2xvcnMuaW5kZXhPZihjb2xvcik7XG4gICAgICBuZXdTZWxlY3RlZENvbG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZENvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZENvbG9ycyhuZXdTZWxlY3RlZENvbG9ycyk7XG5cbiAgICBjb25zdCBuZXdGaWx0ZXJlZERhdGEgPSBjYXJkcy5maWx0ZXIoKGNhcmQpID0+IHtcbiAgICAgIGlmIChuZXdTZWxlY3RlZENvbG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5ld1NlbGVjdGVkQ29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gY2FyZC5jb2xvci5pbmNsdWRlcyhuZXdTZWxlY3RlZENvbG9yc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBjYXJkLmNvbG9yLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgcmV0dXJuIGNvbG9ycy5zb21lKChjKSA9PiBuZXdTZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXRGaWx0ZXJlZERhdGEobmV3RmlsdGVyZWREYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2hcbiAgICAgICAgc2V0RmlsdGVyZWREYXRhPXtzZXRGaWx0ZXJlZERhdGF9XG4gICAgICAgIHNldFNlbGVjdGVkQ29sb3JzPXtzZXRTZWxlY3RlZENvbG9yc31cbiAgICAgICAgZGF0YT17Y2FyZHN9XG4gICAgICAvPlxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtjb2xvcn0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tdGV4dC10b3BcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcil9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NvbG9yLmluY2x1ZGVzKFwiL1wiKVxuICAgICAgICAgICAgICA/IGNvbG9yLnNwbGl0KFwiL1wiKS5tYXAoKGMpID0+IDxzcGFuIGtleT17Y30+e2N9IDwvc3Bhbj4pXG4gICAgICAgICAgICAgIDogY29sb3J9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy01IG14LWF1dG8gXCI+XG4gICAgICAgIHtmaWx0ZXJlZERhdGE/Lm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkLm5hbWUgIT09IFwiLVwiIHx8IHNlbGVjdGVkQ29sb3JzLmluY2x1ZGVzKGNhcmQuY29sb3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17Y2FyZC5faWR9XG4gICAgICAgICAgICAgICAgaWQ9e2NhcmQuY2FyZElkfVxuICAgICAgICAgICAgICAgIGFsdD17Y2FyZC5hbHRBcnR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhcmQuY29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhcmRzXCIpO1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhcmRzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwic2V0IiwiSG9tZSIsImNhcmRzIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwic2VsZWN0ZWRDb2xvcnMiLCJzZXRTZWxlY3RlZENvbG9ycyIsImNvbG9ycyIsImhhbmRsZUNvbG9yQ2hhbmdlIiwiY29sb3IiLCJuZXdTZWxlY3RlZENvbG9ycyIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsIm5ld0ZpbHRlcmVkRGF0YSIsImZpbHRlciIsImNhcmQiLCJsZW5ndGgiLCJzcGxpdCIsInNvbWUiLCJjIiwiZGF0YSIsIm1hcCIsImRpdiIsImxhYmVsIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3BhbiIsIm5hbWUiLCJpZCIsImNhcmRJZCIsImFsdCIsImFsdEFydCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});