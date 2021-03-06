require('./Uploader.less');
import { PropTypes } from "react";
const tree=require('../../tree/tree-cache')('_api');
const treetool=require('../../tree/tool')(tree);

//给出pgid,可以上传文件作为pgid子节点
class Uploader extends React.Component {


    static propTypes = {
        view: PropTypes.func.isRequired,
        pgid: PropTypes.string,
        ppath: PropTypes.string
    }


    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {view,...others}=this.props;
        const View=view;
        return <View upload={this.upload.bind(this)} {...others}/> ;
    }

    upload(files,filename,onProgress){
        const {pgid,bgid,ppath}=this.props;
        if(pgid!==undefined){
            return tree.mk_son_by_file(pgid,files[0],filename,onProgress);
        }else if(bgid){
            return tree.mk_brother_by_file(pgid,files[0],filename,onProgress);
        }else if(ppath){
            return treetool.fetchOrCreatePath(ppath).then(pgid=>tree.mk_son_by_file(pgid,files[0],filename,onProgress));
        }
    }
}

module.exports = Uploader;
