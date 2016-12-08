'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.end('card'); //just test
});

module.exports = function (io) {
  //接收读卡信息的HTTP接口
  router.post('/', function (req, res) {
    var msg = req.body; //{readerID,cardID}
    console.log('received card(http)', msg);
    var rooms = io.sockets.adapter.rooms; //socketio的所有房间。不是考场
    if (rooms && rooms[msg.readerID]) {
      //每个读卡器绑定到一个房间，该绑定在socket_handle中完成
      io.to(msg.readerID).emit('card', msg); //定向发送到读卡器绑定的电脑
      res.end(msg.readerID); //test
    } else {
        io.to('unbind').emit('card', msg); //广播到所有未绑定的电脑
        res.end('unbind'); //test
      }
  });
  return router;
};