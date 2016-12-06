require('./Dropbox.less');
var Dropzone = require('react-dropzone');

class Dropbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render () {
      return <Dropzone className="my-dropzone" accept="image/*" onDrop={this.upload.bind(this)} >虚线框内点击上传图片</Dropzone>;
    }

    upload(files){
        this.props.upload(files).then(node=>{
            PubSub.publish('img.saved',node);
            // alert("ok");
        }).catch(e=>alert("fail"));
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

module.exports = Dropbox;
