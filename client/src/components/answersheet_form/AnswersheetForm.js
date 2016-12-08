/**
 * 学生成绩批改以及试卷导出
 */
require('./AnswersheetForm.less');
var agent = require('superagent-promise')(require('superagent'),Promise);
const tree=require('../../tree/tree-cache')('_api');
import {Panel,Grid,Row,Col,Button,ButtonToolbar,ListGroup,ListGroupItem}from 'react-bootstrap';
var _=require('lodash');
import Reader from "../reader";
import Imageviewer from "../imageviewer";
var imgUtil=require('./img_util');
var qjsonUtil=require('./qjson_util');
import RestImageViewer from '../rest_image_viewer';
import RestReader from '../rest_reader';
const StudentImageViewer=({gid})=><RestReader view={RestImageViewer} url={"/api/img/"+gid} gid={gid}/>
/**
 * 显示每道题目，包括问题Q,批注,得分
 * 得分改变时发送'score.change'消息
 * 批注改变时发送'comment.change'消息
 * AnswersheetForm负责接收改变消息，并更新状态
 */
const QS=(props)=><div style={{paddingTop:"20px"}}>
      <Col xs={11}>
        <Q {...props}/>
        <textarea className="form-control" rows="3" placeholder="批注"
        defaultValue={props.comment||''}
        onChange={(e)=>{PubSub.publish('comment.change',{gid:props.node._id,comment:e.target.value})}}
         />
      </Col>
      <Col xs={1}><input type="number"  min="0" max="100" step="1" 
      placeholder="得分" value={props.score} 
      onChange={(e)=>{PubSub.publish('score.change',{gid:props.node._id,score:Number(e.target.value)})}}
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
const Qchoice=({node,answer,price,studentID})=>{
    const data=node._data.data;
    const correct=isCorrectChoice(data,answer);
    return <Panel header={"["+price+"分]"+"[选择题] "+data.question}  collapsible  defaultExpanded
            bsStyle={correct?"success":"danger"}>
            <Reader view={Imageviewer} gid={node._id} level={1}/>
      <ListGroup fill>
      {data.answers.map((ans,idx)=><ListGroupItem key={idx} >
        <div>{"ABCDEFGHI"[idx]+". "+ans.answer+"  "+
        (ans.ok?" [标准答案] ":" ")}
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
const Qqa=({node,answer,price,studentID})=>{
  const data=node._data.data;
  var ans=answer||"";
  return <Panel header={"["+price+"分]"+"[问答题] "+data.question}  collapsible  defaultExpanded>
          <Reader view={Imageviewer} gid={node._id} level={1}/>
          <StudentImageViewer gid={node._id+"_"+studentID}/>
              <div style={{fontSize:"1.4em",color:"SteelBlue"}}>{ans}</div>
      </Panel>
}

//阅卷
const Qtf=({node,answer,price,studentID})=>{
  const data=node._data.data;
  const correct=isCorrectTf(data,answer);
  return <Panel collapsible  defaultExpanded
      header={"["+price+"分]"+"[判断题] "+data.question+" "+(data.ok?" ( ✓ )":" ( ✗ )")} bsStyle={correct?"success":"danger"}>
      <Reader view={Imageviewer} gid={node._id} level={1}/>
      {answer===undefined?null:(answer?<CheckSign/>:<CrossSign/>)}
      </Panel>;
};

//阅卷
const Qrevise=({node,answer,price,studentID})=>{
  const data=node._data.data;
  var ans=answer||""; 
  return <Panel header={"["+price+"分]"+"[改错题] "+data.question}  collapsible  defaultExpanded>
              <h4>改错内容</h4>
              <StudentImageViewer gid={node._id+"_"+studentID}/>
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


class AnswersheetForm extends React.Component {

    constructor(props) {
        super(props);
        const answersheet=props.data;
        this.state = {
            scores:answersheet.scores||{},
            totalScore:answersheet.totalScore||0,
            comments:answersheet.comments||{},
        };
    }
    //收集图片放到this.imgs中
    collectImage(questions){
      function mysubscriber(msg,obj){
        // console.log(msg,obj) 
        imgUtil.getImgBlob(obj);
      }
      // console.log('subscribe:img-load')
      PubSub.subscribe('img-load',mysubscriber);
    } 

    render() {
        let me = this;
        const {exam,student,questions}=this.state;
        const answersheet=this.props.data;
        const {answers,prices,studentID}=answersheet;
        const {scores,totalScore,comments}=this.state;
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
                      <Row key={node._id} className='no-gutter'>
                        <QS node={node} score={scores[node._id]||0} price={prices[node._id]||0} comment={comments[node._id]||''} answer={answers[node._id]}
                        studentID={studentID}/>
                      </Row>))}
                    </Grid>
                  </div>
                  </div>
            );
        }else{
            return null;
        }
    }

    saveJson(){
      const {exam,student,questions}=this.state;
      const answersheet=this.props.data;
      const {answers}=answersheet;
      const {scores,totalScore,comments}=this.state;
      var name=exam._id+"_"+student.name+".txt";
      var jcontent=qjsonUtil.convert2json(exam,questions,scores,comments,answers,totalScore);
      var content=JSON.stringify(jcontent,null,2);
      var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
      saveAs(blob, name);
      //saveAs来自FileSaver
    }

    saveDocx(){
      const {exam,student,questions}=this.state;
      const answersheet=this.props.data;
      const {answers}=answersheet;
      const {scores,totalScore,comments}=this.state;
      var jcontent=qjsonUtil.convert2json(exam,questions,scores,comments,answers,totalScore);
      var name=student.id+"_"+student.name+".docx";
      saveAsDocx(jcontent,name);
      //saveAsDocx定义在manage.html中
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

    componentWillUnmount() {
      PubSub.unsubscribe(this.tokenUpdate);
      PubSub.unsubscribe(this.tokenUpdateComment);
    }
}

module.exports = AnswersheetForm;
