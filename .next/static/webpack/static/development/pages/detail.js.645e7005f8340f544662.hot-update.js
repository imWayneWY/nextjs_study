webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./components/with-repo-basic.jsx":
/*!****************************************!*\
  !*** ./components/with-repo-basic.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_7__);









function makeQuery(queryObject) {
  var query = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(queryObject).reduce(function (result, entry) {
    result.push(entry.join('='));
    return result;
  }, []).join('&');

  return "?".concat(query);
}

/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  function WithDetail(_ref) {
    var repoBasic = _ref.repoBasic,
        router = _ref.router;
    console.log(repoBasic);
    var query = makeQuery(router.query);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1242838066" + " " + 'root'
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1242838066" + " " + 'repo-basic'
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Repo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      repo: repoBasic
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1242838066" + " " + 'tabs'
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/detail".concat(query)
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "jsx-1242838066" + " " + "tab index"
    }, "Readme")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/detail/issues".concat(query)
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "jsx-1242838066" + " " + "tab issues"
    }, "Issues")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1242838066"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Comp, null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "1242838066"
    }, ".root.jsx-1242838066{padding-top:20px;}.repo-basic.jsx-1242838066{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1242838066+.tab.jsx-1242838066{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUc4QixBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gJy4vUmVwbydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xuXG5mdW5jdGlvbiBtYWtlUXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iamVjdClcbiAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XG4gICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKCc9JykpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwgW10pLmpvaW4oJyYnKVxuICByZXR1cm4gYD8ke3F1ZXJ5fWBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQ29tcCkge1xuICBmdW5jdGlvbiBXaXRoRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIgfSkge1xuICAgIGNvbnNvbGUubG9nKHJlcG9CYXNpYylcbiAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcG8tYmFzaWMnPlxuICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG9CYXNpY30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFicyc+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsL2lzc3VlcyR7cXVlcnl9YH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb21wIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXBvLWJhc2ljIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhYiArIC50YWIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBXaXRoRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coY3R4LnF1ZXJ5KVxuICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCxcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFdpdGhEZXRhaWxcbn0iXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/with-repo-basic.jsx */"));
  }

  WithDetail.getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
      var ctx, _ctx$query, owner, name, repoBasic;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx = _ref2.ctx;
              console.log(ctx.query);
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              _context.next = 5;
              return _lib_api__WEBPACK_IMPORTED_MODULE_7___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 5:
              repoBasic = _context.sent;
              return _context.abrupt("return", {
                repoBasic: repoBasic.data
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return WithDetail;
});

/***/ })

})
//# sourceMappingURL=detail.js.645e7005f8340f544662.hot-update.js.map