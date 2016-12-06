'use strict';

require("babel-polyfill");

var express = require('express');
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//权限管理
var session = require('express-session');
app.use(session({ secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true }));
var auth = require('./auth');
auth(app);

//静态文件
app.use(express.static(path.join(__dirname, 'public')));

//树数据库
var treeDb = require('./db/tree');
var tree = require('./tree/middleware/tree.js');
var config = { nedb: treeDb };
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function () {
  console.log('Kaoshi app listening on port 3000!');
});