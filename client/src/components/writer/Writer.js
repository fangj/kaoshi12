require('./Writer.less');
import { PropTypes } from "react";
const tree=require('../../tree/tree-cache')('_api');
const treetool=require('../../tree/tool')(tree);



class Writer extends React.Component {

   static propTypes = {
    view: PropTypes.func.isRequired,
    node:PropTypes.object,
    path: PropTypes.string,
    ppath: PropTypes.string,
    gid: PropTypes.number,
    bgid: PropTypes.number,
    pgid: PropTypes.number,
    publish:PropTypes.string
   }


    constructor(props) {
        super(props);
        this.state = {
        };
         
    }

    render() {
        // debugger;
        // const View=this.props.view;
        const {view,...others}=this.props;
        const View=view;
        var {gid,path,node}=this.props;
        if(gid||path||node){//更新或删除
            node=node||this.state.node;
            if(node===undefined){
                return null;//等待异步取得数据
            }else{
                return <View node={node} update={this.update.bind(this)} remove={this.remove.bind(this)} {...others}/> ;
            }
        }else{//新建
            return <View save={this.save.bind(this)} {...others}/> ;
        }
    }

    update(data){
        return this._update(data).then(node=>{
            const {publish}=this.props;
            if(publish){
                if(publish.update){
                    PubSub.publish(publish.update,node);
                }else if(typeof publish=='string'){
                    PubSub.publish(publish,node);
                }
            }
            return node;
        })
    }

    _update(data){
        const {gid,path,node}=this.props;
        if(gid){
            return tree.update(gid,data);
        }else if(node){
            return tree.update(node._id,data);
        }else if(path){
            return tree.namepath2node(path)
                        .then(node=>tree.update(node._id,data));
        }else{
            throw "update node needs gid or path or node";
        }
    }

    remove(){
        return this._remove().then(node=>{
            const {publish}=this.props;
            if(publish){
                if(publish.remove){
                    PubSub.publish(publish.remove,node);
                }else if(typeof publish=='string'){
                    PubSub.publish(publish,node);
                }
            }
        });
    }
    _remove(){
        const {gid,path,node}=this.props;
        if(gid){
            return tree.remove(gid);
        }else if(node){
            return tree.remove(node._id);
        }else if(path){
            return tree.remove_by_path(path);
        }else{
            throw "remove node needs gid or path or node";
        }
    }

    save(data,lid){
        return this._save(data,lid).then(node=>{
            const {publish}=this.props;
            // debugger;
            if(publish){
                if(publish.save){
                    PubSub.publish(publish.save,node);
                }else if(typeof publish=='string'){
                    PubSub.publish(publish,node);
                }
            }
            return node;
        })
    }
    _save(data,lid){
        console.log('save',data);
        const {bgid,pgid,ppath}=this.props;
        if(bgid){
            return tree.mk_brother_by_data(bgid,data,lid);
        }else if(pgid!=undefined){
            return tree.mk_son_by_data(pgid,data,lid);
        }else if(ppath){
            return this.createDataNodeByPath(ppath,data,lid);
        }else{
            throw "create node needs pgid or bgid";
        }
    }

    createDataNodeByPath(ppath,data,lid){
        return treetool.fetchOrCreatePath(ppath).then(pgid=>{
            return tree.mk_son_by_data(pgid,data,lid);
        }); 
    }
                

    componentWillMount() {
    }

    componentDidMount() {
        const {gid,path}=this.props;
        if(gid){
           tree.read(gid).then(node=>{
                this.setState({node});
            }) 
        }else if(path){
           tree.read_by_path(path).then(node=>{
                this.setState({node});
            }) 
        }
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
    }
}

module.exports = Writer;
