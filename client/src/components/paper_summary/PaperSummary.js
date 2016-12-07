require('./PaperSummary.less');
var common=require('../common');
const goto=url=>{location.href='#'+url}

/**
 * 试卷概要，显示当前节点node下的所有子项
 * 可以在当前节点下创建试卷集或者试卷
 */
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
              <div className='cell create' onClick={()=>goto('/manage/'+node._id+'/son_editor_paper_folder')}>
                 <i className='fa fa-plus fa-3x'/>
                 <div>试卷集</div>
              </div>
              <div className='cell create' onClick={()=>goto('/manage/'+node._id+'/son_editor_paper')}>
                 <i className='fa fa-plus fa-3x'/>
                 <div>试卷</div>
              </div>
            </div>
            <hr/>
           <div className='cells clearfix'>
            {
              node._children.map(node=>{console.log(node);
                return <div key={node._id} className='cell' onClick={()=>goto("/manage/"+node._id)}>
                  {common.icon(node)} 
                  <div>{common.name(node)}</div>
                </div>
                })
            }
          </div>
        </div>
        );
      }
}

module.exports = PaperSummary;
