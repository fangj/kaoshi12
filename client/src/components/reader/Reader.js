import { PropTypes } from "react";
const tree=require('../../tree/tree-cache')('_api');
const treetool=require('../../tree/tool')(tree);

var util=require('../util');

/**
 * Reader用于读取gid或者path节点，交由view显示
 * 可以读取节点的子孙节点内容，深度由level决定
 * 读取的节点作为node注入view
 * subscribe订阅更新信号，收到信号时会更新自己
 */
class Reader extends React.Component {

    static propTypes = {
        view: PropTypes.func.isRequired,
        gid: PropTypes.string,
        path: PropTypes.string,
        level:PropTypes.number, //展开的层次，0为不展开
        subscribe: PropTypes.array
    }


    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        // console.log('render reader')
        let me = this;
        const {node}=this.state;
        if(!node){
            return null;
        }else{
            const {view,...others}=this.props;
            const View=view;
            return <View node={node} {...others}/>
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.fetchData(this.props);
        const me=this;
        var mySubscriber = function( msg, data ){
            console.log( msg, data );
            // me.forceUpdate();
            me.fetchData();
        };
        const subscribe=this.props.subscribe||[];
        this.tokens=subscribe.map(msg=>{
            console.log('subscribe msg',msg);
            return PubSub.subscribe( msg, mySubscriber );
        });
    }


    fetchData(props){
        if(this.cancelablePromise){
            this.cancelablePromise.cancel();
        }
        this.cancelablePromise = util.makeCancelable(
          this._fetchData(props)
        );
        this.cancelablePromise
          .promise
          .then(node=>{this.setState({node});})
          .catch((reason) => {
            //console.log('isCanceled', reason.isCanceled)
            if(!reason.isCanceled){
                Promise.reject(reason);
            }
      });
    }

    _fetchData(props){
        const {gid,level,path}=props;
        if(gid!==undefined){
            return this.fetchDataByGid(gid,level);
        }else if(path){
            return tree.namepath2node(path).then(node=>this.fetchDataByNode(node,level));
        }   
    }

    _fetchDataByGid(gid,level){ //服务器端展开，没有缓存。未来可以拆解到缓存中
        return tree.read_big_node(gid,level);
    }

    fetchDataByGid(gid,level){ //客户端展开，可利用缓存
        // debugger;
        return tree.read(gid).then(node=>this.fetchDataByNode(node,level))
    }
    
    fetchDataByNode(node,level){ //客户端展开，可利用缓存
        if(!level){
            return node;
        }else{
            return treetool.expand(node,level);
        }
    }



    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }


    componentWillUnmount() {
        this.cancelablePromise.cancel();
        this.tokens.map(token=>{
            PubSub.unsubscribe( token );
            console.log('unsubscribe',token);
        });
    }
}

module.exports = Reader;
