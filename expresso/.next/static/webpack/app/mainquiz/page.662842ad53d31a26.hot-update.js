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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst QuizComponent = (param)=>{\n    let { questions, onQuizComplete } = param;\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [answerChecked, setAnswerChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleAnswerClick = (answer)=>{\n        setSelectedAnswer(answer);\n        setAnswerChecked(false);\n    };\n    const handleCheckClick = ()=>{\n        if (selectedAnswer === questions[currentQuestion].correctAnswer) {\n            setScore(score + 1);\n        }\n        setAnswerChecked(true);\n    };\n    const handleNext = ()=>{\n        if (currentQuestion < questions.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n            setSelectedAnswer(null);\n            setAnswerChecked(false);\n        } else {\n            onQuizComplete(score);\n        }\n    };\n    const handlePrevious = ()=>{\n        if (currentQuestion > 0) {\n            setCurrentQuestion(currentQuestion - 1);\n            setSelectedAnswer(null);\n            setAnswerChecked(false);\n        }\n    };\n    const getCardClass = ()=>{\n        if (!answerChecked) return \"bg-white\"; // Default card style\n        return selectedAnswer === questions[currentQuestion].correctAnswer ? \"bg-green-100\" // Light green for correct answers\n         : \"bg-red-100\"; // Light red for incorrect answers\n    };\n    const getOptionClass = (option)=>{\n        if (!answerChecked) return \"bg-white text-indigo-600\"; // Default style for options\n        return option === questions[currentQuestion].correctAnswer ? \"bg-green-500 text-white\" : option === selectedAnswer ? \"bg-red-500 text-white\" : \"bg-white text-indigo-600\"; // Highlight incorrect answer after checking\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8 rounded-lg shadow-lg max-w-lg w-full text-center \".concat(getCardClass(), \" transition-all duration-500 ease-in-out\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-semibold text-indigo-600 mb-6\",\n                    children: questions[currentQuestion].question\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: questions[currentQuestion].image,\n                    alt: \"Emotion\",\n                    className: \"w-64 h-64 mx-auto mb-6 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-4 mb-6\",\n                    children: questions[currentQuestion].options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleAnswerClick(option),\n                            className: \"p-3 border-2 rounded-lg \".concat(getOptionClass(option), \" hover:bg-indigo-700 hover:text-white transition duration-300\"),\n                            children: option\n                        }, option, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handlePrevious,\n                            className: \"p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition duration-300\",\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCheckClick,\n                            className: \"p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300\",\n                            children: answerChecked ? \"Checked\" : \"Check\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleNext,\n                            className: \"p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300\",\n                            children: currentQuestion === questions.length - 1 ? \"Finish\" : \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/components/quiz/QuizComponent.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuizComponent, \"oZqAp7GQ0fDyDd8xui+DXGIga1k=\");\n_c = QuizComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizComponent);\nvar _c;\n$RefreshReg$(_c, \"QuizComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L1F1aXpDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQWN4QyxNQUFNRSxnQkFBOEM7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsRUFBRTs7SUFDaEYsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUNwRSxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVksb0JBQW9CLENBQUNDO1FBQ3pCTixrQkFBa0JNO1FBQ2xCSixpQkFBaUI7SUFDbkI7SUFFQSxNQUFNSyxtQkFBbUI7UUFDdkIsSUFBSVIsbUJBQW1CSixTQUFTLENBQUNFLGdCQUFnQixDQUFDVyxhQUFhLEVBQUU7WUFDL0RKLFNBQVNELFFBQVE7UUFDbkI7UUFDQUQsaUJBQWlCO0lBQ25CO0lBRUEsTUFBTU8sYUFBYTtRQUNqQixJQUFJWixrQkFBa0JGLFVBQVVlLE1BQU0sR0FBRyxHQUFHO1lBQzFDWixtQkFBbUJELGtCQUFrQjtZQUNyQ0csa0JBQWtCO1lBQ2xCRSxpQkFBaUI7UUFDbkIsT0FBTztZQUNMTixlQUFlTztRQUNqQjtJQUNGO0lBRUEsTUFBTVEsaUJBQWlCO1FBQ3JCLElBQUlkLGtCQUFrQixHQUFHO1lBQ3ZCQyxtQkFBbUJELGtCQUFrQjtZQUNyQ0csa0JBQWtCO1lBQ2xCRSxpQkFBaUI7UUFDbkI7SUFDRjtJQUVBLE1BQU1VLGVBQWU7UUFDbkIsSUFBSSxDQUFDWCxlQUFlLE9BQU8sWUFBWSxxQkFBcUI7UUFDNUQsT0FBT0YsbUJBQW1CSixTQUFTLENBQUNFLGdCQUFnQixDQUFDVyxhQUFhLEdBQzlELGVBQWUsa0NBQWtDO1dBQ2pELGNBQWMsa0NBQWtDO0lBQ3REO0lBRUEsTUFBTUssaUJBQWlCLENBQUNDO1FBQ3RCLElBQUksQ0FBQ2IsZUFBZSxPQUFPLDRCQUE0Qiw0QkFBNEI7UUFDbkYsT0FBT2EsV0FBV25CLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNXLGFBQWEsR0FDdEQsNEJBQ0FNLFdBQVdmLGlCQUNYLDBCQUNBLDRCQUE0Qiw0Q0FBNEM7SUFDOUU7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQ0NDLFdBQVcsd0RBQXVFLE9BQWZKLGdCQUFlOzs4QkFFbEYsOERBQUNLO29CQUFHRCxXQUFVOzhCQUErQ3JCLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUNxQixRQUFROzs7Ozs7OEJBQ2hHLDhEQUFDQztvQkFDQ0MsS0FBS3pCLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUN3QixLQUFLO29CQUNyQ0MsS0FBSTtvQkFDSk4sV0FBVTs7Ozs7OzhCQUVaLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWnJCLFNBQVMsQ0FBQ0UsZ0JBQWdCLENBQUMwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDVix1QkFDdkMsOERBQUNXOzRCQUVDQyxTQUFTLElBQU1yQixrQkFBa0JTOzRCQUNqQ0UsV0FBVywyQkFBa0QsT0FBdkJILGVBQWVDLFNBQVE7c0NBRTVEQTsyQkFKSUE7Ozs7Ozs7Ozs7OEJBUVgsOERBQUNDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1M7NEJBQ0NDLFNBQVNmOzRCQUNUSyxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNTOzRCQUNDQyxTQUFTbkI7NEJBQ1RTLFdBQVU7c0NBRVRmLGdCQUFnQixZQUFZOzs7Ozs7c0NBRS9CLDhEQUFDd0I7NEJBQ0NDLFNBQVNqQjs0QkFDVE8sV0FBVTtzQ0FFVG5CLG9CQUFvQkYsVUFBVWUsTUFBTSxHQUFHLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0FqR01oQjtLQUFBQTtBQW1HTixpRUFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL0ltbi9EZXNrdG9wL2V4cHJlc3NvL2V4cHJlc3NvL3NyYy9hcHAvY29tcG9uZW50cy9xdWl6L1F1aXpDb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUXVlc3Rpb24ge1xuICBxdWVzdGlvbjogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBvcHRpb25zOiBzdHJpbmdbXTtcbiAgY29ycmVjdEFuc3dlcjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVpekNvbXBvbmVudFByb3BzIHtcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbltdO1xuICBvblF1aXpDb21wbGV0ZTogKHNjb3JlOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFF1aXpDb21wb25lbnQ6IFJlYWN0LkZDPFF1aXpDb21wb25lbnRQcm9wcz4gPSAoeyBxdWVzdGlvbnMsIG9uUXVpekNvbXBsZXRlIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRBbnN3ZXIsIHNldFNlbGVjdGVkQW5zd2VyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYW5zd2VyQ2hlY2tlZCwgc2V0QW5zd2VyQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFuc3dlcihhbnN3ZXIpO1xuICAgIHNldEFuc3dlckNoZWNrZWQoZmFsc2UpOyBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja0NsaWNrID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFuc3dlciA9PT0gcXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uY29ycmVjdEFuc3dlcikge1xuICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKTtcbiAgICB9XG4gICAgc2V0QW5zd2VyQ2hlY2tlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UXVlc3Rpb24gPCBxdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgc2V0U2VsZWN0ZWRBbnN3ZXIobnVsbCk7XG4gICAgICBzZXRBbnN3ZXJDaGVja2VkKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25RdWl6Q29tcGxldGUoc2NvcmUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2aW91cyA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uID4gMCkge1xuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiAtIDEpO1xuICAgICAgc2V0U2VsZWN0ZWRBbnN3ZXIobnVsbCk7XG4gICAgICBzZXRBbnN3ZXJDaGVja2VkKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2FyZENsYXNzID0gKCkgPT4ge1xuICAgIGlmICghYW5zd2VyQ2hlY2tlZCkgcmV0dXJuIFwiYmctd2hpdGVcIjsgLy8gRGVmYXVsdCBjYXJkIHN0eWxlXG4gICAgcmV0dXJuIHNlbGVjdGVkQW5zd2VyID09PSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5jb3JyZWN0QW5zd2VyXG4gICAgICA/IFwiYmctZ3JlZW4tMTAwXCIgLy8gTGlnaHQgZ3JlZW4gZm9yIGNvcnJlY3QgYW5zd2Vyc1xuICAgICAgOiBcImJnLXJlZC0xMDBcIjsgLy8gTGlnaHQgcmVkIGZvciBpbmNvcnJlY3QgYW5zd2Vyc1xuICB9O1xuXG4gIGNvbnN0IGdldE9wdGlvbkNsYXNzID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFhbnN3ZXJDaGVja2VkKSByZXR1cm4gXCJiZy13aGl0ZSB0ZXh0LWluZGlnby02MDBcIjsgLy8gRGVmYXVsdCBzdHlsZSBmb3Igb3B0aW9uc1xuICAgIHJldHVybiBvcHRpb24gPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RBbnN3ZXJcbiAgICAgID8gXCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZVwiXG4gICAgICA6IG9wdGlvbiA9PT0gc2VsZWN0ZWRBbnN3ZXJcbiAgICAgID8gXCJiZy1yZWQtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgOiBcImJnLXdoaXRlIHRleHQtaW5kaWdvLTYwMFwiOyAvLyBIaWdobGlnaHQgaW5jb3JyZWN0IGFuc3dlciBhZnRlciBjaGVja2luZ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpZ28tMTAwIHZpYS1wdXJwbGUtMjAwIHRvLXBpbmstMTAwXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyBtYXgtdy1sZyB3LWZ1bGwgdGV4dC1jZW50ZXIgJHtnZXRDYXJkQ2xhc3MoKX0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0YH1cbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNjAwIG1iLTZcIj57cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb259PC9oMj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0uaW1hZ2V9XG4gICAgICAgICAgYWx0PVwiRW1vdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBoLTY0IG14LWF1dG8gbWItNiBvYmplY3QtY292ZXIgcm91bmRlZC1sZyBzaGFkb3ctbGcgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgbWItNlwiPlxuICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbnN3ZXJDbGljayhvcHRpb24pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgYm9yZGVyLTIgcm91bmRlZC1sZyAke2dldE9wdGlvbkNsYXNzKG9wdGlvbil9IGhvdmVyOmJnLWluZGlnby03MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLWdyYXktNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGVja0NsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLWluZGlnby01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmJnLWluZGlnby03MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbnN3ZXJDaGVja2VkID8gXCJDaGVja2VkXCIgOiBcIkNoZWNrXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1pbmRpZ28tNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uID09PSBxdWVzdGlvbnMubGVuZ3RoIC0gMSA/IFwiRmluaXNoXCIgOiBcIk5leHRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXpDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlF1aXpDb21wb25lbnQiLCJxdWVzdGlvbnMiLCJvblF1aXpDb21wbGV0ZSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInNlbGVjdGVkQW5zd2VyIiwic2V0U2VsZWN0ZWRBbnN3ZXIiLCJhbnN3ZXJDaGVja2VkIiwic2V0QW5zd2VyQ2hlY2tlZCIsInNjb3JlIiwic2V0U2NvcmUiLCJoYW5kbGVBbnN3ZXJDbGljayIsImFuc3dlciIsImhhbmRsZUNoZWNrQ2xpY2siLCJjb3JyZWN0QW5zd2VyIiwiaGFuZGxlTmV4dCIsImxlbmd0aCIsImhhbmRsZVByZXZpb3VzIiwiZ2V0Q2FyZENsYXNzIiwiZ2V0T3B0aW9uQ2xhc3MiLCJvcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInF1ZXN0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJvcHRpb25zIiwibWFwIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/quiz/QuizComponent.tsx\n"));

/***/ })

});