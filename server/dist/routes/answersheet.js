'use strict';

var express = require('express');
var router = express.Router();
var answersheetDb = require('../db/answersheet');
var examDb = require('../db/exam');
var banjiDb = require('../db/class');

var treeDb = require('../db/tree');
var tree = require('../tree/tree-nedb')(treeDb);
var _ = require('lodash');

//查找卡号对应的学生
function findStudent(students, id) {
	return _.find(students, { id: id });
}

//未做error,catch处理，未来补上
//取得答题卡
router.get('/:examID/:studentID', function (req, res, next) {
	var examID = req.params.examID;
	var studentID = req.params.studentID;
	answersheetDb.findOne({ examID: examID, studentID: studentID }, function (err, answersheet) {
		if (answersheet) {
			//找到答题卡，直接返回。
			res.json(answersheet); //{questions:[qid,qid,qid...],answers:{q:a,q:a,...}}
			return;
		}
		//没找到答题卡。查找exam生成答题卡
		examDb.findOne({ _id: examID }, function (err, exam) {
			if (!exam) {
				res.status(404).end(); //没找到exam
				return;
			}
			//找到exam，根据paper_id找到paper数据
			tree.read_node(exam.paper_gid).then(function (paper) {
				var questions = paper._data.data.questions;
				var prices = paper._data.data.scores; //题目的分值，为了与学生得分区别，用price表示
				var shuffled_questions = _.shuffle(questions); //乱序
				console.log('group_questions', shuffled_questions);
				tree.read_nodes(shuffled_questions).then(function (nodes) {
					var group_questions = _.groupBy(nodes, function (obj) {
						return obj._data.type;
					});
					// console.log('group_questions',group_questions);
					var gq = group_questions;
					var ordered_questions = _.concat(gq['ks1/choice'] || [], gq['ks1/tf'] || [], gq['ks1/revise'] || [], gq['ks1/qa'] || []);
					// console.log('ordered_questions',ordered_questions);
					var ordered_questions_id = _.map(ordered_questions, '_id');
					// console.log('ordered_questions_id',ordered_questions_id);
					banjiDb.findOne({ "students.id": studentID }, function (err, banji) {
						if (!banji) {
							res.status(404).end();
							return;
						}
						var student = findStudent(banji.students, studentID);
						var answersheet = { examID: examID, examName: exam.name, studentName: student.name, studentID: studentID, questions: ordered_questions_id, answers: {}, prices: prices, begin: new Date().getTime() };
						answersheetDb.insert(answersheet, function (err, newAnswersheet) {
							res.json(newAnswersheet);
						});
					});
				});
			});
		});
	});
});

router.get('/:examID', function (req, res, next) {
	var examID = req.params.examID;
	answersheetDb.find({ examID: examID }, function (err, answersheets) {
		res.json(answersheets);
	});
});
module.exports = router;