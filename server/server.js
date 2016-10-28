import koa from 'koa'
import serve from 'koa-static'
import socket from 'socket.io'
import path from 'path'
import ChatModule from './chat'

const app = new koa()
let server, io
app.use(async(ctx, next) => {
  await next()
  if (ctx.body || !ctx.idempotent) return
  ctx.redirect('/404.html')
})
app.use(serve(path.join(__dirname, '/public')))
server = require('http').Server(app.callback())
io = socket(server)
server.listen(3000)

new ChatModule(io)
