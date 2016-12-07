require('./PaperTopicChooser.less');
import TreePathReader from '../treepathreader';
import Nav from '../paper_topic_chooser_nav';

import PaperTopicChooserBrowser from '../paper_topic_chooser_browser';
import Reader from '../reader';
const hasSlash=(str)=>str.indexOf('/')>-1;

/**
 * 展示题库面包菜单，接受'topic.goto'消息来切换面包菜单的最后节点
 * 使用PaperTopicChooserBrowser展示最后节点的子节点题目供选择
 */
class PaperTopicChooser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            to:"0/menu/banks"
        };
    }

    render() {
        let me = this;
        const {to}=this.state;
        const {selected_questions}=this.props;
        return (
            <div className="paper_topic_chooser">
                <TreePathReader view={Nav} from="0/menu/banks" to={to}/>
               { hasSlash(to)?<Reader view={PaperTopicChooserBrowser} path={to} level={1} selected_questions={selected_questions}/>:
                <Reader view={PaperTopicChooserBrowser} gid={to} level={1} selected_questions={selected_questions}/>}
            </div>
        );
    }

    componentWillMount() {
        this.token_goto=PubSub.subscribe( "topic.goto",(msg,gid)=>{
            console.log('topic.goto',gid);
            this.setState({to:gid});
        });//保存数据后到新节点
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token_goto );
    }
}

module.exports = PaperTopicChooser;
