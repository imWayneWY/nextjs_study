webpackHotUpdate("static/development/pages/test/b.js",{

/***/ "./pages/test/b.js":
/*!*************************!*\
  !*** ./pages/test/b.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function MyCountFunc() {
  var _userState = userState(0),
      _userState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_userState, 2),
      count = _userState2[0],
      setCount = _userState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interVal = setInterval(function () {
      setCount(function (c) {
        return c + 1;
      });
    }, 1000);
    return function () {
      return clearInterval(interVal);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, count);
}

/* harmony default export */ __webpack_exports__["default"] = (MyCountFunc);

/***/ })

})
//# sourceMappingURL=b.js.cdd39c11692af60afecd.hot-update.js.map