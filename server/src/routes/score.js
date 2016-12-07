var express = require('express');
var router = express.Router();
var treeDb = require('../db/tree');
var tree = require('../tree/tree-nedb')(treeDb);
var answersheetDb = require('../db/answersheet');
var examDb = require('../db/exam');
var _=require('lodash');

/* GET home page. */
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

function updateAnswerScores(query,answersheetScores){
    var totalScore=_.sum(_.values(answersheetScores));
	answersheetDb.update(query,  {$set: { scores: answersheetScores,totalScore:totalScore }}, {});
}


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

function getNodeScore(qnode,answer,score) {
	return isCorrect(qnode,answer)?score:0;
}

function isCorrect(qnode,answer) {
	var data=qnode._data.data;
	switch(qnode._data.type){
		case "ks1/tf":return isCorrectTf(data,answer);
		case "ks1/choice":return isCorrectChoice(data,answer);
		default :return false;
	}
}

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

function isCorrectTf(data,answer){
  return data.ok==answer;
}
module.exports = router;
