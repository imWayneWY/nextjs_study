const Koa = require('koa')
const next = require('next')

// Judge if it is development ENV
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// wait page compiled
app.prepare().then(() => {
  const server = new Koa()
  
  server.use(async (ctx, next) => {
    
  })
})