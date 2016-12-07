require('./Imageviewer.less');
const tree=require('../../tree/tree-cache')('_api');
const treetool=require('../../tree/tool')(tree);

class Imageviewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urls:[]
        };
    }

    render() {
        let me = this;
        const {node}=this.props;
        var urls=[];
        for (var i = node._children.length - 1; i >= 0; i--) {
            var child=node._children[i];
            if(child._data.type=='tn/nfile/url'){
                urls.push({gid:child._id,url:child._data.data});
            }
        }
        return (
            <div className="imageviewer">
                {urls.map(url=><img key={url.gid} id={url.gid} src={url.url} onClick={()=>this.remove(url.gid)}
                    onLoad={(e)=>{
                        var img=e.target;
                        var obj={gid:url.gid,w:img.width,h:img.height}
                        PubSub.publish('img-load',obj);
                        console.log('publish,img-load',obj)
                }}/>)}
            </div>
            //img-load：通知AnswersheetForm去收集图片
        );
    }

    remove(gid){
        treetool.remove(gid).then(node=>{
            PubSub.publish('img.removed',node);
        })
    }

    componentWillMount() {
    }

    componentDidMount() {

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

module.exports = Imageviewer;
