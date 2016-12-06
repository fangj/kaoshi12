var _ =require('lodash');
import {Panel,ListGroup,ListGroupItem} from 'react-bootstrap';
var moment=require('moment');
var cx =require('classnames');
import Reader from "./reader";
import Imageviewer from "./imageviewer";

const show_exam_name=(data)=>{
    // const room_name=_.get(data,'room_name','');
    // const paper_name=_.get(data,'paper_name','');
    // var node_name=room_name+" "+paper_name; //examname=roomname+papername
    var node_name=data.name;
    var now=moment();
    var start=moment(data.start);
    var end=moment(data.end);
    var status;
    if(now.isAfter(end)){
      status="over";
    }else if(now.isBefore(start)){
      status="prepare";
    }else{
      status="doing";
    }
    return <span className={cx('exam',status)}>{node_name}</span>;
}
export const name=(node)=>{
	var node_name=_.get(node,'name')||_.get(node,'_data.data.name');
  if(node.room_name||node.paper_name){
    node_name=show_exam_name(node);
  }
	if(node_name){
		return node_name;
	}
	const node_type=_.get(node,'_data.type');
	switch(node_type){
		case "ks1/choice":return _.get(node,'_data.data.question');
		case "ks1/tf":return _.get(node,'_data.data.question');
    case "ks1/qa":return _.get(node,'_data.data.question');
		case "ks1/revise":return _.get(node,'_data.data.question');
	}
	return "noname";
}
export const icons={
  "unknow":<i className='fa fa-tripadvisor fa-3x'/>,
  "ks1/teacher":<i className='fa fa-user fa-3x'/>,
  "ks1/bank":<i className='fa fa-book fa-3x'/>,
  "ks1/qa":<i className='fa fa-question-circle fa-3x'/>,
  "ks1/choice":<i className='fa fa-list fa-3x'/>,
  "ks1/tf":<i className='fa fa-check-square fa-3x'/>,
  "ks1/revise":<i className='fa fa-eraser fa-3x'/>,
  "ks1/bank/folder":<i className='fa fa-folder fa-3x'/>,
  "ks1/paper/folder":<i className='fa fa-folder fa-3x'/>,
  "ks1/class":<i className='fa fa-users fa-3x'/>,
  "ks1/paper":<i className='fa fa-file fa-3x'/>,
  "ks1/exam":<i className='fa fa-edit fa-3x'/>,
  "ks1/room":<i className='fa fa-desktop fa-3x'/>,
};
export const icon=(node)=>(typeof node==="string")?icons[node]:icons[_.get(node,'_data.type','unknow')];

//题型显示，用于组卷
const vm_qa=(data,gid)=><Panel collapsible  defaultExpanded header={"[问答题] "+data.question}  key={gid}>
      {data.answer}
        <Reader view={Imageviewer} gid={gid} level={1}/>
      </Panel>;
const vm_tf=(data,gid)=><Panel collapsible  defaultExpanded header={"[判断题] "+data.question} key={gid}>
    {data.ok?"正确":"错误"}
        <Reader view={Imageviewer} gid={gid} level={1}/>
    </Panel>;

const vm_choice=(data,gid)=><Panel collapsible defaultExpanded header={"[选择题] "+data.question} key={gid}>
    <ListGroup fill>
    {data.answers && data.answers.map((ans,idx)=><ListGroupItem 
      key={idx} 
      bsStyle={ans.ok?"success":null}>
          {"ABCDEFGHI"[idx]+". "+ans.answer}
      </ListGroupItem>)}
    </ListGroup>
        <Reader view={Imageviewer} gid={gid} level={1}/>
  </Panel>
const vm_revise=(data,gid)=><Panel collapsible  defaultExpanded header={"[改错题] "+data.question}  key={gid}>
      <h4>改错内容</h4>
      <pre>{data.content}</pre>
      <Reader view={Imageviewer} gid={gid} level={1}/>
      <h4>参考答案</h4>
      <pre>{data.answer}</pre>
      </Panel>;

export const m=(node)=>{
  const node_type=_.get(node,'_data.type');
  // console.log(node,node_type)
  const vm={
    "ks1/choice":vm_choice,
    "ks1/tf":vm_tf,
    "ks1/qa":vm_qa,
    "ks1/revise":vm_revise
  }
  const fn= vm[node_type]||(()=>null);
  return fn(node._data.data,node._gid);
}