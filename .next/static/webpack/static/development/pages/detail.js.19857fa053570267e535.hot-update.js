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

/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

  function WithDetail(_ref) {
    var repoBasic = _ref.repoBasic,
        router = _ref.router,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["repoBasic", "router"]);

    console.log(repoBasic);
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
    }, ".root.jsx-1242838066{padding-top:20px;}.repo-basic.jsx-1242838066{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1242838066+.tab.jsx-1242838066{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUc4QixBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gJy4vUmVwbydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcbmltcG9ydCB7IGdldCwgY2FjaGUgfSBmcm9tICcuLi9saWIvcmVwby1iYXNpYy1jYWNoZSdcblxuZnVuY3Rpb24gbWFrZVF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmplY3QpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xuICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbignPScpKVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIFtdKS5qb2luKCcmJylcbiAgcmV0dXJuIGA/JHtxdWVyeX1gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKENvbXAsIHR5cGU9J2luZGV4Jykge1xuICBmdW5jdGlvbiBXaXRoRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIsIC4uLnJlc3QgfSkge1xuICAgIGNvbnNvbGUubG9nKHJlcG9CYXNpYylcbiAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcG8tYmFzaWMnPlxuICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG9CYXNpY30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFicyc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGUgPT09ICdpbmRleCcgXG4gICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwidGFiXCI+UmVhZG1lPC9zcGFuPlxuICAgICAgICAgICAgICA6IDxMaW5rIGhyZWY9e2AvZGV0YWlsJHtxdWVyeX1gfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGUgPT09ICdpc3N1ZXMnXG4gICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwidGFiXCI+SXNzdWVzPC9zcGFuPlxuICAgICAgICAgICAgICA6IDxMaW5rIGhyZWY9e2AvZGV0YWlsL2lzc3VlcyR7cXVlcnl9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+SXNzdWVzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENvbXAgey4uLnJlc3R9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlcG8tYmFzaWMge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFiICsgLnRhYiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIFdpdGhEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7Y3R4fSA9IGNvbnRleHRcbiAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcblxuICAgIGNvbnN0IGZ1bGxfbmFtZSA9IGAke293bmVyfS8ke25hbWV9YFxuXG4gICAgXG5cbiAgICBsZXQgcGFnZURhdGEgPSB7fVxuICAgIGlmIChDb21wLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZURhdGEgPSBhd2FpdCBDb21wLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChnZXQoZnVsbF9uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVwb0Jhc2ljOiBnZXQoZnVsbF9uYW1lKSxcbiAgICAgICAgLi4ucGFnZURhdGFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWAsXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcylcblxuICAgIGNhY2hlKHJlcG9CYXNpYy5kYXRhKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXG4gICAgICAuLi5wYWdlRGF0YVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXG59Il19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/with-repo-basic.jsx */"));
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
              Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["cache"])(repoBasic.data);
              return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                repoBasic: repoBasic.data
              }, pageData));

            case 15:
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
//# sourceMappingURL=detail.js.19857fa053570267e535.hot-update.js.map