webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../store/store */ "./store/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);















var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Footer;





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_13___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; // 写在外面是为了每次渲染时都是过来拿到这个对象，而不是定义新对象重复渲染


var githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
};
var footerStyle = {
  textAlign: 'center'
};

var Comp = function Comp(_ref) {
  var children = _ref.children,
      color = _ref.color,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({
      color: color
    }, style)
  }, children);
};

function MyLayout(_ref2) {
  var children = _ref2.children,
      user = _ref2.user,
      logout = _ref2.logout,
      router = _ref2.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleGotoOAuth = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function (e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("/prepare-auth?url=".concat(router.asPath)).then(function (resp) {
      if (resp.status === 200) {
        location.href = publicRuntimeConfig.OAUTH_URL;
      } else {
        console.log('prepare auth failed', resp);
      }
    }).catch(function (err) {
      console.log('prepare auth failed', err);
    });
  }, []);
  var handleLogout = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function () {
    logout();
  }, [logout]);
  var userDropDown = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
    href: "javascript:void(0)",
    onClick: handleLogout
  }, "Log Out")));
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function () {// 待加入
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    renderer: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "jsx-4066791874" + " " + "header-inner"
    })
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-4066791874" + " " + "header-left"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-4066791874" + " " + "logo"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "github",
    style: githubIconStyle
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-4066791874"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "Search Repos",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-4066791874" + " " + "header-right"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-4066791874" + " " + "user"
  }, user && user.id ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: userDropDown
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
    href: "/",
    className: "jsx-4066791874"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    src: user.avatar_url
  }))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "Click here to Login In"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
    href: publicRuntimeConfig.OAUTH_URL,
    onClick: handleGotoOAuth,
    className: "jsx-4066791874"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    icon: "user"
  }))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    renderer: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Comp, {
      color: "red"
    })
  }, children)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Footer, {
    style: footerStyle
  }, "Develop by Weiyan @", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
    href: "mailto: im.weiyan@foxmail.com",
    className: "jsx-4066791874"
  }, "im.weiyan@foxmail.com")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "2522845059"
  }, ".header-inner.jsx-4066791874{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-4066791874{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-start;-webkit-justify-content:space-start;-ms-flex-pack:space-start;justify-content:space-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEhrQixBQUd3QixBQUlBLDBFQUhpQixBQUlGLG1IQUg5QixJQUlBIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIsIFRvb2x0aXAsIERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcblxuLy8g5YaZ5Zyo5aSW6Z2i5piv5Li65LqG5q+P5qyh5riy5p+T5pe26YO95piv6L+H5p2l5ou/5Yiw6L+Z5Liq5a+56LGh77yM6ICM5LiN5piv5a6a5LmJ5paw5a+56LGh6YeN5aSN5riy5p+TXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XG4gIGNvbG9yOiAnd2hpdGUnLFxuICBmb250U2l6ZTogNDAsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIHBhZGRpbmdUb3A6IDEwLFxuICBtYXJnaW5SaWdodDogMjAsXG59XG5cbmNvbnN0IGZvb3RlclN0eWxlID0ge1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxufVxuXG5jb25zdCBDb21wID0gKHtjaGlsZHJlbiwgY29sb3IsIHN0eWxlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tjb2xvciwgLi4uc3R5bGV9fT57Y2hpbGRyZW59PC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gTXlMYXlvdXQgKHsgY2hpbGRyZW4sIHVzZXIsIGxvZ291dCwgcm91dGVyIH0pIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudCkgPT4ge1xuICAgICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9LFxuICAgIFtzZXRTZWFyY2hdLFxuICApXG4gIGNvbnN0IGhhbmRsZUdvdG9PQXV0aCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgYXhpb3MuZ2V0KGAvcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YClcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwcmVwYXJlIGF1dGggZmFpbGVkJywgcmVzcClcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmUgYXV0aCBmYWlsZWQnLCBlcnIpXG4gICAgICB9KVxuICB9LCBbXSlcbiAgY29uc3QgaGFuZGxlTG9nb3V0ICA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsb2dvdXQoKVxuICB9LCBbbG9nb3V0XSlcblxuICBjb25zdCB1c2VyRHJvcERvd24gPSAoXG4gICAgPE1lbnU+XG4gICAgICA8TWVudS5JdGVtPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2cgT3V0PC9hPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgPC9NZW51PlxuICApXG5cbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiB7XG4gICAgICAvLyDlvoXliqDlhaVcbiAgICB9LFxuICAgIFtdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIi8+fT5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0+PC9JY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFJlcG9zXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VyICYmIHVzZXIuaWRcbiAgICAgICAgICAgICAgICA/KFxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e3VzZXJEcm9wRG93bn0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDooXG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsaWNrIGhlcmUgdG8gTG9naW4gSW5cIj4gXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9IHtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0gb25DbGljaz17aGFuZGxlR290b09BdXRofT5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxDb21wIGNvbG9yPVwicmVkXCIvPn0gPlxuICAgICAgICB7LyogPENvbnRhaW5lciByZW5kZXI9ezxkaXYgLz59ID4gKi99XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgRGV2ZWxvcCBieSBXZWl5YW4gQFxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOiBpbS53ZWl5YW5AZm94bWFpbC5jb21cIj5pbS53ZWl5YW5AZm94bWFpbC5jb208L2E+XG4gICAgICA8L0Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlci1pbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1sZWZ0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2Utc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICNfX25leHQge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuYW50LWxheW91dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbGF5b3V0LWhlYWRlcntcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUudXNlcixcbiAgICB9XG4gIH0sXG4gIGZ1bmN0aW9uIG1hcFJlZHVjZXIoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXQoKSlcbiAgICB9XG4gIH1cbikod2l0aFJvdXRlcihNeUxheW91dCkpIl19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/Layout.jsx */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "1064091368"
  }, "#__next{height:100%;}.ant-layout{height:100%;}.ant-layout-header{padding-left:0;padding-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0l5QixBQUd1QixBQUdBLEFBR0csWUFMakIsQUFHQSxHQUdrQixnQkFDbEIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXG5pbXBvcnQgeyBCdXR0b24sIExheW91dCwgSWNvbiwgSW5wdXQsIEF2YXRhciwgVG9vbHRpcCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxuXG4vLyDlhpnlnKjlpJbpnaLmmK/kuLrkuobmr4/mrKHmuLLmn5Pml7bpg73mmK/ov4fmnaXmi7/liLDov5nkuKrlr7nosaHvvIzogIzkuI3mmK/lrprkuYnmlrDlr7nosaHph43lpI3muLLmn5NcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcbiAgY29sb3I6ICd3aGl0ZScsXG4gIGZvbnRTaXplOiA0MCxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgcGFkZGluZ1RvcDogMTAsXG4gIG1hcmdpblJpZ2h0OiAyMCxcbn1cblxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG59XG5cbmNvbnN0IENvbXAgPSAoe2NoaWxkcmVuLCBjb2xvciwgc3R5bGV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e2NvbG9yLCAuLi5zdHlsZX19PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBNeUxheW91dCAoeyBjaGlsZHJlbiwgdXNlciwgbG9nb3V0LCByb3V0ZXIgfSkge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0sXG4gICAgW3NldFNlYXJjaF0sXG4gIClcbiAgY29uc3QgaGFuZGxlR290b09BdXRoID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBheGlvcy5nZXQoYC9wcmVwYXJlLWF1dGg/dXJsPSR7cm91dGVyLmFzUGF0aH1gKVxuICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgbG9jYXRpb24uaHJlZiA9IHB1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmUgYXV0aCBmYWlsZWQnLCByZXNwKVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyZSBhdXRoIGZhaWxlZCcsIGVycilcbiAgICAgIH0pXG4gIH0sIFtdKVxuICBjb25zdCBoYW5kbGVMb2dvdXQgID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxvZ291dCgpXG4gIH0sIFtsb2dvdXRdKVxuXG4gIGNvbnN0IHVzZXJEcm9wRG93biA9IChcbiAgICA8TWVudT5cbiAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBPdXQ8L2E+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICA8L01lbnU+XG4gIClcblxuICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHtcbiAgICAgIC8vIOW+heWKoOWFpVxuICAgIH0sXG4gICAgW10sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiLz59PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfT48L0ljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUmVwb3NcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXIgJiYgdXNlci5pZFxuICAgICAgICAgICAgICAgID8oXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17dXNlckRyb3BEb3dufT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHNyYz17dXNlci5hdmF0YXJfdXJsfSAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOihcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xpY2sgaGVyZSB0byBMb2dpbiBJblwiPiBcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0ge3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfSBvbkNsaWNrPXtoYW5kbGVHb3RvT0F1dGh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q29udGVudD5cbiAgICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PENvbXAgY29sb3I9XCJyZWRcIi8+fSA+XG4gICAgICAgIHsvKiA8Q29udGFpbmVyIHJlbmRlcj17PGRpdiAvPn0gPiAqL31cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250ZW50PlxuICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICBEZXZlbG9wIGJ5IFdlaXlhbiBAXG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86IGltLndlaXlhbkBmb3htYWlsLmNvbVwiPmltLndlaXlhbkBmb3htYWlsLmNvbTwvYT5cbiAgICAgIDwvRm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhZGVyLWlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyLWxlZnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1zdGFydDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtbGF5b3V0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1sYXlvdXQtaGVhZGVye1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxuICAgIH1cbiAgfSxcbiAgZnVuY3Rpb24gbWFwUmVkdWNlcihkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dCgpKVxuICAgIH1cbiAgfVxuKSh3aXRoUm91dGVyKE15TGF5b3V0KSkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/components/Layout.jsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
}, function mapReducer(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["logout"])());
    }
  };
})(Object(next_router__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(MyLayout)));

/***/ })

})
//# sourceMappingURL=_app.js.d48f9850f816e7e19003.hot-update.js.map