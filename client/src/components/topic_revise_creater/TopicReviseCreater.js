require('./TopicReviseCreater.less');

const tree=require('../../tree/tree-cache')('_api');
const node_type='ks1/revise';
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
        tree.mk_son_by_data(node._gid,data).then(new_node=>{
                location.href="#/manage/"+new_node._gid
        });
    }
}

module.exports = TopicReviseCreater;
