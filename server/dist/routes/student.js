'use strict';

var express = require('express');
var router = express.Router();

var banjiDb = require('../db/class');
var Promise = require('bluebird');
banjiDb = Promise.promisifyAll(banjiDb);

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

//学生注册
router.post('/signup', function (req, res, next) {
	var _this = this;

	// console.log(req.body)//{banjiName:'aaa', studentID: 'ccc@ccc', password: 'ccc' }
	var student = { name: req.body.studentName, id: req.body.studentID, password: req.body.password };
	var log = console.log;
	(function _callee() {
		var banji;
		return regeneratorRuntime.async(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return regeneratorRuntime.awrap(banjiDb.findOneAsync({ name: req.body.banjiName }));

					case 2:
						banji = _context.sent;

						if (banji) {
							_context.next = 7;
							break;
						}

						res.redirect('/zhuce.html'); //如果班级不正确，仍然回到注册页
						_context.next = 10;
						break;

					case 7:
						_context.next = 9;
						return regeneratorRuntime.awrap(banjiDb.updateAsync({ _id: banji._id }, { $push: { students: student } }, {}));

					case 9:
						res.redirect('/denglu.html'); //如果班级不正确，仍然回到注册页

					case 10:
					case 'end':
						return _context.stop();
				}
			}
		}, null, _this);
	})();
});

//学生登录
router.post('/login', function (req, res, next) {
	var _this2 = this;

	console.log(req.body);
	var log = console.log;
	var studentID = req.body.studentID;
	var password = req.body.password;
	(function _callee2() {
		var banji, student;
		return regeneratorRuntime.async(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return regeneratorRuntime.awrap(banjiDb.findOneAsync({ "students.id": studentID }));

					case 2:
						banji = _context2.sent;

						if (!banji) {
							res.status(400).end();
						}
						student = findStudent(banji.students, studentID);

						if (student.password == password) {
							res.end('ok');
						} else {
							res.status(400).end();
						}

					case 6:
					case 'end':
						return _context2.stop();
				}
			}
		}, null, _this2);
	})();
});

module.exports = router;