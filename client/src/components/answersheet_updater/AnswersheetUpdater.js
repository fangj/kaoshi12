require('./AnswersheetUpdater.less');
import TreePathReader from '../treepathreader';
import Nav from '../nav';

import AnswersheetForm from '../answersheet_form';
import RestWriter from '../rest_writer';

/**
 * 学生成绩批改
 * 用AnswersheetForm修改答题卡，保存到"/api/answersheet"
 * 在ExamFormScores学生分数表格中点击会进入到此页
 */
class AnswersheetUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const id=this.props.params.id;
        return (
            <div className="answersheet_updater">
                <TreePathReader view={Nav} from="0/menu" to="0/menu/exams"/>
                <RestWriter url="/api/answersheet" id={id} view={AnswersheetForm} publish={{update:"updated",remove:"removed"}}/>
            </div>
        );
    }

    componentDidMount() {
        this.tokenUpdate=PubSub.subscribe( "updated",(msg,data)=>{
            history.go(-1);
        });//更新数据后到父节点
        this.tokenRemove=PubSub.subscribe( "removed",(msg,data)=>{
            history.go(-1);
        });//更新数据后到父节点
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.tokenUpdate );
        PubSub.unsubscribe( this.tokenRemove );
    }
}

module.exports = AnswersheetUpdater;
