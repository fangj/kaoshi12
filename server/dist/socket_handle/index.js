'use strict';

module.exports = function (app) {

  var io = app.io;
  var ipaddr = require('ipaddr.js');
  var kaochangDb = require('../db/room');
  var _ = require('lodash');

  /**
   * 根据浏览器IP查找对于的读卡器ID
   * @param  {object} kaochang  考场
   * @param  {string} browserIP 浏览器IP
   * @return {desk}   readerID 读卡器ID
   */
  function getReaderID(kaochang, browserIP) {
    return _.find(kaochang.desks, { browserIP: browserIP }).readerID;
  }

  /**
   * 把ip转为IPV4格式
   * @param  {String} ip 可能是IPV6的IP
   * @return {string}    IPV4
   */
  function getIPV4(ip) {
    var addr = ipaddr.parse(ip);
    try {
      return addr.toIPv4Address().toString();
    } catch (e) {
      return "127.0.0.1";
    }
  }

  //当考试页面连接时
  io.on('connection', function (socket) {
    //取得浏览器端的IP
    var ip = socket.request.connection.remoteAddress;
    var browserIP = getIPV4(ip);

    //通过浏览器端IP查找对应的读卡器
    kaochangDb.findOne({ "desks.browserIP": browserIP }, function (err, kaochang) {
      if (kaochang) {
        //浏览器已经绑定到考场，将该浏览器加入room({readerid})
        var readerID = getReaderID(kaochang, browserIP);
        console.log('readerID', readerID);
        socket.join(readerID); //如果找到已登记的读卡器，则以加入读卡器ID房间
      } else {
          //浏览器没有绑定考场,将该浏览器加入room('unbind')
          socket.join('unbind'); //如果没找到已登记的读卡器,则加入'unbind'房间
        }
    });
    console.log('New connection from ' + browserIP);

    //绑定浏览器到readerID,
    //浏览器端知道自己对应的readerID后，可以发生bind事件来绑定到读卡器对应房间
    //但是目前浏览器端没有相应实现代码，目前重绑定需要通过刷新页面完成
    socket.on('bind', function (readerID) {
      socket.leave('unbind');
      socket.join(readerID);
    });
  }); //end connection
}; //module end