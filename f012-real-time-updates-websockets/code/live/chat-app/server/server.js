const ws = require('ws');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello!'));

const port = 1234;
const httpServer = app.listen(port, () => console.log(`listening on http://localhost:${port}`));

const wsServer = new ws.Server({
    server: httpServer,
});

let sockets = [];

wsServer.on('connection', (socket) => {
    sockets.push(socket)
    socket.send('Hello, there!');

    socket.on('close', () => {
        console.log('disconnected');
        sockets = sockets.filter(savedSocket => savedSocket !== socket);
    });

    socket.on('message', text => {
        sockets.forEach(socket => socket.send(text));
    });
});
