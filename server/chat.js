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
