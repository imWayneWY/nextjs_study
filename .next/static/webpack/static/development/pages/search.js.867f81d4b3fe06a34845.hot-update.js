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
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 18
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-3798925585" + " " + "repos-title"
  }, repos.total_count), repos.items.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      repo: repo,
      key: repo.id
    });
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "3798925585"
  }, ".root.jsx-3798925585{padding:20px 0;}.list-header.jsx-3798925585{font-weight:800;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhrQixBQUcwQixBQUdDLGVBRmxCLENBR2lCLGVBQ2pCIiwiZmlsZSI6Ii9tbnQvZC9jb2RlL25leHRqcy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAncmMtbWVudSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xuXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9saWIvYXBpJylcblxuY29uc3QgTEFOR1VBR0VTID0gWydKYXZhU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJywgJ1R5cGVTY3JpcHQnLCAnSkFWQScsICdQeXRob24nXVxuY29uc3QgU09SVF9UWVBFUyA9IFtcbiAge1xuICAgIG5hbWU6ICdCZXN0IE1hdGNoJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01vc3QgU3RhcnMnLFxuICAgIHZhbHVlOiAnc3RhcnMnLFxuICAgIG9yZGVyOiAnZGVzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGZXdlc3QgU3RhcnMnLFxuICAgIHZhbHVlOiAnc3RhcnMnLFxuICAgIG9yZGVyOiAnYXNjJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ01vc3QgRm9ya3MnLFxuICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgIG9yZGVyOiAnZGVzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGZXdlc3QgRm9ya3MnLFxuICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgIG9yZGVyOiAnYXNjJ1xuICB9LFxuXVxuXG5jb25zdCBzZWxlY3RlZEl0ZW1TdHlsZSA9IHtcbiAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZTM2MjA5JyxcbiAgZm9udFdlaWdodDogMTAwLFxufVxuXG4vKipcbiAqIFxuICogc29ydDog5o6S5bqP5pa55byPXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXG4gKiBsYW5nOiDku5PlupPnmoTpobnnm67lvIDlj5HkuLvor63oqIBcbiAqIHBhZ2U6IOWIhumhtemhtemdolxuICovXG5cblxuY29uc3QgRmlsdGVyTGluayA9IG1lbW8oKHsgbmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyIH0pID0+IHtcbiAgLy8gY29uc3QgZG9TZWFyY2ggPSAoY29uZmlnKSA9PiB7XG4gIC8vICAgUm91dGVyLnB1c2goe1xuICAvLyAgICAgcGF0aG5hbWU6ICcvc2VhcmNoJyxcbiAgLy8gICAgIHF1ZXJ5OiB7XG4gIC8vICAgICAgIHF1ZXJ5LFxuICAvLyAgICAgICBsYW5nLFxuICAvLyAgICAgICBvcmRlcixcbiAgLy8gICAgICAgc29ydCxcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cXVlcnk9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgJmxhbmc9JHtsYW5nfWBcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgJ2Rlc2MnfWBcbiAgXG4gIHJldHVybiA8TGluayBocmVmPXtgL3NlYXJjaCR7cXVlcnlTdHJpbmd9YH0+PGE+e25hbWV9PC9hPjwvTGluaz5cbn0pXG4gIFxuZnVuY3Rpb24gU2VhcmNoKHtyb3V0ZXIsIHJlcG9zfSkge1xuICBjb25zb2xlLmxvZyhyZXBvcylcblxuICBjb25zdCB7IC4uLnF1ZXJ5cyB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IHsgbGFuZywgc29ydCwgb3JkZXIgfSA9IHJvdXRlci5xdWVyeVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxuICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPkxhbmd1YWdlPC9zcGFuPn1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGl0ZW1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IDxzcGFuPntpdGVtfTwvc3Bhbj4gOiA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBsYW5nPXtpdGVtfSBuYW1lPXtpdGVtfS8+fVxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+U29ydDwvc3Bhbj59XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEVTfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZD8gPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+IDogPEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gc29ydD17aXRlbS52YWx1ZSB8fCAnJ30gb3JkZXI9e2l0ZW0ub3JkZXIgfHwgJyd9IG5hbWU9e2l0ZW0ubmFtZX0vPn1cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9zLXRpdGxlXCI+e3JlcG9zLnRvdGFsX2NvdW50fTwvaDM+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVwb3MuaXRlbXMubWFwKHJlcG8gPT4gPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfS8+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyLCBwYWdlIH0gPSBjdHgucXVlcnlcblxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9zOiB7XG4gICAgICAgIHRvdGFsX2NvdW50OiAwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gP3E9cmVhY3QrbGFuZ3VhZ2U6amF2YXNjcmlwdCZzb3J0PXN0YXImb3JkZXI9ZGVzYyZwYWdlPTJcblxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgbGFuZ3VhZ2U6JHtsYW5nfWBcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgJ2Rlc2MnfWBcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YFxuICBjb25zb2xlLmxvZyhxdWVyeVN0cmluZyk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YFxuICB9LCBjdHgucmVxLCBjdHgucmVzKVxuXG4gIHJldHVybiB7XG4gICAgcmVwb3M6IHJlc3VsdC5kYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpIl19 */\n/*@ sourceURL=/mnt/d/code/nextjs/nextjs-project/pages/search.js */"));
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
//# sourceMappingURL=search.js.867f81d4b3fe06a34845.hot-update.js.map