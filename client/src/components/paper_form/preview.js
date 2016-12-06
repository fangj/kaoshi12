import React,{Component} from 'react';
import {Grid,Row,Col,Well}from 'react-bootstrap';
import * as _ from 'lodash';

export class Preview extends Component {

  constructor(props) {
    super(props);
    this.state=Object.assign({},props);
  }
  componentWillReceiveProps(nextProps){
 this.setState(nextProps);
  }
  render() {
   const {selected_questions}=this.props;
    if(Object.keys(selected_questions).length===0){
      return <Well>您还没有选择试题，请点击"选题"标签选择</Well>;
    }
    return (
      <div className='paper-preview'>
      <Grid fluid>{_.map(selected_questions,(node=>
       <Row key={node._gid} className='no-gutter'>
        {this.wrapNode(node)}
       </Row>))}
      </Grid>
      </div>
    );
  }
  wrapNode(node){
    const {v}=this.props;
    return <div style={{paddingTop:"20px"}}>
      <Col xs={11}>{v(node,'m')}</Col>
      <Col xs={1}><input type="number"  min="1" max="100" step="1" 
      placeholder="分值" value={node.score} onChange={e=>this.props.changeScore(node,e.target.value)}
      style={{padding:"8px",width:"50px"}}/></Col>
      </div>;
  }


}
