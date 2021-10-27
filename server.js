// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/chat', (req, res) => {
//   res.sendFile(__dirname + '/suppport.html');
// });

// io.on('connection', (socket) => {
//   console.log('User Online');
  
//   socket.on('codeboard-message', (msg) => {
//     console.lg('message: ' + msg);
// 	socket.broadcast.emit('message-from-others', msg);
//   });s
  
// });

// var server_port = process.env.PORT || 3000;
// http.listen(server_port, () => {
//   console.log('listening on *:' + server_port);
// });



// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io")
// const io = new Server(server); 

// app.get('/', (req, res) => {
//     // res.send("<h1>Welcome To Bitoshi Support</h1>");
//     res.sendFile(__dirname + '/support.html'); 
// });

// var server_port = process.env.PORT || 3000
// server.listen(server_port);

// io.on("connection", (socket) =>{  
//     console.log('a user connected'); 
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// server.listen(3000, () => {
//     console.log('listening on *:3000');
// });
var http = require('http');
var fs = require('fs');
var path = require('path');
const APP_PORT = process.env.APP_PORT || 3000;
const app = http.createServer(requestHandler);

app.listen(APP_PORT);
console.log(`HTTP Server running at ${APP_PORT}`);

// Handles all http requests to the server
function requestHandler(request, response){
  console.log(`Received request for ${request.url}`)
  // append client to serve pages from that folder
  var filePath = './client' + request.url
  if(filePath == './client'){
    // serve index page on request
    filePath = '/client/chatpage.html'
  }
  var extname = String(path.extname(filePath)).toLowerCase()
  console.log(`Serving ${filePath}`)
  var mimeTypes = {
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.jpg':'image/jpg',
    '.png':'image/png',
    '.gif':'image/gif',
    '.svg':'image/svg+xml',
  } 

  var contentType = mimeTypes[extname] || 'application/octet-stream'
  fs.readFile(filePath, function (error, content){
    if(error){
      if(error.code == 'ENOENT'){
        fs.readFile('./client/404.html', function(error, content){
          response.writeHead(404, {'Content-Type': contentType})
          response.end(content, 'utf-8')
          alert('Damola')
        })
      } else {
        response.writeHead(500)
        response.end("Sorry there was an error" + error.code + '....\n')
      }
    } else {
      response.writeHead(200, {'content-Type': contentType})
      response.end(content, 'utf-8')
    }
  })
}

// Socket.io chat handling 
const io = require('socket.io')(app, {
  path: '/socket.io',
})

io.attach(app, {
  // includes local domain to avoid CORS error locally
 // configure it accordingly for production
  cors: {
    origin: 'http://localhost',
    methods: ['GET', 'POST'], 
    credentials: true,
    transports:['websocket', 'polling']
  },
  allowEI03:true,
})
e
io.on('connection', (socket) => {
  console.log('New Socket connected! >>', socket.id);
})