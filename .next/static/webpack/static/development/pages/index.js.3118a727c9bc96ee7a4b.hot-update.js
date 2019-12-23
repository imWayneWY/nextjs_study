webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_12__);














var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_12___default.a({
  maxAge: 1000 * 10
});

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var isServer = typeof window === 'undefined';
var cachedUserRepos, cachedUserStaredRepos;

function Index(_ref) {
  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user,
      router = _ref.router;
  var tabKey = router.query.key || '1';

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/?key=".concat(activeKey));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isServer) {
      cache.set('userRepos', userRepos);
      cache.set('userStaredRepos', userStaredRepos); // cachedUserRepos = userRepos
      // cachedUserStaredRepos = userStaredRepos
    }
  }, []);

  if (!user || !user.id) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2297952331" + " " + "root"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "jsx-2297952331"
    }, "You haven't login yet"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "primary",
      href: publicRuntimeConfig.OAUTH_URL
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "2297952331"
    }, ".root.jsx-2297952331{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBR3dCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUYWJzIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xuXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xuICBtYXhBZ2U6IDEwMDAgKiAgMTBcbn0pXG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcblxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxubGV0IGNhY2hlZFVzZXJSZXBvcywgY2FjaGVkVXNlclN0YXJlZFJlcG9zXG5cbmZ1bmN0aW9uIEluZGV4ICh7IHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zLCB1c2VyLCByb3V0ZXIgfSkge1xuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJ1xuXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChhY3RpdmVLZXkpID0+IHtcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1NlcnZlcikge1xuICAgICAgY2FjaGUuc2V0KCd1c2VyUmVwb3MnLCB1c2VyUmVwb3MpXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsIHVzZXJTdGFyZWRSZXBvcylcbiAgICAgIC8vIGNhY2hlZFVzZXJSZXBvcyA9IHVzZXJSZXBvc1xuICAgICAgLy8gY2FjaGVkVXNlclN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zXG4gICAgfVxuICB9LCBbXSlcbiAgXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxwPllvdSBoYXZlbid0IGxvZ2luIHlldDwvcD5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+TG9naW48L0J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3Qge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgfVxuICBjb25zb2xlLmxvZyh1c2VyKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19PjwvSWNvbj5cbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbH08L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XG4gICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCJZb3VyIFJlcG9zXCIga2V5PVwiMVwiPlxuICAgICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvID0+IDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30vPil9XG4gICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwiWW91ciBTdGFyZWQgUmVwb3NcIiBrZXk9XCIyXCI+XG4gICAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKHJlcG8gPT4gPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfS8+KX1cbiAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgIH1cbiAgICAgICAgLmJpbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItcm9wcyB7XG4gICAgICAgICAgZmxleC1ncm93OiAxXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe2N0eCwgcmVkdXhTdG9yZX0pID0+IHtcbiAgLy8gY29uc3QgcmVzdWx0ID0gICBhd2FpdCAgYXhpb3MuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcpXG4gIC8vICAgICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxuXG4gIC8vIGN0eC5yZXEgYW5kIGN0eC5yZXMgb25seSB3b3JrcyB3aGVuIGl0IGlzIHJ1biBvbiBzZXJ2ZXJcbiAgY29uc3QgdXNlciA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9XG4gIGlmICghaXNTZXJ2ZXIpIHtcbiAgICBpZiAoY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSAmJiBjYWNoZS5nZXQoJ3VzZXJSZXBvcycpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VyUmVwb3M6IGNhY2hlLmdldCgndXNlclJlcG9zJyksXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNvbnN0IHVzZXJSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxuICAgIHtcbiAgICAgIC8vIHVybDogJy9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnLFxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxuICAgIH0sXG4gICAgY3R4LnJlcSxcbiAgICBjdHgucmVzXG4gIClcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxuICAgIHVzZXJTdGFyZWRSZXBvczogdXNlclN0YXJlZFJlcG9zLmRhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS51c2VyXG4gICAgfVxuICB9XG4pKEluZGV4KSkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/index.js */"));
  }

  console.log(user);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-67716004" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-67716004" + " " + "user-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    src: user.avatar_url,
    alt: "user avatar",
    className: "jsx-67716004" + " " + "avatar"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-67716004" + " " + "login"
  }, user.login), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-67716004" + " " + "name"
  }, user.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-67716004" + " " + "bio"
  }, user.bio), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-67716004" + " " + "email"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "mail",
    style: {
      marginRight: 10
    }
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "mailto:".concat(user.email),
    className: "jsx-67716004"
  }, user.email))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-67716004" + " " + "user-repos"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
    defaultActiveKey: tabKey,
    onChange: handleTabChange,
    animated: false
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "Your Repos",
    key: "1"
  }, userRepos.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: repo.id,
      repo: repo
    });
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "Your Stared Repos",
    key: "2"
  }, userStaredRepos.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: repo.id,
      repo: repo
    });
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "67716004"
  }, ".root.jsx-67716004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-67716004{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-67716004{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-67716004{font-size:16px;color:#777;}.bio.jsx-67716004{margin-top:20px;color:#333;}.avatar.jsx-67716004{width:100%;border-radius:5px;}.user-rops.jsx-67716004{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWtCLEFBR3dCLEFBS0QsQUFPSSxBQUtELEFBSUMsQUFJTCxBQUtkLFdBSnFCLENBcEJBLEdBWVAsQ0FMSSxBQVNKLFVBSGIsQ0FJQSxFQUlBLENBcEJnQixDQU9FLGdCQUNsQix3QkFlQSxHQTdCeUIsWUFPViwwRUFDUyx1QkFQUCxlQUNqQix3Q0FPQSIsImZpbGUiOiIvbW50L2QvY29kZS9uZXh0anMvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgVGFicyB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTFJVIGZyb20gJ2xydS1jYWNoZSdcblxuY29uc3QgY2FjaGUgPSBuZXcgTFJVKHtcbiAgbWF4QWdlOiAxMDAwICogIDEwXG59KVxuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5cbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2xpYi9hcGknKVxuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbmxldCBjYWNoZWRVc2VyUmVwb3MsIGNhY2hlZFVzZXJTdGFyZWRSZXBvc1xuXG5mdW5jdGlvbiBJbmRleCAoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciwgcm91dGVyIH0pIHtcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSdcblxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNTZXJ2ZXIpIHtcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJywgdXNlclJlcG9zKVxuICAgICAgY2FjaGUuc2V0KCd1c2VyU3RhcmVkUmVwb3MnLCB1c2VyU3RhcmVkUmVwb3MpXG4gICAgICAvLyBjYWNoZWRVc2VyUmVwb3MgPSB1c2VyUmVwb3NcbiAgICAgIC8vIGNhY2hlZFVzZXJTdGFyZWRSZXBvcyA9IHVzZXJTdGFyZWRSZXBvc1xuICAgIH1cbiAgfSwgW10pXG4gIFxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8cD5Zb3UgaGF2ZW4ndCBsb2dpbiB5ZXQ8L3A+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PkxvZ2luPC9CdXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbiAgY29uc29sZS5sb2codXNlcilcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cInVzZXIgYXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT48L0ljb24+XG4gICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+e3VzZXIuZW1haWx9PC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxuICAgICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwiWW91ciBSZXBvc1wiIGtleT1cIjFcIj5cbiAgICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbyA9PiA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99Lz4pfVxuICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIllvdXIgU3RhcmVkIFJlcG9zXCIga2V5PVwiMlwiPlxuICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvID0+IDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30vPil9XG4gICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICB9XG4gICAgICAgIC5iaW8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLXJvcHMge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtjdHgsIHJlZHV4U3RvcmV9KSA9PiB7XG4gIC8vIGNvbnN0IHJlc3VsdCA9ICAgYXdhaXQgIGF4aW9zLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKVxuICAvLyAgICAgLnRoZW4ocmVzcCA9PiBjb25zb2xlLmxvZyhyZXNwKSlcblxuICAvLyBjdHgucmVxIGFuZCBjdHgucmVzIG9ubHkgd29ya3Mgd2hlbiBpdCBpcyBydW4gb24gc2VydmVyXG4gIGNvbnN0IHVzZXIgPSByZWR1eFN0b3JlLmdldFN0YXRlKCkudXNlclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcbiAgICByZXR1cm4ge1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2VydmVyKSB7XG4gICAgaWYgKGNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJykgJiYgY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlclJlcG9zOiBjYWNoZS5nZXQoJ3VzZXJSZXBvcycpLFxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IGNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJyksXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcbiAgICB7XG4gICAgICAvLyB1cmw6ICcvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JyxcbiAgICAgIHVybDogJy91c2VyL3JlcG9zJyxcbiAgICB9LFxuICAgIGN0eC5yZXEsXG4gICAgY3R4LnJlc1xuICApXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICB1cmw6ICcvdXNlci9zdGFycmVkJyxcbiAgfSwgY3R4LnJlcSwgY3R4LnJlcylcblxuICByZXR1cm4ge1xuICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgdXNlclJlcG9zOiB1c2VyUmVwb3MuZGF0YSxcbiAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJTdGFyZWRSZXBvcy5kYXRhLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUudXNlclxuICAgIH1cbiAgfVxuKShJbmRleCkpIl19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/index.js */"));
}

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, user, userRepos, userStaredRepos;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
            // const result =   await  axios.get('/github/search/repositories?q=react')
            //     .then(resp => console.log(resp))
            // ctx.req and ctx.res only works when it is run on server
            user = reduxStore.getState().user;

            if (!(!user || !user.id)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {});

          case 4:
            if (isServer) {
              _context.next = 7;
              break;
            }

            if (!(cache.get('userStaredRepos') && cache.get('userRepos'))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              userRepos: cache.get('userRepos'),
              userStaredRepos: cache.get('userStaredRepos')
            });

          case 7:
            _context.next = 9;
            return api.request({
              // url: '/search/repositories?q=react',
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 9:
            userRepos = _context.sent;
            _context.next = 12;
            return api.request({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 12:
            userStaredRepos = _context.sent;
            return _context.abrupt("return", {
              // data: result.data
              userRepos: userRepos.data,
              userStaredRepos: userStaredRepos.data
            });

          case 14:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
})(Index)));

/***/ })

})
//# sourceMappingURL=index.js.3118a727c9bc96ee7a4b.hot-update.js.map