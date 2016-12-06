require('./Soneditor.less');
const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
import Nav from '../nav';
import Reader from '../reader';
import TreePathReader from '../treepathreader';

class SonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            node:props.node
        };
    }

    render() {
        let me = this;
        const {node}=this.state;
        const components={
            papers:<PaperEditor node={node}/>,
            exams:<ExamEditor node={node}/>,
            teachers:<TeacherEditor node={node}/>,
            classes:<ClassEditor node={node}/>,
            rooms:<RoomEditor node={node}/>
        }
        return (
            <div className="soneditor">
                 <TreePathReader view={Nav} from="0/menu" to={node._gid}/>
                 {components[node._lid]}
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({node:nextProps.node})
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

module.exports = SonEditor;
