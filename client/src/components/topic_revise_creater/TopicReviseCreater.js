require('./TopicReviseCreater.less');

const tree=require('../../tree/tree-cache')('_api');
const node_type='ks1/revise';

/**
 * 原先是改错题的创建组件
 * 因为要加入图片，而图片作为子节点，必须要有父节点
 * 所以 TopicReviseCreater 直接创建空节点，然后通过路由跳转进入 TopicReviseUpdater
 */
class TopicReviseCreater extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }

    componentDidMount() {
        const {node}=this.props;
        var data={
                    type:node_type,
                    data:{}
                };
        tree.mk_son_by_data(node._id,data).then(new_node=>{
                location.href="#/manage/"+new_node._id
        });
    }
}

module.exports = TopicReviseCreater;
