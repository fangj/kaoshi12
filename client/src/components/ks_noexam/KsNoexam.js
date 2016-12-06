require('./KsNoexam.less');
import { Button,Jumbotron,Table } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
var agent = require('superagent-promise')(require('superagent'),Promise);

class KsNoexam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {msg}=this.props;
        console.log(msg)
        const {scores}=this.state;
        return (
            <div className='ks_noexam '>
            <Jumbotron>
                <h1 className="text-center">本考场目前没有考试安排</h1>
                <div className="center-block"  style={{width:"400px"}}>
                <Table striped bordered condensed hover>
                <tbody>
                  <tr><td>卡号</td><td>{msg.cardID}</td></tr>
                  <tr><td>浏览器</td><td>{msg.browserIP}</td></tr>
                  <tr><td>读卡器</td><td>{msg.readerID}</td></tr>
                </tbody>
                </Table>
                </div>
            </Jumbotron>
            <div className="queryscore">
            {!scores?null:<Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>考生姓名</th>
                    <th>考试名称</th>
                    <th>考试成绩</th>
                  </tr>
                </thead>
                <tbody>
                {scores.map(score=><tr key={score._id}>
                    <td>{score.studentName}</td>
                    <td>{score.examName}</td>
                    <td>{score.totalScore}</td>
                  </tr>)}
                </tbody>
              </Table>}
            </div>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
        let me = this;
        const stuID=this.props.msg.studentID;
        if(!stuID){
            return;
        }
        agent.get('/queryscore/'+stuID).then(resp=>{
            var scores=resp.body;
            me.setState({scores})
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
    }
}

module.exports = KsNoexam;
