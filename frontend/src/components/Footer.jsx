import React, { useState } from 'react'

function Footer({ socket }) {
  const [message, setMessage] = useState('');

  const onChange = ({ target: { value } }) => setMessage(value);

  const onSend = (event) => {
    event.preventDefault();

    socket.emit('post_message', { msg: message, id: socket.id });
    setMessage('');
  };

  return (
    <footer>
      <form>
        <input value={message} onChange={onChange} placeholder="Type a message..." />
        <button onClick={onSend}>Send</button>
      </form>
    </footer>
  )
}

export default Footer