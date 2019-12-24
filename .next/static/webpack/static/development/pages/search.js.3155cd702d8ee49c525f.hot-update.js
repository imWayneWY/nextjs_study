webpackHotUpdate("static/development/pages/search.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);












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

function Search(_ref) {
  var router = _ref.router,
      repos = _ref.repos;
  console.log(repos);
  var _router$query = router.query,
      sort = _router$query.sort,
      order = _router$query.order,
      lang = _router$query.lang,
      query = _router$query.query;

  var handleLauguageChange = function handleLauguageChange(language) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
      pathname: '/search',
      query: {
        query: query,
        lang: language,
        sort: sort,
        order: order
      }
    });
  };

  var handleSortChange = function handleSortChange(sort) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
      pathname: '/search',
      query: {
        query: query,
        lang: lang,
        sort: sort.value,
        order: sort.order
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "root"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "list-header"
    }, "Language"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGES,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: function onClick() {
          return handleLauguageChange(item);
        }
      }, item));
    }
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "list-header"
    }, "Sort"),
    style: {
      marginBottom: 20
    },
    dataSource: SORT_TYPES,
    renderItem: function renderItem(item) {
      var selected = false;

      if (ite.name === 'Best Match' && !sort) {
        selected = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__["default"])("selected"), true);
      } else if (item.value === sort && item.order === order) {
        selected = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__["default"])("selected"), true);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: function onClick() {
          return handleLauguageChange(item);
        }
      }, item.name));
    }
  }))));
}

Search.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, _ctx$query, query, sort, lang, order, page, queryString, result;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
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
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.3155cd702d8ee49c525f.hot-update.js.map