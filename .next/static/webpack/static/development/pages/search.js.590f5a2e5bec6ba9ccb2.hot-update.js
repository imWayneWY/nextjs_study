webpackHotUpdate("static/development/pages/search.js",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var github_base_url = 'https://api.github.com';

function requestGithub(_x, _x2, _x3, _x4) {
  return _requestGithub.apply(this, arguments);
}

function _requestGithub() {
  _requestGithub = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(method, url, data, headers) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios({
              method: method,
              url: "".concat(github_base_url).concat(url),
              data: data,
              headers: headers
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestGithub.apply(this, arguments);
}

var isServer = typeof window === 'undefined';

function request(_x5, _x6, _x7) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref, req, res) {
    var _ref$method, method, url, data, session, githubAuth, headers;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, url = _ref.url, data = _ref.data;

            if (url) {
              _context2.next = 3;
              break;
            }

            throw Error('url must provide');

          case 3:
            if (!isServer) {
              _context2.next = 13;
              break;
            }

            session = req.session;
            githubAuth = session.githubAuth || {};
            headers = {};

            if (githubAuth.access_token) {
              headers['Authorization'] = "".concat(githubAuth.token_type, " ").concat(githubAuth.access_token);
            }

            _context2.next = 10;
            return requestGithub(method, url, data, headers);

          case 10:
            return _context2.abrupt("return", _context2.sent);

          case 13:
            _context2.next = 15;
            return axios({
              method: method,
              url: "/github".concat(url),
              data: data
            });

          case 15:
            return _context2.abrupt("return", _context2.sent);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _request.apply(this, arguments);
}

module.exports = {
  request: request,
  requestGithub: requestGithub
};

/***/ })

})
//# sourceMappingURL=search.js.590f5a2e5bec6ba9ccb2.hot-update.js.map