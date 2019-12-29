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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);











function IssueItem(_ref) {
  var issue = _ref.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      showDetail = _useState2[0],
      setShowDetail = _useState2[1];

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    }); // escape from closure
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2570659313" + " " + "issue"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? 'HIDE' : 'SHOW'), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2570659313" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2570659313" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
    className: "jsx-2570659313"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2570659313"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2570659313" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2570659313"
  }, "Updated at ", issue.updated_at))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2570659313"
  }, ".issue.jsx-2570659313{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-2570659313:hover{background:#fafafa;}.issue.jsx-2570659313+.issue.jsx-2570659313{border-top:1px solid #eee;}.jsx-2570659313,main-info.jsx-2570659313>h6.jsx-2570659313{max-width:600px;font-size:16px;padding-right:50px;}.avatar.jsx-2570659313{margin-right:20px;}.sub-info.jsx-2570659313{margin-bottom:0;}.sub-info.jsx-2570659313>span.jsx-2570659313+span.jsx-2570659313{display:inline-block;magin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR3dCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCa0IsS0FkbEIsS0FJcUIsTUFXSixhQVZqQixFQVdBLHNCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpICAvLyBlc2NhcGUgZnJvbSBjbG9zdXJlXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxuICAgICAgPlxuICAgICAgICB7c2hvd0RldGFpbD8gJ0hJREUnIDogJ1NIT1cnfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgIDxoNj5cbiAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2g2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxuICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2lzc3VlLnVwZGF0ZWRfYXR9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgfVxuICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICB9XG4gICAgICAgICxtYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZXMgKHsgaXNzdWVzIH0pIHtcbiAgY29uc29sZS5sb2coaXNzdWVzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cbiAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9Lz4pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pc3N1ZXMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG1hcmdpbi1idHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuICBjb25zdCBpc3N1ZXNSZXNwID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcbiAgfSwgY3R4LnJlcSwgY3R4LnJlcylcblxuICByZXR1cm4ge1xuICAgIGlzc3VlczogaXNzdWVzUmVzcC5kYXRhXG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvQmFzaWMoSXNzdWVzLCAnaXNzdWVzJykiXX0= */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
}

function Issues(_ref2) {
  var issues = _ref2.issues;
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
  }, ".issues.jsx-1489793249{border:1px solid #eee;border-radius:5px;margin-bttom:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBR2lDLHNCQUNKLGtCQUNBLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpICAvLyBlc2NhcGUgZnJvbSBjbG9zdXJlXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxuICAgICAgPlxuICAgICAgICB7c2hvd0RldGFpbD8gJ0hJREUnIDogJ1NIT1cnfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgIDxoNj5cbiAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2g2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxuICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2lzc3VlLnVwZGF0ZWRfYXR9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgfVxuICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICB9XG4gICAgICAgICxtYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZXMgKHsgaXNzdWVzIH0pIHtcbiAgY29uc29sZS5sb2coaXNzdWVzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cbiAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9Lz4pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pc3N1ZXMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG1hcmdpbi1idHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuICBjb25zdCBpc3N1ZXNSZXNwID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcbiAgfSwgY3R4LnJlcSwgY3R4LnJlcylcblxuICByZXR1cm4ge1xuICAgIGlzc3VlczogaXNzdWVzUmVzcC5kYXRhXG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvQmFzaWMoSXNzdWVzLCAnaXNzdWVzJykiXX0= */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
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
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_7__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.5951888ebff4611f25b8.hot-update.js.map