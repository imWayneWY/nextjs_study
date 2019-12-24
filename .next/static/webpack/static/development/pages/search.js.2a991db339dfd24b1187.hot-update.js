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
    className: "jsx-3798925585" + " " + 'root'
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-3798925585" + " " + "list-header"
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
        className: "jsx-3798925585"
      }, item) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-3798925585" + " " + "list-header"
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
        className: "jsx-3798925585"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        sort: item.value || '',
        order: item.order || '',
        name: item.name
      })));
    }
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "3798925585"
  }, ".root.jsx-3798925585{padding:20px 0;}.list-header.jsx-3798925585{font-weight:800;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0hrQixBQUcwQixBQUdDLGVBRmxCLENBR2lCLGVBQ2pCIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAncmMtbWVudSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbyB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9saWIvYXBpJylcblxuY29uc3QgTEFOR1VBR0VTID0gWydKYXZhU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJywgJ1R5cGVTY3JpcHQnLCAnSkFWQScsICdQeXRob24nXVxuY29uc3QgU09SVF9UWVBFUyA9IFtcbiAge1xuICAgIG5hbWU6ICdCZXN0IE1hdGNoJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01vc3QgU3RhcnMnLFxuICAgIHZhbHVlOiAnc3RhcnMnLFxuICAgIG9yZGVyOiAnZGVzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGZXdlc3QgU3RhcnMnLFxuICAgIHZhbHVlOiAnc3RhcnMnLFxuICAgIG9yZGVyOiAnYXNjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01vc3QgRm9ya3MnLFxuICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgIG9yZGVyOiAnZGVzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGZXdlc3QgRm9ya3MnLFxuICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgIG9yZGVyOiAnYXNjJ1xuICB9LFxuXVxuXG5jb25zdCBzZWxlY3RlZEl0ZW1TdHlsZSA9IHtcbiAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZTM2MjA5JyxcbiAgZm9udFdlaWdodDogMTAwLFxufVxuXG4vKipcbiAqIFxuICogc29ydDog5o6S5bqP5pa55byPXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXG4gKiBsYW5nOiDku5PlupPnmoTpobnnm67lvIDlj5HkuLvor63oqIBcbiAqIHBhZ2U6IOWIhumhtemhtemdolxuICovXG5cblxuY29uc3QgRmlsdGVyTGluayA9IG1lbW8oKHsgbmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyIH0pID0+IHtcbiAgLy8gY29uc3QgZG9TZWFyY2ggPSAoY29uZmlnKSA9PiB7XG4gIC8vICAgUm91dGVyLnB1c2goe1xuICAvLyAgICAgcGF0aG5hbWU6ICcvc2VhcmNoJyxcbiAgLy8gICAgIHF1ZXJ5OiB7XG4gIC8vICAgICAgIHF1ZXJ5LFxuICAvLyAgICAgICBsYW5nLFxuICAvLyAgICAgICBvcmRlcixcbiAgLy8gICAgICAgc29ydCxcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cXVlcnk9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgJmxhbmc9JHtsYW5nfWBcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgJ2Rlc2MnfWBcbiAgXG4gIHJldHVybiA8TGluayBocmVmPXtgL3NlYXJjaCR7cXVlcnlTdHJpbmd9YH0+PGE+e25hbWV9PC9hPjwvTGluaz5cbn0pXG4gIFxuZnVuY3Rpb24gU2VhcmNoKHtyb3V0ZXIsIHJlcG9zfSkge1xuICBjb25zb2xlLmxvZyhyZXBvcylcblxuICBjb25zdCB7IC4uLnF1ZXJ5cyB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IHsgbGFuZywgc29ydCwgb3JkZXIgfSA9IHJvdXRlci5xdWVyeVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxuICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPkxhbmd1YWdlPC9zcGFuPn1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGl0ZW1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IDxzcGFuPntpdGVtfTwvc3Bhbj4gOiA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBsYW5nPXtpdGVtfSBuYW1lPXtpdGVtfS8+fVxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+U29ydDwvc3Bhbj59XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEVTfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZD8gPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+IDogPEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gc29ydD17aXRlbS52YWx1ZSB8fCAnJ30gb3JkZXI9e2l0ZW0ub3JkZXIgfHwgJyd9IG5hbWU9e2l0ZW0ubmFtZX0vPn1cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVwb3M6IHtcbiAgICAgICAgdG90YWxfY291bnQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhciZvcmRlcj1kZXNjJnBhZ2U9MlxuXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWBcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGBsYW5ndWFnZToke2xhbmd9YFxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYyd9YFxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gXG4gIGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gXG4gIH0sIGN0eC5yZXEsIGN0eC5yZXMpXG5cbiAgcmV0dXJuIHtcbiAgICByZXBvczogcmVzdWx0LmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCkiXX0= */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/search.js */"));
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
//# sourceMappingURL=search.js.2a991db339dfd24b1187.hot-update.js.map