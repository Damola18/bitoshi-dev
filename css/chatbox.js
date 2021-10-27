var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chatbox.html');
});

io.on('connection', (socket) => {
  console.log('User Online');
  
  socket.on('codeboard-message', (msg) => {
    console.log('message: ' + msg);
	socket.broadcast.emit('message-from-others', msg);
  });
  
});

var server_port = process.env.PORT || 3000;
http.listen(server_port, () => {
  console.log('listening on *:' + server_port);
});