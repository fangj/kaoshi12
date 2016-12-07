const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
import Nav from '../nav';
import PaperSummary from '../paper_summary';
import Reader from '../reader';
import TreePathReader from '../treepathreader';

/**
 * 试卷主页
 */
class Papers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/papers"/>
                <Reader view={PaperSummary} path="0/menu/papers" level={1}/>
            </div>
        );
    }

}
module.exports = Papers;
