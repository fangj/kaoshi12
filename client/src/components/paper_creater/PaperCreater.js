require('./PaperCreater.less');
import Writer from '../writer';
import TreePathReader from '../treepathreader';
import Nav from '../nav';

import PaperForm from '../paper_form';

/**
 * 使用 PaperForm 新建子节点并保存，保存后发送saved消息
 * PaperCreater 收到saved消息后跳转到父节点 #/manage/{new_node._link.p}
 */
class PaperCreater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            node:props.node
        };
    }

    render() {
        let me = this;
        const {node}=this.state;
        return (
            <div className="paper_creater">
                <TreePathReader view={Nav} from="0/menu" to={node._id}/>
                <Writer pgid={node._id} view={PaperForm} publish="saved"/>

            </div>
        );
    }

    componentDidMount() {
        this.token=PubSub.subscribe( "saved",(msg,new_node)=>{
            location.href="#/manage/"+new_node._link.p;
        });//保存数据后到父节点
    }

    componentWillReceiveProps(nextProps) {
        this.setState({node:nextProps.node})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token );
    }
}

module.exports = PaperCreater;
