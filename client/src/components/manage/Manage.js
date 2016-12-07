require('./Manage.less');
const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);

import Main from '../main';
import Banks from '../banks';
import Papers from '../papers';
import Exams from '../exams';
import Teachers from '../teachers';
import Classes from '../classes';
import Rooms from '../rooms';
import SonEditor from '../soneditor';
import TopicChoiceCreater from '../topic_choice_creater';
import TopicQaCreater from '../topic_qa_creater';
import TopicTfCreater from '../topic_tf_creater';
import TopicReviseCreater from '../topic_revise_creater';
import BankFolder from '../bank_folder';
import BankFolderCreater from '../bank_folder_creater';
import PaperFolder from '../paper_folder';
import PaperFolderCreater from '../paper_folder_creater';
import PaperCreater from '../paper_creater';
import PaperUpdater from '../paper_updater';
import TopicChoiceUpdater from '../topic_choice_updater';
import TopicQaUpdater from '../topic_qa_updater';
import TopicTfUpdater from '../topic_tf_updater';
import TopicReviseUpdater from '../topic_revise_updater';


function v(node){
    if(!node){
        return null;
    }
    if(node._data&&node._data.type){
        return vByType(node._data.type,node);
    }
    const components={
        menu:<Main/>,
        banks:<Banks/>,
        papers:<Papers/>,
        exams:<Exams/>,
        teachers:<Teachers/>,
        classes:<Classes/>,
        rooms:<Rooms/>
    }
    return components[node._name]||null;
}

function vByType(type,node){
    const components={
        "ks1/banks":<Banks/>,
        "ks1/papers":<Papers/>,
        "ks1/exams":<Exams/>,
        "ks1/teachers":<Teachers/>,
        "ks1/classes":<Classes/>,
        "ks1/rooms":<Rooms/>,
        "ks1/bank/folder":<BankFolder node={node}/>,
        "ks1/choice":<TopicChoiceUpdater node={node}/>,
        "ks1/qa":<TopicQaUpdater node={node}/>,
        "ks1/tf":<TopicTfUpdater node={node}/>,
        "ks1/revise":<TopicReviseUpdater node={node}/>,
        "ks1/paper":<PaperUpdater node={node}/>,
        "ks1/paper/folder":<PaperFolder node={node}/>,

    }
    return components[type]||null;
}

/**
 * 在Manage中，路由表现为一个节点id
 * Manage组件负责取出id的节点内容，根据其类型以及vtype决定路由
 * 优先看来自路由的vtype,通常是创建子节点
 * 然后查看node._data.type,通常是更新节点
 * 最后查看node._name,通常是主菜单项节点
 */
class Manage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {node,vtype}=this.state;
        // console.log('manage render ',node,vtype)
        switch(vtype){//优先看vtype
            case "son_editor_bank_folder":return <BankFolderCreater node={node}/>;
            case "son_editor_choice":return <TopicChoiceCreater node={node}/>;
            case "son_editor_qa":return <TopicQaCreater node={node}/>;
            case "son_editor_revise":return <TopicReviseCreater node={node}/>;
            case "son_editor_tf":return <TopicTfCreater node={node}/>;
            case "son_editor_paper_folder":return <PaperFolderCreater node={node}/>;
            case "son_editor_paper":return <PaperCreater node={node}/>;
            default:return v(node);//其次看node
        }
    }

    componentDidMount() {
        this.refresh(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.refresh(nextProps);
    }

    refresh(props){
        const gid=props.params.gid;
        const vtype=props.params.vtype;
        // debugger;
        tree.read(gid).then(node=>{
            this.setState({node,vtype})
        })
    }
}

module.exports = Manage;
