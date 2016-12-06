require('./PaperCreater.less');
import Writer from '../writer';
import TreePathReader from '../treepathreader';
import Nav from '../nav';

import PaperForm from '../paper_form';

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
                <TreePathReader view={Nav} from="0/menu" to={node._gid}/>
                <Writer pgid={node._gid} view={PaperForm} publish="saved"/>

            </div>
        );
    }

    componentWillMount() {
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

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token );
    }
}

module.exports = PaperCreater;
