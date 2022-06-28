const express = require('express');
const cors = require('cors');
const error = require('./middleware/error');
const root = require('./controllers/root');
const http = require("http");
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3001;

require('dotenv').config();

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
 console.log(`User Connected: ${socket.id}`); // quando conectar no front vai aparecer o id do user

  socket.on('send_mensage', (data) => {
      console.log(data);
      io.emit('send_mensage', data)
    }
  ); // recebe mensagens do front

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id); // e quando o user sair vai aparecer a mensagem
  });
});

app.use(cors());
app.use(root);
app.use(error);

// app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

server.listen(PORT, () => {
  console.log(`ouvindo a porta ${PORT}!`);
});