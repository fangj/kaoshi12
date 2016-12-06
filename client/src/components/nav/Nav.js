require('./Nav.less');

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

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes:props.nodes
        };
    }



    render() {
        const items=this.state.nodes.map(node=>({title:name(node),href:"#/manage/"+node._gid}))
        return (
            <NavView items={items}/>
        );
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

module.exports = Nav;
