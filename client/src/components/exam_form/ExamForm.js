require('./ExamForm.less');
import { Tabs,Tab,Button,ButtonToolbar,Input,Table } from 'react-bootstrap';
import Summary from '../exam_form_summary';
import PaperChooser from '../exam_form_paper_chooser';
import RoomChooser from '../exam_form_room_chooser';
import TimeChooser from '../exam_form_time_chooser';
import Scores from '../exam_form_scores';


class ExamForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.data
        };
    }

    render() {
        let me = this;
        const {save,update,remove}=this.props;
        const {room_id,paper_gid,room_name,paper_name,duration,start,end,_id}=this.state;
        // const paper_name=paper&&paper._data.data.name;
        // const paper=paper&&paper._id;
        // const room_name=room&&room.name;
        // const room_id=room&&room._id;
        return (
            <div className='pad'>
            <ButtonToolbar  style={{textAlign:'right',paddingBottom:"15px"}}>
                  {save?<Button  bsStyle="success" onClick={this.save.bind(this)}>保存</Button>:null}
                  {update?<Button  bsStyle="success" onClick={this.update.bind(this)}>保存</Button>:null}
                  {remove?<Button  bsStyle="danger" onClick={this.remove.bind(this)}>删除</Button>:null}
            </ButtonToolbar>
             <Tabs defaultActiveKey={1} id="examform">
                <Tab eventKey={1} title="概要">
                    <Summary room={room_name} paper={paper_name} duration={duration} start={start} end={end}/>
                </Tab>
                <Tab eventKey={2} title="考场">
                    <RoomChooser choosen={room_id}/>
                </Tab>
                <Tab eventKey={3} title="试卷">
                    <PaperChooser choosen={paper_gid}/>
                </Tab>
                <Tab eventKey={4} title="时间">
                    <TimeChooser start={start} end={end} duration={duration}
                    cbSetStart={this.setStart.bind(this)}
                    cbSetEnd={this.setEnd.bind(this)}
                    cbSetDuration={this.setDuration.bind(this)}
                    />
                </Tab>
                {_id?<Tab eventKey={5} title="成绩">
                                    <Scores examID={_id}/> 
                                </Tab>:null}
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
        const {room_id,paper_gid,room_name,paper_name,duration,start,end}=this.state;
        const name=paper_name+"@"+room_name;
        return this.props.save({name,room_id,paper_gid,room_name,paper_name,duration,start,end});
    }
    update(){
        const {_id,room_id,paper_gid,room_name,paper_name,duration,start,end}=this.state;
        const name=paper_name+"@"+room_name;
        return this.props.update({_id,name,room_id,paper_gid,room_name,paper_name,duration,start,end});
    }
    setStart(start){
        this.setState({start});
    }
    setEnd(end){
        this.setState({end});
    }
    setDuration(duration){
        this.setState({duration});
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.token_choose_paper=PubSub.subscribe( "paper.choose",(msg,node)=>{
            console.log('paper.choose',node);
            this.setState({paper_gid:node._id,paper_name:node._data.data.name});
        });
        this.token_choose_room=PubSub.subscribe( "room.choose",(msg,data)=>{
            console.log('room.choose',data);
            this.setState({room_id:data._id,room_name:data.name});
        });
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
        PubSub.unsubscribe( this.token_choose_paper );
        PubSub.unsubscribe( this.token_choose_room );
    }
}

module.exports = ExamForm;
