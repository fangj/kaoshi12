require('./PageUpload.less');
import Uploader from "../../components/uploader";
import Reader from "../../components/reader";
import Dropbox from "../../components/dropbox";
import Imageviewer from "../../components/imageviewer";
//给出pgid,可以上传图片作为pgid子节点，并显示pgid所有子节点图片。
class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {pgid}=this.props;
        return (
            <div >
                <Uploader view={Dropbox} pgid={pgid}/>
                <Reader view={Imageviewer} gid={pgid} level={1}/>
            </div>
        );
    }

    componentDidMount() {
        const me=this;
        var mySubscriber = function( msg, data ){
            console.log( msg, data );
            me.forceUpdate();
        };
        this.token = PubSub.subscribe( 'img.saved', mySubscriber );
        this.token2 = PubSub.subscribe( 'img.removed', mySubscriber );
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token );
        PubSub.unsubscribe( this.token2 );
    }
}

module.exports = Upload;
