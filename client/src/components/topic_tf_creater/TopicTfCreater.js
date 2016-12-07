require('./TopicTfCreater.less');

import Writer from '../writer';
import Form from "react-jsonschema-form";
import TreePathReader from '../treepathreader';
import Nav from '../nav';
const tree=require('../../tree/tree-cache')('_api');



const schema = {
  title: "判断题",
  type: "object",
  required: ["question"],
  properties: {
    question: {type: "string", title: "问题"},
    ok:{type:"boolean",title:"正确?",default: false}
  }
};
const uiSchema =  {
  question: {"ui:widget": "textarea"  },
};
const node_type='ks1/tf';
const TfForm=(props)=>(
    <div style={{padding:"30px"}}>
        <Form schema={schema} uiSchema={uiSchema}
                onSubmit={(obj)=>props.save({
                    type:node_type,
                    data:obj.formData
                },obj.formData.name)
            }>
        <button type="submit" className="btn btn-success">保存</button>
        </Form>
    </div>);


/**
 * 原先是判断题的创建组件
 * 因为要加入图片，而图片作为子节点，必须要有父节点
 * 所以 TopicTfCreater 直接创建空节点，然后通过路由跳转进入 TopicTfUpdater
 */
class TopicTfCreater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return null;
    }

    componentWillMount() {
    }

    componentDidMount() {
        const {node}=this.props;
        var data={
                    type:node_type,
                    data:{}
                };
        tree.mk_son_by_data(node._id,data).then(new_node=>{
                location.href="#/manage/"+new_node._id
            });
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
        PubSub.unsubscribe( this.token );
    }
}

module.exports = TopicTfCreater;
