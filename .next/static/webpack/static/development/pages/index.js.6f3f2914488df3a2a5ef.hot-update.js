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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");










var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_6___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

function Index(_ref) {
  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user;

  if (!user || !user.id) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-2297952331" + " " + "root"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "jsx-2297952331"
    }, "You haven't login yet"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "primary",
      href: publicRuntimeConfig.OAUTH_URL
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2297952331"
    }, ".root.jsx-2297952331{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBR3dCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcblxuXG5cbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2xpYi9hcGknKVxuXG5mdW5jdGlvbiBJbmRleCAoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciB9KSB7IFxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8cD5Zb3UgaGF2ZW4ndCBsb2dpbiB5ZXQ8L3A+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PkxvZ2luPC9CdXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7Y3R4LCByZWR1eFN0b3JlfSkgPT4ge1xuICAvLyBjb25zdCByZXN1bHQgPSAgIGF3YWl0ICBheGlvcy5nZXQoJy9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JylcbiAgLy8gICAgIC50aGVuKHJlc3AgPT4gY29uc29sZS5sb2cocmVzcCkpXG5cbiAgLy8gY3R4LnJlcSBhbmQgY3R4LnJlcyBvbmx5IHdvcmtzIHdoZW4gaXQgaXMgcnVuIG9uIHNlcnZlclxuICBjb25zdCB1c2VyID0gcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAge1xuICAgICAgLy8gdXJsOiAnL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcsXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXG4gICAgfSxcbiAgICBjdHgucmVxLFxuICAgIGN0eC5yZXNcbiAgKVxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG4gIHJldHVybiB7XG4gICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxuICAgIHVzZXJTdGFyZWRSZXBvczogdXNlclN0YXJlZFJlcG9zLmRhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUudXNlclxuICAgIH1cbiAgfVxuKShJbmRleCkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/index.js */"));
  }
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
            _context.next = 6;
            return api.request({
              // url: '/search/repositories?q=react',
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 6:
            userRepos = _context.sent;
            _context.next = 9;
            return api.request({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 9:
            userStaredRepos = _context.sent;
            return _context.abrupt("return", {
              // data: result.data
              userRepos: userRepos.data,
              userStaredRepos: userStaredRepos.data
            });

          case 11:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.6f3f2914488df3a2a5ef.hot-update.js.map