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

/***/ "./components/ScrollToTopButton.js":
/*!*****************************************!*\
  !*** ./components/ScrollToTopButton.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ScrollToTopButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ScrollToTopButton() {\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.pageYOffset > 300) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const scrollToTop = ()=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.animateScroll.scrollToTop();\n    };\n    console.log(\"Rendering ScrollToTopButton\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"fixed border-red-500 right-4 bottom-4 bg-red-800 p-2 rounded-full shadow-md text-red-500 transition-all \".concat(isVisible ? \"opacity-100\" : \"opacity-0\"),\n        onClick: scrollToTop,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowUp, {}, void 0, false, {\n            fileName: \"/Users/slava/onepiece/components/ScrollToTopButton.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/slava/onepiece/components/ScrollToTopButton.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ScrollToTopButton, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = ScrollToTopButton;\nvar _c;\n$RefreshReg$(_c, \"ScrollToTopButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njcm9sbFRvVG9wQnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBQ1k7QUFFeEMsU0FBU0ssb0JBQW9COztJQUMxQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUVoREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLGVBQWUsSUFBTTtZQUN6QixJQUFJQyxPQUFPQyxXQUFXLEdBQUcsS0FBSztnQkFDNUJILGFBQWEsSUFBSTtZQUNuQixPQUFPO2dCQUNMQSxhQUFhLEtBQUs7WUFDcEIsQ0FBQztRQUNIO1FBRUFFLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU8sSUFBTTtZQUNYQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGNBQWMsSUFBTTtRQUN4QlQsbUVBQWtCO0lBQ3BCO0lBQ0FVLFFBQVFDLEdBQUcsQ0FBQztJQUNaLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLDJHQUVWLE9BRENYLFlBQVksZ0JBQWdCLFdBQVc7UUFFekNZLFNBQVNMO2tCQUVULDRFQUFDWCxxREFBU0E7Ozs7Ozs7Ozs7QUFHaEIsQ0FBQztHQWpDdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2Nyb2xsVG9Ub3BCdXR0b24uanM/MmE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUFycm93VXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxUb1RvcEJ1dHRvbigpIHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKTtcbiAgfTtcbiAgY29uc29sZS5sb2coXCJSZW5kZXJpbmcgU2Nyb2xsVG9Ub3BCdXR0b25cIik7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYm9yZGVyLXJlZC01MDAgcmlnaHQtNCBib3R0b20tNCBiZy1yZWQtODAwIHAtMiByb3VuZGVkLWZ1bGwgc2hhZG93LW1kIHRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICBpc1Zpc2libGUgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMFwiXG4gICAgICB9YH1cbiAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgID5cbiAgICAgIDxGYUFycm93VXAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhQXJyb3dVcCIsImFuaW1hdGVTY3JvbGwiLCJzY3JvbGwiLCJTY3JvbGxUb1RvcEJ1dHRvbiIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb1RvcCIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ScrollToTopButton.js\n"));

/***/ })

});