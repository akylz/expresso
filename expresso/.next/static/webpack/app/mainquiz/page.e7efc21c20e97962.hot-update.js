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

/***/ "(app-pages-browser)/./src/app/components/quiz/QuizComponent.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/QuizComponent.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst QuizComponent = (param)=>{\n    let { questions, onQuizComplete } = param;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleAnswerClick = (answer)=>{\n        if (answer === questions[currentQuestion].correctAnswer) {\n            setScore(score + 1);\n        }\n        const nextQuestion = currentQuestion + 1;\n        if (nextQuestion < questions.length) {\n            setCurrentQuestion(nextQuestion);\n        } else {\n            onQuizComplete(score + 1); // Ensure final score update\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl mb-4\",\n                children: questions[currentQuestion].question\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: questions[currentQuestion].image,\n                alt: \"Emotion\",\n                className: \"w-64 h-64 mx-auto mb-6 object-cover rounded-lg shadow-lg\"\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4\",\n                children: questions[currentQuestion].options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleAnswerClick(option),\n                        className: \"p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700\",\n                        children: option\n                    }, option, false, {\n                        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuizComponent, \"T41DzXNL5iLXoze+eiFUml9SzVE=\");\n_c = QuizComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizComponent);\nvar _c;\n$RefreshReg$(_c, \"QuizComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L1F1aXpDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQWN4QyxNQUFNRSxnQkFBOEM7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsRUFBRTs7SUFDaEYsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3pCLElBQUlBLFdBQVdQLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNNLGFBQWEsRUFBRTtZQUN2REgsU0FBU0QsUUFBUTtRQUNuQjtRQUNBLE1BQU1LLGVBQWVQLGtCQUFrQjtRQUN2QyxJQUFJTyxlQUFlVCxVQUFVVSxNQUFNLEVBQUU7WUFDbkNQLG1CQUFtQk07UUFDckIsT0FBTztZQUNMUixlQUFlRyxRQUFRLElBQUksNEJBQTRCO1FBQ3pEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBaUJiLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNZLFFBQVE7Ozs7OzswQkFDbEUsOERBQUNDO2dCQUNDQyxLQUFLaEIsU0FBUyxDQUFDRSxnQkFBZ0IsQ0FBQ2UsS0FBSztnQkFDckNDLEtBQUk7Z0JBQ0pMLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1piLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNpQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyx1QkFDdkMsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1qQixrQkFBa0JlO3dCQUNqQ1IsV0FBVTtrQ0FFVFE7dUJBSklBOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBckNNdEI7S0FBQUE7QUF1Q04saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9JbW4vRGVza3RvcC9leHByZXNzby9leHByZXNzby9zcmMvYXBwL2NvbXBvbmVudHMvcXVpei9RdWl6Q29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFF1ZXN0aW9uIHtcbiAgcXVlc3Rpb246IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgb3B0aW9uczogc3RyaW5nW107XG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFF1aXpDb21wb25lbnRQcm9wcyB7XG4gIHF1ZXN0aW9uczogUXVlc3Rpb25bXTtcbiAgb25RdWl6Q29tcGxldGU6IChzY29yZTogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBRdWl6Q29tcG9uZW50OiBSZWFjdC5GQzxRdWl6Q29tcG9uZW50UHJvcHM+ID0gKHsgcXVlc3Rpb25zLCBvblF1aXpDb21wbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDbGljayA9IChhbnN3ZXI6IHN0cmluZykgPT4ge1xuICAgIGlmIChhbnN3ZXIgPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgfVxuICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbiArIDE7XG4gICAgaWYgKG5leHRRdWVzdGlvbiA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlc3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblF1aXpDb21wbGV0ZShzY29yZSArIDEpOyAvLyBFbnN1cmUgZmluYWwgc2NvcmUgdXBkYXRlXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00XCI+e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9ufTwvaDI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uaW1hZ2V9XG4gICAgICAgIGFsdD1cIkVtb3Rpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IGgtNjQgbXgtYXV0byBtYi02IG9iamVjdC1jb3ZlciByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyQ2xpY2sob3B0aW9uKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1pbmRpZ28tNzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpekNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXVpekNvbXBvbmVudCIsInF1ZXN0aW9ucyIsIm9uUXVpekNvbXBsZXRlIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2NvcmUiLCJzZXRTY29yZSIsImhhbmRsZUFuc3dlckNsaWNrIiwiYW5zd2VyIiwiY29ycmVjdEFuc3dlciIsIm5leHRRdWVzdGlvbiIsImxlbmd0aCIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwicXVlc3Rpb24iLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/quiz/QuizComponent.tsx\n"));

/***/ })

});