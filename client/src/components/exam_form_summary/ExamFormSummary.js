require('./ExamFormSummary.less');
import { Tabs,Tab,Button,ButtonToolbar,Input,Table } from 'react-bootstrap';
import moment from 'moment';
moment.locale('zh-cn');

const room_name=(props)=><span>{props.data.name}</span>;
const paper_name=(props)=><span>{props.node._data.data.name}</span>;

class ExamFormSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        let me = this;
        const {room,paper,duration,start,end}=this.state;
        return (
            <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <td>考场</td>
                <td>{room?room:"未选择"}</td>
              </tr>
              <tr>
                <td>试卷</td>
                <td>{paper?paper:"未选择"}</td>
              </tr>
              <tr>
                <td>时长(分钟)</td>
                <td>{duration?duration:"未选择"}</td>
              </tr>
              <tr>
                <td>考试开放时间</td>
                <td>{start?moment(start).format('LLL'):"未选择"}</td>
              </tr>
              <tr>
                <td>考试关闭时间</td>
                <td>{end?moment(end).format('LLL'):"未选择"}</td>
              </tr>
            </tbody>
          </Table>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

module.exports = ExamFormSummary;
