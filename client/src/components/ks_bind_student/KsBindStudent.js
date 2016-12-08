require('./KsBindStudent.less');
import {Jumbotron } from 'react-bootstrap';
import Form from "react-jsonschema-form";
import ClassChooser from "../class_chooser";
var agent = require('superagent-promise')(require('superagent'),Promise);

const schema = {
  type: "object",
  required: ["name","id"],
  properties: {
    name: {type: "string", title: "姓名"},
    id: {type: "string", title: "学号"},
  }
};

/**
 * 使用ClassChooser选择班级
 * 通过"class.choose"消息接收选中的班级
 * 绑定班级后发送到'/api/class/{classid}'更新班级信息
 */
class KsBindStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {choosen}=this.state;
        return (
            <div className="ks_bind_student" style={{padding:"20px"}}>
                <h2 style={{textAlign:"center"}}>登记学生信息</h2>
                <div className="form-signin" >
                <div>班级</div>
                <ClassChooser choosen={choosen}/>
                <div >
                <Form schema={schema}
                  onSubmit={this.save.bind(this)}
                >
                <button type="submit" className="btn btn-success">保存</button>
                </Form>
                </div>
                </div>
              
            </div>
        );
    }

    save(obj){
        var klass=this.state.klass;
        if(!klass){
          alert('请选择班级后保存');
          return;
        }
        const {msg}=this.props;
        var student=obj.formData;
        student.card=msg.cardID;
        klass.students=klass.students||[];
        klass.students.push(student);
        agent.put('/api/class/'+klass._id,klass).then(resp=>{
            PubSub.publish('refresh');//刷新页面
        })
    }

    componentDidMount() {
        const me=this;
        this.token_choose_class=PubSub.subscribe( "class.choose",(pubsubmsg,klass)=>{
            console.log('class.choose',klass);
            me.setState({klass,choosen:klass._id});
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token_choose_class );
    }
}

module.exports = KsBindStudent;
