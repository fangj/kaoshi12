require('./PaperForm.less');
import { Tabs,Tab,Button,ButtonToolbar } from 'react-bootstrap';
import PaperPreview from '../paper_preview';
import PaperTopicChooser from '../paper_topic_chooser';
import TreePathReader from '../treepathreader';
import Nav from '../nav';

var _=require('lodash');
class PaperForm extends React.Component {

    constructor(props) {
        super(props);
        const {node}=props;
        if(node){
            this.state = node._data.data;//更新
        }else{
            this.state = {
                name:"未命名试卷 "+new Date().toLocaleString(),
                questions:[],
                scores:{}
            };
        }
        
    }

    render() {
        let me = this;
        const {save,update,remove}=this.props;
        const {name,questions,scores}=this.state;
        return (
            <div className='pad'>
                <ButtonToolbar  style={{textAlign:'right',paddingBottom:"15px"}}>
                  {save?<Button  bsStyle="success" onClick={this.save.bind(this)}>保存</Button>:null}
                  {update?<Button  bsStyle="success" onClick={this.update.bind(this)}>保存</Button>:null}
                  {remove?<Button  bsStyle="danger" onClick={this.remove.bind(this)}>删除</Button>:null}
                </ButtonToolbar>
                <div style={{padding:"15px 0"}}>
                    <legend>试卷名称:
                    <input onChange={this.onChangeName.bind(this)}
                     value={name} />
                     </legend>
                    <div style={{float:"right"}}>总分: {this.totalScore()}分</div>
                </div>
                <Tabs defaultActiveKey={1} id="questions">
                 <Tab eventKey={1} title="预览" >
                   <PaperPreview selected_questions={questions} scores={scores}/>
                  </Tab>
                  <Tab eventKey={2} title="选题" >  
                   <PaperTopicChooser selected_questions={questions}/>
                  </Tab>
                </Tabs>
            </div>
        );
    }

    remove(){
        var sure=confirm("确定要删除吗?");
              if(!sure){return}
        return this.props.remove();
    }
    save(){
        return this.props.save({type:"ks1/paper",data:this.state});
    }
    update(){
        // debugger;
        return this.props.update({type:"ks1/paper",data:this.state});
    }
    onChangeName(e){
        this.setState({name:e.target.value});
    }
    changeScore(gid,score){
        const {scores}=this.state;
        scores[gid]=Number(score)||0;
        this.forceUpdate();//更新总分
    }
    totalScore(){
        const {scores,questions}=this.state;
        return _.sum(_.values(_.pick(scores,questions)));
    }
    toggleQuestion(gid){
        console.log('toggleQuestion...',gid);
        var {questions,scores}=this.state;
        var qs=questions;
        const idx=qs.indexOf(gid);
        if(idx>-1){//原先被选中，现在除去。
            qs.splice(idx,1);
        }else{//原先没有，加入。
            qs.push(gid);
            scores[gid]=scores[gid]||1;//默认每题1分
        }
        console.log('qs',qs)
        this.setState({questions:qs,scores});
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.tokenToggle=PubSub.subscribe( "topic.toggle",(msg,gid)=>this.toggleQuestion(gid)  );
        this.tokenScore=PubSub.subscribe( "topic.score",(msg,obj)=>this.changeScore(obj.gid,obj.score)  );

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
        PubSub.unsubscribe(this.tokenToggle);
        PubSub.unsubscribe(this.tokenScore);
    }
}

module.exports = PaperForm;
