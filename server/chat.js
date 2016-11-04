let userList = []
export default class Chat {
  constructor(io) {
    this.io = io
    this.init()
  }
  init() {
    this.io.on('connection', socket => {
      socket.emit('login', userList)
      this.addUser(socket)

      // 1.新出行计划
      socket.on('newPlanEvent', function(data) {
        socket.broadcast.emit('newPlanEvent', {
          planId: 1,
          planNum: 'asdfsdf'
        })
      })

      // 2.新方案
      socket.on('newSchemeEvent', function(data) {
        socket.broadcast.emit('newSchemeEvent', {
          planId: 1,
          planNum: 'asdfsdf'
        })
      })

      // 3.方案聊天
      socket.on('schemeChatEvent', function(data) {
        socket.broadcast.emit('schemeChatEvent', {
          logo: 1,
          userName: 'asdfsdf',
          isTc: true,
          sendTime: 1478076873762,
          message: 'new msg'
        })
      })

      // 4.出行计划聊天
      socket.on('planChatEvent', function(data) {

      })

      // 5.满意支付方案
      socket.on('satisfactionSchemeEvent', function(data) {
        socket.broadcast.emit('satisfactionSchemeEvent', {
          logo: 1,
          userName: 'asdfsdf',
          isTc: true,
          sendTime: 1478076873762,
          message: 'new msg'
        })
      })

      // 6.不满意方案
      socket.on('unsatisfactionSchemeEvent', function(data) {
        socket.broadcast.emit('unsatisfactionSchemeEvent', {
          logo: 1,
          userName: 'asdfsdf',
          isTc: true,
          sendTime: 1478076873762,
          message: 'new msg'
        })
      })

      // 7.订单支付
      socket.on('payOrderEvent', function(data) {
        socket.broadcast.emit('payOrderEvent', {
          logo: 1,
          userName: 'asdfsdf',
          isTc: true,
          sendTime: 1478076873762,
          message: 'new msg'
        })
      })

      // 7.订单支付
      socket.on('applyChangeOrderEvent', function(data) {
        socket.broadcast.emit('applyChangeOrderEvent', {
          logo: 1,
          userName: 'asdfsdf',
          isTc: true,
          sendTime: 1478076873762,
          message: 'new msg'
        })
      })
    })
    this.io.on('disconnect', socket => {
      console.log('dis')
      socket.disconnect()
    })
  }
  addUser(socket) {
    socket.on('new user', (data) => {
      console.log(data)
      userList.push(data)
      socket.broadcast.emit('user joined', data)
    })
  }
}
