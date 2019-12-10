import App, { Container } from 'next/app'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'

import Layout from '../components/Layout'

import testHoc from '../lib/withRedux'

class MyApp extends App {
  state = {
    context: 'value'
  }

  static async getInitialProps(ctx) {
    const { Component } = ctx
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
        </Provider>
        {/* <Component {...pageProps}/> */}
      </Container>
    )
  }
}

export default testHoc(MyApp)