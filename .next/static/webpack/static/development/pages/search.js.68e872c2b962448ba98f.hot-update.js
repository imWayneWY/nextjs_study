webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");















var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'JAVA', 'Python'];
var SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'stars',
  order: 'desc'
}, {
  name: 'Fewest Stars',
  value: 'stars',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
var selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100
};
/**
 * 
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 */

var FilterLink = Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(function (_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order;
  // const doSearch = (config) => {
  //   Router.push({
  //     pathname: '/search',
  //     query: {
  //       query,
  //       lang,
  //       order,
  //       sort,
  //     }
  //   })
  // }
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang);
  if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/search".concat(queryString)
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, name));
});

function Search(_ref2) {
  var router = _ref2.router,
      repos = _ref2.repos;
  console.log(repos);

  var querys = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, router.query);

  var _router$query = router.query,
      lang = _router$query.lang,
      sort = _router$query.sort,
      order = _router$query.order;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-118147758" + " " + 'root'
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-118147758" + " " + "list-header"
    }, "Language"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGES,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-118147758"
      }, item) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-118147758" + " " + "list-header"
    }, "Sort"),
    style: {
      marginBottom: 20
    },
    dataSource: SORT_TYPES,
    renderItem: function renderItem(item) {
      var selected = false;

      if (item.name === 'Best Match' && !sort) {
        selected = true;
      } else if (item.value === sort && item.order === order) {
        selected = true;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-118147758"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        sort: item.value || '',
        order: item.order || '',
        name: item.name
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 18
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-118147758" + " " + "repos-title"
  }, repos.total_count, " repos in total"), repos.items.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      repo: repo,
      key: repo.id
    });
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "118147758"
  }, ".root.jsx-118147758{padding:20px 0;}.list-header.jsx-118147758{font-weight:800;font-size:16px;}.repos-title.jsx-118147758{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhrQixBQUcwQixBQUdDLEFBSWEsZUFOL0IsQ0FHaUIsYUFJQSxFQUhqQixhQUltQixpQkFDbkIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L3BhZ2VzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICdyYy1tZW51J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXG5cbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2xpYi9hcGknKVxuXG5jb25zdCBMQU5HVUFHRVMgPSBbJ0phdmFTY3JpcHQnLCAnSFRNTCcsICdDU1MnLCAnVHlwZVNjcmlwdCcsICdKQVZBJywgJ1B5dGhvbiddXG5jb25zdCBTT1JUX1RZUEVTID0gW1xuICB7XG4gICAgbmFtZTogJ0Jlc3QgTWF0Y2gnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTW9zdCBTdGFycycsXG4gICAgdmFsdWU6ICdzdGFycycsXG4gICAgb3JkZXI6ICdkZXNjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0Zld2VzdCBTdGFycycsXG4gICAgdmFsdWU6ICdzdGFycycsXG4gICAgb3JkZXI6ICdhc2MnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTW9zdCBGb3JrcycsXG4gICAgdmFsdWU6ICdmb3JrcycsXG4gICAgb3JkZXI6ICdkZXNjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0Zld2VzdCBGb3JrcycsXG4gICAgdmFsdWU6ICdmb3JrcycsXG4gICAgb3JkZXI6ICdhc2MnXG4gIH0sXG5dXG5cbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xuICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNlMzYyMDknLFxuICBmb250V2VpZ2h0OiAxMDAsXG59XG5cbi8qKlxuICogXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cbiAqIG9yZGVyOiDmjpLluo/pobrluo9cbiAqIGxhbmc6IOS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxuICogcGFnZTog5YiG6aG16aG16Z2iXG4gKi9cblxuXG5jb25zdCBGaWx0ZXJMaW5rID0gbWVtbygoeyBuYW1lLCBxdWVyeSwgbGFuZywgc29ydCwgb3JkZXIgfSkgPT4ge1xuICAvLyBjb25zdCBkb1NlYXJjaCA9IChjb25maWcpID0+IHtcbiAgLy8gICBSb3V0ZXIucHVzaCh7XG4gIC8vICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxuICAvLyAgICAgcXVlcnk6IHtcbiAgLy8gICAgICAgcXVlcnksXG4gIC8vICAgICAgIGxhbmcsXG4gIC8vICAgICAgIG9yZGVyLFxuICAvLyAgICAgICBzb3J0LFxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH1cbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xdWVyeT0ke3F1ZXJ5fWBcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZz0ke2xhbmd9YFxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YFxuICBcbiAgcmV0dXJuIDxMaW5rIGhyZWY9e2Avc2VhcmNoJHtxdWVyeVN0cmluZ31gfT48YT57bmFtZX08L2E+PC9MaW5rPlxufSlcbiAgXG5mdW5jdGlvbiBTZWFyY2goe3JvdXRlciwgcmVwb3N9KSB7XG4gIGNvbnNvbGUubG9nKHJlcG9zKVxuXG4gIGNvbnN0IHsgLi4ucXVlcnlzIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgeyBsYW5nLCBzb3J0LCBvcmRlciB9ID0gcm91dGVyLnF1ZXJ5XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XG4gICAgICAgIDxDb2wgc3Bhbj17Nn0+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+TGFuZ3VhZ2U8L3NwYW4+fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gaXRlbVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gPHNwYW4+e2l0ZW19PC9zcGFuPiA6IDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IGxhbmc9e2l0ZW19IG5hbWU9e2l0ZW19Lz59XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj5Tb3J0PC9zcGFuPn1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ0Jlc3QgTWF0Y2gnICYmICFzb3J0KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkPyA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj4gOiA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBzb3J0PXtpdGVtLnZhbHVlIHx8ICcnfSBvcmRlcj17aXRlbS5vcmRlciB8fCAnJ30gbmFtZT17aXRlbS5uYW1lfS8+fVxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3MtdGl0bGVcIj57cmVwb3MudG90YWxfY291bnR9IHJlcG9zIGluIHRvdGFsPC9oMz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXBvcy5pdGVtcy5tYXAocmVwbyA9PiA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9Lz4pXG4gICAgICAgICAgfVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlcG9zLXRpdGxlIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVwb3M6IHtcbiAgICAgICAgdG90YWxfY291bnQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhciZvcmRlcj1kZXNjJnBhZ2U9MlxuXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWBcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGBsYW5ndWFnZToke2xhbmd9YFxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YFxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gXG4gIGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICByZXBvczogcmVzdWx0LmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/search.js */"));
}

Search.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var ctx, _ctx$query, query, sort, lang, order, page, queryString, result;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, order = _ctx$query.order, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            // ?q=react+language:javascript&sort=star&order=desc&page=2
            queryString = "?q=".concat(query);
            if (lang) queryString += "language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
            if (page) queryString += "&page=".concat(page);
            console.log(queryString);
            _context.next = 11;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 11:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 13:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.68e872c2b962448ba98f.hot-update.js.map