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
  maxAge: 1000 * 60 * 10 //10 mins

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
      if (userRepos) {
        cache.set('userRepos', userRepos);
      }

      if (userStaredRepos) {
        cache.set('userStaredRepos', userStaredRepos);
      } // cachedUserRepos = userRepos
      // cachedUserStaredRepos = userStaredRepos
      // const timeout = setTimeout(() => {  // 另一种设置时间缓存机制的方法
      //   cachedUserRepos = null
      //   cachedUserStaredRepos = null
      // }, 1000 * 10)

    }
  }, [userRepos, userStaredRepos]); //传入这两个props，这样在10分钟以后才会再次存cache，否则useEffect只在渲染时执行一次！

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
    }, ".root.jsx-2297952331{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBR3dCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUYWJzIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xuXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xuICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDEwIC8vMTAgbWluc1xufSlcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxuXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9saWIvYXBpJylcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5sZXQgY2FjaGVkVXNlclJlcG9zLCBjYWNoZWRVc2VyU3RhcmVkUmVwb3NcblxuZnVuY3Rpb24gSW5kZXggKHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XG4gIGNvbnN0IHRhYktleSA9IHJvdXRlci5xdWVyeS5rZXkgfHwgJzEnXG5cbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xuICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICBpZiAodXNlclJlcG9zKSB7XG4gICAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJywgdXNlclJlcG9zKVxuICAgICAgfVxuICAgICAgaWYgKHVzZXJTdGFyZWRSZXBvcykge1xuICAgICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsIHVzZXJTdGFyZWRSZXBvcylcbiAgICAgIH1cbiAgICAgIC8vIGNhY2hlZFVzZXJSZXBvcyA9IHVzZXJSZXBvc1xuICAgICAgLy8gY2FjaGVkVXNlclN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zXG4gICAgICAvLyBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7ICAvLyDlj6bkuIDnp43orr7nva7ml7bpl7TnvJPlrZjmnLrliLbnmoTmlrnms5VcbiAgICAgIC8vICAgY2FjaGVkVXNlclJlcG9zID0gbnVsbFxuICAgICAgLy8gICBjYWNoZWRVc2VyU3RhcmVkUmVwb3MgPSBudWxsXG4gICAgICAvLyB9LCAxMDAwICogMTApXG4gICAgfVxuICB9LCBbdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3NdKSAvL+S8oOWFpei/meS4pOS4qnByb3Bz77yM6L+Z5qC35ZyoMTDliIbpkp/ku6XlkI7miY3kvJrlho3mrKHlrZhjYWNoZe+8jOWQpuWImXVzZUVmZmVjdOWPquWcqOa4suafk+aXtuaJp+ihjOS4gOasoe+8gVxuICBcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPHA+WW91IGhhdmVuJ3QgbG9naW4geWV0PC9wPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5Mb2dpbjwvQnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICB9XG4gIGNvbnNvbGUubG9nKHVzZXIpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxuICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpb308L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XG4gICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+PC9JY29uPlxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyLmVtYWlsfTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cbiAgICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XG4gICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIllvdXIgUmVwb3NcIiBrZXk9XCIxXCI+XG4gICAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG8gPT4gPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfS8+KX1cbiAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCJZb3VyIFN0YXJlZCBSZXBvc1wiIGtleT1cIjJcIj5cbiAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbyA9PiA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99Lz4pfVxuICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgfVxuICAgICAgICAuYmlvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1yb3BzIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDFcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7Y3R4LCByZWR1eFN0b3JlfSkgPT4ge1xuICAvLyBjb25zdCByZXN1bHQgPSAgIGF3YWl0ICBheGlvcy5nZXQoJy9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JylcbiAgLy8gICAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXG5cbiAgLy8gY3R4LnJlcSBhbmQgY3R4LnJlcyBvbmx5IHdvcmtzIHdoZW4gaXQgaXMgcnVuIG9uIHNlcnZlclxuICBjb25zdCB1c2VyID0gcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NlcnZlcikge1xuICAgIGlmIChjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpICYmIGNhY2hlLmdldCgndXNlclJlcG9zJykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSxcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zOiBjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAge1xuICAgICAgLy8gdXJsOiAnL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcsXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXG4gICAgfSxcbiAgICBjdHgucmVxLFxuICAgIGN0eC5yZXNcbiAgKVxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICAvLyBkYXRhOiByZXN1bHQuZGF0YVxuICAgIHVzZXJSZXBvczogdXNlclJlcG9zLmRhdGEsXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgICB9XG4gIH1cbikoSW5kZXgpKSJdfQ== */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/index.js */"));
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
  }, ".root.jsx-67716004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-67716004{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-67716004{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-67716004{font-size:16px;color:#777;}.bio.jsx-67716004{margin-top:20px;color:#333;}.avatar.jsx-67716004{width:100%;border-radius:5px;}.user-rops.jsx-67716004{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmtCLEFBR3dCLEFBS0QsQUFPSSxBQUtELEFBSUMsQUFJTCxBQUtkLFdBSnFCLENBcEJBLEdBWVAsQ0FMSSxBQVNKLFVBSGIsQ0FJQSxFQUlBLENBcEJnQixDQU9FLGdCQUNsQix3QkFlQSxHQTdCeUIsWUFPViwwRUFDUyx1QkFQUCxlQUNqQix3Q0FPQSIsImZpbGUiOiIvbW50L2QvY29kZS9uZXh0anMvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgVGFicyB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTFJVIGZyb20gJ2xydS1jYWNoZSdcblxuY29uc3QgY2FjaGUgPSBuZXcgTFJVKHtcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCAvLzEwIG1pbnNcbn0pXG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcblxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxubGV0IGNhY2hlZFVzZXJSZXBvcywgY2FjaGVkVXNlclN0YXJlZFJlcG9zXG5cbmZ1bmN0aW9uIEluZGV4ICh7IHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zLCB1c2VyLCByb3V0ZXIgfSkge1xuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJ1xuXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChhY3RpdmVLZXkpID0+IHtcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1NlcnZlcikge1xuICAgICAgaWYgKHVzZXJSZXBvcykge1xuICAgICAgICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsIHVzZXJSZXBvcylcbiAgICAgIH1cbiAgICAgIGlmICh1c2VyU3RhcmVkUmVwb3MpIHtcbiAgICAgICAgY2FjaGUuc2V0KCd1c2VyU3RhcmVkUmVwb3MnLCB1c2VyU3RhcmVkUmVwb3MpXG4gICAgICB9XG4gICAgICAvLyBjYWNoZWRVc2VyUmVwb3MgPSB1c2VyUmVwb3NcbiAgICAgIC8vIGNhY2hlZFVzZXJTdGFyZWRSZXBvcyA9IHVzZXJTdGFyZWRSZXBvc1xuICAgICAgLy8gY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4geyAgLy8g5Y+m5LiA56eN6K6+572u5pe26Ze057yT5a2Y5py65Yi255qE5pa55rOVXG4gICAgICAvLyAgIGNhY2hlZFVzZXJSZXBvcyA9IG51bGxcbiAgICAgIC8vICAgY2FjaGVkVXNlclN0YXJlZFJlcG9zID0gbnVsbFxuICAgICAgLy8gfSwgMTAwMCAqIDEwKVxuICAgIH1cbiAgfSwgW3VzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zXSkgLy/kvKDlhaXov5nkuKTkuKpwcm9wc++8jOi/meagt+WcqDEw5YiG6ZKf5Lul5ZCO5omN5Lya5YaN5qyh5a2YY2FjaGXvvIzlkKbliJl1c2VFZmZlY3Tlj6rlnKjmuLLmn5Pml7bmiafooYzkuIDmrKHvvIFcbiAgXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxwPllvdSBoYXZlbid0IGxvZ2luIHlldDwvcD5cbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+TG9naW48L0J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3Qge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgfVxuICBjb25zb2xlLmxvZyh1c2VyKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19PjwvSWNvbj5cbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbH08L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XG4gICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCJZb3VyIFJlcG9zXCIga2V5PVwiMVwiPlxuICAgICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvID0+IDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30vPil9XG4gICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwiWW91ciBTdGFyZWQgUmVwb3NcIiBrZXk9XCIyXCI+XG4gICAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKHJlcG8gPT4gPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfS8+KX1cbiAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgIH1cbiAgICAgICAgLmJpbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItcm9wcyB7XG4gICAgICAgICAgZmxleC1ncm93OiAxXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe2N0eCwgcmVkdXhTdG9yZX0pID0+IHtcbiAgLy8gY29uc3QgcmVzdWx0ID0gICBhd2FpdCAgYXhpb3MuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcpXG4gIC8vICAgICAudGhlbihyZXNwID0+IGNvbnNvbGUubG9nKHJlc3ApKVxuXG4gIC8vIGN0eC5yZXEgYW5kIGN0eC5yZXMgb25seSB3b3JrcyB3aGVuIGl0IGlzIHJ1biBvbiBzZXJ2ZXJcbiAgY29uc3QgdXNlciA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9XG4gIGlmICghaXNTZXJ2ZXIpIHtcbiAgICBpZiAoY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSAmJiBjYWNoZS5nZXQoJ3VzZXJSZXBvcycpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VyUmVwb3M6IGNhY2hlLmdldCgndXNlclJlcG9zJyksXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGNvbnN0IHVzZXJSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxuICAgIHtcbiAgICAgIC8vIHVybDogJy9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnLFxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxuICAgIH0sXG4gICAgY3R4LnJlcSxcbiAgICBjdHgucmVzXG4gIClcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxuICAgIHVzZXJTdGFyZWRSZXBvczogdXNlclN0YXJlZFJlcG9zLmRhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS51c2VyXG4gICAgfVxuICB9XG4pKEluZGV4KSkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/index.js */"));
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
//# sourceMappingURL=index.js.5634d9f4e74b79205155.hot-update.js.map