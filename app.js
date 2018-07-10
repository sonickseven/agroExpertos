var io = require('socket.io'), http=require('http'),util = require('util'), sk=require('./sockets/noReal'),
    path = require('path'), rt=require('./routes/index');

var server=http.createServer(rt.server);
server.listen(3001);
var ws=io.listen(server);

var notific=ws.of('/noReal').on('connection', sk.noReal);
// var historialAndchat=ws.of('/HistChat').on('connection', skn.historiChat);