require('./KsExaming.less');
import {Panel, Button,Jumbotron,ListGroup,ListGroupItem } from 'react-bootstrap';
import cx from 'classnames';
import CountdownTimer from './CountdownTimer';
import Reader from "../reader";
import Imageviewer from "../imageviewer";
var agent = require('superagent-promise')(require('superagent'),Promise);
import RestUploader from '../rest_uploader';
import RestImageViewer from '../rest_image_viewer';
import RestReader from '../rest_reader';

//倒计时组件
const Timer=(props)=>{
    const {begin,duration}=props;
    var now=new Date().getTime()/1000;
    var secondsRemaining=Math.floor(begin/1000+duration*60-now);
    return <Panel style={{textAlign:"center"}}><CountdownTimer secondsRemaining={secondsRemaining} /></Panel>
}

//题目缩略指示区，接受'thumbs.refresh'刷新内容
//根据题目是否完成显示不同样式
//点击题号可以跳转到题目
class Thumbs extends React.Component {
  static propTypes = {
    answersheet: React.PropTypes.object,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {answersheet}=this.props;
    const {questions,answers}=answersheet;
    return (
      <Panel>
            {questions.map((gid,idx)=>
                <Thumb key={gid} gid={gid} idx={idx} done={answers.hasOwnProperty(gid)}/>
            )}
        </Panel>
    );
  }
  componentDidMount() {
      this.token=PubSub.subscribe('thumbs.refresh',()=>this.forceUpdate());
  }
  componentWillUnmount() {
      PubSub.unsubscribe(this.token);
  }
}

//题目缩略指示
const Thumb=props=>{
    const {gid,idx,done}=props;
    return <div className={cx("thumb",{done})}><a href={"#q-"+gid}>{idx+1}</a></div>;
}

/**
 * 根据答题卡answersheet，从'/questions'取得题目
 * 接受'answer'消息，更新答案
 * 发布'thumbs.refresh'消息，更新题目缩略
 * 用QuestionsView显示题目
 */
class Questions extends React.Component {
  static propTypes = {
    answersheet: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state={answersheet:props.answersheet};
  }

  render() {
    const {questions,answersheet}=this.state;
    if(!questions){
        return null;
    }
    return (
      <QuestionsView questions={questions} answersheet={answersheet}/>
    );
  }

  onAnswer(msg,ans){
    // console.log('onAnswer',msg,ans);
        const {answersheet}=this.state;
        const {answers}=answersheet;
        answers[ans.gid]=ans.answer;
        this.setState({answersheet});
        PubSub.publish('thumbs.refresh');
    }

  componentDidMount() {
    this.fetchQuestions();
    this.token=PubSub.subscribe('answer',this.onAnswer.bind(this));
  }

  fetchQuestions(){
    console.log('fetchQuestions')
    const {answersheet}=this.props;
    agent.post('/questions',answersheet.questions).then(resp=>{
        this.setState({questions:resp.body});
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
}

//负责显示具体题目
class QuestionsView extends React.Component {
  static propTypes = {
    questions: React.PropTypes.array,
    answersheet: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {questions,answersheet}=this.props;
    const {answers,prices}=answersheet;
    console.log('QuestionsView',questions);
    return (
      <div>
          {questions.map((node,idx)=>
            <div id={"q-"+node._id} key={node._id} >
                <Q node={node} prefix={idx+1+". "} answer={answers[node._id]}
                price={prices[node._id]}/>
            </div>)}
      </div>
    );
  }
}

//具体到每一题的显示组件
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


//单选题，answer是答案的序号,answers是选支
//发布'answer'信息更新答案
const Qchoice=({node,prefix,answer,price})=>{
    var {question,answers}=node._data.data;
    answers=answers||[];
    return <Panel header={prefix+"["+price+"分]"+"[选择题] "+question}>
        <Reader view={Imageviewer} gid={node._id} level={1}/>
      <ListGroup fill>
      {answers.map((ans,idx)=><ListGroupItem 
        key={idx} 
        bsStyle={answer===idx?"info":null}
        ><div onClick={()=>PubSub.publish('answer',{gid:node._id,answer:idx})}>{"ABCDEFGHI"[idx]+". "+ans.answer}</div>
        </ListGroupItem>)}
      </ListGroup>
    </Panel>
}

//问答题
//发布'answer'信息更新答案
const Qqa=({node,prefix,answer,price})=>{
    const {question}=node._data.data;
    const onChange=(e)=>PubSub.publish('answer',{gid:node._id,answer:e.target.value});
    return <Panel header={prefix+"["+price+"分]"+"[问答题] "+question} >
        <Reader view={Imageviewer} gid={node._id} level={1}/>
        <RestUploader gid={node._id}/>
        <RestReader view={RestImageViewer} url={"/api/img/"+node._id}
        subscribe={["img.removed","img.uploaded"]} gid={node._id}/>
        <textarea className="form-control answer" style={{width:"100%"}}
         rows="5" placeholder="答案写在这里" onChange={onChange} defaultValue={answer} />
      </Panel>
}

//判断题
//发布'answer'信息更新答案
const Qtf=({node,prefix,answer,price})=>{
    const {question}=node._data.data;
    const onClick=(e)=>{PubSub.publish('answer',{gid:node._id,answer:!answer})};
    return <Panel onClick={onClick}>
      {prefix+"["+price+"分]"+"[判断题] "+question+"   "} 
      (<span className="answer">{answer===undefined?" ":(answer?"✓":"✗")}</span>)
        <Reader view={Imageviewer} gid={node._id} level={1}/>
      </Panel>
}

//改错题
//发布'answer'信息更新答案
const Qrevise=({node,prefix,answer,price})=>{
    const {question,content}=node._data.data;
    const onChange=(e)=>PubSub.publish('answer',{gid:node._id,answer:e.target.value});
    return <Panel header={prefix+"["+price+"分]"+"[改错题] "+question} >
        <Reader view={Imageviewer} gid={node._id} level={1}/>
        <textarea className="form-control answer" style={{width:"100%"}} defaultValue={answer||content}
         rows="5" placeholder="答案写在这里" onChange={onChange} value={answer} />
      </Panel>
}

//进行考试组件
//点击交卷按钮或者时间到收到'timer.over'会导致交卷
//交卷时将答题卡提交"/api/answersheet/answersheet_id"
//然后交由"/score/answersheet_id"评分，完成后发布'exam.over'事件进入结束界面
class KsExaming extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {answersheet}=this.state;
        if(!answersheet){
            return null;
        }
        const {msg}=this.props;
        console.log(answersheet,msg);
        return (
            <div>
              <div className="left" style={{padding:"5px"}}>
                <div  style={{position:"fixed",width:"29%"}}>
                 <div style={{fontSize:"2em",paddingBottom:"15px"}}>
                  <img src="/img/logo.png" width="50" /> 实验考试管理系统
                 </div>
                    <Button block bsSize="lg" bsStyle="success" style={{marginBottom: "20px"}} onClick={()=>this.finish()}>交卷</Button>
                    <Timer begin={answersheet.begin} duration={msg.exam.duration}/>
                    <Thumbs answersheet={answersheet}/>
                </div>
              </div>
              <div className="right" style={{padding:"5px"}}>
                <Questions answersheet={answersheet}/>
              </div>
            </div>
        );
    }

    //交卷
    finish(){
        const {answersheet}=this.state;
        answersheet.end=new Date().getTime();
        agent.put("/api/answersheet/"+answersheet._id,answersheet).then(resp=>{
            agent.get("/score/"+answersheet._id)//评分
            .then(resp=>{
              const scores=resp.body;
              PubSub.publish('exam.over',scores);
            })
        })
    }

    componentDidMount() {
        this.fetchAnswerSheet();
        this.token=PubSub.subscribe('timer.over',()=>this.finish());
    }

    fetchAnswerSheet(){
        const {msg}=this.props;
        const data={examID:msg.exam._id,studentID:msg.studentID};
        agent.get("/answersheet/"+data.examID+"/"+data.studentID).then(resp=>{
            this.setState({answersheet:resp.body});
        })
    }

    componentWillUnmount() {
      PubSub.unsubscribe(this.token);
    }
}

module.exports = KsExaming;