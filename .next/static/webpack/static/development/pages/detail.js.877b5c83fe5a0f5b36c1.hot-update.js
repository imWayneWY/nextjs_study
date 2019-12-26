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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");














function makeQuery(queryObject) {
  var query = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(queryObject).reduce(function (result, entry) {
    result.push(entry.join('='));
    return result;
  }, []).join('&');

  return "?".concat(query);
}

var isServer = typeof window === 'undefined';
/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

  function WithDetail(_ref) {
    var repoBasic = _ref.repoBasic,
        router = _ref.router,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["repoBasic", "router"]);

    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      if (!isServer) {
        Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["cache"])(repoBasic);
      }
    });
    var query = makeQuery(router.query);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1242838066" + " " + 'root'
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1242838066" + " " + 'repo-basic'
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Repo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      repo: repoBasic
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1242838066" + " " + 'tabs'
    }, type === 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1242838066" + " " + "tab"
    }, "Readme") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/detail".concat(query)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-1242838066" + " " + "tab index"
    }, "Readme")), type === 'issues' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1242838066" + " " + "tab"
    }, "Issues") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/detail/issues".concat(query)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-1242838066" + " " + "tab issues"
    }, "Issues")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1242838066"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Comp, rest)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "1242838066"
    }, ".root.jsx-1242838066{padding-top:20px;}.repo-basic.jsx-1242838066{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1242838066+.tab.jsx-1242838066{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURvQixBQUc4QixBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gJy4vUmVwbydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCB7IGdldCwgY2FjaGUgfSBmcm9tICcuLi9saWIvcmVwby1iYXNpYy1jYWNoZSdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBtYWtlUXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iamVjdClcbiAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XG4gICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKCc9JykpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwgW10pLmpvaW4oJyYnKVxuICByZXR1cm4gYD8ke3F1ZXJ5fWBcbn1cblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKENvbXAsIHR5cGU9J2luZGV4Jykge1xuICBmdW5jdGlvbiBXaXRoRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIsIC4uLnJlc3QgfSkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICAgIGNhY2hlKHJlcG9CYXNpYylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHF1ZXJ5ID0gbWFrZVF1ZXJ5KHJvdXRlci5xdWVyeSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVwby1iYXNpYyc+XG4gICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJzJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZSA9PT0gJ2luZGV4JyBcbiAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJ0YWJcIj5SZWFkbWU8L3NwYW4+XG4gICAgICAgICAgICAgIDogPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGluZGV4XCI+UmVhZG1lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZSA9PT0gJ2lzc3VlcydcbiAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJ0YWJcIj5Jc3N1ZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDogPExpbmsgaHJlZj17YC9kZXRhaWwvaXNzdWVzJHtxdWVyeX1gfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q29tcCB7Li4ucmVzdH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yb290IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVwby1iYXNpYyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YWIgKyAudGFiIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHtjdHh9ID0gY29udGV4dFxuICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuXG4gICAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXG5cbiAgICBcblxuICAgIGxldCBwYWdlRGF0YSA9IHt9XG4gICAgaWYgKENvbXAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlRGF0YSA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGdldChmdWxsX25hbWUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXBvQmFzaWM6IGdldChmdWxsX25hbWUpLFxuICAgICAgICAuLi5wYWdlRGF0YVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCxcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXG4gICAgICAuLi5wYWdlRGF0YVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXG59Il19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/with-repo-basic.jsx */"));
  }

  WithDetail.getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
      var ctx, _ctx$query, owner, name, full_name, pageData, repoBasic;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx = context.ctx;
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              full_name = "".concat(owner, "/").concat(name);
              pageData = {};

              if (!Comp.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 7;
              return Comp.getInitialProps(context);

            case 7:
              pageData = _context.sent;

            case 8:
              if (!Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["get"])(full_name)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                repoBasic: Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["get"])(full_name)
              }, pageData));

            case 10:
              _context.next = 12;
              return _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 12:
              repoBasic = _context.sent;
              return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                repoBasic: repoBasic.data
              }, pageData));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(WithDetail);
});

/***/ })

})
//# sourceMappingURL=detail.js.877b5c83fe5a0f5b36c1.hot-update.js.map