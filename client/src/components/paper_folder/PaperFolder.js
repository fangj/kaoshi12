require('./PaperFolder.less');

import Reader from '../reader';
import TreePathReader from '../treepathreader';
import Nav from '../nav';
import PaperSummary from '../paper_summary';
import PaperFolderUpdater from '../paper_folder_updater';

/**
 * 试卷集修改与试卷概要
 */
class PaperFolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {node}=this.props;
        console.log('PaperFolder render ',node)
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to={node._id}/>
                <PaperFolderUpdater node={node}/>
                <Reader view={PaperSummary} gid={node._id} level={1}/>
            </div>
        );
    }
}


module.exports = PaperFolder;
