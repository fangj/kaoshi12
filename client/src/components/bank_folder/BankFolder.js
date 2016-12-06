require('./BankFolder.less');
import Reader from '../reader';
import TreePathReader from '../treepathreader';
import Nav from '../nav';
import BankSummary from '../bank_summary';
import BankFolderUpdater from '../bank_folder_updater';

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
                <TreePathReader view={Nav} from="0/menu" to={node._gid}/>
                <BankFolderUpdater node={node}/>
                <Reader view={BankSummary} gid={node._gid} level={1}/>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
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
    }
}

module.exports = BankFolder;
