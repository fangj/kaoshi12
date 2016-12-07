'use strict';

var express = require('express');
var router = express.Router();

/* 接收读卡器数据 */
router.get('/', function (req, res, next) {
  res.end('card');
});

module.exports = router;