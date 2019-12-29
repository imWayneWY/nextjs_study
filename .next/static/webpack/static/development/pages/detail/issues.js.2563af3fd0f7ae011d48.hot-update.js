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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);











var MDRenderer = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../../components/MarkdownRender */ "./components/MarkdownRender.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/MarkdownRender */ "./components/MarkdownRender.jsx")];
    },
    modules: ['../../components/MarkdownRender']
  }
});

function IssueDetail(_ref) {
  var issue = _ref.issue;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1864793006" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MDRenderer, {
    content: issue.body
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1864793006" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "Go to Discuss")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1864793006"
  }, ".root.jsx-1864793006{background:#fafafa;padding:20px;}.actions.jsx-1864793006{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBRzhCLEFBSUYsaUJBQ25CLEVBSmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5cbmNvbnN0IE1EUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcicpKVxuXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KSB7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxNRFJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5HbyB0byBEaXNjdXNzPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3R7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25ze1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZX0pIHtcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbCkgIC8vIGVzY2FwZSBmcm9tIGNsb3N1cmVcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAxMCwgdG9wOiAxMH19XG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93RGV0YWlsPyAnSElERScgOiAnU0hPVyd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgPGg2PlxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpc3N1ZXMgfSkge1xuICBjb25zb2xlLmxvZyhpc3N1ZXMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0vPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlzc3VlcyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJ0dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgaXNzdWVzOiBpc3N1ZXNSZXNwLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
}

function IssueItem(_ref2) {
  var issue = _ref2.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      showDetail = _useState2[0],
      setShowDetail = _useState2[1];

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    }); // escape from closure
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-3034425748" + " " + "issue"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? 'HIDE' : 'SHOW'), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-3034425748" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-3034425748" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
    className: "jsx-3034425748"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-3034425748"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-3034425748" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-3034425748"
  }, "Updated at ", issue.updated_at))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3034425748"
  }, ".issue.jsx-3034425748{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-3034425748:hover{background:#fafafa;}.issue.jsx-3034425748+.issue.jsx-3034425748{border-top:1px solid #eee;}.jsx-3034425748,main-info.jsx-3034425748>h6.jsx-3034425748{max-width:900px;font-size:16px;padding-right:50px;}.avatar.jsx-3034425748{margin-right:20px;}.sub-info.jsx-3034425748{margin-bottom:0;}.sub-info.jsx-3034425748>span.jsx-3034425748+span.jsx-3034425748{display:inline-block;magin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCa0IsS0FkbEIsS0FJcUIsTUFXSixhQVZqQixFQVdBLHNCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5cbmNvbnN0IE1EUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcicpKVxuXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KSB7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxNRFJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5HbyB0byBEaXNjdXNzPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3R7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25ze1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZX0pIHtcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbCkgIC8vIGVzY2FwZSBmcm9tIGNsb3N1cmVcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAxMCwgdG9wOiAxMH19XG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93RGV0YWlsPyAnSElERScgOiAnU0hPVyd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgPGg2PlxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpc3N1ZXMgfSkge1xuICBjb25zb2xlLmxvZyhpc3N1ZXMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0vPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlzc3VlcyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJ0dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgaXNzdWVzOiBpc3N1ZXNSZXNwLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */")), showDetail ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueDetail, {
    issue: issue
  }) : null);
}

function Issues(_ref3) {
  var issues = _ref3.issues;
  console.log(issues);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1489793249" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1489793249" + " " + "issues"
  }, issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueItem, {
      issue: issue,
      key: issue.id
    });
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1489793249"
  }, ".issues.jsx-1489793249{border:1px solid #eee;border-radius:5px;margin-bttom:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRmtCLEFBR2lDLHNCQUNKLGtCQUNBLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5cbmNvbnN0IE1EUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcicpKVxuXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KSB7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxNRFJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5HbyB0byBEaXNjdXNzPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3R7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25ze1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZX0pIHtcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbCkgIC8vIGVzY2FwZSBmcm9tIGNsb3N1cmVcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAxMCwgdG9wOiAxMH19XG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93RGV0YWlsPyAnSElERScgOiAnU0hPVyd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgPGg2PlxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpc3N1ZXMgfSkge1xuICBjb25zb2xlLmxvZyhpc3N1ZXMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0vPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlzc3VlcyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJ0dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgaXNzdWVzOiBpc3N1ZXNSZXNwLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
}

Issues.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var ctx, _ctx$query, owner, name, issuesResp;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref4.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
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
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_7__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.2563af3fd0f7ae011d48.hot-update.js.map