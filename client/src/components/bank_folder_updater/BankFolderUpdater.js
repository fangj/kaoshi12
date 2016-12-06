require('./BankFolderUpdater.less');
import Writer from '../writer';
import Form from "react-jsonschema-form";
import TreePathReader from '../treepathreader';
import Nav from '../nav';


const schema = {
  title: "文件夹",
  type: "object",
  required: ["name"],
  properties: {
    name: {type: "string", title: "文件夹名称"},
  }
};
const node_type='ks1/bank/folder';

const FolderForm=(props)=>(
    <div style={{padding:"30px"}}>
        <Form schema={schema}
              formData={props.node._data.data}
                onSubmit={(obj)=>props.update({
                    type:node_type,
                    data:obj.formData
                })}>
        <div>
            <button type="submit" className="btn btn-success">保存</button>
            <button className="btn btn-danger" onClick={(e)=>{e.preventDefault();//不知为何submit会被调用，人为阻止
                var sure=confirm("确定要删除吗?");
              if(!sure){return}
                props.remove()}}>删除</button>
        </div>
        </Form>
    </div>);

class FolderUpdater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            node:props.node
        };
    }

    render() {

        let me = this;
        const {node}=this.state;
        console.log('FolderUpdater render ',node)
        return (
            <div className="folder_updater">
                <Writer node={node} view={FolderForm} publish={{update:"updated",remove:"removed"}}/>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
        const {node}=this.props;
        this.token=PubSub.subscribe( "updated",()=>{location.href="#/manage/"+node._link.p}  );//保存数据后回到父节点
        this.tokenRemove=PubSub.subscribe( "removed",(msg,node)=>{
            location.href="#/manage/"+node._link.p}  );//保存数据后回到当前节点
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
        PubSub.unsubscribe( this.tokenRemove );
    }
}

module.exports = FolderUpdater;
