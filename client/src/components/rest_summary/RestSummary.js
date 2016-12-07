require('./RestSummary.less');
var common=require('../common');

function goto(url){
  location.href='#'+url;
}

/**
 * 通用的概要显示组件，data=[item]
 * 每个item显示为一个图标common.icon(type)+名称common.name(d)
 * 点击图标后跳转到路由/route/item._id
 * route为该类型数据的路由名
 */
class RestSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {data,type,route}=this.props;
        // console.log('render Summary',data,type)

        return (
          <div className='children-grid'>
           <div className='cells clearfix'>
            {
              data.map(d=>
                <div key={d._id} className='cell' onClick={()=>goto('/'+route+'/'+d._id)}>
                  {common.icon(type)}
                  <div>{common.name(d)}</div>
                </div>)
            }
          </div>
        </div>
        );
    }

}

module.exports = RestSummary;
