/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cardlist",{

/***/ "./components/CheckBox.js":
/*!********************************!*\
  !*** ./components/CheckBox.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/cardlist.js":
/*!***************************!*\
  !*** ./pages/cardlist.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n/* harmony import */ var _components_CheckBoxContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CheckBoxContainer */ \"./components/CheckBoxContainer.js\");\n/* harmony import */ var _components_CheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CheckBox */ \"./components/CheckBox.js\");\n/* harmony import */ var _components_CheckBox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_CheckBox__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { cards  } = param;\n    _s();\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    const [colorFiltered, setColorFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(cards);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setFilteredData: setFilteredData,\n                setColorFiltered: setColorFiltered,\n                data: cards\n            }, void 0, false, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-5 mx-auto \",\n                children: [\n                    filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((card)=>{\n                        if (card.name !== \"-\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                id: card.cardId,\n                                alt: card.altArt\n                            }, card._id, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 21,\n                                columnNumber: 20\n                            }, this);\n                        }\n                    }),\n                    colorFiltered === null || colorFiltered === void 0 ? void 0 : colorFiltered.map((cardColor)=>{\n                        if (cardColor.color === \"Green\") {\n                            console.log(\"red\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                color: cardColor.color,\n                                alt: cardColor.altArt\n                            }, cardColor._id, false, {\n                                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/slava/onepiece/pages/cardlist.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"JfN0emv2CSRLLsmcJgCANPXpdYE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDRjtBQUNzQjtBQUNsQjs7QUFFL0IsU0FBU00sS0FBSyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDs7SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUNNO0lBQ2pELE1BQU0sQ0FBQ0csZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDTTtJQUVuRCxxQkFDRTs7MEJBQ0UsOERBQUNKLDBEQUFNQTtnQkFDTE0saUJBQWlCQTtnQkFDakJFLGtCQUFrQkE7Z0JBQ2xCQyxNQUFNTDs7Ozs7OzBCQUVSLDhEQUFDTTtnQkFBSUMsV0FBVTs7b0JBQ1pOLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY08sR0FBRyxDQUFDLENBQUNDLE9BQVM7d0JBQzNCLElBQUlBLEtBQUtDLElBQUksS0FBSyxLQUFLOzRCQUNyQixxQkFBTyw4REFBQ2pCLHdEQUFJQTtnQ0FBZ0JrQixJQUFJRixLQUFLRyxNQUFNO2dDQUFFQyxLQUFLSixLQUFLSyxNQUFNOytCQUEzQ0wsS0FBS00sR0FBRzs7Ozs7d0JBQzVCLENBQUM7b0JBQ0g7b0JBQ0NaLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZUssR0FBRyxDQUFDLENBQUNRLFlBQWM7d0JBQ2pDLElBQUlBLFVBQVVDLEtBQUssS0FBSyxTQUFTOzRCQUMvQkMsUUFBUUMsR0FBRyxDQUFDOzRCQUNaLHFCQUNFLDhEQUFDMUIsd0RBQUlBO2dDQUVId0IsT0FBT0QsVUFBVUMsS0FBSztnQ0FDdEJKLEtBQUtHLFVBQVVGLE1BQU07K0JBRmhCRSxVQUFVRCxHQUFHOzs7Ozt3QkFLeEIsQ0FBQztvQkFDSDs7Ozs7Ozs7O0FBSVIsQ0FBQztHQWhDdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJkbGlzdC5qcz83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgQ2hlY2tCb3hDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tCb3hDb250YWluZXJcIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja0JveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2FyZHMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoY2FyZHMpO1xuICBjb25zdCBbY29sb3JGaWx0ZXJlZCwgc2V0Q29sb3JGaWx0ZXJlZF0gPSB1c2VTdGF0ZShjYXJkcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaFxuICAgICAgICBzZXRGaWx0ZXJlZERhdGE9e3NldEZpbHRlcmVkRGF0YX1cbiAgICAgICAgc2V0Q29sb3JGaWx0ZXJlZD17c2V0Q29sb3JGaWx0ZXJlZH1cbiAgICAgICAgZGF0YT17Y2FyZHN9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy01IG14LWF1dG8gXCI+XG4gICAgICAgIHtmaWx0ZXJlZERhdGE/Lm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJkLm5hbWUgIT09IFwiLVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtjYXJkLl9pZH0gaWQ9e2NhcmQuY2FyZElkfSBhbHQ9e2NhcmQuYWx0QXJ0fSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICB7Y29sb3JGaWx0ZXJlZD8ubWFwKChjYXJkQ29sb3IpID0+IHtcbiAgICAgICAgICBpZiAoY2FyZENvbG9yLmNvbG9yID09PSBcIkdyZWVuXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NhcmRDb2xvci5faWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NhcmRDb2xvci5jb2xvcn1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmRDb2xvci5hbHRBcnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhcmRzXCIpO1xuICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhcmRzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwiQ2hlY2tCb3hDb250YWluZXIiLCJDaGVja0JveCIsIkhvbWUiLCJjYXJkcyIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImNvbG9yRmlsdGVyZWQiLCJzZXRDb2xvckZpbHRlcmVkIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNhcmQiLCJuYW1lIiwiaWQiLCJjYXJkSWQiLCJhbHQiLCJhbHRBcnQiLCJfaWQiLCJjYXJkQ29sb3IiLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cardlist.js\n"));

/***/ })

});