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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst QuizComponent = (param)=>{\n    let { questions, onQuizComplete } = param;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [answerChecked, setAnswerChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleAnswerClick = (answer)=>{\n        setSelectedAnswer(answer);\n        setAnswerChecked(false); // Reset the check button when a new answer is selected\n    };\n    const handleCheckClick = ()=>{\n        if (selectedAnswer === questions[currentQuestion].correctAnswer) {\n            setScore(score + 1);\n        }\n        setAnswerChecked(true);\n    };\n    const handleNext = ()=>{\n        if (currentQuestion < questions.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n            setSelectedAnswer(null);\n            setAnswerChecked(false);\n        } else {\n            onQuizComplete(score);\n        }\n    };\n    const handlePrevious = ()=>{\n        if (currentQuestion > 0) {\n            setCurrentQuestion(currentQuestion - 1);\n            setSelectedAnswer(null);\n            setAnswerChecked(false);\n        }\n    };\n    const getCardClass = ()=>{\n        if (!answerChecked) return \"bg-white\"; // Default card style\n        return selectedAnswer === questions[currentQuestion].correctAnswer ? \"bg-green-100\" // Light green for correct answers\n         : \"bg-red-100\"; // Light red for incorrect answers\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8 rounded-lg shadow-lg max-w-lg w-full text-center \".concat(getCardClass(), \" transition-all duration-500 ease-in-out\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-semibold text-indigo-600 mb-6\",\n                    children: questions[currentQuestion].question\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: questions[currentQuestion].image,\n                    alt: \"Emotion\",\n                    className: \"w-64 h-64 mx-auto mb-6 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-4 mb-6\",\n                    children: questions[currentQuestion].options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleAnswerClick(option),\n                            className: \"p-3 border-2 rounded-lg \".concat(selectedAnswer === option ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-600', \" hover:bg-indigo-700 hover:text-white transition duration-300\"),\n                            children: option\n                        }, option, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handlePrevious,\n                            className: \"p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300\",\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCheckClick,\n                            className: \"p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300\",\n                            children: answerChecked ? \"Checked\" : \"Check\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleNext,\n                            className: \"p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300\",\n                            children: currentQuestion === questions.length - 1 ? \"Finish\" : \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuizComponent, \"oZqAp7GQ0fDyDd8xui+DXGIga1k=\");\n_c = QuizComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizComponent);\nvar _c;\n$RefreshReg$(_c, \"QuizComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L1F1aXpDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQWN4QyxNQUFNRSxnQkFBOEM7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsRUFBRTs7SUFDaEYsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUNwRSxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVksb0JBQW9CLENBQUNDO1FBQ3pCTixrQkFBa0JNO1FBQ2xCSixpQkFBaUIsUUFBUSx1REFBdUQ7SUFDbEY7SUFFQSxNQUFNSyxtQkFBbUI7UUFDdkIsSUFBSVIsbUJBQW1CSixTQUFTLENBQUNFLGdCQUFnQixDQUFDVyxhQUFhLEVBQUU7WUFDL0RKLFNBQVNELFFBQVE7UUFDbkI7UUFDQUQsaUJBQWlCO0lBQ25CO0lBRUEsTUFBTU8sYUFBYTtRQUNqQixJQUFJWixrQkFBa0JGLFVBQVVlLE1BQU0sR0FBRyxHQUFHO1lBQzFDWixtQkFBbUJELGtCQUFrQjtZQUNyQ0csa0JBQWtCO1lBQ2xCRSxpQkFBaUI7UUFDbkIsT0FBTztZQUNMTixlQUFlTztRQUNqQjtJQUNGO0lBRUEsTUFBTVEsaUJBQWlCO1FBQ3JCLElBQUlkLGtCQUFrQixHQUFHO1lBQ3ZCQyxtQkFBbUJELGtCQUFrQjtZQUNyQ0csa0JBQWtCO1lBQ2xCRSxpQkFBaUI7UUFDbkI7SUFDRjtJQUVBLE1BQU1VLGVBQWU7UUFDbkIsSUFBSSxDQUFDWCxlQUFlLE9BQU8sWUFBWSxxQkFBcUI7UUFDNUQsT0FBT0YsbUJBQW1CSixTQUFTLENBQUNFLGdCQUFnQixDQUFDVyxhQUFhLEdBQzlELGVBQWUsa0NBQWtDO1dBQ2pELGNBQWMsa0NBQWtDO0lBQ3REO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQ0NDLFdBQVcsd0RBQXVFLE9BQWZGLGdCQUFlOzs4QkFFbEYsOERBQUNHO29CQUFHRCxXQUFVOzhCQUErQ25CLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNtQixRQUFROzs7Ozs7OEJBQ2hHLDhEQUFDQztvQkFDQ0MsS0FBS3ZCLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNzQixLQUFLO29CQUNyQ0MsS0FBSTtvQkFDSk4sV0FBVTs7Ozs7OzhCQUVaLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWm5CLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUN3QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyx1QkFDdkMsOERBQUNDOzRCQUVDQyxTQUFTLElBQU1wQixrQkFBa0JrQjs0QkFDakNULFdBQVcsMkJBQStHLE9BQXBGZixtQkFBbUJ3QixTQUFTLDZCQUE2Qiw0QkFBMkI7c0NBRXpIQTsyQkFKSUE7Ozs7Ozs7Ozs7OEJBUVgsOERBQUNWO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1U7NEJBQ0NDLFNBQVNkOzRCQUNURyxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNVOzRCQUNDQyxTQUFTbEI7NEJBQ1RPLFdBQVU7c0NBRVRiLGdCQUFnQixZQUFZOzs7Ozs7c0NBRS9CLDhEQUFDdUI7NEJBQ0NDLFNBQVNoQjs0QkFDVEssV0FBVTtzQ0FFVGpCLG9CQUFvQkYsVUFBVWUsTUFBTSxHQUFHLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0F4Rk1oQjtLQUFBQTtBQTBGTixpRUFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL0ltbi9EZXNrdG9wL2V4cHJlc3NvL2V4cHJlc3NvL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L1F1aXpDb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUXVlc3Rpb24ge1xuICBxdWVzdGlvbjogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgY29ycmVjdEFuc3dlcjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVpekNvbXBvbmVudFByb3BzIHtcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbltdO1xuICBvblF1aXpDb21wbGV0ZTogKHNjb3JlOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFF1aXpDb21wb25lbnQ6IFJlYWN0LkZDPFF1aXpDb21wb25lbnRQcm9wcz4gPSAoeyBxdWVzdGlvbnMsIG9uUXVpekNvbXBsZXRlIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRBbnN3ZXIsIHNldFNlbGVjdGVkQW5zd2VyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYW5zd2VyQ2hlY2tlZCwgc2V0QW5zd2VyQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFuc3dlcihhbnN3ZXIpO1xuICAgIHNldEFuc3dlckNoZWNrZWQoZmFsc2UpOyAvLyBSZXNldCB0aGUgY2hlY2sgYnV0dG9uIHdoZW4gYSBuZXcgYW5zd2VyIGlzIHNlbGVjdGVkXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tDbGljayA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRBbnN3ZXIgPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XG4gICAgfVxuICAgIHNldEFuc3dlckNoZWNrZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICAgIHNldFNlbGVjdGVkQW5zd2VyKG51bGwpO1xuICAgICAgc2V0QW5zd2VyQ2hlY2tlZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUXVpekNvbXBsZXRlKHNjb3JlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRRdWVzdGlvbiA+IDApIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gLSAxKTtcbiAgICAgIHNldFNlbGVjdGVkQW5zd2VyKG51bGwpO1xuICAgICAgc2V0QW5zd2VyQ2hlY2tlZChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldENhcmRDbGFzcyA9ICgpID0+IHtcbiAgICBpZiAoIWFuc3dlckNoZWNrZWQpIHJldHVybiBcImJnLXdoaXRlXCI7IC8vIERlZmF1bHQgY2FyZCBzdHlsZVxuICAgIHJldHVybiBzZWxlY3RlZEFuc3dlciA9PT0gcXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uY29ycmVjdEFuc3dlclxuICAgICAgPyBcImJnLWdyZWVuLTEwMFwiIC8vIExpZ2h0IGdyZWVuIGZvciBjb3JyZWN0IGFuc3dlcnNcbiAgICAgIDogXCJiZy1yZWQtMTAwXCI7IC8vIExpZ2h0IHJlZCBmb3IgaW5jb3JyZWN0IGFuc3dlcnNcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20taW5kaWdvLTEwMCB2aWEtcHVycGxlLTIwMCB0by1waW5rLTEwMFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgbWF4LXctbGcgdy1mdWxsIHRleHQtY2VudGVyICR7Z2V0Q2FyZENsYXNzKCl9IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dGB9XG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCBtYi02XCI+e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9ufTwvaDI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmltYWdlfVxuICAgICAgICAgIGFsdD1cIkVtb3Rpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgaC02NCBteC1hdXRvIG1iLTYgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IG1iLTZcIj5cbiAgICAgICAgICB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0ub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyQ2xpY2sob3B0aW9uKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIGJvcmRlci0yIHJvdW5kZWQtbGcgJHtzZWxlY3RlZEFuc3dlciA9PT0gb3B0aW9uID8gJ2JnLWluZGlnby01MDAgdGV4dC13aGl0ZScgOiAnYmctd2hpdGUgdGV4dC1pbmRpZ28tNjAwJ30gaG92ZXI6YmctaW5kaWdvLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC00XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoZWNrQ2xpY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6YmctaW5kaWdvLTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Fuc3dlckNoZWNrZWQgPyBcIkNoZWNrZWRcIiA6IFwiQ2hlY2tcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLWluZGlnby01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmJnLWluZGlnby03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IHF1ZXN0aW9ucy5sZW5ndGggLSAxID8gXCJGaW5pc2hcIiA6IFwiTmV4dFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpekNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXVpekNvbXBvbmVudCIsInF1ZXN0aW9ucyIsIm9uUXVpekNvbXBsZXRlIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2VsZWN0ZWRBbnN3ZXIiLCJzZXRTZWxlY3RlZEFuc3dlciIsImFuc3dlckNoZWNrZWQiLCJzZXRBbnN3ZXJDaGVja2VkIiwic2NvcmUiLCJzZXRTY29yZSIsImhhbmRsZUFuc3dlckNsaWNrIiwiYW5zd2VyIiwiaGFuZGxlQ2hlY2tDbGljayIsImNvcnJlY3RBbnN3ZXIiLCJoYW5kbGVOZXh0IiwibGVuZ3RoIiwiaGFuZGxlUHJldmlvdXMiLCJnZXRDYXJkQ2xhc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInF1ZXN0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/quiz/QuizComponent.tsx\n"));

/***/ })

});