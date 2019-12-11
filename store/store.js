import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
// const initialState = {
//   count: 0
// }
const userInitialState = {
  user: {}
  // username: 'weiyan'
}
// const ADD = 'ADD'

const LOGOUT = 'LOGOUT'

// function counterReducer(state = initialState, action) {
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

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGOUT: {
      return {}
    }
    default:
      return state
  }
}

const allReducers = combineReducers({
  // counter: counterReducer,
  user: userReducer,
})


// action creators

export function logout() {
  return dispatch => {
    axios.post('/logout')
      .then(resp=>{
        if (resp.status === 200) {
          dispatch({
            type: LOGOUT
          })
        } else {
          console.log('logout failed', resp)
        }
      }).catch(err => {
        console.log('logout failed', err)
      })
  }
}

// export function add(num) {
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

export default function initializeStore(state){
  const store = createStore(
    allReducers,
    // {
    //   counter: initialState,
    //   user: userInitialState,
    // },
    Object.assign({}, {
      // counter: initialState,
      user: userInitialState,
    }, state),
    composeWithDevTools(applyMiddleware(ReduxThunk)),
  )
  return store
}