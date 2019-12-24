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
    className: "jsx-118147758" + " " + 'root'
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: "jsx-118147758" + " " + "list-header"
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
        className: "jsx-118147758"
      }, item) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-118147758"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, querys, {
        sort: item.value || '',
        order: item.order || '',
        name: item.name
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 18
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
    className: "jsx-118147758" + " " + "repos-title"
  }, repos.total_count, " repos in total"), repos.items.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
      repo: repo,
      key: repo.id
    });
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-118147758" + " " + "pagination"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pageSize: per_pag,
    current: Number(page) || 1,
    total: repos.total_count,
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
    id: "118147758"
  }, ".root.jsx-118147758{padding:20px 0;}.list-header.jsx-118147758{font-weight:800;font-size:16px;}.repos-title.jsx-118147758{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0prQixBQUcwQixBQUdDLEFBSWEsZUFOL0IsQ0FHaUIsYUFJQSxFQUhqQixhQUltQixpQkFDbkIiLCJmaWxlIjoiL21udC9kL2NvZGUvbmV4dGpzL25leHRqcy1wcm9qZWN0L3BhZ2VzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICdyYy1tZW51J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCBtZW1vLCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xuXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9saWIvYXBpJylcblxuY29uc3QgTEFOR1VBR0VTID0gWydKYXZhU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJywgJ1R5cGVTY3JpcHQnLCAnSkFWQScsICdQeXRob24nXVxuY29uc3QgU09SVF9UWVBFUyA9IFtcbiAge1xuICAgIG5hbWU6ICdCZXN0IE1hdGNoJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01vc3QgU3RhcnMnLFxuICAgIHZhbHVlOiAnc3RhcnMnLFxuICAgIG9yZGVyOiAnZGVzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGZXdlc3QgU3RhcnMnLFxuICAgIHZhbHVlOiAnc3RhcnMnLFxuICAgIG9yZGVyOiAnYXNjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01vc3QgRm9ya3MnLFxuICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgIG9yZGVyOiAnZGVzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGZXdlc3QgRm9ya3MnLFxuICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgIG9yZGVyOiAnYXNjJ1xuICB9LFxuXVxuXG5jb25zdCBzZWxlY3RlZEl0ZW1TdHlsZSA9IHtcbiAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZTM2MjA5JyxcbiAgZm9udFdlaWdodDogMTAwLFxufVxuXG4vKipcbiAqIFxuICogc29ydDog5o6S5bqP5pa55byPXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXG4gKiBsYW5nOiDku5PlupPnmoTpobnnm67lvIDlj5HkuLvor63oqIBcbiAqIHBhZ2U6IOWIhumhtemhtemdolxuICovXG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuY29uc3QgcGVyX3BhZ2UgPSAyMFxuXG5jb25zdCBGaWx0ZXJMaW5rID0gbWVtbygoeyBuYW1lLCBxdWVyeSwgbGFuZywgc29ydCwgb3JkZXIsIHBhZ2UgfSkgPT4ge1xuICAvLyBjb25zdCBkb1NlYXJjaCA9IChjb25maWcpID0+IHtcbiAgLy8gICBSb3V0ZXIucHVzaCh7XG4gIC8vICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxuICAvLyAgICAgcXVlcnk6IHtcbiAgLy8gICAgICAgcXVlcnksXG4gIC8vICAgICAgIGxhbmcsXG4gIC8vICAgICAgIG9yZGVyLFxuICAvLyAgICAgICBzb3J0LFxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH1cbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xdWVyeT0ke3F1ZXJ5fWBcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZz0ke2xhbmd9YFxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YFxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gXG5cbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWBcbiAgXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PlxuICAgICAge2lzVmFsaWRFbGVtZW50KG5hbWUpID8gbmFtZTogPGE+e25hbWV9PC9hPn1cbiAgICA8L0xpbms+XG4gIClcbn0pXG4gIFxuZnVuY3Rpb24gU2VhcmNoKHtyb3V0ZXIsIHJlcG9zfSkge1xuICBjb25zb2xlLmxvZyhyZXBvcylcblxuICBjb25zdCB7IC4uLnF1ZXJ5cyB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IHsgbGFuZywgc29ydCwgb3JkZXIsIHBhZ2UgfSA9IHJvdXRlci5xdWVyeVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxuICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPkxhbmd1YWdlPC9zcGFuPn1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGl0ZW1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IDxzcGFuPntpdGVtfTwvc3Bhbj4gOiA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBsYW5nPXtpdGVtfSBuYW1lPXtpdGVtfS8+fVxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+U29ydDwvc3Bhbj59XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEVTfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZD8gPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+IDogPEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gc29ydD17aXRlbS52YWx1ZSB8fCAnJ30gb3JkZXI9e2l0ZW0ub3JkZXIgfHwgJyd9IG5hbWU9e2l0ZW0ubmFtZX0vPn1cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9zLXRpdGxlXCI+e3JlcG9zLnRvdGFsX2NvdW50fSByZXBvcyBpbiB0b3RhbDwvaDM+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVwb3MuaXRlbXMubWFwKHJlcG8gPT4gPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfS8+KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgIHBhZ2VTaXplPXtwZXJfcGFnfVxuICAgICAgICAgICAgICBjdXJyZW50PXtOdW1iZXIocGFnZSkgfHwgMX1cbiAgICAgICAgICAgICAgdG90YWw9e3JlcG9zLnRvdGFsX2NvdW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17bm9vcH1cbiAgICAgICAgICAgICAgaXRlbVJlbmRlcj17KHBhZ2UsIHR5cGUsIG9sKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHR5cGUgPT09ICdwYWdlJyA/IHBhZ2UgOiB0eXBlPT09J3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMVxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlID09PSAncGFnZScgPyBwYWdlIDogb2xcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gcGFnZT17cH0gbmFtZT17bmFtZX0vPlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXBvcy10aXRsZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyLCBwYWdlIH0gPSBjdHgucXVlcnlcblxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9zOiB7XG4gICAgICAgIHRvdGFsX2NvdW50OiAwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gP3E9cmVhY3QrbGFuZ3VhZ2U6amF2YXNjcmlwdCZzb3J0PXN0YXImb3JkZXI9ZGVzYyZwYWdlPTJcblxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgbGFuZ3VhZ2U6JHtsYW5nfWBcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgJ2Rlc2MnfWBcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YFxuICBxdWVyeVN0cmluZyArPSBgJnBlcl9wYWdlPSR7cGVyX3BhZ2V9YFxuICBjb25zb2xlLmxvZyhxdWVyeVN0cmluZyk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgcmVwb3M6IHJlc3VsdC5kYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpIl19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/search.js */"));
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
//# sourceMappingURL=search.js.62b42e233bff94a654b5.hot-update.js.map