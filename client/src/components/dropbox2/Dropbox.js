require('./Dropbox.less');
var Dropzone = require('react-dropzone');

class Dropbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
      return <Dropzone className="my-dropzone2" onDrop={this.upload.bind(this)} ><button>上传图片或附件</button></Dropzone>;
    }

    upload(files){
        this.props.upload(files).then(node=>{
            PubSub.publish('img.saved',node);
            // alert("ok");
        }).catch(e=>alert("fail"));
    }
}

module.exports = Dropbox;
