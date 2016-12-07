/**
 * 把试卷内容转化为txt
 */
function convert2txt(exam,questions,scores,comments,answers,totalScore){
  var contents=[];
  contents.push(exam.name);
  contents.push("总分："+totalScore);
  questions.map(question=>{
    var qid=question._id;
    var score=scores[qid]||0;
    var comment=comments[qid]||"";
    var answer=answers[qid];
    var qtxt=QTxt(question,answer,comment,score);
    contents.push(qtxt+'\r\n得分：'+score+'\r\n批注：'+comment);
  })
  return contents.join("\r\n\r\n");
}

function QTxt(qnode,answer,comment,score){
  // console.log('QTxt',qnode);

  const {type}=qnode._data;
    switch(type){
        case "ks1/choice":return QTxtChoice(qnode._data,answer,comment,score);
        case "ks1/tf":return QTxtTf(qnode._data,answer,comment,score);
        case "ks1/qa":return QTxtQa(qnode._data,answer,comment,score);
        case "ks1/revise":return QTxtRevise(qnode._data,answer,comment,score);
    }
    return "";
}

function QTxtChoice(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents=[];
  contents.push("[选择题] "+data.question);
  var correctAnswer="";
  for (var idx = 0; idx < data.answers.length; idx++) {
    var ans=data.answers[idx];
    console.log(ans.answer)
    var line="ABCDEFGHI"[idx]+". "+ans.answer + ((idx===answer)?" (✓)":"");
    contents.push(line);
    if(ans.ok){
      correctAnswer=correctAnswer+"ABCDEFGHI"[idx];
    }
  }
  contents.push('正确答案：'+correctAnswer);
  return contents.join("\r\n");
}

function QTxtTf(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents=[];
  contents.push("[判断题] "+data.question+(answer?" ( ✓ )":" ( ✗ )"));
  contents.push('正确答案：'+(data.ok?" ( ✓ )":" ( ✗ )"));
  return contents.join("\r\n");
}

function QTxtQa(qdata,answer,comment,score) {
  const data=qdata.data;
  var contents=[];
  contents.push("[问答题] "+data.question);
  contents.push(answer);
  contents.push('参考答案：'+data.answer);
  return contents;
}

function QTxtRevise(qdata,answer,comment,score) {
  return "";
}

module.exports={
  convert2txt
}