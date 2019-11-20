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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('weiyan'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1]; // useEffect(() => {
  //   const interVal = setInterval(() => {
  //     // setCount(c => c + 1)
  //     dispatchCount({ type: 'minus'})
  //   }, 1000)
  //   return () => clearInterval(interVal)
  // }, [])
  // return <span>{count}</span>


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('effect invoked');
    return function () {
      console.log('effect deteched');
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return dispatchCount({
        type: 'add'
      });
    }
  }, count));
}

/* harmony default export */ __webpack_exports__["default"] = (MyCountFunc);

/***/ })

})
//# sourceMappingURL=b.js.c69ed10f17de981b2eb6.hot-update.js.map