"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-client)/./app/signin/Login.tsx":
/*!******************************!*\
  !*** ./app/signin/Login.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; },\n/* harmony export */   \"sessionValue\": function() { return /* binding */ sessionValue; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userCard */ \"(app-client)/./app/signin/userCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nlet sessionValue = null;\nfunction Login() {\n    _s();\n    // get session from nextAuth\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    console.log(session);\n    console.log(session === null || session === void 0 ? void 0 : session.user.name);\n    // useSession uses React Context\n    // if the user exists -> show a Sign Out button and their information\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    type: \"button\",\n                    className: \"btn btn-primary\",\n                    children: \"Sign Out of Google\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Block_landing\\\\Trizwit-BlockIoT\\\\app\\\\signin\\\\Login.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userCard__WEBPACK_IMPORTED_MODULE_2__.UserCard, {\n                    user: session === null || session === void 0 ? void 0 : session.user\n                }, void 0, false, {\n                    fileName: \"D:\\\\Block_landing\\\\Trizwit-BlockIoT\\\\app\\\\signin\\\\Login.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                type: \"button\",\n                className: \"btn btn-primary\",\n                children: \"Sign In with Google\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Block_landing\\\\Trizwit-BlockIoT\\\\app\\\\signin\\\\Login.tsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false);\n    }\n// if a user doesn't exist -> show a Sign In button\n}\n_s(Login, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3NpZ25pbi9Mb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDeEI7QUFJL0IsSUFBSUksZUFBZSxJQUFJLENBQUM7QUFHaEIsU0FBU0MsUUFBUTs7SUFDNUIsNEJBQTRCO0lBQzVCLE1BQU0sRUFBRUMsTUFBTUMsUUFBTyxFQUFFLEdBQUdQLDJEQUFVQTtJQUVwQ1EsUUFBUUMsR0FBRyxDQUFDRjtJQUNaQyxRQUFRQyxHQUFHLENBQUNGLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0csSUFBSSxDQUFDQyxJQUFJO0lBQzlCLGdDQUFnQztJQUVoQyxxRUFBcUU7SUFDckUsSUFBR0osU0FBUztRQUNSLHFCQUNJOzs4QkFDSSw4REFBQ0s7b0JBQU9DLFNBQVMsSUFBTVgsd0RBQU9BO29CQUFJWSxNQUFLO29CQUFTQyxXQUFVOzhCQUFrQjs7Ozs7OzhCQUU1RSw4REFBQ1osK0NBQVFBO29CQUFDTyxNQUFNSCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNHLElBQUk7Ozs7Ozs7O0lBS3pDLE9BQU87UUFDSCxxQkFDSTtzQkFDSSw0RUFBQ0U7Z0JBQU9DLFNBQVMsSUFBTVosdURBQU1BO2dCQUFJYSxNQUFLO2dCQUFTQyxXQUFVOzBCQUFrQjs7Ozs7OztJQUd2RixDQUFDO0FBRUQsbURBQW1EO0FBQ3ZELENBQUM7R0E1QnVCVjs7UUFFTUwsdURBQVVBOzs7S0FGaEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zaWduaW4vTG9naW4udHN4P2YwNzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ2FyZCB9IGZyb20gXCIuL3VzZXJDYXJkXCI7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tIFwiY29uc29sZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBzZXNzaW9uVmFsdWUgPSBudWxsO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgLy8gZ2V0IHNlc3Npb24gZnJvbSBuZXh0QXV0aFxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG4gICAgY29uc29sZS5sb2coc2Vzc2lvbj8udXNlci5uYW1lKTtcclxuICAgIC8vIHVzZVNlc3Npb24gdXNlcyBSZWFjdCBDb250ZXh0XHJcblxyXG4gICAgLy8gaWYgdGhlIHVzZXIgZXhpc3RzIC0+IHNob3cgYSBTaWduIE91dCBidXR0b24gYW5kIHRoZWlyIGluZm9ybWF0aW9uXHJcbiAgICBpZihzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBPdXQgb2YgR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7LyogUGFzcyBzZXNzaW9uIGluZm8gdG8gc2VydmVyIGNvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgICAgIDxVc2VyQ2FyZCB1c2VyPXtzZXNzaW9uPy51c2VyfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWduIEluIHdpdGggR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBhIHVzZXIgZG9lc24ndCBleGlzdCAtPiBzaG93IGEgU2lnbiBJbiBidXR0b25cclxufSJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIlVzZXJDYXJkIiwic2Vzc2lvblZhbHVlIiwiTG9naW4iLCJkYXRhIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/signin/Login.tsx\n"));

/***/ })

});