'use strict';

var express = require('express');
var router = express.Router();

var ipaddr = require('ipaddr.js');
var roomDb = require('../db/room');
var banjiDb = require('../db/class');
var examDb = require('../db/exam');
var _ = require('lodash');
var moment = require('moment');

function getIPV4(ip) {
	var addr = ipaddr.parse(ip);
	try {
		return addr.toIPv4Address().toString();
	} catch (e) {
		return "127.0.0.1";
	}
}

//查找在当前时间有效的考试
function findExam(exams) {
	var now = moment();
	return _(exams).find(function (exam) {
		var start = moment(exam.start);
		var end = moment(exam.end);
		return now.isBetween(start, end);
	});
}

//查找卡号对应的学生
function findStudent(students, cardID) {
	return _.find(students, { card: cardID });
}

//根据输入的(cardID,browserID)查找当前存在的考试，如果找到考试，则返回考试信息，
//否则给出合理的提示信息帮助配置
router.post('/', function (req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	var browserIP = getIPV4(ip);
	var obj = req.body; //{cardID,browserID}
	obj.browserIP = browserIP;
	//根据浏览器IP查询考场
	roomDb.findOne({ "desks.browserIP": browserIP }, function (err, room) {
		if (!room) {
			//如果没有找到考场，说明读卡器未绑定，提示客户端绑定读卡器
			obj.msg = 'bindReader';
			res.json(obj);
			return;
		} //否则，找到考场
		//查看学生卡是否绑定
		banjiDb.findOne({ "students.card": obj.cardID }, function (err, banji) {
			if (!banji) {
				//如果没有找到班级，说明学生卡未绑定，提示客户端绑定学生卡
				obj.msg = 'bindStudent';
				res.json(obj);
				return;
			} //否则，找到班级
			//查找学生信息
			var student = findStudent(banji.students, obj.cardID);
			//查看当前是否有考试
			examDb.find({ "room_id": room._id }, function (err, exams) {
				var exam = findExam(exams);
				if (!exam) {
					//如果没有找到考试，提示没有考试
					obj.msg = 'noexam';
					obj.studentID = student.id;
					res.json(obj);
					return;
				} //否则，找到考试
				//返回考试信息
				obj.msg = "exam";
				obj.exam = exam;
				obj.studentID = student.id;
				obj.studentName = student.name;
				obj.className = banji.name;
				res.json(obj);
				return;
			});
		});
	});
});

//给出考试id，返回考试信息
router.get("/:id", function (req, res, next) {
	var examID = req.params.id;
	examDb.findOne({ "_id": examID }, function (err, exam) {
		if (!exam) {
			res.status(404).end();
			return;
		}
		res.json(exam);
	});
});

//检查时间是否冲突,返回冲突的考试
//冲突判别算法，开始时间早于当前结束点，且结束时间迟于当前开始点。
router.post("/check", function (req, res, next) {
	var exam = req.body;
	examDb.findOne({ _id: { $ne: exam._id }, room_id: exam.room_id, start: { $lt: exam.end }, end: { $gt: exam.start } }, function (err, docs) {
		res.json(docs);
	});
});

module.exports = router;