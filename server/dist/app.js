'use strict';

require("babel-polyfill");

var express = require('express');
var app = express();
var logger = require('morgan');

var fs = require('bluebird').promisifyAll(require('fs-extra'));
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

//权限管理
var session = require('express-session');
app.use(session({ secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true }));
var auth = require('./auth');
auth(app);

//静态文件
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static(path.join(__dirname, '..', 'upload')));

//树数据库
var treeDb = require('./db/tree');
var tree = require('./tree/middleware/tree.js');
var uploadPath = path.join(__dirname, '..', 'upload');
fs.ensureDirSync(uploadPath);
var config = { nedb: treeDb, upload: uploadPath };
app.use('/_api', tree(config));

//rest db
var expressRestResource = require('express-rest-resource');
var nedb = require('nedb');
var classDb = require('./db/class');
var roomDb = require('./db/room');
var examDb = require('./db/exam');
var teacherDb = require('./db/teacher');
var answersheetDb = require('./db/answersheet');

app.use('/api/exam', expressRestResource({ db: examDb }));
app.use('/api/teacher', expressRestResource({ db: teacherDb }));
app.use('/api/class', expressRestResource({ db: classDb }));
app.use('/api/room', expressRestResource({ db: roomDb }));
app.use('/api/answersheet', expressRestResource({ db: answersheetDb }));

//考试信息
app.use('/exam', require('./routes/exam'));
//答题卡
app.use('/answersheet', require('./routes/answersheet'));
//过滤了答案的问题
app.use('/questions', require('./routes/questions'));
// //根据学号查找学生
app.use('/student', require('./routes/student'));
// //自动评分
app.use('/score', require('./routes/score'));
// //查分
app.use('/queryscore', require('./routes/query_score'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).end();
});

//socket.io
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.io = io;
require('./socket_handle')(app);

//读卡器
var cardReader = require('./card-reader/card-reader');
cardReader.on('card', function (msg) {
  console.log('received card', msg);
  var rooms = io.sockets.adapter.rooms;
  if (rooms && rooms[msg.readerID]) {
    io.to(msg.readerID).emit('card', msg); //定向发送到读卡器绑定的电脑
  } else {
      io.to('unbind').emit('card', msg); //广播到所有未绑定的电脑
    }
});

//start
server.listen(3000, function () {
  console.log('Kaoshi app listening on port 3000!');
});