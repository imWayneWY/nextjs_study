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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/util */ "./lib/util.js");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../components/SearchUser */ "./components/SearchUser.jsx");















var MDRenderer = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
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
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1864793006" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MDRenderer, {
    content: issue.body
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1864793006" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "Go to Discuss")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1864793006"
  }, ".root.jsx-1864793006{background:#fafafa;padding:20px;}.actions.jsx-1864793006{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBRzhCLEFBSUYsaUJBQ25CLEVBSmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vLi4vbGliL3V0aWwnXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcblxuY29uc3QgTURSZW5kZXJlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyJykpXG5cbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHtpc3N1ZX0pIHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPE1EUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPkdvIHRvIERpc2N1c3M8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnN7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSkge1xuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKSAgLy8gZXNjYXBlIGZyb20gY2xvc3VyZVxuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDEwLCB0b3A6IDEwfX1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dEZXRhaWw/ICdISURFJyA6ICdTSE9XJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cbiAgICAgICAgICA8aDY+XG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApXG59XG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xuICBsZXQgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXG4gIGxldCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnXG4gIGxldCBsYWJlbFN0ciA9ICcnXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIHtcbiAgICBsYWJlbFN0cj1gbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gXG4gIH1cblxuICBjb25zdCBhcnIgPSBbXVxuXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKVxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKVxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKVxuXG4gIHJldHVybiBhcnIuam9pbignJicpXG59XG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpbml0SXNzdWVzLCBsYWJlbHMsIG93bmVyLCBuYW1lIH0pIHtcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpXG4gIGNvbnNvbGUubG9nKG93bmVyKVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldFN0YXRlKHZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVMYWJlbENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldExhYmVsKHZhbHVlKVxuICB9LCBbXSkgXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgIC8vIFNlYXJjaFxuICAgIGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlcy8ke21ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWwpfWBcbiAgICB9KS50aGVuKHJlc3AgPT4ge1xuICAgICAgc2V0SXNzdWVzKHJlc3AuZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPFNlYXJjaFVzZXIgb25DaGFuZ2U9e2hhbmRsZUNyZWF0b3JDaGFuZ2V9IHZhbHVlPXtjcmVhdG9yfSAvPlxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTdGF0dXNcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYWxsXCI+YWxsPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxuICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtsYWJlbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luUmlnaHQ6IDIwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVscy5tYXAobGEgPT4gXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PntsYS5uYW1lfTwvT3B0aW9uPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuXG4gIGNvbnN0IGZldGNocyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcyksXG4gIFxuICAgIGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxuICBdKVxuICBjb25zb2xlLmxvZyhvd25lcilcbiAgcmV0dXJuIHtcbiAgICBvd25lcixcbiAgICBuYW1lLFxuICAgIGluaXRJc3N1ZXM6IGZldGNoc1swXS5kYXRhLFxuICAgIGxhYmVsczogZmV0Y2hzWzFdLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
}

function IssueItem(_ref2) {
  var issue = _ref2.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      showDetail = _useState2[0],
      setShowDetail = _useState2[1];

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    }); // escape from closure
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1176151431" + " " + "issue"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? 'HIDE' : 'SHOW'), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1176151431" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1176151431" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
    className: "jsx-1176151431"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "jsx-1176151431"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-1176151431" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "jsx-1176151431"
  }, "Updated at ", Object(_lib_util__WEBPACK_IMPORTED_MODULE_12__["getLastUpdated"])(issue.updated_at)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1176151431"
  }, ".issue.jsx-1176151431{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1176151431:hover{background:#fafafa;}.issue.jsx-1176151431+.issue.jsx-1176151431{border-top:1px solid #eee;}.jsx-1176151431,main-info.jsx-1176151431>h6.jsx-1176151431{max-width:600px;font-size:16px;padding-right:50px;}.avatar.jsx-1176151431{margin-right:20px;}.sub-info.jsx-1176151431{margin-bottom:0;}.sub-info.jsx-1176151431>span.jsx-1176151431+span.jsx-1176151431{display:inline-block;magin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCa0IsS0FkbEIsS0FJcUIsTUFXSixhQVZqQixFQVdBLHNCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vLi4vbGliL3V0aWwnXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcblxuY29uc3QgTURSZW5kZXJlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyJykpXG5cbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHtpc3N1ZX0pIHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPE1EUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPkdvIHRvIERpc2N1c3M8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnN7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSkge1xuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKSAgLy8gZXNjYXBlIGZyb20gY2xvc3VyZVxuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDEwLCB0b3A6IDEwfX1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dEZXRhaWw/ICdISURFJyA6ICdTSE9XJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cbiAgICAgICAgICA8aDY+XG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApXG59XG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xuICBsZXQgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXG4gIGxldCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnXG4gIGxldCBsYWJlbFN0ciA9ICcnXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIHtcbiAgICBsYWJlbFN0cj1gbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gXG4gIH1cblxuICBjb25zdCBhcnIgPSBbXVxuXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKVxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKVxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKVxuXG4gIHJldHVybiBhcnIuam9pbignJicpXG59XG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpbml0SXNzdWVzLCBsYWJlbHMsIG93bmVyLCBuYW1lIH0pIHtcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpXG4gIGNvbnNvbGUubG9nKG93bmVyKVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldFN0YXRlKHZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVMYWJlbENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldExhYmVsKHZhbHVlKVxuICB9LCBbXSkgXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgIC8vIFNlYXJjaFxuICAgIGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlcy8ke21ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWwpfWBcbiAgICB9KS50aGVuKHJlc3AgPT4ge1xuICAgICAgc2V0SXNzdWVzKHJlc3AuZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPFNlYXJjaFVzZXIgb25DaGFuZ2U9e2hhbmRsZUNyZWF0b3JDaGFuZ2V9IHZhbHVlPXtjcmVhdG9yfSAvPlxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTdGF0dXNcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYWxsXCI+YWxsPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxuICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtsYWJlbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luUmlnaHQ6IDIwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVscy5tYXAobGEgPT4gXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PntsYS5uYW1lfTwvT3B0aW9uPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuXG4gIGNvbnN0IGZldGNocyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcyksXG4gIFxuICAgIGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxuICBdKVxuICBjb25zb2xlLmxvZyhvd25lcilcbiAgcmV0dXJuIHtcbiAgICBvd25lcixcbiAgICBuYW1lLFxuICAgIGluaXRJc3N1ZXM6IGZldGNoc1swXS5kYXRhLFxuICAgIGxhYmVsczogZmV0Y2hzWzFdLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */")), showDetail ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IssueDetail, {
    issue: issue
  }) : null);
}

function makeQuery(creator, state, labels) {
  var creatorStr = creator ? "creator=".concat(creator) : '';
  var stateStr = state ? "state=".concat(state) : '';
  var labelStr = '';

  if (labels && labels.length > 0) {
    labelStr = "labels=".concat(labels.join(','));
  }

  var arr = [];
  if (creatorStr) arr.push(creatorStr);
  if (stateStr) arr.push(stateStr);
  if (labelStr) arr.push(labelStr);
  return arr.join('&');
}

var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a.Option;

function Issues(_ref3) {
  var initIssues = _ref3.initIssues,
      labels = _ref3.labels,
      owner = _ref3.owner,
      name = _ref3.name;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
      creator = _useState4[0],
      setCreator = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
      label = _useState8[0],
      setLabel = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(initIssues),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState9, 2),
      issues = _useState10[0],
      setIssues = _useState10[1];

  console.log(owner);
  var handleCreatorChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (value) {
    setCreator(value);
  }, []);
  var handleStateChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (value) {
    setState(value);
  }, []);
  var handleLabelChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (value) {
    setLabel(value);
  }, []);

  var handleSearch = function handleSearch() {
    // Search
    _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
      url: "/repos/".concat(owner, "/").concat(name, "/issues/").concat(makeQuery(creator, state, label))
    }).then(function (resp) {
      setIssues(resp.data);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2806596748" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2806596748" + " " + "issues"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2806596748" + " " + "search"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SearchUser__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onChange: handleCreatorChange,
    value: creator
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    placeholder: "Status",
    onChange: handleStateChange,
    value: state,
    style: {
      width: 200,
      marginLeft: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {
    value: "all"
  }, "all"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {
    value: "open"
  }, "open"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {
    value: "closed"
  }, "closed")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    placeholder: "Label",
    mode: "multiple",
    onChange: handleLabelChange,
    value: label,
    style: {
      flexGrow: 1,
      marginLeft: 20,
      marginRight: 20
    }
  }, labels.map(function (la) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {
      value: la.name,
      key: la.id
    }, la.name);
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "primary",
    onClick: handleSearch
  }, "Search")), issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IssueItem, {
      issue: issue,
      key: issue.id
    });
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2806596748"
  }, ".issues.jsx-2806596748{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2806596748{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWl5YW4vaGFjay9uZXh0anNfc3R1ZHkvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtS2tCLEFBR2lDLEFBTVQsc0JBTEssa0JBQ0MsbUJBQ0gsZUFJbEIsQ0FIQSIsImZpbGUiOiIvVXNlcnMvd2VpeWFuL2hhY2svbmV4dGpzX3N0dWR5L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vLi4vbGliL3V0aWwnXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcblxuY29uc3QgTURSZW5kZXJlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyJykpXG5cbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHtpc3N1ZX0pIHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPE1EUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPkdvIHRvIERpc2N1c3M8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnN7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSkge1xuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKSAgLy8gZXNjYXBlIGZyb20gY2xvc3VyZVxuICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDEwLCB0b3A6IDEwfX1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dEZXRhaWw/ICdISURFJyA6ICdTSE9XJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cbiAgICAgICAgICA8aDY+XG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAsbWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGwgfVxuICAgIDwvZGl2PlxuICApXG59XG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xuICBsZXQgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXG4gIGxldCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnXG4gIGxldCBsYWJlbFN0ciA9ICcnXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIHtcbiAgICBsYWJlbFN0cj1gbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gXG4gIH1cblxuICBjb25zdCBhcnIgPSBbXVxuXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKVxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKVxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKVxuXG4gIHJldHVybiBhcnIuam9pbignJicpXG59XG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmZ1bmN0aW9uIElzc3VlcyAoeyBpbml0SXNzdWVzLCBsYWJlbHMsIG93bmVyLCBuYW1lIH0pIHtcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpXG4gIGNvbnNvbGUubG9nKG93bmVyKVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldFN0YXRlKHZhbHVlKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVMYWJlbENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIHNldExhYmVsKHZhbHVlKVxuICB9LCBbXSkgXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgIC8vIFNlYXJjaFxuICAgIGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlcy8ke21ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWwpfWBcbiAgICB9KS50aGVuKHJlc3AgPT4ge1xuICAgICAgc2V0SXNzdWVzKHJlc3AuZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPFNlYXJjaFVzZXIgb25DaGFuZ2U9e2hhbmRsZUNyZWF0b3JDaGFuZ2V9IHZhbHVlPXtjcmVhdG9yfSAvPlxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTdGF0dXNcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYWxsXCI+YWxsPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxuICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtsYWJlbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luUmlnaHQ6IDIwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVscy5tYXAobGEgPT4gXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PntsYS5uYW1lfTwvT3B0aW9uPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuXG4gIGNvbnN0IGZldGNocyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcyksXG4gIFxuICAgIGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxuICBdKVxuICBjb25zb2xlLmxvZyhvd25lcilcbiAgcmV0dXJuIHtcbiAgICBvd25lcixcbiAgICBuYW1lLFxuICAgIGluaXRJc3N1ZXM6IGZldGNoc1swXS5kYXRhLFxuICAgIGxhYmVsczogZmV0Y2hzWzFdLmRhdGFcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=/Users/weiyan/hack/nextjs_study/pages/detail/issues.js */"));
}

Issues.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var ctx, _ctx$query, owner, name, fetchs;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref4.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.t0 = _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a;
            _context.next = 5;
            return _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res);

          case 5:
            _context.t1 = _context.sent;
            _context.next = 8;
            return _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res);

          case 8:
            _context.t2 = _context.sent;
            _context.t3 = [_context.t1, _context.t2];
            _context.next = 12;
            return _context.t0.all.call(_context.t0, _context.t3);

          case 12:
            fetchs = _context.sent;
            console.log(owner);
            return _context.abrupt("return", {
              owner: owner,
              name: name,
              initIssues: fetchs[0].data,
              labels: fetchs[1].data
            });

          case 15:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_9__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.4552c6a366827700ad55.hot-update.js.map