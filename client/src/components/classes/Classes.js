const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
import Nav from '../nav';
import RestSummary from '../rest_summary';
import Reader from '../reader';
import TreePathReader from '../treepathreader';
import RestReader from '../rest_reader';
const goto=url=>{location.href='#'+url}

class Classes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/classes"/>
                <div className='children-grid'>
                   <div className='cells clearfix'>
                      <div className='cell create' onClick={()=>goto('/classes/create')}>
                         <i className='fa fa-plus fa-4x'/>
                      </div>
                  </div>
                </div>
                <RestReader view={RestSummary} url="/api/class" 
                    type="ks1/class" route="classes"/>
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

module.exports = Classes;
