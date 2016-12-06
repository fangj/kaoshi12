require('./PaperSummary.less');
var common=require('../common');
const goto=url=>{location.href='#'+url}

class PaperSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
       const {node}=this.props;
        return (
          <div className='children-grid paper_summary pad10'>
           <div className='cells clearfix'>
              <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_paper_folder')}>
                 <i className='fa fa-plus fa-3x'/>
                 <div>试卷集</div>
              </div>
              <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_paper')}>
                 <i className='fa fa-plus fa-3x'/>
                 <div>试卷</div>
              </div>
            </div>
            <hr/>
           <div className='cells clearfix'>
            {
              node._children.map(node=>{console.log(node);
                return <div key={node._gid} className='cell' onClick={()=>goto("/manage/"+node._gid)}>
                  {common.icon(node)} 
                  <div>{common.name(node)}</div>
                </div>
                })
            }
          </div>
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

module.exports = PaperSummary;
