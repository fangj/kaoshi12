require('./TopicReviseUpdater.less');
import Writer from '../writer';
import Form from "react-jsonschema-form";
import TreePathReader from '../treepathreader';
import Nav from '../nav';
import ImageUploader from '../upload';
const userManager=require('../../components/user');


const schema = {
  title: "改错题",
  type: "object",
  required: ["question"],
  properties: {
    question: {type: "string", title: "问题"},
    content:{type: "string", title: "要改错的内容"},
    answer: {type: "string", title: "参考答案"},
  }
};
const uiSchema =  {
  question: {"ui:widget": "textarea"  },
  content: {"ui:widget": "textarea"  },
  answer: {"ui:widget": "textarea"  }
};
const node_type='ks1/revise';
const ReviseForm=(props)=>{
    const user=userManager.getUser();
    const isAdmin=user.isAdmin;
    return(
    <div style={{padding:"30px"}}>
        <Form schema={schema} uiSchema={uiSchema}
              formData={props.node._data.data}
                onSubmit={(obj)=>props.update({
                    type:node_type,
                    data:obj.formData
                })
            }>
        <ImageUploader pgid={props.node._id}/>
            
        <div className="btn-toolbar">
            <button type="submit" className="btn btn-success">保存</button>
            {!isAdmin?null:<button className="btn btn-danger" onClick={(e)=>{e.preventDefault();//不知为何submit会被调用，人为阻止
                var sure=confirm("确定要删除吗?");
              if(!sure){return}
                props.remove()}}>删除</button>}
        </div>
        </Form>
    </div>)};

/**
 * 改错题修改与删除
 */
class TopicReviseUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {node}=this.props;
        return (
            <div className="topic_choice_updater">
                <TreePathReader view={Nav} from="0/menu" to={node._id}/>
                <Writer node={node} view={ReviseForm} publish={{update:"updated",remove:"removed"}}/>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
        const {node}=this.props;
        this.token=PubSub.subscribe( "updated",()=>{location.href="#/manage/"+node._link.p}  );//保存数据后回到父节点
        this.tokenRemove=PubSub.subscribe( "removed",(msg,node)=>{
            location.href="#/manage/"+node._link.p}  );//保存数据后回到父节点
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
        PubSub.unsubscribe( this.token );
        PubSub.unsubscribe( this.tokenRemove );
    }

    componentWillUnmount() {
    }
}

module.exports = TopicReviseUpdater;
