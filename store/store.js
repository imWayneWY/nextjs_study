import { createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
  count: 0
}
const ADD = 'ADD'
function reducer(state = initialState, action) {
  console.log(state, action)
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + 1}
    default:
      return state
  }
}

const store = createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
)

// console.log(store.getState())
store.dispatch({type: 'ADD'})
// console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({type: 'ADD'})
export default store