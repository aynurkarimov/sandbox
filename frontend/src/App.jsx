import { useEffect, useState } from "react";
import io from 'socket.io-client';

import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Header from './components/Header';

const socket = io.connect('http://localhost:3001');

function App() {
  const [isConnected, setConnected] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => setConnected(true))
    socket.on('brocast_msg', (message) => setMessages(prevMessages => [...prevMessages, message]));

    return () => {
      socket.off('connect');
      socket.off('brocast_msg');
    }
  }, []);

  return (
    <div className="app"> 
      <Header status={isConnected} socket={socket}  />
      <Chat messages={messages} socket={socket} />
      <Footer socket={socket} />
    </div>
  );
}

export default App;
