require('./KsExaming.less');
import {Panel, Button,Jumbotron,ListGroup,ListGroupItem } from 'react-bootstrap';
import cx from 'classnames';
import CountdownTimer from './CountdownTimer';
import Reader from "../reader";
import Imageviewer from "../imageviewer";
var agent = require('superagent-promise')(require('superagent'),Promise);

const Timer=(props)=>{
    const {begin,duration}=props;
    var now=new Date().getTime()/1000;
    var secondsRemaining=Math.floor(begin/1000+duration*60-now);
    return <Panel style={{textAlign:"center"}}><CountdownTimer secondsRemaining={secondsRemaining} /></Panel>
}



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


const Thumb=props=>{
    const {gid,idx,done}=props;
    return <div className={cx("thumb",{done})}><a href={"#q-"+gid}>{idx+1}</a></div>;
}



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
    const {answers}=answersheet;
    console.log('QuestionsView',questions);
    return (
      <div>
          {questions.map((node,idx)=>
            <div id={"q-"+node._gid} key={node._gid} >
                <Q node={node} prefix={idx+1+". "} answer={answers[node._gid]}/>
            </div>)}
      </div>
    );
  }
}

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
const Qchoice=({node,prefix,answer})=>{
    var {question,answers}=node._data.data;
    answers=answers||[];
    return <Panel header={prefix+"[选择题] "+question}>
        <Reader view={Imageviewer} gid={node._gid} level={1}/>
      <ListGroup fill>
      {answers.map((ans,idx)=><ListGroupItem 
        key={idx} 
        bsStyle={answer===idx?"info":null}
        ><div onClick={()=>PubSub.publish('answer',{gid:node._gid,answer:idx})}>{"ABCDEFGHI"[idx]+". "+ans.answer}</div>
        </ListGroupItem>)}
      </ListGroup>
    </Panel>
}

//问答题
const Qqa=({node,prefix,answer})=>{
    const {question}=node._data.data;
    const onChange=(e)=>PubSub.publish('answer',{gid:node._gid,answer:e.target.value});
    return <Panel header={prefix+"[问答题] "+question} >
        <Reader view={Imageviewer} gid={node._gid} level={1}/>
        <textarea className="form-control answer" style={{width:"100%"}}
         rows="5" placeholder="答案写在这里" onChange={onChange} defaultValue={answer} />
      </Panel>
}

//判断题
const Qtf=({node,prefix,answer})=>{
    const {question}=node._data.data;
    const onClick=(e)=>{PubSub.publish('answer',{gid:node._gid,answer:!answer})};
    return <Panel onClick={onClick}>
      {prefix+"[判断题] "+question+"   "} 
      (<span className="answer">{answer===undefined?" ":(answer?"✓":"✗")}</span>)
        <Reader view={Imageviewer} gid={node._gid} level={1}/>
      </Panel>
}

//改错题
const Qrevise=({node,prefix,answer})=>{
    const {question,content}=node._data.data;
    const onChange=(e)=>PubSub.publish('answer',{gid:node._gid,answer:e.target.value});
    return <Panel header={prefix+"[改错题] "+question} >
        <Reader view={Imageviewer} gid={node._gid} level={1}/>
        <textarea className="form-control answer" style={{width:"100%"}} defaultValue={answer||content}
         rows="5" placeholder="答案写在这里" onChange={onChange} value={answer} />
      </Panel>
}


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
            // PubSub.publish('exam.over');
            // agent.get("/score/"+answersheet._id).end();//评分

            agent.get("/score/"+answersheet._id)//评分
            .then(resp=>{
              const scores=resp.body;
              PubSub.publish('exam.over',scores);
            })
        })
    }

    componentWillMount() {
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
      PubSub.unsubscribe(this.token);
    }
}

module.exports = KsExaming;
