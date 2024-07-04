const express = require("express");
const cors = require("cors");
const socketio = require("socket.io");
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*"
    }
});

app.use(cors());
io.on('connection', (socket) => {
    console.log("New client connected");

    const sendMessages = setInterval(() => {
        const content = {
            timestamp: Date.now(),
            message: "Hello from the server!"
        }
        socket.emit('message', content);
    }, 1000);

    socket.on('disconnect', () => {
        clearInterval(sendMessages);
        console.log("Client disconnected");
    });
});

const PORT = 8765;
server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
