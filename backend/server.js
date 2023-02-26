const randomColor = require('./utils/randomColor');
const userColors = require('./utils/userColors');

const io = require('socket.io')(3001, {
  cors: { origin: ['http://localhost:3000'] }
});

const postMessage = (message, socket) => {
  const { msg, id } = message;

  if (userColors[id]) {
    socket.emit("brocast_msg", { msg, id, color: userColors[id] });
    socket.broadcast.emit("brocast_msg", { msg, id, color: userColors[id] });
  } else {
    const color = randomColor();
  
    socket.emit("brocast_msg", { msg, id, color: color });
    socket.broadcast.emit("brocast_msg", { msg, id, color: color });
    userColors[id] = color;
  }
}

io.on('connection', (socket) => {
  socket.on('post_message', (message) => postMessage(message, socket));
})