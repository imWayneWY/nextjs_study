import Document, { Html, Head, Main, NextScript } from 'next/document'

function withLog(Comp) {
  return (props) => {
    console.log(props)
    return <Comp {...props} />
  }
}
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => withLog(App),
      enhanceComponment: Component => withLog(Component)
    })

    const props = await Document.getInitialProps(ctx)
    return {
      ...props
    }
  }
  render() {
    return(
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
