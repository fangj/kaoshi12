import React from 'react';
import Dropbox from "../../components/dropbox2";
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class RestUploader extends React.Component {
  static propTypes = {
    gid: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
      return <Dropbox upload={this.upload.bind(this)}/> ;
  }
  upload(files,filename,onProgress){
    const {gid}=this.props;
    var file=files[0];
    return agent.post('/up/'+gid)
    .attach('file',file,filename)
    .on('progress', function(e) {
        if(typeof onProgress==='function'){
          onProgress(e);
        }
     })
    .then(res => {
      console.log(res.body)
      PubSub.publish("img.uploaded");
    });
  }
}
