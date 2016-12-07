const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
import Nav from '../nav';
import RestSummary from '../rest_summary';
import Reader from '../reader';
import TreePathReader from '../treepathreader';
import RestReader from '../rest_reader';
function goto(url){
  location.href='#'+url;
}

/**
 * 考试安排主页
 */
class Exams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/exams"/>
                 <div className='children-grid'>
                   <div className='cells clearfix'>
                      <div className='cell create' onClick={()=>goto('/exams/create')}>
                         <i className='fa fa-plus fa-4x'/>
                      </div>
                  </div>
                </div>
                <RestReader view={RestSummary} url="/api/exam" 
                    type="ks1/exam" route="exams"/>
            </div>
        );
    }
}

module.exports = Exams;
