require('./ExamFormScores.less');
import RestReader from '../rest_reader';
import { Table,Button } from 'react-bootstrap';

const goto=url=>{location.href='#'+url}

const ScoreRow=(props)=>{
    const a=props.answersheet;
    return <tr onClick={()=>goto("/answersheet/"+a._id)}>
             <td>{a.studentName}</td><td>{a.studentID}</td><td>{a.totalScore}</td>
            </tr>
}

const ScoreView=(props)=>{
    return <div><Table striped bordered condensed hover>
            <thead>
             <tr><th>姓名</th><th>学号</th><th>成绩</th></tr>
            </thead>
            <tbody>
            {props.data.map(answersheet=><ScoreRow key={answersheet._id} answersheet={answersheet}/>)}
            </tbody>
          </Table>
          <Button onClick={()=>saveScores(props.data)}>导出</Button>
          </div>;
}

function saveScores(answersheets){
    var title="姓名,学号,成绩\r\n";
    var scores=answersheets.map(a=>
        a.studentName+","+a.studentID+","+a.totalScore);
    var content=title+scores.join("\r\n");
    console.log(scores,content);
    const name="成绩.csv";
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, name);
}

class ExamFormScores extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {examID}=this.props;
        return (
            <RestReader view={ScoreView} url={"/answersheet/"+examID}/>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
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
    }
}

module.exports = ExamFormScores;
