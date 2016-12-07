require('./TeacherCreater.less');
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
const teacherForm=(props)=><div className="pad">
                    <Form schema={schema} uiSchema={uiSchema}
                    onSubmit={(obj)=>props.save(obj.formData).then(_=>goto('/teachers'))}>
                    <button type="submit" className="btn btn-success">保存</button>
                    </Form>
                </div>

/**
 * 创建教师的组件
 * 数据由teacherForm编辑
 * 保存到"/api/teacher"
 * RestWriter将REST url包装成save函数，注入到teacherForm中
 */
class TeacherCreater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const user=userManager.getUser();
        const isAdmin=user.isAdmin;
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/teachers"/>
                {isAdmin?<RestWriter url="/api/teacher" view={teacherForm} />:<h3>只有管理员可以添加教师</h3>}
            </div>
        );
    }

}

module.exports = TeacherCreater;
