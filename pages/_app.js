import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import Router from 'next/router'
import 'antd/dist/antd.css'

import Layout from '../components/Layout'

import testHoc from '../lib/withRedux'
import PageLoading from '../components/PageLoading'
import Link from 'next/link'

class MyApp extends App {
  state = {
    context: 'value',
    loading: false,
  }

  startLoading = () => {
    this.setState({loading: true})
  }

  stopLoading = () => {
    this.setState({loading: false})
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading)
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading)
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
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
        { this.state.loading ? <PageLoading /> : null }
        <Layout>
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/detail">
            <a>Detail</a>
          </Link>
          <Component {...pageProps}/>
        </Layout>
        </Provider>
        {/* <Component {...pageProps}/> */}
      </Container>
    )
  }
}

export default testHoc(MyApp)