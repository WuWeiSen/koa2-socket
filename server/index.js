const koa = require('koa')
const app = new koa()
const socket = require('socket.io')

app.use(ctx => {
  ctx.body = 'hello koa2!'
})

const server = require('http').Server(app.callback())
const io = socket(server)
io.on('connection', socket => {
  console.log('sussess')
})
server.listen(3000)
