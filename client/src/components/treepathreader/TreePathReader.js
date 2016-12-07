import { PropTypes } from "react";
var _=require('lodash');
const tree=require('../../tree/tree-cache')('_api');
const treetool=require('../../tree/tool')(tree);
var util=require('../util');

//有没有斜杠是区分gid和namepath
//gid和namepath是表达一个节点的2种等价方式
//gid为一个id，早期版本中为一个数字，现在版本中可能是数字也可能是字符串
//namepath::=gid/name/name 是从某个gid节点开始，依次向下的命名节点
const hasSlash=(str)=>str.indexOf('/')>-1;

//将namepath转为gid,这里使用了createNodeByPath,如果不存在会创建，但不会重复创建
function path2gid(treetool,gidOrPath){
  return hasSlash(gidOrPath)?treetool.createNodeByPath(gidOrPath).then(node=>node._id):Promise.resolve(gidOrPath);//有斜杠的视为路径，没有的视为gid直接返回
}

//上面函数的单参数版本
const _path2gid=_.curry(path2gid)(treetool);//单参数函数fn(gidOrPath)

/**
 * TreePathReader用于显示一个view,为之注入nodes
 * nodes是从祖先节点from到子孙节点to之间的节点，包含两端
 * from和to可以表达为gid或namepath
 * subscribe是一个字符串数组，收到数组中的字符串会刷新自己
 */
class TreePathReader extends React.Component {

    static propTypes = {
        view: PropTypes.func.isRequired,
        from: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.number
            ]),
        to: React.PropTypes.oneOfType([
              React.PropTypes.string,
              React.PropTypes.number
            ]),
        subscribe: React.PropTypes.array
    }


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log('render reader')
        let me = this;
        const {nodes}=this.state;
        if(!nodes){
            return null;
        }else{
            const View=this.props.view;
            return <View nodes={nodes}/>
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.fetchData(this.props);
        const me=this;
        var mySubscriber = function( msg, data ){
            // console.log( msg, data );
            // me.forceUpdate();
            me.fetchData(me.props);
        };
        const subscribe=this.props.subscribe||[];
        this.tokens=subscribe.map(msg=>{
            // console.log('subscribe msg',msg);
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
          .then(nodes=>{
            console.log('fetchData',nodes)
            this.setState({nodes});
            })
          .catch((reason) => {
            if(!reason.isCanceled){
                Promise.reject(reason);
            }
          });
    }

    
    async _fetchData(props){
        var {from,to}=props;
        if(hasSlash(from)){//路径转为gid
            from =await _path2gid(from);
        }
        if(to===undefined){
            to=from;
        }
        if(hasSlash(to)){//路径转为gid
            to =await _path2gid(to);
        }
        if(from===to){
            return tree.read_nodes([to]);
        }else{  
            return treetool.expandToRoot([to],from).then(tree.read_nodes);
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

module.exports = TreePathReader;
