const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
import Nav from '../nav';
import BankSummary from '../bank_summary';
import Reader from '../reader';
import TreePathReader from '../treepathreader';

class Banks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/banks"/>
                <Reader view={BankSummary} path="0/menu/banks" level={1}/>
            </div>
        );
    }

}

module.exports = Banks;
