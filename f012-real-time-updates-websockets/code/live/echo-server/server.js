const app = require('express')();

const server = app.listen(3456, function () {
    console.log('Server listening on port ' + 3456);
});

require('./sockets').connect(server);
