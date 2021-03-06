require('./BankFolder.less');
import Reader from '../reader';
import TreePathReader from '../treepathreader';
import Nav from '../nav';
import BankSummary from '../bank_summary';
import BankFolderUpdater from '../bank_folder_updater';

/**
 * 习题集名称修改，习题集子节点概要
 */
class BankFolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {node}=this.props;
        console.log('BankFolder render ',node)
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to={node._id}/>
                <BankFolderUpdater node={node}/>
                <Reader view={BankSummary} gid={node._id} level={1}/>
            </div>
        );
    }
}

module.exports = BankFolder;
