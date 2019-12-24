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
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/antd/lib/pagination/index.js");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");
















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

function noop() {}

var per_page = 20;
var FilterLink = Object(react__WEBPACK_IMPORTED_MODULE_8__["memo"])(function (_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order,
      page = _ref.page;
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
  if (page) queryString += "&page=".concat(page);
  queryString += "&per_page=".concat(per_page);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/search".concat(queryString)
  }, Object(react__WEBPACK_IMPORTED_MODULE_8__["isValidElement"])(name) ? name : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, name));
});

function Search(_ref2) {
  var router = _ref2.router,
      repos = _ref2.repos;
  console.log(repos);

  var querys = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, router.query);

  var _router$query = router.query,
      lang = _router$query.lang,
      sort = _router$query.sort,
      order = _router$query.order,
      page = _router$query.page;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2060511232" + " " + 'root'
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: "jsx-2060511232" + " " + "list-header"
    }, "Language"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGES,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2060511232"
      }, item) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: "jsx-2060511232" + " " + "list-header"
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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2060511232"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, querys, {
        sort: item.value || '',
        order: item.order || '',
        name: item.name
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 18
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
    className: "jsx-2060511232" + " " + "repos-title"
  }, repos.total_count, " repos in total"), repos.items.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
      repo: repo,
      key: repo.id
    });
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2060511232" + " " + "pagination"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pageSize: per_page,
    current: Number(page) || 1,
    total: 1000,
    onChange: noop,
    itemRender: function itemRender(page, type, ol) {
      var p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1;
      var name = type === 'page' ? page : ol;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, querys, {
        page: p,
        name: name
      }));
    }
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2060511232"
  }, ".root.jsx-2060511232{padding:20px 0;}.list-header.jsx-2060511232{font-weight:800;font-size:16px;}.repos-title.jsx-2060511232{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-2060511232{padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0prQixBQUcwQixBQUdDLEFBSWEsQUFLaEIsYUFDSyxFQVpwQixDQUdpQixhQUlBLEVBSGpCLEFBU0EsYUFMbUIsaUJBQ25CIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAncmMtbWVudSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbywgaXNWYWxpZEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbydcblxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpXG5cbmNvbnN0IExBTkdVQUdFUyA9IFsnSmF2YVNjcmlwdCcsICdIVE1MJywgJ0NTUycsICdUeXBlU2NyaXB0JywgJ0pBVkEnLCAnUHl0aG9uJ11cbmNvbnN0IFNPUlRfVFlQRVMgPSBbXG4gIHtcbiAgICBuYW1lOiAnQmVzdCBNYXRjaCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNb3N0IFN0YXJzJyxcbiAgICB2YWx1ZTogJ3N0YXJzJyxcbiAgICBvcmRlcjogJ2Rlc2MnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmV3ZXN0IFN0YXJzJyxcbiAgICB2YWx1ZTogJ3N0YXJzJyxcbiAgICBvcmRlcjogJ2FzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNb3N0IEZvcmtzJyxcbiAgICB2YWx1ZTogJ2ZvcmtzJyxcbiAgICBvcmRlcjogJ2Rlc2MnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmV3ZXN0IEZvcmtzJyxcbiAgICB2YWx1ZTogJ2ZvcmtzJyxcbiAgICBvcmRlcjogJ2FzYydcbiAgfSxcbl1cblxuY29uc3Qgc2VsZWN0ZWRJdGVtU3R5bGUgPSB7XG4gIGJvcmRlckxlZnQ6ICcycHggc29saWQgI2UzNjIwOScsXG4gIGZvbnRXZWlnaHQ6IDEwMCxcbn1cblxuLyoqXG4gKiBcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xuICogb3JkZXI6IOaOkuW6j+mhuuW6j1xuICogbGFuZzog5LuT5bqT55qE6aG555uu5byA5Y+R5Li76K+t6KiAXG4gKiBwYWdlOiDliIbpobXpobXpnaJcbiAqL1xuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmNvbnN0IHBlcl9wYWdlID0gMjBcblxuY29uc3QgRmlsdGVyTGluayA9IG1lbW8oKHsgbmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0pID0+IHtcbiAgLy8gY29uc3QgZG9TZWFyY2ggPSAoY29uZmlnKSA9PiB7XG4gIC8vICAgUm91dGVyLnB1c2goe1xuICAvLyAgICAgcGF0aG5hbWU6ICcvc2VhcmNoJyxcbiAgLy8gICAgIHF1ZXJ5OiB7XG4gIC8vICAgICAgIHF1ZXJ5LFxuICAvLyAgICAgICBsYW5nLFxuICAvLyAgICAgICBvcmRlcixcbiAgLy8gICAgICAgc29ydCxcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cXVlcnk9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgJmxhbmc9JHtsYW5nfWBcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgJ2Rlc2MnfWBcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YFxuXG4gIHF1ZXJ5U3RyaW5nICs9IGAmcGVyX3BhZ2U9JHtwZXJfcGFnZX1gXG4gIFxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2Avc2VhcmNoJHtxdWVyeVN0cmluZ31gfT5cbiAgICAgIHtpc1ZhbGlkRWxlbWVudChuYW1lKSA/IG5hbWU6IDxhPntuYW1lfTwvYT59XG4gICAgPC9MaW5rPlxuICApXG59KVxuICBcbmZ1bmN0aW9uIFNlYXJjaCh7cm91dGVyLCByZXBvc30pIHtcbiAgY29uc29sZS5sb2cocmVwb3MpXG5cbiAgY29uc3QgeyAuLi5xdWVyeXMgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCB7IGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0gPSByb3V0ZXIucXVlcnlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxuICAgICAgPFJvdyBndXR0ZXI9ezIwfT5cbiAgICAgICAgPENvbCBzcGFuPXs2fT5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj5MYW5ndWFnZTwvc3Bhbj59XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBsYW5nID09PSBpdGVtXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyA8c3Bhbj57aXRlbX08L3NwYW4+IDogPEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gbGFuZz17aXRlbX0gbmFtZT17aXRlbX0vPn1cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPlNvcnQ8L3NwYW4+fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxuICAgICAgICAgICAgZGF0YVNvdXJjZT17U09SVF9UWVBFU31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnQmVzdCBNYXRjaCcgJiYgIXNvcnQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlID09PSBzb3J0ICYmIGl0ZW0ub3JkZXIgPT09IG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQ/IDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPiA6IDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHNvcnQ9e2l0ZW0udmFsdWUgfHwgJyd9IG9yZGVyPXtpdGVtLm9yZGVyIHx8ICcnfSBuYW1lPXtpdGVtLm5hbWV9Lz59XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17MTh9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH0gcmVwb3MgaW4gdG90YWw8L2gzPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcG9zLml0ZW1zLm1hcChyZXBvID0+IDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0vPilcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICBwYWdlU2l6ZT17cGVyX3BhZ2V9XG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxuICAgICAgICAgICAgICB0b3RhbD17MTAwMH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e25vb3B9XG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhwYWdlLCB0eXBlLCBvbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlID09PSAncGFnZScgPyBwYWdlIDogdHlwZT09PSdwcmV2JyA/IHBhZ2UgLSAxIDogcGFnZSArIDFcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdHlwZSA9PT0gJ3BhZ2UnID8gcGFnZSA6IG9sXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHBhZ2U9e3B9IG5hbWU9e25hbWV9Lz5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAucmVwb3MtdGl0bGUge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVwb3M6IHtcbiAgICAgICAgdG90YWxfY291bnQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhciZvcmRlcj1kZXNjJnBhZ2U9MlxuXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWBcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGBsYW5ndWFnZToke2xhbmd9YFxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YFxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gXG4gIHF1ZXJ5U3RyaW5nICs9IGAmcGVyX3BhZ2U9JHtwZXJfcGFnZX1gXG4gIGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICByZXBvczogcmVzdWx0LmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/search.js */"));
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
            queryString += "&per_page=".concat(per_page);
            console.log(queryString);
            _context.next = 12;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 12:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 14:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.e8126f0ae54442b304fd.hot-update.js.map