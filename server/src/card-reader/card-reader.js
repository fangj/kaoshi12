/**
 * 读卡器服务
 * 读卡器开启UDP服务
 * 收到读卡信息时会发射card事件
 * card数据格式：{"cardID": "84757077", "readerID": "192.168.3.206"}
 * 接收者应用cardReader.on('card',function (msg){})来接收card事件数据
 */
var util=require('util');
var EventEmitter=require('events').EventEmitter;
var parse=require('./parser').parse;
var M=require('./message');
var dgram = require('dgram');
var server;//是server也是client

var Server=function(){
  var that=this;
  server = dgram.createSocket('udp4');
  var PORT = 1234;
  var HOST = '0.0.0.0';
  server.bind(PORT, HOST);
  server.on('listening', function () {
      var address = server.address();
      console.log('Card-Reader Server listening on ' + address.address + ":" + address.port);
  });
  server.on('message', function (message, remote) {
      var jmessage=message.toJSON();
      var msg=parse(jmessage.data);
      if(msg.type=="cr/card"){
        send(M.beep(),remote.address);
        var data=msg.data;
        data.readerID=remote.address;
        that.emit('card',data);
      }
  });
  server.on('error',()=>server.close());
};

function send(message,host){
  var PORT = 1234;
  server.send(message, 0, message.length, PORT, host, function(err, bytes) {
      if (err) {
        console.log(err);
      }
  });
}

util.inherits(Server,EventEmitter);
var s=new Server();
module.exports=s;