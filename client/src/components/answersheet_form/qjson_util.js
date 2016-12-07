function convert2json(exam,questions,scores,comments,answers,totalScore){
  var paper={};
  paper.name=exam.name;
  paper.totalScore=totalScore;
  const group_questions=_.groupBy(nodes,function(obj){return obj._data.type});
  _.keys(group_questions).map(qtype=>{
    console.log('convert2json',qtype)
    paper[qtype.replace('/','_')]=group_questions[qtype].map(qnode=>QJson(qnode,questions,scores,comments,answers))
  })//模板中不能出现/所以替换成_
  return paper;
}

function QJson(qnode,questions,scores,comments,answers){
  var qid=qnode._id;
  var score=scores[qid]||0;
  var comment=comments[qid]||"";
  var answer=answers[qid];
  const {type}=qnode._data;
  var qjson={};
  switch(type){
      case "ks1/choice":{qjson= QJsonChoice(qnode._data,answer,comment,score);break;}
      case "ks1/tf":{qjson=  QJsonTf(qnode._data,answer,comment,score);break;}
      case "ks1/qa":{qjson=  QJsonQa(qnode._data,answer,comment,score);break;}
      case "ks1/revise":{qjson=  QJsonRevise(qnode._data,answer,comment,score);break;}
  }
  if(qnode._link.children && qnode._link.children.length>0){
    qjson.imgs=qnode._link.children.map(gid=>({image:gid}))
  }
  return qjson;
}

function QJsonChoice(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents={};
  contents.question="[选择题] "+data.question;
  contents.answers=[];
  var correctAnswer="",studentAnswer="";
  data.answers=data.answers||[]
  for (var idx = 0; idx < data.answers.length; idx++) {
    var ans=data.answers[idx];
    var line="ABCDEFGHI"[idx]+". "+ans.answer;
    contents.answers[idx]={"choice":line};
    if(idx===answer){
      studentAnswer=studentAnswer+"ABCDEFGHI"[idx];
    }
    if(ans.ok){
      correctAnswer=correctAnswer+"ABCDEFGHI"[idx];
    }
  }
  contents.studentAnswer=studentAnswer;
  contents.correctAnswer=correctAnswer;
  contents.comment=comment;
  contents.score=score;

  return contents;
}

function QJsonTf(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents={};
  contents.question="[判断题] "+data.question;
  contents.studentAnswer=(answer?" ( ✓ )":" ( ✗ )");
  contents.correctAnswer=(data.ok?" ( ✓ )":" ( ✗ )");
  contents.comment=comment;
  contents.score=score;
  return contents;
}

function QJsonQa(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents={};
  contents.question="[问答题] "+data.question;
  contents.studentAnswer=answer;
  contents.correctAnswer=data.answer;
  contents.comment=comment;
  contents.score=score;
  return contents;
}

function QJsonRevise(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents={};
  contents.question="[改错题] "+data.question;
  contents.studentAnswer=answer;
  contents.correctAnswer=data.answer;
  contents.comment=comment;
  contents.score=score;
  return contents;
}

module.exports={
  convert2json
}