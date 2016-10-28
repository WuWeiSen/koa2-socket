const koa = require('koa')
const serve = require('koa-static')
const app = new koa()
const socket = require('socket.io')
const path = require('path')

app.use(async(ctx, next) => {
  await next()
  if (ctx.body || !ctx.idempotent) return
  ctx.redirect('/404.html')
})

app.use(serve(path.join(__dirname, '/public')))

const server = require('http').Server(app.callback())
const io = socket(server)
io.on('connection', socket => {
  console.log('sussess')
})
server.listen(3000)
