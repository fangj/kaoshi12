import React,{Component} from 'react';
import {Well,Button,Glyphicon,Grid,Row,Col}from 'react-bootstrap';

export class Questions extends Component {

  constructor(props) {
    super(props);
    this.state=Object.assign({},props);
  }
  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  render() {
   const {nodes}=this.props;
    return (
      <div className='paper-questions'>
      <Grid fluid>{nodes.map(node=>
       <Row key={node._gid} className='no-gutter'>
        {this.wrapNode(node)}
       </Row>)}
      </Grid>
      </div>
    );
  }
  wrapNode(node){
    const {v}=this.props;
    if(node._data.type=='ks1/bank'){
      return <Col xs={12}><Well onClick={()=>this.props.chooseBank(node)}>{v(node,'name')}</Well></Col>;
    }else{
      // console.log(node,v);
      return <div >
      <Col xs={1}><Button bsStyle={this.questionStyle(node)} onClick={()=>this.props.toggleQuestion(node)}><Glyphicon glyph="ok" /></Button></Col>
      <Col xs={11}>{v(node,'m')}</Col>
      </div>;
    }
  }

  questionStyle(node){
    if(this.props.selected_questions[node._gid]){
      return 'success';
    }else{
      return 'default';
    }
  }
  

}
