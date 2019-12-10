webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);





 // const initialState = {
//   count: 0
// }

var userInitialState = {} // username: 'weiyan'
// const ADD = 'ADD'
;
var LOGOUT = 'LOGOUT'; // function counterReducer(state = initialState, action) {
//   console.log(state, action)
//   switch (action.type) {
//     case ADD:
//       return {count: state.count + (action.num || 1)}
//     default:
//       return state
//   }
// }
// const UPDATE_USERNAME = 'UPDATE_USERNAME'
// function userReducer(state = userInitialState, action) {
//   switch (action.type) {
//     case UPDATE_USERNAME:
//       return {
//         ...state,
//         username: action.name,
//       }
//     default:
//       return state
//   }
// }

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOGOUT:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          user: {}
        });
      }

    default:
      return state;
  }
}

var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  // counter: counterReducer,
  user: userReducer
}); // action creators

function logout() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/logout').then(function (resp) {
      if (resp.status === 200) {
        dispatch({
          type: LOGOUT
        });
      } else {
        console.log('logout failed', resp);
      }
    }).catch(function (err) {
      console.log('logout failed', err);
    });
  };
} // export function add(num) {
//   return {
//     type: ADD,
//     num,
//   }
// }
// export function addAsync(num) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add(num), 1000)
//     })
//   }
// }

function initializeStore(state) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(allReducers, // {
  //   counter: initialState,
  //   user: userInitialState,
  // },
  _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, {
    // counter: initialState,
    user: userInitialState
  }, state), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.0d0567950aec220d0e2b.hot-update.js.map