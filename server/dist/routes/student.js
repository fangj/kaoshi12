'use strict';

var express = require('express');
var router = express.Router();

var banjiDb = require('../db/class');
var _ = require('lodash');

//查找卡号对应的学生
function findStudent(students, id) {
	return _.find(students, { id: id });
}

//给出学号，返回学生信息
router.get('/:id', function (req, res, next) {
	var studentID = req.params.id;
	banjiDb.findOne({ "students.id": studentID }, function (err, banji) {
		if (!banji) {
			res.status(404).end();
			return;
		}
		var student = findStudent(banji.students, studentID);
		res.json(student);
	});
});

module.exports = router;