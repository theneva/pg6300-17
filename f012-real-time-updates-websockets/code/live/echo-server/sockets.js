const ws = require('ws');

exports.connect = httpServer => {
    const wsServer = new ws.Server({
        server: httpServer,
    });

    wsServer.on('connection', socket => {
        socket.send('Hello, sockets!');

        socket.on('message', text => {
            socket.send('Received: ' + text);
        });
    });
};
