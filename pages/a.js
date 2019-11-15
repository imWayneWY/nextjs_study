import { withRouter } from 'next/router'
import Link from 'next/link'
// import Head from 'next/head'
import Comp from '../components/comp'

const color = '#113366'

// const A = ({ router, name}) => <Comp>{router.query.id} {name}</Comp>
const A = ({ router, name }) => (
  <>
    <Link href="#aaa">
      <a className="link">
        a {router.query.id} {name}
      </a>
    </Link>
    <style jsx>{`
      a {
        color: blue
      }
      .link {
        color: ${color}
      }
    `}</style>
    {/* <style jsx global>{`
      a {
        color: yellow
      }
    `}</style> */}
  </>
)

A.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    setTimeout (() => {resolve({
      name: 'weiyan'
    })}, 1000)
  })
  return await promise
}
export default withRouter(A)