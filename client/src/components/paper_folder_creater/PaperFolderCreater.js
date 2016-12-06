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
                <TreePathReader view={Nav} from="0/menu" to={node._gid}/>
                <Writer pgid={node._gid} view={FolderForm} publish="saved"/>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
        const {node}=this.props;
        this.token=PubSub.subscribe( "saved",(msg,new_node)=>{
        location.href="#/manage/"+new_node._gid}  );//保存数据后到新节点
    }

    componentWillReceiveProps(nextProps) {
        this.setState({node:nextProps.node})
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

module.exports = FolderCreater;
