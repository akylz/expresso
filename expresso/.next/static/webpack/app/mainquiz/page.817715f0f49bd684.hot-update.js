"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/mainquiz/page",{

/***/ "(app-pages-browser)/./src/app/components/resultquiz/ResultComponent.tsx":
/*!***********************************************************!*\
  !*** ./src/app/components/resultquiz/ResultComponent.tsx ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ResultComponent = (param)=>{\n    let { score, total, results, onRestart } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Quiz Complete!\"\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xl mb-6\",\n                children: [\n                    \"Your score: \",\n                    score,\n                    \" out of \",\n                    total\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Results Breakdown:\"\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"text-left mx-auto space-y-2 max-w-md\",\n                children: results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: result === \"Correct\" ? \"text-green-500\" : \"text-red-500\",\n                        children: [\n                            \"Question \",\n                            index + 1,\n                            \": \",\n                            result\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onRestart,\n                className: \"mt-6 p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-700\",\n                children: \"Restart Quiz\"\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/resultquiz/ResultComponent.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultComponent);\nvar _c;\n$RefreshReg$(_c, \"ResultComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRxdWl6L1Jlc3VsdENvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFTMUIsTUFBTUMsa0JBQWtEO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0lBQzNGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRTtnQkFBRUYsV0FBVTs7b0JBQWU7b0JBQ2JMO29CQUFNO29CQUFTQzs7Ozs7OzswQkFFOUIsOERBQUNPO2dCQUFHSCxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUM1Qyw4REFBQ0k7Z0JBQUdKLFdBQVU7MEJBQ1hILFFBQVFRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNDO3dCQUFlUixXQUFXTSxXQUFXLFlBQVksbUJBQW1COzs0QkFBZ0I7NEJBQ3pFQyxRQUFROzRCQUFFOzRCQUFHRDs7dUJBRGhCQzs7Ozs7Ozs7OzswQkFLYiw4REFBQ0U7Z0JBQ0NDLFNBQVNaO2dCQUNURSxXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUDtLQXZCTU47QUF5Qk4saUVBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9JbW4vRGVza3RvcC9leHByZXNzby9leHByZXNzby9zcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cXVpei9SZXN1bHRDb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFJlc3VsdENvbXBvbmVudFByb3BzIHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgcmVzdWx0czogc3RyaW5nW107XG4gIG9uUmVzdGFydDogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUmVzdWx0Q29tcG9uZW50OiBSZWFjdC5GQzxSZXN1bHRDb21wb25lbnRQcm9wcz4gPSAoeyBzY29yZSwgdG90YWwsIHJlc3VsdHMsIG9uUmVzdGFydCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTZcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlF1aXogQ29tcGxldGUhPC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWItNlwiPlxuICAgICAgICBZb3VyIHNjb3JlOiB7c2NvcmV9IG91dCBvZiB7dG90YWx9XG4gICAgICA8L3A+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+UmVzdWx0cyBCcmVha2Rvd246PC9oMz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbXgtYXV0byBzcGFjZS15LTIgbWF4LXctbWRcIj5cbiAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cmVzdWx0ID09PSBcIkNvcnJlY3RcIiA/IFwidGV4dC1ncmVlbi01MDBcIiA6IFwidGV4dC1yZWQtNTAwXCJ9PlxuICAgICAgICAgICAgUXVlc3Rpb24ge2luZGV4ICsgMX06IHtyZXN1bHR9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtvblJlc3RhcnR9XG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTYgcC0zIGJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmJnLXB1cnBsZS03MDBcIlxuICAgICAgPlxuICAgICAgICBSZXN0YXJ0IFF1aXpcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVzdWx0Q29tcG9uZW50Iiwic2NvcmUiLCJ0b3RhbCIsInJlc3VsdHMiLCJvblJlc3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJoMyIsInVsIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/resultquiz/ResultComponent.tsx\n"));

/***/ })

});