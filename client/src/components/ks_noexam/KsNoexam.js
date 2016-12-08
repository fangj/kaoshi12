require('./KsNoexam.less');
import { Button,Jumbotron,Table } from 'react-bootstrap';
var agent = require('superagent-promise')(require('superagent'),Promise);
import QueryScore from '../ks_queryscore';
/**
 * 没有考试时的界面
 */
class KsNoexam extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        const {msg}=this.props;
        // console.log(msg)
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
            <QueryScore studentID={msg.studentID}/>
            </div>
        );
    }
}

module.exports = KsNoexam;
