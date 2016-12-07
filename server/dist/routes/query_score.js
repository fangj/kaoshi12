'use strict';

//查询考试分数
var express = require('express');
var router = express.Router();
var answersheetDb = require('../db/answersheet');
var examDb = require('../db/exam');
var _ = require('lodash');

/* 查询考试成绩 */
router.get('/:studentID', function (req, res, next) {
  var studentID = req.params.studentID;
  answersheetDb.find({ studentID: studentID }, function (err, docs) {
    res.json(docs);
  });
});

module.exports = router;