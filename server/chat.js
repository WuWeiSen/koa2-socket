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

       // 1.新出行计划
      socket.on('cancelPlanEvent', function(data) {
        socket.broadcast.emit('cancelPlanEvent', {
          planId: 1,
          planNum: 'asdfsdf'
        })
      })

      // 2.新方案
      socket.on('newSchemeEvent', function(data) {
        socket.broadcast.emit('newSchemeEvent', {
          planId: 1,
          planNum: 'asdfsdf',
          schemeId: 1,
          schemeNum: 2
        })
      })

      // 3.方案聊天
      socket.on('chatEvent', function(data) {
        socket.broadcast.emit('chatEvent', {
          userId: 1, //消息发送人ID
          userName: 'liang', //发送人名称
          logo: null, //图标
          sendTime: Date.now(), //发送时间
          message: 'msg from tmc', //消息内容
          messageId: 1, //消息ID
          bussinessId: 896, //业务ID
          bussinessType: 1, //业务关联类型
          companyName: '腾邦国际', //公司名称
          bussinessNum: 'C001' //业务关联编号
        })
      })

      // 4.出行计划聊天
      socket.on('planChatEvent', function(data) {
        socket.broadcast.emit('planChatEvent', {
          logo: 826,
          userName: 'asdfsdf',
          isTc: true,
          sendTime: 1478076873762,
          message: 'new msg'
        })
      })

      // 5.满意支付方案
      socket.on('satisfactionSchemeEvent', function(data) {
        socket.broadcast.emit('satisfactionSchemeEvent', {
          planId: 1,
          planNum: 'C00001482',
          schemeId: '1',
          schemeNum: 'C00001482',
          createTime: Date.now()
        })
      })

      // 5.确认订单
      socket.on('confirmOrderEvent', function(data) {
        socket.broadcast.emit('confirmOrderEvent', {
          planId: 1,
          planNum: 'C00001482',
          orderId: '1',
          orderNum: 'C00001482',
          createTime: Date.now()
        })
      })

      // 6.不满意方案
      socket.on('unsatisfactionSchemeEvent', function(data) {
        socket.broadcast.emit('unsatisfactionSchemeEvent', {
          planId: 1,
          planNum: 'C00001482',
          schemeId: '1',
          schemeNum: 'C00001482',
          createTime: Date.now()
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
