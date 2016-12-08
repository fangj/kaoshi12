'use strict';

var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs-extra');
var path = require('path');
var upload = multer({ dest: path.join(__dirname, "..", "..", "upload") });
var imgDb = require('../db/img');

//上传图片用的数据库
//文件保存到/upload
//这里存放文件名
//一个gid下可以放多个文件
router.post('/:gid', upload.single('file'), function (req, res, next) {
  // logger.debug("uploaded file",req.file);
  var fpath = req.file.path + path.extname(req.file.originalname); //加上扩展名
  fs.move(req.file.path, fpath, function () {
    var fname = req.file.filename + path.extname(req.file.originalname);
    var gid = req.params.gid;
    imgDb.update({ _id: gid }, { $push: { imgs: fname } }, { upsert: true }, function () {
      res.end(fname);
    });
  });
});

router.delete('/:gid/:fname', function (req, res, next) {
  var gid = req.params.gid;
  var fname = req.params.fname;
  imgDb.update({ _id: gid }, { $pull: { imgs: fname } }, {}, function () {
    res.end(fname);
  });
});

module.exports = router;