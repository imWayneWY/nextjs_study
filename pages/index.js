// import '../test.css'
import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux'

// import store from '../store/store'
import { add } from '../store/store'

const Index = ({ counter, username, rename, add }) => {
  function gotoTestB() {
    // Router.push('/test/b')
    Router.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    }, '/test/b/2')
  }
  return (
    <>
      <span>Count: {counter}</span>
      <a>UserName: {username}</a>
      <input value={username} onChange={(e) => rename(e.target.value)} />
      <button onClick={() => {add(counter)}}>do add</button>
    </>
  )
}

Index.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch(add(2))
  // console.log(reduxStroe)
  return {}
}
export default connect(function mapStateToProps(state){
  return {
    counter: state.counter.count,
    username: state.user.username,
  }
}, function mapDispatchToProps(dispatch){
  return {
    add: (num) => dispatch({ type: 'ADD', num}),
    rename: (name) => dispatch({type: 'UPDATE_USERNAME', name})
  }
})(Index)
