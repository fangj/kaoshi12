require('./Imageviewer.less');
var agent = require('superagent-promise')(require('superagent'), Promise);



/**
 * 访问/api/img/_id,取得img数据
 * 格式
 * {
    "_id": "JUidbV0ls0X2hy6g",
    "imgs": [
    "188be907f05a8039dda9888828f3a60d.png",
    "be613d24d86345b392d75bcc07a39b7f.png"
    ]
  }
  可以显示图片之外的附件
*/
class Imageviewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const {data}=this.props;
        var names=data.imgs;
        if(!names){
          return null;
        }
        return (
            <div className="imageviewer">
                {names.map(name=>{
                    if(name.endsWith("jpg")||name.endsWith("jpeg")||name.endsWith("png")||name.endsWith("bmp")){
                        return <img key={name} src={"/upload/"+name} />
                    }else{
                        return <a href={"/upload/"+name} target="_blank"> {name}</a>
                    }
                    
            })}
            </div>
        );
    }

}

module.exports = Imageviewer;
