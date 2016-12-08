import React from 'react';
require('./queryscore.less');
import {Table } from 'react-bootstrap';

export default class QueryScore extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {scores}=this.state;
    return (
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
    );
  }

    componentDidMount() {
        let me = this;
        const stuID=this.props.studentID;
        if(!stuID){
            return;
        }
        agent.get('/queryscore/'+stuID).then(resp=>{
            var scores=resp.body;
            me.setState({scores})
        })
    }
}
