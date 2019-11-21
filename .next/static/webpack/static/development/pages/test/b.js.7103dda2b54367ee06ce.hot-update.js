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
/* harmony import */ var _lib_my_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/my-context */ "./lib/my-context.js");





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
      setName = _useState2[1];

  var config = {
    text: "count is ".concat(count),
    color: count > 3 ? 'red' : 'blue'
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Child, {
    config: config,
    onButtonClick: function onButtonClick() {
      return dispatchCount({
        type: 'add'
      });
    }
  }));
}

var Child = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function Child(_ref) {
  var onButtonClick = _ref.onButtonClick,
      config = _ref.config;
  console.log('child render');
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onButtonClick,
    style: {
      color: config.color
    }
  }, config.text);
});
/* harmony default export */ __webpack_exports__["default"] = (MyCountFunc);

/***/ })

})
//# sourceMappingURL=b.js.7103dda2b54367ee06ce.hot-update.js.map