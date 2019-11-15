import { withRouter } from 'next/router'
// import Head from 'next/head'
import Comp from '../components/comp'

const A = ({ router, name}) => <Comp>{router.query.id} {name}</Comp>

A.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    setTimeout (() => {resolve({
      name: 'weiyan'
    })}, 1000)
  })
  return await promise
}
export default withRouter(A)