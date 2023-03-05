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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [selectedColors, setSelectedColors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const colors = [\n        \"Red\",\n        \"Green\",\n        \"Blue\",\n        \"Purple\"\n    ];\n    function handleColorChange(color) {\n        const newSelectedColors = [\n            ...selectedColors\n        ];\n        if (newSelectedColors.includes(color)) {\n            const index = newSelectedColors.indexOf(color);\n            newSelectedColors.splice(index, 1);\n        } else {\n            newSelectedColors.push(color);\n        }\n        setSelectedColors(newSelectedColors);\n        const newFilteredData = cards.filter((card)=>{\n            if (newSelectedColors.length === 0) {\n                return true;\n            } else if (newSelectedColors.length === 1) {\n                return card.Color.includes(newSelectedColors[0]);\n            } else {\n                const colors = card.Color.split(\"/\");\n                return colors.some((c)=>newSelectedColors.includes(c));\n            }\n        });\n        setFilteredData(newFilteredData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setFilteredData: setFilteredData,\n                setSelectedColors: setSelectedColors,\n                data: cards\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedColors.includes(color),\n                                onChange: ()=>handleColorChange(color)\n                            }, void 0, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            color\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, color, false, {\n                    fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                    if (card.name !== \"-\" || selectedColors.includes(card.color)) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: card.cardId,\n                            alt: card.altArt,\n                            color: card.color\n                        }, card._id, false, {\n                            fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"2FJPcwA4XDl3xQSz/dZKIt3C3yw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNGO0FBQ1g7O0FBRWhCLFNBQVNLLEtBQUssS0FBUyxFQUFFO1FBQVgsRUFBRUMsTUFBSyxFQUFFLEdBQVQ7O0lBQzNCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDSztJQUVqRCxNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDdkQsTUFBTVUsU0FBUztRQUFDO1FBQU87UUFBUztRQUFRO0tBQVM7SUFFakQsU0FBU0Msa0JBQWtCQyxLQUFLLEVBQUU7UUFDaEMsTUFBTUMsb0JBQW9CO2VBQUlMO1NBQWU7UUFFN0MsSUFBSUssa0JBQWtCQyxRQUFRLENBQUNGLFFBQVE7WUFDckMsTUFBTUcsUUFBUUYsa0JBQWtCRyxPQUFPLENBQUNKO1lBQ3hDQyxrQkFBa0JJLE1BQU0sQ0FBQ0YsT0FBTztRQUNsQyxPQUFPO1lBQ0xGLGtCQUFrQkssSUFBSSxDQUFDTjtRQUN6QixDQUFDO1FBRURILGtCQUFrQkk7UUFFbEIsTUFBTU0sa0JBQWtCZCxNQUFNZSxNQUFNLENBQUMsQ0FBQ0MsT0FBUztZQUM3QyxJQUFJUixrQkFBa0JTLE1BQU0sS0FBSyxHQUFHO2dCQUNsQyxPQUFPLElBQUk7WUFDYixPQUFPLElBQUlULGtCQUFrQlMsTUFBTSxLQUFLLEdBQUc7Z0JBQ3pDLE9BQU9ELEtBQUtFLEtBQUssQ0FBQ1QsUUFBUSxDQUFDRCxpQkFBaUIsQ0FBQyxFQUFFO1lBQ2pELE9BQU87Z0JBQ0wsTUFBTUgsU0FBU1csS0FBS0UsS0FBSyxDQUFDQyxLQUFLLENBQUM7Z0JBQ2hDLE9BQU9kLE9BQU9lLElBQUksQ0FBQyxDQUFDQyxJQUFNYixrQkFBa0JDLFFBQVEsQ0FBQ1k7WUFDdkQsQ0FBQztRQUNIO1FBRUFuQixnQkFBZ0JZO0lBQ2xCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDakIsMERBQU1BO2dCQUNMSyxpQkFBaUJBO2dCQUNqQkUsbUJBQW1CQTtnQkFDbkJrQixNQUFNdEI7Ozs7OztZQUVQSyxPQUFPa0IsR0FBRyxDQUFDLENBQUNoQixzQkFDWCw4REFBQ2lCOzhCQUNDLDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTekIsZUFBZU0sUUFBUSxDQUFDRjtnQ0FDakNzQixVQUFVLElBQU12QixrQkFBa0JDOzs7Ozs7NEJBRW5DQTs7Ozs7OzttQkFQS0E7Ozs7OzBCQVdaLDhEQUFDaUI7Z0JBQUlNLFdBQVU7MEJBQ1o3Qix5QkFBQUEsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNzQixHQUFHLENBQUMsQ0FBQ1AsT0FBUztvQkFDM0IsSUFBSUEsS0FBS2UsSUFBSSxLQUFLLE9BQU81QixlQUFlTSxRQUFRLENBQUNPLEtBQUtULEtBQUssR0FBRzt3QkFDNUQscUJBQ0UsOERBQUNiLHdEQUFJQTs0QkFFSHNDLElBQUloQixLQUFLaUIsTUFBTTs0QkFDZkMsS0FBS2xCLEtBQUttQixNQUFNOzRCQUNoQjVCLE9BQU9TLEtBQUtULEtBQUs7MkJBSFpTLEtBQUtvQixHQUFHOzs7OztvQkFNbkIsQ0FBQztnQkFDSDs7Ozs7Ozs7QUFJUixDQUFDO0dBbkV1QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmRsaXN0LmpzPzc0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCB7IHNldCB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoY2FyZHMpO1xuXG4gIGNvbnN0IFtzZWxlY3RlZENvbG9ycywgc2V0U2VsZWN0ZWRDb2xvcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjb2xvcnMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJQdXJwbGVcIl07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3JDaGFuZ2UoY29sb3IpIHtcbiAgICBjb25zdCBuZXdTZWxlY3RlZENvbG9ycyA9IFsuLi5zZWxlY3RlZENvbG9yc107XG5cbiAgICBpZiAobmV3U2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY29sb3IpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG5ld1NlbGVjdGVkQ29sb3JzLmluZGV4T2YoY29sb3IpO1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRDb2xvcnMucHVzaChjb2xvcik7XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRDb2xvcnMobmV3U2VsZWN0ZWRDb2xvcnMpO1xuXG4gICAgY29uc3QgbmV3RmlsdGVyZWREYXRhID0gY2FyZHMuZmlsdGVyKChjYXJkKSA9PiB7XG4gICAgICBpZiAobmV3U2VsZWN0ZWRDb2xvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuZXdTZWxlY3RlZENvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGNhcmQuQ29sb3IuaW5jbHVkZXMobmV3U2VsZWN0ZWRDb2xvcnNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29sb3JzID0gY2FyZC5Db2xvci5zcGxpdChcIi9cIik7XG4gICAgICAgIHJldHVybiBjb2xvcnMuc29tZSgoYykgPT4gbmV3U2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoYykpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0RmlsdGVyZWREYXRhKG5ld0ZpbHRlcmVkRGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHNldEZpbHRlcmVkRGF0YT17c2V0RmlsdGVyZWREYXRhfVxuICAgICAgICBzZXRTZWxlY3RlZENvbG9ycz17c2V0U2VsZWN0ZWRDb2xvcnN9XG4gICAgICAgIGRhdGE9e2NhcmRzfVxuICAgICAgLz5cbiAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y29sb3J9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENvbG9ycy5pbmNsdWRlcyhjb2xvcil9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDb2xvckNoYW5nZShjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NvbG9yfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTUgbXgtYXV0byBcIj5cbiAgICAgICAge2ZpbHRlcmVkRGF0YT8ubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgaWYgKGNhcmQubmFtZSAhPT0gXCItXCIgfHwgc2VsZWN0ZWRDb2xvcnMuaW5jbHVkZXMoY2FyZC5jb2xvcikpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtjYXJkLl9pZH1cbiAgICAgICAgICAgICAgICBpZD17Y2FyZC5jYXJkSWR9XG4gICAgICAgICAgICAgICAgYWx0PXtjYXJkLmFsdEFydH1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y2FyZC5jb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FyZHNcIik7XG4gIGNvbnN0IGNhcmRzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2FyZHMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWFyY2giLCJzZXQiLCJIb21lIiwiY2FyZHMiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJzZWxlY3RlZENvbG9ycyIsInNldFNlbGVjdGVkQ29sb3JzIiwiY29sb3JzIiwiaGFuZGxlQ29sb3JDaGFuZ2UiLCJjb2xvciIsIm5ld1NlbGVjdGVkQ29sb3JzIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwibmV3RmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiY2FyZCIsImxlbmd0aCIsIkNvbG9yIiwic3BsaXQiLCJzb21lIiwiYyIsImRhdGEiLCJtYXAiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsIm5hbWUiLCJpZCIsImNhcmRJZCIsImFsdCIsImFsdEFydCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});