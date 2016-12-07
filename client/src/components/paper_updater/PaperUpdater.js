require('./PaperUpdater.less');
import Writer from '../writer';
import TreePathReader from '../treepathreader';
import Nav from '../nav';

import PaperForm from '../paper_form';

/**
 * 试卷修改与删除
 */
class PaperUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {node}=this.props;
        return (
            <div className="paper_updater">
                <TreePathReader view={Nav} from="0/menu" to={node._id}/>
                <Writer node={node} view={PaperForm} publish={{update:"updated",remove:"removed"}}/>
            </div>
        );
    }

    componentDidMount() {
        this.tokenUpdate=PubSub.subscribe( "updated",(msg,new_node)=>{
            location.href="#/manage/"+new_node._link.p;
        });//更新数据后到父节点
        this.tokenRemove=PubSub.subscribe( "removed",(msg,new_node)=>{
            location.href="#/manage/"+new_node._link.p;
        });//删除数据后到父节点
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.tokenUpdate );
        PubSub.unsubscribe( this.tokenRemove );
    }
}

module.exports = PaperUpdater;
