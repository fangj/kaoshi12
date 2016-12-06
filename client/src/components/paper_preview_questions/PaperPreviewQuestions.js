require('./PaperPreviewQuestions.less');
import {Well,Button,Glyphicon,Grid,Row,Col}from 'react-bootstrap';
import {m} from '../common';


class PaperPreviewQuestions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {nodes,scores}=this.props;
        return (
          <div>{
            nodes.map(node=>
               <Row key={node._id} className='no-gutter'>
                {this.showTopic(node,scores[node._id])}
               </Row>)
            }
          </div>
        );
    }

    showTopic(node,score){
        return <div style={{paddingTop:"20px"}}>
          <Col xs={1}><Button bsStyle='danger' onClick={()=>{PubSub.publish('topic.toggle',node._id)}}><Glyphicon glyph="remove" /></Button></Col>
          <Col xs={10}>{m(node)}</Col>
          <Col xs={1}><input type="number"  min="1" max="100" step="1" 
          placeholder="分值" value={score} onChange={e=>this.changeScore(node,e.target.value)}
          style={{padding:"8px",width:"50px"}}/></Col>
          </div>;
    }

    changeScore(node,score){
        console.log('changeScore',node._id,score);
        PubSub.publish('topic.score',{gid:node._id,score:score});
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

module.exports = PaperPreviewQuestions;
