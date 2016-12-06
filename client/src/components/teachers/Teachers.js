const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
import Nav from '../nav';
import RestSummary from '../rest_summary';
import Reader from '../reader';
import TreePathReader from '../treepathreader';
import RestReader from '../rest_reader';
const goto=url=>{location.href='#'+url}


class Teachers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/teachers"/>
                <div className='children-grid'>
                   <div className='cells clearfix'>
                      <div className='cell create' onClick={()=>goto('/teachers/create')}>
                         <i className='fa fa-plus fa-4x'/>
                      </div>
                  </div>
                </div>
                <RestReader view={RestSummary} url="/api/teacher" 
                    type="ks1/teacher" route="teachers"/>
            </div>
        );
    }

}

module.exports = Teachers;
