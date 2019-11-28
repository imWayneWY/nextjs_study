const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')

// Judge if it is development ENV
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// wait page compiled
app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.keys = ['Wei yan develop Github App']
  const SESSION_CONFIG = {
    key: 'sid',
    store: {}
  }

  server.use(async (ctx, next) => {
    console.log(ctx.cookies.get('id'))

    // 获取用户数据
    // 比如调用 `model.getUserById(id)`

    ctx.session = ctx.session || {}
    ctx.session.user = {
      username: 'Weiyan',
      age: 33
    }
    await next()
  })

  router.get('/a/:id', async (ctx)=> {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id }
    })
    ctx.respond = false
  })

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
    ctx.cookies.set('id', 'userid:xxxxxxxx')
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})