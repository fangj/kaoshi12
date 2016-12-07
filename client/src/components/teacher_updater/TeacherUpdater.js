require('./TeacherUpdater.less');
import Nav from '../nav';
import TreePathReader from '../treepathreader';
import Form from "react-jsonschema-form";
import RestWriter from '../rest_writer';
const userManager=require('../../components/user');

const schema = {
  title: "教师",
  type: "object",
  required: ["name","password"],
  properties: {
    name: {type: "string", title: "登陆名"},
    password: {type: "string", title: "密码"},
    isAdmin: {type: "boolean", title: "管理员?", default: false}
  }
};
const uiSchema =  {
  password: {
    "ui:widget": "password" 
  }
};

const goto=url=>{location.href='#'+url}
const teacherForm=(props)=>(
  <div>
    <TreePathReader view={Nav} from="0/menu" to="0/menu/teachers"/>
    <div className="pad">
        <Form schema={schema} uiSchema={uiSchema}
              formData={props.data}
              onSubmit={(obj)=>props.update(obj.formData).then(_=>goto('/teachers'))}>
        <div className="btn-toolbar">
            <button type="submit" className="btn btn-success">保存</button>
            <button className="btn btn-danger" onClick={(e)=>{e.preventDefault();//不知为何submit会被调用，人为阻止
                props.remove().then(_=>goto('/teachers'))}}>删除</button>
        </div>
        </Form>
    </div>
  </div>);

/**
 * 与TeacherCreater类似
 * 用于更新教师数据
 */
class TeacherUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const id=this.props.params.id;
        console.log('id',id);
        const user=userManager.getUser();
        const isAdmin=user.isAdmin;
        return (
            <div >
                {isAdmin?<RestWriter url="/api/teacher" id={id} view={teacherForm}/>:<h3>只有管理员可以修改教师</h3>}
            </div>
        );
    }

}

module.exports = TeacherUpdater;
