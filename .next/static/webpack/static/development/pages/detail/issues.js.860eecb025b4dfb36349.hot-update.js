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
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/util */ "./lib/util.js");












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
  }, ".root.jsx-1864793006{background:#fafafa;padding:20px;}.actions.jsx-1864793006{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBRzhCLEFBSUYsaUJBQ25CLEVBSmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBnZXRMYXN0VXBkYXRlZCB9IGZyb20gJy4uLy4uL2xpYi91dGlsJ1xuXG5jb25zdCBNRFJlbmRlcmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXInKSlcblxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSkge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8TURSZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+R28gdG8gRGlzY3VzczwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uc3tcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpICAvLyBlc2NhcGUgZnJvbSBjbG9zdXJlXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0RldGFpbD8gJ0hJREUnIDogJ1NIT1cnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxuICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaXNzdWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICxtYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYWdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICB7IHNob3dEZXRhaWw/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbCB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSXNzdWVzICh7IGlzc3VlcyB9KSB7XG4gIGNvbnNvbGUubG9nKGlzc3VlcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYnR0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcbiAgY29uc3QgaXNzdWVzUmVzcCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICBpc3N1ZXM6IGlzc3Vlc1Jlc3AuZGF0YVxuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpIl19 */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
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
    className: "jsx-1176151431" + " " + "issue"
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
    className: "jsx-1176151431" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1176151431" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
    className: "jsx-1176151431"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1176151431"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1176151431" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1176151431"
  }, "Updated at ", Object(_lib_util__WEBPACK_IMPORTED_MODULE_10__["getLastUpdated"])(issue.updated_at)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1176151431"
  }, ".issue.jsx-1176151431{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1176151431:hover{background:#fafafa;}.issue.jsx-1176151431+.issue.jsx-1176151431{border-top:1px solid #eee;}.jsx-1176151431,main-info.jsx-1176151431>h6.jsx-1176151431{max-width:600px;font-size:16px;padding-right:50px;}.avatar.jsx-1176151431{margin-right:20px;}.sub-info.jsx-1176151431{margin-bottom:0;}.sub-info.jsx-1176151431>span.jsx-1176151431+span.jsx-1176151431{display:inline-block;magin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRG9CLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCa0IsS0FkbEIsS0FJcUIsTUFXSixhQVZqQixFQVdBLHNCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBnZXRMYXN0VXBkYXRlZCB9IGZyb20gJy4uLy4uL2xpYi91dGlsJ1xuXG5jb25zdCBNRFJlbmRlcmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXInKSlcblxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSkge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8TURSZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+R28gdG8gRGlzY3VzczwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uc3tcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpICAvLyBlc2NhcGUgZnJvbSBjbG9zdXJlXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0RldGFpbD8gJ0hJREUnIDogJ1NIT1cnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxuICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaXNzdWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICxtYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYWdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICB7IHNob3dEZXRhaWw/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbCB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSXNzdWVzICh7IGlzc3VlcyB9KSB7XG4gIGNvbnNvbGUubG9nKGlzc3VlcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYnR0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcbiAgY29uc3QgaXNzdWVzUmVzcCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICBpc3N1ZXM6IGlzc3Vlc1Jlc3AuZGF0YVxuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpIl19 */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */")), showDetail ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueDetail, {
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
  }, ".issues.jsx-1489793249{border:1px solid #eee;border-radius:5px;margin-bttom:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR2tCLEFBR2lDLHNCQUNKLGtCQUNBLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBnZXRMYXN0VXBkYXRlZCB9IGZyb20gJy4uLy4uL2xpYi91dGlsJ1xuXG5jb25zdCBNRFJlbmRlcmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXInKSlcblxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSkge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8TURSZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+R28gdG8gRGlzY3VzczwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290e1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uc3tcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpICAvLyBlc2NhcGUgZnJvbSBjbG9zdXJlXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0RldGFpbD8gJ0hJREUnIDogJ1NIT1cnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxuICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaXNzdWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICxtYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYWdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICB7IHNob3dEZXRhaWw/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbCB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSXNzdWVzICh7IGlzc3VlcyB9KSB7XG4gIGNvbnNvbGUubG9nKGlzc3VlcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYnR0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcbiAgY29uc3QgaXNzdWVzUmVzcCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICBpc3N1ZXM6IGlzc3Vlc1Jlc3AuZGF0YVxuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpIl19 */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
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
//# sourceMappingURL=issues.js.860eecb025b4dfb36349.hot-update.js.map