webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/Repo.jsx":
/*!*****************************!*\
  !*** ./components/Repo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);






function getLicense(license) {
  return license ? "".concat(license.spdx_id, " license") : '';
}

function getLastUpdated(time) {
  return moment__WEBPACK_IMPORTED_MODULE_4___default()(time).fromNow();
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var repo = _ref.repo;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3556873795" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3556873795" + " " + "basic-info"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3556873795" + " " + "repo-title"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/detail?owner=".concat(repo.owner.login, "&name=").concat(repo.name)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3556873795"
  }, repo.full_name))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3556873795" + " " + "repo-desc"
  }, repo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3556873795" + " " + "other-info"
  }, repo.license ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3556873795" + " " + "license"
  }, getLicense(repo.license)) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3556873795" + " " + "last-updated"
  }, getLastUpdated(repo.updated_at)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3556873795" + " " + "open-issues"
  }, " ", repo.open_issues_count, " open issues"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3556873795" + " " + "lang-star"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3556873795" + " " + "lang"
  }, repo.language), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3556873795" + " " + "star"
  }, repo.stargazers_count, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "star",
    theme: "filled"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3556873795"
  }, ".root.jsx-3556873795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-3556873795>span.jsx-3556873795+span.jsx-3556873795{margin-right:10px;}.root.jsx-3556873795+.root.jsx-3556873795{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-3556873795{font-size:20px;}.lang-star.jsx-3556873795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-3556873795>span.jsx-3556873795{width:120px;text-align:right;}.repo-desc.jsx-3556873795{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL1JlcG8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Da0IsQUFHd0IsQUFJSyxBQUdRLEFBSVgsQUFHRixBQUdELEFBSUEsWUFISyxBQUluQixHQVZBLEdBUEEsUUFHbUIsR0FXbkIsY0FWQSwrQkFSZ0MsQUFjaEMsbUhBYkEiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvUmVwby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJ1xuXG5mdW5jdGlvbiBnZXRMaWNlbnNlKGxpY2Vuc2UpIHtcbiAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJydcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFVwZGF0ZWQodGltZSkge1xuICByZXR1cm4gbW9tZW50KHRpbWUpLmZyb21Ob3coKVxufVxuZXhwb3J0IGRlZmF1bHQgKHsgcmVwbyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljLWluZm9cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0bGVcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbD9vd25lcj0ke3JlcG8ub3duZXIubG9naW59Jm5hbWU9JHtyZXBvLm5hbWV9YH0+XG4gICAgICAgICAgICA8YT57cmVwby5mdWxsX25hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwby1kZXNjXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvdGhlci1pbmZvXCI+XG4gICAgICAgICAge3JlcG8ubGljZW5zZVxuICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJsaWNlbnNlXCI+e2dldExpY2Vuc2UocmVwby5saWNlbnNlKX08L3NwYW4+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC11cGRhdGVkXCI+e2dldExhc3RVcGRhdGVkKHJlcG8udXBkYXRlZF9hdCl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+IHtyZXBvLm9wZW5faXNzdWVzX2NvdW50fSBvcGVuIGlzc3Vlczwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmctc3RhclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyXCI+XG4gICAgICAgICAgeyByZXBvLnN0YXJnYXplcnNfY291bnQgfSA8SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICAub3RoZXItaW5mbyA+IHNwYW4gKyBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJvb3QgKyAucm9vdCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlcG8tdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubGFuZy1zdGFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5sYW5nLXN0YXIgPiBzcGFuIHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLnJlcG8tZGVzYyB7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/Repo.jsx */"));
});

/***/ })

})
//# sourceMappingURL=search.js.0a88cedf2685592f59be.hot-update.js.map