require('./ExamCreater.less');
import Nav from '../nav';
import TreePathReader from '../treepathreader';
import ExamForm from '../exam_form';
import RestWriter from '../rest_writer';

/**
 * 用ExamForm创建考试安排，保存到"/api/exam"
 */
class ExamCreater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        return (
            <div className="exam_creater">
                <TreePathReader view={Nav} from="0/menu" to="0/menu/exams"/>
                <RestWriter url="/api/exam" view={ExamForm} />
            </div>
        );
    }
}

module.exports = ExamCreater;
