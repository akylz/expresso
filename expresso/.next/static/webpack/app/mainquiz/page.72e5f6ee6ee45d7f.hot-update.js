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

/***/ "(app-pages-browser)/./src/app/mainquiz/page.tsx":
/*!***********************************!*\
  !*** ./src/app/mainquiz/page.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_quiz_QuizComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/quiz/QuizComponent */ \"(app-pages-browser)/./src/app/components/quiz/QuizComponent.tsx\");\n/* harmony import */ var _components_resultquiz_ResultComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/resultquiz/ResultComponent */ \"(app-pages-browser)/./src/app/components/resultquiz/ResultComponent.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst shuffleArray = (array)=>{\n    return array.sort(()=>Math.random() - 0.5);\n};\nconst emotions = {\n    Anger: [\n        \"/images/emotions/Anger/anger1.jpg\",\n        \"/images/emotions/Anger/anger2.jpg\",\n        \"/images/emotions/Anger/anger3.jpg\"\n    ],\n    Anxiety: [\n        \"/images/emotions/Anxiety/anx1.jpg\",\n        \"/images/emotions/Anxiety/anx2.jpg\",\n        \"/images/emotions/Anxiety/anx3.jpg\"\n    ],\n    Confusion: [\n        \"/images/emotions/Confusion/conf1.jpg\",\n        \"/images/emotions/Confusion/conf2.jpg\",\n        \"/images/emotions/Confusion/conf3.jpg\"\n    ],\n    Disgust: [\n        \"/images/emotions/Disgust/dis1.jpg\",\n        \"/images/emotions/Disgust/dis2.jpg\",\n        \"/images/emotions/Disgust/dis3.jpg\"\n    ],\n    Excitement: [\n        \"/images/emotions/Excitement/exc1.jpg\",\n        \"/images/emotions/Excitement/exc2.jpg\",\n        \"/images/emotions/Excitement/exc3.jpg\"\n    ],\n    Fear: [\n        \"/images/emotions/Fear/fear1.jpg\",\n        \"/images/emotions/Fear/fear2.jpg\",\n        \"/images/emotions/Fear/fear3.jpg\"\n    ],\n    Happiness: [\n        \"/images/emotions/Happiness/hap1.jpg\",\n        \"/images/emotions/Happiness/hap2.jpg\",\n        \"/images/emotions/Happiness/hap3.jpg\"\n    ],\n    Love: [\n        \"/images/emotions/Love/love1.jpg\",\n        \"/images/emotions/Love/love2.jpg\",\n        \"/images/emotions/Love/love3.jpg\"\n    ],\n    Sadness: [\n        \"/images/emotions/Sadness/sad1.jpg\",\n        \"/images/emotions/Sadness/sad2.jpg\",\n        \"/images/emotions/Sadness/sad3.jpg\"\n    ],\n    Surprise: [\n        \"/images/emotions/Surprise/sur1.jpg\",\n        \"/images/emotions/Surprise/sur2.jpg\",\n        \"/images/emotions/Surprise/sur3.jpg\"\n    ]\n};\nconst emotionQuestions = Object.keys(emotions).map((emotion)=>{\n    const photos = emotions[emotion];\n    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];\n    const allEmotions = Object.keys(emotions);\n    const options = shuffleArray([\n        emotion,\n        ...allEmotions.filter((e)=>e !== emotion).slice(0, 2)\n    ]);\n    return {\n        question: \"What emotion does this image represent?\",\n        image: randomPhoto,\n        options: shuffleArray(options),\n        correctAnswer: emotion\n    };\n});\nconst MainQuiz = ()=>{\n    _s();\n    const [isQuizComplete, setIsQuizComplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleQuizComplete = (finalScore)=>{\n        setScore(finalScore);\n        setIsQuizComplete(true);\n    };\n    const restartQuiz = ()=>{\n        setScore(0);\n        setIsQuizComplete(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"fixed w-full z-10 p-4 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"container mx-auto flex justify-between items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/dashboard/process\",\n                        className: \"text-3xl font-extrabold text-indigo-600\",\n                        children: \"expresso\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto pt-24 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-6\",\n                        children: \"Emotion Recognition Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    !isQuizComplete ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_quiz_QuizComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        questions: emotionQuestions,\n                        onQuizComplete: handleQuizComplete\n                    }, void 0, false, {\n                        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resultquiz_ResultComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        score: score,\n                        total: emotionQuestions.length,\n                        onRestart: restartQuiz\n                    }, void 0, false, {\n                        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Imn/Desktop/expresso/expresso/src/app/mainquiz/page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainQuiz, \"plXi/Grwd3T417l9TxBVbCGMVHo=\");\n_c = MainQuiz;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainQuiz);\nvar _c;\n$RefreshReg$(_c, \"MainQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbnF1aXovcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ1g7QUFDZ0M7QUFDVTtBQUV2RSxNQUFNSyxlQUFlLENBQUNDO0lBQ3BCLE9BQU9BLE1BQU1DLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7QUFDMUM7QUFFQSxNQUFNQyxXQUF3QztJQUM1Q0MsT0FBTztRQUFDO1FBQXFDO1FBQXFDO0tBQW9DO0lBQ3RIQyxTQUFTO1FBQUM7UUFBcUM7UUFBcUM7S0FBb0M7SUFDeEhDLFdBQVc7UUFBQztRQUF3QztRQUF3QztLQUF1QztJQUNuSUMsU0FBUztRQUFDO1FBQXFDO1FBQXFDO0tBQW9DO0lBQ3hIQyxZQUFZO1FBQUM7UUFBd0M7UUFBd0M7S0FBdUM7SUFDcElDLE1BQU07UUFBQztRQUFtQztRQUFtQztLQUFrQztJQUMvR0MsV0FBVztRQUFDO1FBQXVDO1FBQXVDO0tBQXNDO0lBQ2hJQyxNQUFNO1FBQUM7UUFBbUM7UUFBbUM7S0FBa0M7SUFDL0dDLFNBQVM7UUFBQztRQUFxQztRQUFxQztLQUFvQztJQUN4SEMsVUFBVTtRQUFDO1FBQXNDO1FBQXNDO0tBQXFDO0FBQzlIO0FBSUEsTUFBTUMsbUJBQW1CQyxPQUFPQyxJQUFJLENBQUNiLFVBQVVjLEdBQUcsQ0FBQyxDQUFDQztJQUNsRCxNQUFNQyxTQUFTaEIsUUFBUSxDQUFDZSxRQUFRO0lBQ2hDLE1BQU1FLGNBQWNELE1BQU0sQ0FBQ2xCLEtBQUtvQixLQUFLLENBQUNwQixLQUFLQyxNQUFNLEtBQUtpQixPQUFPRyxNQUFNLEVBQUU7SUFDckUsTUFBTUMsY0FBY1IsT0FBT0MsSUFBSSxDQUFDYjtJQUNoQyxNQUFNcUIsVUFBVTFCLGFBQWE7UUFBQ29CO1dBQVlLLFlBQVlFLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxNQUFNUixTQUFTUyxLQUFLLENBQUMsR0FBRztLQUFHO0lBRS9GLE9BQU87UUFDTEMsVUFBVztRQUNYQyxPQUFPVDtRQUNQSSxTQUFTMUIsYUFBYTBCO1FBQ3RCTSxlQUFlWjtJQUNqQjtBQUNGO0FBRUEsTUFBTWEsV0FBVzs7SUFDZixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUd2QywrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUN3QyxPQUFPQyxTQUFTLEdBQUd6QywrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNMEMscUJBQXFCLENBQUNDO1FBQzFCRixTQUFTRTtRQUNUSixrQkFBa0I7SUFDcEI7SUFFQSxNQUFNSyxjQUFjO1FBQ2xCSCxTQUFTO1FBQ1RGLGtCQUFrQjtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRTtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQzdDLGlEQUFJQTt3QkFBQ2dELE1BQUs7d0JBQXFCSCxXQUFVO2tDQUEwQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNeEYsOERBQUNJO2dCQUFLSixXQUFVOztrQ0FDZCw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQTBCOzs7Ozs7b0JBQ3ZDLENBQUNSLCtCQUNBLDhEQUFDcEMsc0VBQWFBO3dCQUFDa0QsV0FBV2hDO3dCQUFrQmlDLGdCQUFnQlg7Ozs7O2tEQUU1RCw4REFBQ3ZDLDhFQUFlQTt3QkFBQ3FDLE9BQU9BO3dCQUFPYyxPQUFPbEMsaUJBQWlCUSxNQUFNO3dCQUFFMkIsV0FBV1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRjtHQWxDTVA7S0FBQUE7QUFvQ04saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9JbW4vRGVza3RvcC9leHByZXNzby9leHByZXNzby9zcmMvYXBwL21haW5xdWl6L3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBRdWl6Q29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3F1aXovUXVpekNvbXBvbmVudFwiO1xuaW1wb3J0IFJlc3VsdENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXN1bHRxdWl6L1Jlc3VsdENvbXBvbmVudFwiO1xuXG5jb25zdCBzaHVmZmxlQXJyYXkgPSAoYXJyYXk6IGFueVtdKSA9PiB7XG4gIHJldHVybiBhcnJheS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xufTtcblxuY29uc3QgZW1vdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgQW5nZXI6IFtcIi9pbWFnZXMvZW1vdGlvbnMvQW5nZXIvYW5nZXIxLmpwZ1wiLCBcIi9pbWFnZXMvZW1vdGlvbnMvQW5nZXIvYW5nZXIyLmpwZ1wiLCBcIi9pbWFnZXMvZW1vdGlvbnMvQW5nZXIvYW5nZXIzLmpwZ1wiXSxcbiAgQW54aWV0eTogW1wiL2ltYWdlcy9lbW90aW9ucy9BbnhpZXR5L2FueDEuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9BbnhpZXR5L2FueDIuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9BbnhpZXR5L2FueDMuanBnXCJdLFxuICBDb25mdXNpb246IFtcIi9pbWFnZXMvZW1vdGlvbnMvQ29uZnVzaW9uL2NvbmYxLmpwZ1wiLCBcIi9pbWFnZXMvZW1vdGlvbnMvQ29uZnVzaW9uL2NvbmYyLmpwZ1wiLCBcIi9pbWFnZXMvZW1vdGlvbnMvQ29uZnVzaW9uL2NvbmYzLmpwZ1wiXSxcbiAgRGlzZ3VzdDogW1wiL2ltYWdlcy9lbW90aW9ucy9EaXNndXN0L2RpczEuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9EaXNndXN0L2RpczIuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9EaXNndXN0L2RpczMuanBnXCJdLFxuICBFeGNpdGVtZW50OiBbXCIvaW1hZ2VzL2Vtb3Rpb25zL0V4Y2l0ZW1lbnQvZXhjMS5qcGdcIiwgXCIvaW1hZ2VzL2Vtb3Rpb25zL0V4Y2l0ZW1lbnQvZXhjMi5qcGdcIiwgXCIvaW1hZ2VzL2Vtb3Rpb25zL0V4Y2l0ZW1lbnQvZXhjMy5qcGdcIl0sXG4gIEZlYXI6IFtcIi9pbWFnZXMvZW1vdGlvbnMvRmVhci9mZWFyMS5qcGdcIiwgXCIvaW1hZ2VzL2Vtb3Rpb25zL0ZlYXIvZmVhcjIuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9GZWFyL2ZlYXIzLmpwZ1wiXSxcbiAgSGFwcGluZXNzOiBbXCIvaW1hZ2VzL2Vtb3Rpb25zL0hhcHBpbmVzcy9oYXAxLmpwZ1wiLCBcIi9pbWFnZXMvZW1vdGlvbnMvSGFwcGluZXNzL2hhcDIuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9IYXBwaW5lc3MvaGFwMy5qcGdcIl0sXG4gIExvdmU6IFtcIi9pbWFnZXMvZW1vdGlvbnMvTG92ZS9sb3ZlMS5qcGdcIiwgXCIvaW1hZ2VzL2Vtb3Rpb25zL0xvdmUvbG92ZTIuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9Mb3ZlL2xvdmUzLmpwZ1wiXSxcbiAgU2FkbmVzczogW1wiL2ltYWdlcy9lbW90aW9ucy9TYWRuZXNzL3NhZDEuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9TYWRuZXNzL3NhZDIuanBnXCIsIFwiL2ltYWdlcy9lbW90aW9ucy9TYWRuZXNzL3NhZDMuanBnXCJdLFxuICBTdXJwcmlzZTogW1wiL2ltYWdlcy9lbW90aW9ucy9TdXJwcmlzZS9zdXIxLmpwZ1wiLCBcIi9pbWFnZXMvZW1vdGlvbnMvU3VycHJpc2Uvc3VyMi5qcGdcIiwgXCIvaW1hZ2VzL2Vtb3Rpb25zL1N1cnByaXNlL3N1cjMuanBnXCJdLFxufTtcblxuXG5cbmNvbnN0IGVtb3Rpb25RdWVzdGlvbnMgPSBPYmplY3Qua2V5cyhlbW90aW9ucykubWFwKChlbW90aW9uKSA9PiB7XG4gIGNvbnN0IHBob3RvcyA9IGVtb3Rpb25zW2Vtb3Rpb25dOyBcbiAgY29uc3QgcmFuZG9tUGhvdG8gPSBwaG90b3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGhvdG9zLmxlbmd0aCldO1xuICBjb25zdCBhbGxFbW90aW9ucyA9IE9iamVjdC5rZXlzKGVtb3Rpb25zKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNodWZmbGVBcnJheShbZW1vdGlvbiwgLi4uYWxsRW1vdGlvbnMuZmlsdGVyKChlKSA9PiBlICE9PSBlbW90aW9uKS5zbGljZSgwLCAyKV0pO1xuICBcbiAgcmV0dXJuIHtcbiAgICBxdWVzdGlvbjogYFdoYXQgZW1vdGlvbiBkb2VzIHRoaXMgaW1hZ2UgcmVwcmVzZW50P2AsXG4gICAgaW1hZ2U6IHJhbmRvbVBob3RvLFxuICAgIG9wdGlvbnM6IHNodWZmbGVBcnJheShvcHRpb25zKSxcbiAgICBjb3JyZWN0QW5zd2VyOiBlbW90aW9uLFxuICB9O1xufSk7XG5cbmNvbnN0IE1haW5RdWl6ID0gKCkgPT4ge1xuICBjb25zdCBbaXNRdWl6Q29tcGxldGUsIHNldElzUXVpekNvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVRdWl6Q29tcGxldGUgPSAoZmluYWxTY29yZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2NvcmUoZmluYWxTY29yZSk7XG4gICAgc2V0SXNRdWl6Q29tcGxldGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVzdGFydFF1aXogPSAoKSA9PiB7XG4gICAgc2V0U2NvcmUoMCk7XG4gICAgc2V0SXNRdWl6Q29tcGxldGUoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpZ28tMTAwIHZpYS1wdXJwbGUtMTAwIHRvLXBpbmstMTAwXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCB6LTEwIHAtNCBiZy13aGl0ZSBiZy1vcGFjaXR5LTgwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LXNtXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvcHJvY2Vzc1wiIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtaW5kaWdvLTYwMFwiPlxuICAgICAgICAgICAgZXhwcmVzc29cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB0LTI0IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNlwiPkVtb3Rpb24gUmVjb2duaXRpb24gUXVpejwvaDE+XG4gICAgICAgIHshaXNRdWl6Q29tcGxldGUgPyAoXG4gICAgICAgICAgPFF1aXpDb21wb25lbnQgcXVlc3Rpb25zPXtlbW90aW9uUXVlc3Rpb25zfSBvblF1aXpDb21wbGV0ZT17aGFuZGxlUXVpekNvbXBsZXRlfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZXN1bHRDb21wb25lbnQgc2NvcmU9e3Njb3JlfSB0b3RhbD17ZW1vdGlvblF1ZXN0aW9ucy5sZW5ndGh9IG9uUmVzdGFydD17cmVzdGFydFF1aXp9IC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluUXVpejtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIlF1aXpDb21wb25lbnQiLCJSZXN1bHRDb21wb25lbnQiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiZW1vdGlvbnMiLCJBbmdlciIsIkFueGlldHkiLCJDb25mdXNpb24iLCJEaXNndXN0IiwiRXhjaXRlbWVudCIsIkZlYXIiLCJIYXBwaW5lc3MiLCJMb3ZlIiwiU2FkbmVzcyIsIlN1cnByaXNlIiwiZW1vdGlvblF1ZXN0aW9ucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJlbW90aW9uIiwicGhvdG9zIiwicmFuZG9tUGhvdG8iLCJmbG9vciIsImxlbmd0aCIsImFsbEVtb3Rpb25zIiwib3B0aW9ucyIsImZpbHRlciIsImUiLCJzbGljZSIsInF1ZXN0aW9uIiwiaW1hZ2UiLCJjb3JyZWN0QW5zd2VyIiwiTWFpblF1aXoiLCJpc1F1aXpDb21wbGV0ZSIsInNldElzUXVpekNvbXBsZXRlIiwic2NvcmUiLCJzZXRTY29yZSIsImhhbmRsZVF1aXpDb21wbGV0ZSIsImZpbmFsU2NvcmUiLCJyZXN0YXJ0UXVpeiIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImhyZWYiLCJtYWluIiwiaDEiLCJxdWVzdGlvbnMiLCJvblF1aXpDb21wbGV0ZSIsInRvdGFsIiwib25SZXN0YXJ0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/mainquiz/page.tsx\n"));

/***/ })

});