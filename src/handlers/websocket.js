var WebSocket = exports;
var sockjs = require('sockjs');
var config = require('../../config.json');

var chat = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.1.1/sockjs.min.js' });

chat.on('connection', function(conn) {
    conn.on('data', function(message) {
        conn.write("received " + message);
    });
    conn.on('close', function() {});
});

WebSocket.installHandlers = function(server){
	chat.installHandlers(server, {prefix: config.WEB_SOCKET_PREFIX});
}
