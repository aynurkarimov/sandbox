import React from 'react'

function Header({ socket, status }) {
  return (
    <header>
      <h1>Socket.IO Chat</h1>
      <span>Connection status is: <h4>{String(status)}</h4></span>
      <span>Your ID: <h4>{socket.id}</h4></span>
    </header>
  )
}

export default Header