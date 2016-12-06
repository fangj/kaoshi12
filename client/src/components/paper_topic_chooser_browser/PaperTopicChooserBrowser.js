require('./PaperTopicChooserBrowser.less');
import {Well,Button,Glyphicon,Grid,Row,Col}from 'react-bootstrap';
import {name,m} from "../common";

function isFolderOrTopic(node){
  const type=node._data.type;
  return (type=='ks1/bank/folder')||
  (type=='ks1/qa')||
  (type=='ks1/tf')||
  (type=='ks1/choice')||
  (type=='ks1/revise');
}
class PaperTopicChooserBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {node}=this.props;
        const nodes=node._children;
        // console.log(nodes);
        return (
            <div className='paper-questions'>
              {nodes.filter(isFolderOrTopic).map(node=>
               <Row key={node._id} className='no-gutter'>
                {this.wrapNode(node)}
               </Row>)}
              </div>
        );
    }

    wrapNode(node){
        // console.log(node);
        if(node._data.type=='ks1/bank/folder'){
          return <div>
          <Col xs={1}><Button bsStyle="default" onClick={()=>{PubSub.publish('topic.goto',node._id)}}><Glyphicon glyph="folder-open" /></Button></Col>
          <Col xs={11}><Well onClick={()=>{PubSub.publish('topic.goto',node._id)}}>{name(node)}</Well></Col>;
          </div>;
      }else{
          // console.log(node,v);
          return <div>
          <Col xs={1}><Button bsStyle={this.questionStyle(node)} onClick={()=>{PubSub.publish('topic.toggle',node._id)}}>{(this.props.selected_questions.indexOf(node._id)>-1)?<Glyphicon glyph="ok" />:"__"}</Button></Col>
          <Col xs={11}>{m(node)}</Col>
          </div>;
        }
      }

    questionStyle(node){
        // console.log("questionStyle",this.props.selected_questions,node._id,this.props.selected_questions.indexOf(node._id))
        if(this.props.selected_questions.indexOf(node._id)>-1){
          return 'success';
        }else{
          return 'default';
        }
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

module.exports = PaperTopicChooserBrowser;
