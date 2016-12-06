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
  saveUninitialized: true}));
var auth=require('./auth');
auth(app); 

//静态文件
app.use(express.static(path.join(__dirname, 'public')));

//树数据库
var treeDb = require('./db/tree');
var tree=require('./tree/middleware/tree.js');
var config={nedb:treeDb};
app.use('/_api', tree(config));

app.listen(3000, function () {
  console.log('Kaoshi app listening on port 3000!');
});