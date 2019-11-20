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




function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;

    case 'minus':
      return state - 1;

    default:
      return state;
  }
}

function MyCountFunc() {
  // const [count, setCount] = useState(0)
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(countReducer, 0),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      count = _useReducer2[0],
      dispatchCount = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interVal = setInterval(function () {
      // setCount(c => c + 1)
      dispatchCount({
        type: 'minus'
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
//# sourceMappingURL=b.js.29fd4b7dd13214a5490a.hot-update.js.map