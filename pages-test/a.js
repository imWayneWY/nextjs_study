import { withRouter } from 'next/router'
import getConfig from 'next/config'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
// import moment from 'moment'
// import Comp from '../components/comp'

const Comp = dynamic(import('../components/comp'))

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`
const color = '#113366'

// const A = ({ router, name}) => <Comp>{router.query.id} {name}</Comp>
const A = ({ router, name, time }) => {
  console.log(serverRuntimeConfig, publicRuntimeConfig)
  return (
    <>
      <Title>This is Title {time}</Title>
      <Comp />
      <Link href="#aaa">
        <a className="link">
          a {router.query.id} {name} {process.env.customKey}
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
}
A.getInitialProps = async ctx => {
  const moment = await import('moment')

  const promise = new Promise((resolve) => {
    setTimeout (() => {resolve({
      name: 'weiyan',
      time: moment.default(Date.now() - 60 * 1000).fromNow()
    })}, 1000)
  })
  return await promise
}
export default withRouter(A)