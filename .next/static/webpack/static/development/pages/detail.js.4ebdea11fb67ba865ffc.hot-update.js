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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);










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
    }, ".root.jsx-1242838066{padding-top:20px;}.repo-basic.jsx-1242838066{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1242838066+.tab.jsx-1242838066{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUc4QixBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gJy4vUmVwbydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcblxuZnVuY3Rpb24gbWFrZVF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmplY3QpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xuICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbignPScpKVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIFtdKS5qb2luKCcmJylcbiAgcmV0dXJuIGA/JHtxdWVyeX1gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKENvbXApIHtcbiAgZnVuY3Rpb24gV2l0aERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyIH0pIHtcbiAgICBjb25zb2xlLmxvZyhyZXBvQmFzaWMpXG4gICAgY29uc3QgcXVlcnkgPSBtYWtlUXVlcnkocm91dGVyLnF1ZXJ5KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXBvLWJhc2ljJz5cbiAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvQmFzaWN9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYnMnPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+SXNzdWVzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q29tcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yb290IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVwby1iYXNpYyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YWIgKyAudGFiIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeSlcbiAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcbiAgICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWAsXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcylcblxuICAgIHJldHVybiB7XG4gICAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXG59Il19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/with-repo-basic.jsx */"));
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
              return _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
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

  return Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(WithDetail);
});

/***/ })

})
//# sourceMappingURL=detail.js.4ebdea11fb67ba865ffc.hot-update.js.map