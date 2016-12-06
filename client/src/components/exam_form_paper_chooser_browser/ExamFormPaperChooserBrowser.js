require('./ExamFormPaperChooserBrowser.less');
import  {icon,name} from "../common";
import {Well,Button,Glyphicon,Grid,Row,Col}from 'react-bootstrap';
import cx from 'classnames';


class ExamFormPaperChooserBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        let me = this;
        const {node}=this.state;
        const nodes=node._children;
        return (
            <div className='cells' >
                {nodes.map(node=> this.wrapNode(node) )}
            </div>
        );
    }
    wrapNode(node){
         const {v}=this.props;
         if(node._data.type=='ks1/paper/folder'){
            return <div  className='cell' key={node._gid} onClick={()=>this.choosePaperFolder(node)}>{icon(node)}<div>{name(node)}</div></div>;
         }else{
            return <div  className={cx('cell',{selected:this.isChoosen(node)})} key={node._gid} onClick={()=>this.choosePaper(node)}>
                       {icon(node)}
                       {this.isChoosen(node)?<Glyphicon glyph="ok" style={{float:"right"}} />:""}
                       <div>{name(node)}</div>
                    </div>;
        }
     }

    isChoosen(node){
        const {choosen}=this.state;
        return choosen===node._gid;
    }
    choosePaper(node){
        PubSub.publish('paper.choose',node);
        console.log('paper.choose',node)
    }
    choosePaperFolder(node){
        PubSub.publish('paper.goto',node._gid);
    }

    componentWillMount() {
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
    }
}

module.exports = ExamFormPaperChooserBrowser;
