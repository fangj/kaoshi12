import { PropTypes } from "react";
var _=require('lodash');
const tree=require('../../tree/tree-cache')('_api');
const treetool=require('../../tree/tool')(tree);
var util=require('../util');

const hasSlash=(str)=>str.indexOf('/')>-1;

function path2gid(treetool,gidOrPath){
  return hasSlash(gidOrPath)?treetool.createNodeByPath(gidOrPath).then(node=>node._id):Promise.resolve(gidOrPath);//有斜杠的视为路径，没有的视为gid直接返回
}
const _path2gid=_.curry(path2gid)(treetool);//单参数函数fn(gidOrPath)

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
            console.log( msg, data );
            // me.forceUpdate();
            me.fetchData(me.props);
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

    // _fetchData(props){
    //     // debugger;
    //     const me=this;
    //     var {from,to}=props;
    //     if(to===undefined){
    //         to=from;
    //     }
    //     return me.prepare(from,"from")
    //     .then(()=>{
    //         // console.log("from",me.from);
    //         return me.prepare(to,"to")
    //     })
    //     .then(()=>{
    //         // console.log("to",me.to);
    //         if(me.from===me.to){
    //             return [me.to];
    //         }else{  
    //             return treetool.expandToRoot([me.to],me.from)
    //         }
    //     })
    //     .then(gids=>{
    //         // console.log("gids",gids);
    //         return tree.read_nodes(gids);
    //     }).then(nodes=>{
    //         // console.log('nodes',nodes)
    //         return nodes;
    //     })
 
    // }

    // prepare(gidOrPath,name){
    //     // debugger;
    //     const me=this;
    //     if(typeof gidOrPath==='number'){
    //         me[name]=gidOrPath;
    //         return Promise.resolve();
    //     }else if(typeof gidOrPath==='string'){
    //         return tree.lidpath2gid(gidOrPath).then(gid=>{
    //             return me[name]=gid;
    //         })
    //     }else{
    //         throw name+"should be number or string"
    //     }
    // }
    // 
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
            return [to];
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
