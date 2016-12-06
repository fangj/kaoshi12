require('./ExamUpdater.less');
import TreePathReader from '../treepathreader';
import Nav from '../nav';

import ExamForm from '../exam_form';
import RestWriter from '../rest_writer';


class ExamUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const id=this.props.params.id;
        return (
            <div className="exam_updater">
                <TreePathReader view={Nav} from="0/menu" to="0/menu/exams"/>
                <RestWriter url="/api/exam" id={id} view={ExamForm} publish={{update:"updated",remove:"removed"}}/>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.tokenUpdate=PubSub.subscribe( "updated",(msg,data)=>{
            location.href="#/exams";
        });//更新数据后到父节点
        this.tokenRemove=PubSub.subscribe( "removed",(msg,data)=>{
            location.href="#/exams";
        });//删除数据后到父节点
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
        PubSub.unsubscribe( this.tokenUpdate );
        PubSub.unsubscribe( this.tokenRemove );
    }
}

module.exports = ExamUpdater;
