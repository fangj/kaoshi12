require('./PaperTopicChooser.less');
import TreePathReader from '../treepathreader';
import Nav from '../paper_topic_chooser_nav';

import PaperTopicChooserBrowser from '../paper_topic_chooser_browser';
import Reader from '../reader';

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
               { typeof to==='number'?<Reader view={PaperTopicChooserBrowser} gid={to} level={1} selected_questions={selected_questions}/>:
                <Reader view={PaperTopicChooserBrowser} path={to} level={1} selected_questions={selected_questions}/>}
            </div>
        );
    }

    componentWillMount() {
        this.token_goto=PubSub.subscribe( "topic.goto",(msg,gid)=>{
            console.log('topic.goto',gid);
            this.setState({to:gid});
        });//保存数据后到新节点
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
        PubSub.unsubscribe( this.token_goto );
    }
}

module.exports = PaperTopicChooser;
