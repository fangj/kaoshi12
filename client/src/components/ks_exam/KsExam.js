require('./KsExam.less');
import {Panel, Button,Jumbotron } from 'react-bootstrap';
import Examing from '../ks_examing';

//开始考试前的提示界面
const Start=(props)=>{
    const {msg,go}=props;
    return <div className="ks_exam"><Jumbotron className="text-center">
                <h1>{msg.exam.name}</h1>
                <h2>{msg.className}</h2>
                <h2>{msg.studentName}</h2>
                <h2>{msg.studentID}</h2>
                <Button bsStyle="success" bsSize="large" onClick={go}>开始考试</Button>
            </Jumbotron></div>;
}

//考试结束时提示界面
const Over=(props)=>{
    const {msg,scores}=props;
    // var totalScore=_.sum(_.values(scores));
    // console.log(totalScore)
    return <div className="ks_exam"><Jumbotron className="text-center">
                <h1>考试结束</h1>
                {
                   // scores?<h1>总分:{totalScore}</h1>:null
                }
                <h1>{msg.exam.name}</h1>
                <h2>{msg.className}</h2>
                <h2>{msg.studentName}</h2>
                <h2>{msg.studentID}</h2>
           </Jumbotron></div>;
}

/**
 * 考试界面
 * 接受'exam.over'消息，显示结束界面
 */
class KsExam extends React.Component {
  //三种状态：开始start，答题go，已结束over
  //开始 start:获取考题和中断的答题卡(如果有)
  //答题 go:考试进行中
  //已结束 over:考生已经交卷或者考试时间到
    constructor(props) {
        super(props);
        this.state = {
            s:"start"
        };
    }

    render() {
        const me=this;
        const {msg}=this.props;
        console.log(msg);
        switch(this.state.s){
          case "start":return <Start msg={msg} go={()=>me.setState({s:"go"})}/>;
          case "go":return <Examing msg={msg}/>;
          case "over":return <Over msg={msg} scores={this.state.scores}/>;
        }
        return null;
    }

    componentDidMount() {
        this.token=PubSub.subscribe('exam.over',(msg,scores)=>this.setState({s:"over",scores}));
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }
}

module.exports = KsExam;
