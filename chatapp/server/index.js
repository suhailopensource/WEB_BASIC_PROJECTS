// node server which will handle socket io connections
var PORT = 2000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT,function(){
  console.log('chat serevr running');
});

const io = require('socket.io')(2000, {
  cors: {
    origin: true, // true means to use any frontend.
  },
})

const users = {};

io.on('connection', socket => {
  socket.on('new-user-joined', myname => {
    users[socket.id] = myname;
    socket.broadcast.emit('user-joined', myname);
  });

  socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, myname: users[socket.id] })
  });
  socket.on('disconnect', message => {
    socket.broadcast.emit('left', users[socket.id]);
    delete users[socket.id];
  });
})


