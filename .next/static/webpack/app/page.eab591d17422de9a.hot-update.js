"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/TransactionComponent.tsx":
/*!*************************************************!*\
  !*** ./app/components/TransactionComponent.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _coinbase_onchainkit_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coinbase/onchainkit/transaction */ \"(app-pages-browser)/./node_modules/@coinbase/onchainkit/esm/transaction/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"(app-pages-browser)/./app/constants.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction TransactionWrapper(param) {\n    let { address } = param;\n    const contracts = [\n        {\n            address: _constants__WEBPACK_IMPORTED_MODULE_2__.mintContractAddress,\n            abi: _constants__WEBPACK_IMPORTED_MODULE_2__.mintABI,\n            functionName: \"mint\",\n            args: [\n                address\n            ]\n        }\n    ];\n    const handleError = (err)=>{\n        console.error(\"Transaction error:\", err);\n    };\n    const handleSuccess = (response)=>{\n        console.log(\"Transaction successful\", response);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-[450px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction, {\n            contracts: contracts,\n            className: \"w-[450px]\",\n            chainId: _constants__WEBPACK_IMPORTED_MODULE_2__.BASE_SEPOLIA_CHAIN_ID,\n            onError: handleError,\n            onSuccess: handleSuccess,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_transaction__WEBPACK_IMPORTED_MODULE_1__.TransactionButton, {\n                    className: \"mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]\"\n                }, void 0, false, {\n                    fileName: \"/Users/tinahe/theming-experiment/app/components/TransactionComponent.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_transaction__WEBPACK_IMPORTED_MODULE_1__.TransactionStatus, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_transaction__WEBPACK_IMPORTED_MODULE_1__.TransactionStatusLabel, {}, void 0, false, {\n                            fileName: \"/Users/tinahe/theming-experiment/app/components/TransactionComponent.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_transaction__WEBPACK_IMPORTED_MODULE_1__.TransactionStatusAction, {}, void 0, false, {\n                            fileName: \"/Users/tinahe/theming-experiment/app/components/TransactionComponent.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tinahe/theming-experiment/app/components/TransactionComponent.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tinahe/theming-experiment/app/components/TransactionComponent.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tinahe/theming-experiment/app/components/TransactionComponent.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_c = TransactionWrapper;\nvar _c;\n$RefreshReg$(_c, \"TransactionWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU8wQztBQVVwQjtBQUVQLFNBQVNRLG1CQUFtQixLQUFpQztRQUFqQyxFQUFFQyxPQUFPLEVBQXdCLEdBQWpDO0lBQ3pDLE1BQU1DLFlBQVk7UUFDaEI7WUFDRUQsU0FBU0YsMkRBQW1CQTtZQUM1QkksS0FBS0wsK0NBQU9BO1lBQ1pNLGNBQWM7WUFDZEMsTUFBTTtnQkFBQ0o7YUFBUTtRQUNqQjtLQUNEO0lBRUQsTUFBTUssY0FBYyxDQUFDQztRQUNuQkMsUUFBUUMsS0FBSyxDQUFDLHNCQUFzQkY7SUFDdEM7SUFFQSxNQUFNRyxnQkFBZ0IsQ0FBQ0M7UUFDckJILFFBQVFJLEdBQUcsQ0FBQywwQkFBMEJEO0lBQ3hDO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUN0Qix5RUFBV0E7WUFDVlUsV0FBV0E7WUFDWFksV0FBVTtZQUNWQyxTQUFTbEIsNkRBQXFCQTtZQUM5Qm1CLFNBQVNWO1lBQ1RXLFdBQVdQOzs4QkFFWCw4REFBQ2pCLCtFQUFpQkE7b0JBQUNxQixXQUFVOzs7Ozs7OEJBQzdCLDhEQUFDcEIsK0VBQWlCQTs7c0NBQ2hCLDhEQUFDRSxvRkFBc0JBOzs7OztzQ0FDdkIsOERBQUNELHFGQUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7S0FuQ3dCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UcmFuc2FjdGlvbkNvbXBvbmVudC50c3g/OGFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQge1xuICBUcmFuc2FjdGlvbixcbiAgVHJhbnNhY3Rpb25CdXR0b24sXG4gIFRyYW5zYWN0aW9uU3RhdHVzLFxuICBUcmFuc2FjdGlvblN0YXR1c0FjdGlvbixcbiAgVHJhbnNhY3Rpb25TdGF0dXNMYWJlbCxcbn0gZnJvbSAnQGNvaW5iYXNlL29uY2hhaW5raXQvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHR5cGUge1xuICBUcmFuc2FjdGlvbkVycm9yLFxuICBUcmFuc2FjdGlvblJlc3BvbnNlLFxufSBmcm9tICdAY29pbmJhc2Uvb25jaGFpbmtpdC90cmFuc2FjdGlvbic7XG5pbXBvcnQgdHlwZSB7IEFkZHJlc3MsIENvbnRyYWN0RnVuY3Rpb25QYXJhbWV0ZXJzIH0gZnJvbSAndmllbSc7XG5pbXBvcnQge1xuICBCQVNFX1NFUE9MSUFfQ0hBSU5fSUQsXG4gIG1pbnRBQkksXG4gIG1pbnRDb250cmFjdEFkZHJlc3MsXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uV3JhcHBlcih7IGFkZHJlc3MgfTogeyBhZGRyZXNzOiBBZGRyZXNzIH0pIHtcbiAgY29uc3QgY29udHJhY3RzID0gW1xuICAgIHtcbiAgICAgIGFkZHJlc3M6IG1pbnRDb250cmFjdEFkZHJlc3MgYXMgc3RyaW5nLFxuICAgICAgYWJpOiBtaW50QUJJLFxuICAgICAgZnVuY3Rpb25OYW1lOiAnbWludCcsXG4gICAgICBhcmdzOiBbYWRkcmVzc10sXG4gICAgfSxcbiAgXSBhcyB1bmtub3duIGFzIENvbnRyYWN0RnVuY3Rpb25QYXJhbWV0ZXJzW107XG5cbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyOiBUcmFuc2FjdGlvbkVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignVHJhbnNhY3Rpb24gZXJyb3I6JywgZXJyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlOiBUcmFuc2FjdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1RyYW5zYWN0aW9uIHN1Y2Nlc3NmdWwnLCByZXNwb25zZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1bNDUwcHhdXCI+XG4gICAgICA8VHJhbnNhY3Rpb25cbiAgICAgICAgY29udHJhY3RzPXtjb250cmFjdHN9XG4gICAgICAgIGNsYXNzTmFtZT1cInctWzQ1MHB4XVwiXG4gICAgICAgIGNoYWluSWQ9e0JBU0VfU0VQT0xJQV9DSEFJTl9JRH1cbiAgICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICAgIG9uU3VjY2Vzcz17aGFuZGxlU3VjY2Vzc31cbiAgICAgID5cbiAgICAgICAgPFRyYW5zYWN0aW9uQnV0dG9uIGNsYXNzTmFtZT1cIm10LTAgbXItYXV0byBtbC1hdXRvIHctWzQ1MHB4XSBtYXgtdy1mdWxsIHRleHQtW3doaXRlXVwiIC8+XG4gICAgICAgIDxUcmFuc2FjdGlvblN0YXR1cz5cbiAgICAgICAgICA8VHJhbnNhY3Rpb25TdGF0dXNMYWJlbCAvPlxuICAgICAgICAgIDxUcmFuc2FjdGlvblN0YXR1c0FjdGlvbiAvPlxuICAgICAgICA8L1RyYW5zYWN0aW9uU3RhdHVzPlxuICAgICAgPC9UcmFuc2FjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiVHJhbnNhY3Rpb24iLCJUcmFuc2FjdGlvbkJ1dHRvbiIsIlRyYW5zYWN0aW9uU3RhdHVzIiwiVHJhbnNhY3Rpb25TdGF0dXNBY3Rpb24iLCJUcmFuc2FjdGlvblN0YXR1c0xhYmVsIiwiQkFTRV9TRVBPTElBX0NIQUlOX0lEIiwibWludEFCSSIsIm1pbnRDb250cmFjdEFkZHJlc3MiLCJUcmFuc2FjdGlvbldyYXBwZXIiLCJhZGRyZXNzIiwiY29udHJhY3RzIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsImhhbmRsZUVycm9yIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlU3VjY2VzcyIsInJlc3BvbnNlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhaW5JZCIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TransactionComponent.tsx\n"));

/***/ })

});