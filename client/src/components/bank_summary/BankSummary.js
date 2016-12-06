require('./BankSummary.less');
var common=require('../common');
const goto=url=>{location.href='#'+url}

class BankSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    const {node}=this.props;
    //题型选择
    return (
      <div className='children-grid bank_summary'>
       <div className='cells clearfix'>
          <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_bank_folder')}>
             <i className='fa fa-plus fa-3x'/>
             <div>文件夹</div>
          </div>
          <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_choice')}>
             <i className='fa fa-plus fa-3x'/>
             <div>选择题</div>
          </div>
          <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_tf')}>
             <i className='fa fa-plus fa-3x'/>
             <div>判断题</div>
          </div>
          <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_qa')}>
             <i className='fa fa-plus fa-3x'/>
             <div>问答题</div>
          </div>
          <div className='cell create' onClick={()=>goto('/manage/'+node._gid+'/son_editor_revise')}>
             <i className='fa fa-plus fa-3x'/>
             <div>改错题</div>
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

module.exports = BankSummary;
