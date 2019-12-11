const withCss = require('@zeit/next-css')
const config = require('./config')

const configs = {
  // 编译文件的输出目录
  disDir: 'dist',
  // 是否给每个路由生成Etag,做缓存验证,一般有其它部署Etag，这里可以关掉提升性能
  generateEtags: true,
  // 页面内容缓存配置,只用在本地开发时，所以影响不大
  onDemandEntries: {
    // 内容在内存中缓存的时长（ms）
    maxInactiveAge: 25 * 1000,
    // 同时缓存多少页面
    pagesBufferLength: 2,
  },
  // 在pages目录下哪种后缀的文件会被认为是页面
  pageExtensions: ['jsx', 'js'],
  // 配置buildId,对同一项目进行不同节点的部署时使用， 不常用
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID
    }

    // 返回null使用默认的unique id
    return null
  },

  // 下面的几个比较重要
  // 手动修改webpack config
  // github上搜索'zeit/next-plugins',然后找next-css
  webpack(config, options) {
    return config
  },
  // 修改webpackDevMiddleware配置
  // 具体用法搜索github
  webpackDevMiddleware: config => {
    return config
  },
  // 可以在页面上通过process.env.customKey 获取 value
  // 一般写域名配置，client key之类的
  env: {
    customKey: 'value',
  },
  // 下面两个通过 'next/config' 来读取
  // 只有在服务端渲染时才会获取的配置
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET,
  },
  // 在服务端和客户端渲染都可获取的配置
  publicRuntimeConfig: {
    staticFolder: '/static',
  }
}

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}


module.exports = withCss({
  publicRuntimeConfig: {
    GITHUB_OAUTH_URL: config.GITHUB_OAUTH_URL,
    OAUTH_URL: config.OAUTH_URL,
  }
})