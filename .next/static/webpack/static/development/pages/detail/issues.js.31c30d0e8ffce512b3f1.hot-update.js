webpackHotUpdate("static/development/pages/detail/issues.js",{

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_6__);








function IssueItem(_ref) {
  var issue = _ref.issue;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-518776683" + " " + "issue"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-518776683" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-518776683" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h6", {
    className: "jsx-518776683"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-518776683"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-518776683" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-518776683"
  }, "Updated at ", issue.updated_at))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "518776683"
  }, ".issue.jsx-518776683{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-518776683:hover{background:#fafafa;}.issue.jsx-518776683+.issue.jsx-518776683{border-top:1px solid #eee;}.jsx-518776683,main-info.jsx-518776683>h6.jsx-518776683{max-width:600px;font-size:16px;}.avatar.jsx-518776683{margin-right:20px;}.sub-info.jsx-518776683{margin-bottom:0;}.sub-info.jsx-518776683>span.jsx-518776683+span.jsx-518776683{display:inline-block;magin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCLEFBR3dCLEFBS00sQUFHTyxBQUdWLEFBSUUsQUFHRixBQUdLLGdCQVROLEFBT2pCLEVBSEEsQ0FWQSxFQWdCa0IsS0FibEIsS0FJQSxNQVVpQixlQUNqQixzQkF2Qm9CLGtCQUNMLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3dlaXlhbi9oYWNrL25leHRqc19zdHVkeS9wYWdlcy9kZXRhaWwvaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhSZXBvQmFzaWMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMnXG5cbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ2FudGQnXG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxuICAgICAgICA8aDY+XG4gICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cbiAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pc3N1ZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIH1cbiAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgfVxuICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYWdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpc3N1ZXMgfSkge1xuICBjb25zb2xlLmxvZyhpc3N1ZXMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0vPil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgaXNzdWVzOiBpc3N1ZXNSZXNwLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
}

function Issues(_ref2) {
  var issues = _ref2.issues;
  console.log(issues);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "root"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "issues"
  }, issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(IssueItem, {
      issue: issue,
      key: issue.id
    });
  })));
}

Issues.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var ctx, _ctx$query, owner, name, issuesResp;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_6___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res);

          case 4:
            issuesResp = _context.sent;
            return _context.abrupt("return", {
              issues: issuesResp.data
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_5__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.31c30d0e8ffce512b3f1.hot-update.js.map