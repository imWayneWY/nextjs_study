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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1]; // const [count, dispatchCount] = useReducer(countReducer, 0)


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('weiyan'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interVal = setInterval(function () {
      setCount(count + 1); // dispatchCount({ type: 'minus'})
    }, 1000);
    return function () {
      return clearInterval(interVal);
    };
  }, [count]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, count); // useEffect(() => {
  //   console.log('effect invoked')
  //   return () => {
  //     console.log('effect deteched')
  //   };
  // }, [count])
  // return (
  //   <div>
  //     <input value={name} onChange = {(e) => setName(e.target.value)} />
  //     <button onClick={() => dispatchCount({type: 'add'})}>{count}</button>
  //   </div>
  // )
}

/* harmony default export */ __webpack_exports__["default"] = (MyCountFunc);

/***/ })

})
//# sourceMappingURL=b.js.2bd3db2df98fb79d503d.hot-update.js.map