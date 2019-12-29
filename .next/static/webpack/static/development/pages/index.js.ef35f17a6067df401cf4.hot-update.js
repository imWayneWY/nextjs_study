webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: cache, get, cacheArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheArray", function() { return cacheArray; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);


var REPO_CACHE = new lru_cache__WEBPACK_IMPORTED_MODULE_1___default.a({
  maxAge: 1000 * 60 * 60
});
function cache(repo) {
  var full_name = repo.full_name;
  REPO_CACHE.set(full_name, repo);
} // example: facebook/react

function get(full_name) {
  return REPO_CACHE.get(full_name);
}
function cacheArray(repos) {
  if (repos && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(repos)) {
    repos.forEach(function (repo) {
      return cache(repo);
    });
  }
}

/***/ })

})
//# sourceMappingURL=index.js.ef35f17a6067df401cf4.hot-update.js.map