require('./AnswersheetForm.less');
var agent = require('superagent-promise')(require('superagent'),Promise);
const tree=require('../../tree/tree-cache')('_api');
import {Panel,Grid,Row,Col,Button,ButtonToolbar,ListGroup,ListGroupItem}from 'react-bootstrap';
var _=require('lodash');
import Reader from "../reader";
import Imageviewer from "../imageviewer";

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // return new Blob([ia], {type:mimeString});
    return ia;

}

window.imgs={};//暴露给全局
window.imgsSize={};//暴露给全局
function getImgBlob(obj){ //收集图片到imgs中
  var imgID=obj.gid;
  var img = document.getElementById(imgID),
  canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d');
  var imgBlob;

  canvas.width=img.width;
  canvas.height=img.height;
  ctx.drawImage(img,0,0,img.width,img.height);
  var dataURL = canvas.toDataURL();
  imgBlob=dataURItoBlob(dataURL);
  imgs[imgID]=imgBlob;
  imgsSize[imgID]=[obj.w,obj.h];
  canvas=null;
  console.log(imgs,imgsSize);
}
            


const QS=(props)=><div style={{paddingTop:"20px"}}>
      <Col xs={11}>
        <Q {...props}/>
        <textarea className="form-control" rows="3" placeholder="批注"
        defaultValue={props.comment||''}
        onChange={(e)=>{PubSub.publish('comment.change',{gid:props.node._gid,comment:e.target.value})}}
         />
      </Col>
      <Col xs={1}><input type="number"  min="0" max="100" step="1" 
      placeholder="得分" value={props.score} 
      onChange={(e)=>{PubSub.publish('score.change',{gid:props.node._gid,score:Number(e.target.value)})}}
      style={{padding:"8px",width:"50px"}}/></Col>
      </div>;

const Q=(props)=>{
    const {node}=props;
    const {type}=node._data;
    switch(type){
        case "ks1/choice":return <Qchoice {...props}/>
        case "ks1/tf":return <Qtf {...props}/>
        case "ks1/qa":return <Qqa {...props}/>
        case "ks1/revise":return <Qrevise {...props}/>
    }
    return null;
}
//阅卷
const Qchoice=({node,answer})=>{
    const data=node._data.data;
    const correct=isCorrectChoice(data,answer);
    return <Panel header={"[选择题] "+data.question}  collapsible  defaultExpanded
            bsStyle={correct?"success":"danger"}>
            <Reader view={Imageviewer} gid={node._gid} level={1}/>
      <ListGroup fill>
      {data.answers.map((ans,idx)=><ListGroupItem key={idx} >
        <div>{"ABCDEFGHI"[idx]+". "+ans.answer+"  "+
        (ans.ok?" ✓ ":" ")}
       {(answer===idx?<CheckSign/>:null)}
      </div>
        </ListGroupItem>)}
      </ListGroup>
    </Panel>
}
const CheckSign=(props)=>{
  return <span style={{fontSize:"1.4em",color:"SteelBlue"}}>✓</span>
}
const CrossSign=(props)=>{
  return <span style={{fontSize:"1.4em",color:"SteelBlue"}}>✗</span>;
}
//阅卷
const Qqa=({node,answer})=>{
  const data=node._data.data;
  var ans=answer||"";
  return <Panel header={"[问答题] "+data.question}  collapsible  defaultExpanded>
          <Reader view={Imageviewer} gid={node._gid} level={1}/>
              <div style={{fontSize:"1.4em",color:"SteelBlue"}}>{ans}</div>
      </Panel>
}

//阅卷
const Qtf=({node,answer})=>{
  const data=node._data.data;
  const correct=isCorrectTf(data,answer);
  return <Panel collapsible  defaultExpanded
      header={"[判断题] "+data.question+" "+(data.ok?" ( ✓ )":" ( ✗ )")} bsStyle={correct?"success":"danger"}>
      <Reader view={Imageviewer} gid={node._gid} level={1}/>
      {answer===undefined?null:(answer?<CheckSign/>:<CrossSign/>)}
      </Panel>;
};

//阅卷
const Qrevise=({node,answer})=>{
  const data=node._data.data;
  var ans=answer||"";
  return <Panel header={"[问答题] "+data.question}  collapsible  defaultExpanded>
              <h4>改错内容</h4>
              <pre style={{color:"SteelBlue"}}>{ans}</pre>
              <h4>参考答案</h4>
              <pre>{data.answer}</pre>

      </Panel>
}

function isCorrectChoice(data,answer){
  data.answers=data.answers||[];
  for (var idx = 0; idx < data.answers.length; idx++) {
    var ans=data.answers[idx];
    if((ans.ok && idx!==answer)||(!ans.ok && idx===answer))
      return false;
  }
  return true;
}

function isCorrectTf(data,answer){
  return data.ok==answer;
}



function convert2txt(exam,questions,scores,comments,answers,totalScore){
  var contents=[];
  contents.push(exam.name);
  contents.push("总分："+totalScore);
  questions.map(question=>{
    var qid=question._gid;
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
  var qid=qnode._gid;
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

class AnswersheetForm extends React.Component {

    constructor(props) {
        super(props);
        const answersheet=props.data;
        this.state = {
            scores:answersheet.scores||{},
            totalScore:answersheet.totalScore||0,
            comments:answersheet.comments||{}
        };
    }
    //收集图片放到this.imgs中
    collectImage(questions){
      // var children=questions.map(qnode=> qnode._link.children )
      // var img_gids=_.flatten(children);
      // console.log("img_gids",img_gids);//imageviewer中图片的id与对应节点的gid相同，以便采集图片
      // img_gids.map(imgID=>getImgBlob(imgID))
      function mysubscriber(msg,obj){
        console.log(msg,obj) 
        getImgBlob(obj);
      }
      console.log('subscribe:img-load')
      PubSub.subscribe('img-load',mysubscriber);
    } 

    render() {
        let me = this;
        const {exam,student,questions}=this.state;
        const answersheet=this.props.data;
        const {answers}=answersheet;
        const {scores,totalScore,comments}=this.state;
        //id="printButton" 导出按钮
        //id='forPrint' 要导出的内容
        //导出功能 参考 https://github.com/evidenceprime/html-docx-js/blob/master/test/sample.html
        if(exam&&student&&questions){   
            this.collectImage(questions); 
            return (
                <div className='pad'>
                  <ButtonToolbar style={{textAlign:'right'}}>
                      <Button bsStyle="success" onClick={this.update.bind(this)}>保存</Button>
                      <Button bsStyle="danger" onClick={this.remove.bind(this)}>删除</Button>
                      <Button bsStyle="info" id="printButton" onClick={this.saveDocx.bind(this)}>导出</Button>
                    </ButtonToolbar>
                  <div style={{clear:"both",paddingTop:"15px"}}></div>
                  <div id='forPrint'>
                    <Panel>{`${exam.name}  ${student.name} ${student.id}`}
                    <div style={{float:"right"}}>总分 {totalScore}</div>
                    </Panel>
                    <Grid fluid>{_.map(questions,(node=>
                      <Row key={node._gid} className='no-gutter'>
                        <QS node={node} score={scores[node._gid]||0} comment={comments[node._gid]||''} answer={answers[node._gid]}/>
                      </Row>))}
                    </Grid>
                  </div>
                  </div>
            );
        }else{
            return null;
        }
    }

    saveDoc(){
      var contentDocument =  document.getElementById('forPrint');
      var content = '<!DOCTYPE html>' + contentDocument.outerHTML;
      var converted = htmlDocx.asBlob(content, {orientation: "portrait"});
      saveAs(converted, 'exam.docx');
    }

    saveJson(){
      const {exam,student,questions}=this.state;
      const answersheet=this.props.data;
      const {answers}=answersheet;
      const {scores,totalScore,comments}=this.state;
      var name=exam._id+"_"+student.name+".txt";
      // console.log('saveTxt',exam);
      // console.log('saveTxt',name);
      // var content=convert2txt(exam,questions,scores,comments,answers,totalScore);
      // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      var jcontent=convert2json(exam,questions,scores,comments,answers,totalScore);
      var content=JSON.stringify(jcontent,null,2);
      var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      saveAs(blob, name);

    }

    saveDocx(){
      const {exam,student,questions}=this.state;
      const answersheet=this.props.data;
      const {answers}=answersheet;
      const {scores,totalScore,comments}=this.state;
      // var name=exam._id+"_"+student.name+".txt";
      // console.log('saveTxt',exam);
      // console.log('saveTxt',name);
      // var content=convert2txt(exam,questions,scores,comments,answers,totalScore);
      // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      var jcontent=convert2json(exam,questions,scores,comments,answers,totalScore);
      // var content=JSON.stringify(jcontent,null,2);
      // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      // saveAs(blob, name);
      var name=student.id+"_"+student.name+".docx";
      saveAsDocx(jcontent,name);
    }

    update(){
        const {scores,totalScore,comments}=this.state;
        const answersheet=this.props.data;
        answersheet.scores=scores;
        answersheet.totalScore=totalScore;
        answersheet.comments=comments;
        this.props.update(answersheet);
    }
    remove(){
      var sure=confirm("确定要删除吗?");
              if(!sure){return}
        this.props.remove();
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.fetchData();
        this.tokenUpdate=PubSub.subscribe( "score.change",(msg,data)=>this.changeScore(data));
        this.tokenUpdateComment=PubSub.subscribe( "comment.change",(msg,data)=>this.changeComment(data));
    }
    changeScore({gid,score}){
        var {scores,totalScore}=this.state;
        scores[gid]=score;
        totalScore=_.sum(_.values(scores));
        this.setState({scores,totalScore});
    }
    changeComment({gid,comment}){
        var {comments}=this.state;
        comments[gid]=comment;
        this.setState({comments});
    }

    fetchData(){
        const answersheet=this.props.data;//answersheet
        const {examID,studentID,questions}=answersheet;
        agent.get("/exam/"+examID).then(resp=>{
            this.setState({exam:resp.body});
        });
        agent.get("/student/"+studentID).then(resp=>{
            this.setState({student:resp.body});
        });
        tree.read_nodes(questions).then(nodes=>{
            this.setState({questions:nodes});
        })

    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
      PubSub.unsubscribe(this.tokenUpdate);
      PubSub.unsubscribe(this.tokenUpdateComment);
    }
}

module.exports = AnswersheetForm;
