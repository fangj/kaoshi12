require('./PaperFolderCreater.less');
import Writer from '../writer';
import Form from "react-jsonschema-form";
import TreePathReader from '../treepathreader';
import Nav from '../nav';


const schema = {
  title: "试题集",
  type: "object",
  required: ["name"],
  properties: {
    name: {type: "string", title: "试题集名称"},
  }
};
const node_type='ks1/paper/folder';

const FolderForm=(props)=>(
    <div style={{padding:"30px"}}>
        <Form schema={schema}
                onSubmit={(obj)=>props.save({
                    type:node_type,
                    data:obj.formData
                },obj.formData.name)
            }>
        <button type="submit" className="btn btn-success">保存</button>
        </Form>
    </div>);

/**
 * 使用FolderForm新建子节点并保存，保存后发送saved消息
 * FolderCreater收到saved消息后跳转到#/manage/{new_node._id}
 */
class FolderCreater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            node:props.node
        };
    }

    render() {

        let me = this;
        const {node}=this.state;
        console.log('folderCreater render ',node)
        return (
            <div className="folder_creater">
                <TreePathReader view={Nav} from="0/menu" to={node._id}/>
                <Writer pgid={node._id} view={FolderForm} publish="saved"/>
            </div>
        );
    }

    componentDidMount() {
        const {node}=this.props;
        this.token=PubSub.subscribe( "saved",(msg,new_node)=>{
        location.href="#/manage/"+new_node._id}  );//保存数据后到新节点
    }

    componentWillReceiveProps(nextProps) {
        this.setState({node:nextProps.node})
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token );
    }
}

module.exports = FolderCreater;
