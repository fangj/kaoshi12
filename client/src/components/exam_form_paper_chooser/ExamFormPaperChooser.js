require('./ExamFormPaperChooser.less');
import TreePathReader from '../treepathreader';
import Nav from '../exam_form_paper_chooser_nav';

import PaperChooserBrowser from '../exam_form_paper_chooser_browser';
import Reader from '../reader';
const hasSlash=(str)=>str.indexOf('/')>-1;

class ExamFormPaperChooser extends React.Component {
    static propTypes = {
        choosen: React.PropTypes.string
    }; 

    constructor(props) {
        super(props);
        this.state = {
            to: "0/menu/papers",
            ...props
        };
    }

    render() {
        let me = this;
        const {to,choosen}=this.state;
        return (
            <div className="exam_form_paper_chooser">
                 <TreePathReader view={Nav} from="0/menu/papers" to={to}/>
               { hasSlash(to)?<Reader view={PaperChooserBrowser} path={to} level={1} choosen={choosen}/>:
                <Reader view={PaperChooserBrowser} gid={to} level={1} choosen={choosen}/>}
            </div>
        );
    }

    componentWillMount() {
        this.token_goto=PubSub.subscribe( "paper.goto",(msg,gid)=>{
            console.log('paper.goto',gid);
            this.setState({to:gid});
        });//保存数据后到新节点
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
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

module.exports = ExamFormPaperChooser;
