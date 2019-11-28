const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const auth = require('./server/auth')

const RedisSessionStore = require('./server/session-store')

// Judge if it is development ENV
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// 创建redis client
const redis = new Redis()

// wait page compiled
app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.keys = ['Wei yan develop Github App']
  const SESSION_CONFIG = {
    key: 'sid',
    // maxAge: 10 * 1000,   // session 时间
    store: new RedisSessionStore(redis),
  }

  server.use(session(SESSION_CONFIG, server))

  // 配置处理github OAuth的登录
  auth(server)

  // server.use(async (ctx, next) => {
  //   // console.log(ctx.cookies.get('id'))

  //   // // 获取用户数据
  //   // // 比如调用 `model.getUserById(id)`

  //   // ctx.session = ctx.session || {}
  //   // ctx.session.user = {
  //   //   username: 'Weiyan',
  //   //   age: 33
  //   // }

  //   console.log(ctx.session.user)
  //   // }

  //   await next()
  // })

  router.get('/a/:id', async (ctx)=> {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id }
    })
    ctx.respond = false
  })

  router.get('/api/user/info', async(ctx, next) => {
    const user = ctx.session.userInfo
    if (!user) {
      ctx.status = 401
      ctx.body = 'Need Login'
    } else {
      ctx.body = user
      ctx.set('Content-type', 'application/json')
    }
  })

  // router.get('/set/user', async ctx => {
  //   ctx.session.user = {
  //     name: 'weiyan',
  //     age: 33,
  //   }
  //   ctx.body = 'set session success'
  // })

  // router.get('/delete/user', async ctx => {
  //   ctx.session = null
  //   ctx.body = 'delete session success'
  // })

  // router.get('/test/:id', (ctx) => {
  //   // ctx.body = `<p>request /test ${ctx.params.id}</p>`
  //   ctx.body = { success: true }
  //   ctx.set('Content-Type', 'application/json')
  // })

  // server.use(async (ctx, next) => {
  //   // const path = ctx.path
  //   // const method = ctx.method
  //   // ctx.body = `<span>Koa Render method: ${method} path: ${path}</span>`
  //   await next()
  // })

  // server.use(router.routes())

  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Koa Render</span>'
  //   await next()
  // })
  server.use(router.routes())
  server.use(async (ctx, next) => {
    // ctx.cookies.set('id', 'userid:xxxxxxxx')
    await handle(ctx.req, ctx.res)

    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})