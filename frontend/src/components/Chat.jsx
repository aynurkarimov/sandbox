import React from 'react'

function Chat({ socket, messages }) {
  return (
    <main>
      {!messages?.length ? <h5>No messages yet...</h5> : (
        messages.map(message => (
          <section key={message.msg + Date.now()} className="message">
            <div className="message__avatar" style={{ backgroundColor: `#${message.color}` }} />
            <span>{socket.id === message.id ? 'Me' : message.id}</span>
            <span>{message.msg}</span>
          </section>
        ))
      )}
    </main>
  )
}

export default Chat