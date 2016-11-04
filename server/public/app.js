(function() {
    window.socket = io('http://localhost:3000')
    var addBtn = document.querySelector('#add')
    var $input = document.querySelector('#name')
    var $userList = document.querySelector('#user-list')

    addBtn.addEventListener('click', addUser, false)

    socket.on('connect', function() {
      console.log('connect...')
    })

    socket.on('disconnect', function() {
      console.log('disconnect')
    })

    socket.on('user joined', function(data) {
      join(data)
    })

    socket.on('login', function(userList) {
      displayUserList(userList)
    })

    function addUser(evt) {
      var name = $input.value
      if (name) {
        socket.emit('new user', name)
      }
      $input.value = ''
    }

    function join(data) {
      var li = document.createElement('li')
      li.textContent = data
      $userList.appendChild(li)
    }

    function displayUserList(list) {
      var li
      var i = list.length
      var $fragment = document.createDocumentFragment()
      while (i--) {
        li = document.createElement('li')
        li.textContent = list[i]
        $fragment.appendChild(li)
      }
      $userList.appendChild($fragment)
    }
  })();
  (function() {
    var $btnWrap = document.querySelector('#btn-wrap')
    $btnWrap.addEventListener('click', function(evt) {
      var target = evt.target
      if(target.classList.contains('btnTest')) {
        var socketEvent = target.dataset.event
        socket.emit(socketEvent, socketEvent)
        console.log(socketEvent + '   done!')
      }
    })
  })()