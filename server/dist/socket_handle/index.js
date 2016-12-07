'use strict';

module.exports = function (app) {

  var io = app.io;
  var ipaddr = require('ipaddr.js');
  var kaochangDb = require('../db/room');
  var _ = require('lodash');

  function getReaderID(kaochang, browserIP) {
    return _.find(kaochang.desks, { browserIP: browserIP }).readerID;
  }

  function getIPV4(ip) {
    var addr = ipaddr.parse(ip);
    try {
      return addr.toIPv4Address().toString();
    } catch (e) {
      return "127.0.0.1";
    }
  }

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
    //取得浏览器端的IP
    var ip = socket.request.connection.remoteAddress;
    var browserIP = getIPV4(ip);

    //通过浏览器端IP查找对应的读卡器
    kaochangDb.findOne({ "desks.browserIP": browserIP }, function (err, kaochang) {
      if (kaochang) {
        //浏览器已经绑定到考场，将该浏览器加入room({readerid})
        var readerID = getReaderID(kaochang, browserIP);
        console.log('readerID', readerID);
        socket.join(readerID);
      } else {
        //浏览器没有绑定考场,将该浏览器加入room('unbind')
        socket.join('unbind');
      }
    });
    console.log('New connection from ' + browserIP);
    socket.emit('news', { hello: browserIP }); //用于测试客户端连接

    //绑定浏览器到readerID
    socket.on('bind', function (readerID) {
      socket.leave('unbind');
      socket.join(readerID);
    });
  }); //end connection

  app.post('/card', function (req, res) {
    // io.emit('news', { hello: "test" });//用于测试客户端连接
    var obj = req.body; //{readerID,cardID}
    console.log(obj);
    //检查readerid是否绑定，如果绑定，推送到room(readerid),如果没有绑定，推送到room('unbind')
    kaochangDb.findOne({ "desks.readerID": obj.readerID }, function (err, kaochang) {
      if (kaochang) {
        //如果绑定，推送到room(readerid)
        io.to(obj.readerID).emit('card', obj);
        res.end(obj.readerID); //test
      } else {
          //如果没有绑定，推送到room('unbind')
          io.to('unbind').emit('card', obj);
          res.end('unbind'); //test
        }
    });
    // res.end();
  });
}; //module end