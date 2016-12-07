require('./ClassCreater.less');
import Nav from '../nav';
import TreePathReader from '../treepathreader';
import Form from "react-jsonschema-form";
import RestWriter from '../rest_writer';
const schema = {
  title: "班级",
  type: "object",
  required: ["name"],
  properties: {
    name: {type: "string", title: "班级名称"},
    students:{
      title: "学生",
      type:"array",
      items:{
      type: "object",
      required: ["name","id","card"],
      properties: {
        name: {type: "string", title: "姓名"},
        id: {type: "string", title: "学号"},
        card: {type: "string", title: "卡号"},
      }
    }
  }
  }
};

const goto=url=>{location.href='#'+url}
const classForm=(props)=><div className="pad">
                    <Form schema={schema} 
                    onSubmit={(obj)=>props.save(obj.formData).then(_=>goto('/classes'))}>
                    <button type="submit" className="btn btn-success">保存</button>
                    </Form>
                </div>

/**
 * 用classForm创建班级，保存到"/api/class"
 */
class ClassCreater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/classes"/>
                <RestWriter url="/api/class" view={classForm} />
            </div>
        );
    }
}

module.exports = ClassCreater;
