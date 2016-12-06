require('./ExamFormPaperChooserNav.less');

const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);
var util=require('../util');
import NavView from "../navview";



function name(node){
  var d=node._data;
  return d.title || d.data && (d.data.name ||d.data.question)||lid2name(node._lid)||node._lid||"noname";
}

function lid2name(lid) {
    const names={"menu":"主页","banks":"题库","papers":"试卷","exams":"考试","teachers":"教师","classes":"班级","rooms":"考场"}
    return names[lid];
}

class ExamFormPaperChooserNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes:props.nodes
        };
    }



    render() {
        const items=this.state.nodes.map(node=>({title:name(node),onClick:()=>this.onClick(node),key:node._gid}))
        return (
            <NavView items={items}/>
        );
    }

    onClick(node){
        console.log('nav onClick',node._gid);
        PubSub.publish('paper.goto',node._gid);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({nodes:nextProps.nodes})
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


module.exports = ExamFormPaperChooserNav;
