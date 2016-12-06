import { PropTypes } from "react";
const tree=require('../../tree/tree-cache')('_api');

var util=require('../util');


class TreeNodesReader extends React.Component {

    static propTypes = {
        view: PropTypes.func.isRequired,
        gids: PropTypes.array,
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
        const {nodes}=this.state;
        if(!nodes){
            return null;
        }else{
            const {view,...others}=this.props;
            const View=view;
            return <View nodes={nodes} {...others}/>
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.fetchData(this.props);
        const me=this;
        var mySubscriber = function( msg, data ){
            console.log( msg, data );
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
          .then(nodes=>{this.setState({nodes});})
          .catch((reason) => {
            // console.log('isCanceled', reason.isCanceled)
            if(!reason.isCanceled){
                Promise.reject(reason);
                
            }
      });
    }

    _fetchData(props){
        const {gids}=props;
        return tree.read_nodes(gids); 
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


module.exports = TreeNodesReader;
