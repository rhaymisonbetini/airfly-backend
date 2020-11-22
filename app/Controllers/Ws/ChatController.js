'use strict'

const Ws = use('Ws')

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }


  onMessage (message) {
    this.socket.broadcastToAll('message', message)
    console.log(message)
  }

  // onClose () {
    
  // }

  // onError () {
  // }

}

module.exports = ChatController
