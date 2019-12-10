import {useState, useEffect, useLayoutEffect, useReducer, useContext, useRef} from 'react'
import MyContext from '../../lib/my-context'

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

function MyCountFunc() {
  // const [count, setCount] = useState(0)

  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('weiyan')

  const context = useContext(MyContext)

  const inputRef = useRef()

  // useEffect(() => {
  //   const interVal = setInterval(() => {
  //     setCount(count + 1)
  //     // dispatchCount({ type: 'minus'})
  //   }, 1000)
  //   return () => clearInterval(interVal)
  // }, [count])
  // return <span>{count}</span>
  useLayoutEffect(() => {
    console.log('layout effect invoked')
    return () => {
      console.log('layout effect deteched')
    };
  }, [count])

  useEffect(() => {
    // console.log('effect invoked')
    console.log(inputRef)
    return () => {
      console.log('effect deteched')
    };
  }, [count])
  return (
    <div>
      <input ref={inputRef} value={name} onChange = {(e) => setName(e.target.value)} />
      <button onClick={() => dispatchCount({type: 'add'})}>{count}</button>
      <p>{context}</p>
    </div>
  )
}

export default MyCountFunc