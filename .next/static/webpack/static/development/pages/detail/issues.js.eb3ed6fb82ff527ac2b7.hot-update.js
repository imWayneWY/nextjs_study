webpackHotUpdate("static/development/pages/detail/issues.js",{

/***/ "./components/SearchUser.jsx":
/*!***********************************!*\
  !*** ./components/SearchUser.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_5__);







var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

function SearchUser(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value;
  // { current: 0 }
  var lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function (value) {
    console.log('fetching user', value);
    lastFetchIdRef.current += 1;
    var fetchId = lastFetchIdRef.current;
    setFetching(true);
    setOptions([]);
    _lib_api__WEBPACK_IMPORTED_MODULE_5___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (resp) {
      console.log('user:', resp);

      if (fetchId !== lastFetchIdRef.current) {
        return;
      }

      var data = resp.data.items.map(function (user) {
        return {
          text: user.login,
          value: user.login
        };
      });
      setFetching(false);
      setOptions(data);
    });
  }, 500));

  var handleChange = function handleChange(value) {
    setOptions([]);
    setFetching(false);
    onChange(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: 200
    },
    showSearch: true,
    notFoundContent: fetching ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small"
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "nothing"),
    filterOption: false,
    placeHolder: "creator",
    value: value,
    onChange: handleChange,
    onSearch: fetchUser,
    allowClear: true
  }, options.map(function (op) {
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
      value: op.value,
      key: op.value
    }, op.text);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ })

})
//# sourceMappingURL=issues.js.eb3ed6fb82ff527ac2b7.hot-update.js.map