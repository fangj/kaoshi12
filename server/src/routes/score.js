var express = require('express');
var router = express.Router();
var treeDb = require('../db/tree');
var tree = require('../tree/tree-nedb')(treeDb);
var answersheetDb = require('../db/answersheet');
var examDb = require('../db/exam');
var _=require('lodash');

//对答题卡进行判分并返回结果
router.get('/:answersheetID', function(req, res, next) {
	var answersheetID=req.params.answersheetID;
  	score(answersheetID,function(err,theScore){
  		if(err){
  			return res.status(500).end()
  		}else{
  			return res.json(theScore);
  		}
  	})
});

/**
 * 给出答题卡id，对答题卡进行判分
 * @param  {string}   answersheetID 答题卡id
 * @param  {Function} cb(null,answersheetScores) 回调得分
 */
function score(answersheetID,cb){
	answersheetDb.findOne({_id:answersheetID},function(err,answersheet){
		if(err||!answersheet){cb(err)}
		examDb.findOne({_id:answersheet.examID},function(err,exam){
			if(err||!exam){cb(err)}
			tree.read_nodes(answersheet.questions).then(questions=>{
				tree.read_node(exam.paper_gid).then(paperNode=>{
					var scores=paperNode._data.data.scores;
					var answers=answersheet.answers;
					var answersheetScores=scoreAnswersheet(questions,answers,scores);
					updateAnswerScores({_id:answersheetID},answersheetScores);
					cb(null,answersheetScores);
				})
			})
		})
	})
}

//更新答题卡的各题得分和总分
function updateAnswerScores(query,answersheetScores){
    var totalScore=_.sum(_.values(answersheetScores));
	answersheetDb.update(query,  {$set: { scores: answersheetScores,totalScore:totalScore }}, {});
}

/**
 * 对答题卡进行评分
 * @param  {[object]} questions 题目
 * @param  {[object]} answers   学生答案
 * @param  {[number]} scores    题目分值
 * @return {object}   answersheetScores {qid:score}得分
 */
function scoreAnswersheet(questions,answers,scores){
	var answersheetScores={};
	for (var i = questions.length - 1; i >= 0; i--) {
		var qnode=questions[i];
		var qid=qnode._id;
		var qscore=getNodeScore(qnode,answers[qid],scores[qid]);
		answersheetScores[qid]=qscore;
	}
	return answersheetScores;
}

//取得答题分散，错误为0分，正确为题目分值
function getNodeScore(qnode,answer,score) {
	return isCorrect(qnode,answer)?score:0;
}

//判断题目是否答对
function isCorrect(qnode,answer) {
	var data=qnode._data.data;
	switch(qnode._data.type){
		case "ks1/tf":return isCorrectTf(data,answer);
		case "ks1/choice":return isCorrectChoice(data,answer);
		default :return false;
	}
}

//选择题是否答对
function isCorrectChoice(data,answer){
	console.log('isCorrectChoice',data,answer);
  for (var idx = 0; idx < data.answers.length; idx++) {
    var ans=data.answers[idx];
    if((ans.ok && idx!==answer)||(!ans.ok && idx===answer))
      {console.log(ans,ans.ok,idx,answer);
      	return false;
      }
  }
  return true;
}
//判断题是否答对
function isCorrectTf(data,answer){
  return data.ok==answer;
}
module.exports = router;
