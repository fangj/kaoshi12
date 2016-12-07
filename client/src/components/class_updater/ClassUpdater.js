require('./ClassUpdater.less');
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
const ClassForm=(props)=>(
  <div>
    <TreePathReader view={Nav} from="0/menu" to="0/menu/classes"/>
    <div className="pad">
        <Form schema={schema}
              formData={props.data}
              onSubmit={(obj)=>props.update(obj.formData).then(_=>goto('/classes'))}>
        <div>
            <button type="submit" className="btn btn-success">保存</button>
            <button className="btn btn-danger" onClick={(e)=>{e.preventDefault();//不知为何submit会被调用，人为阻止
              var sure=confirm("确定要删除吗?");
              if(!sure){return}
              props.remove().then(_=>goto('/classes'))}}>删除</button>
        </div>
        </Form>
    </div>
  </div>);

/**
 * 用classForm修改班级，保存到"/api/class"
 */
class ClassUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const id=this.props.params.id;
        // console.log('id',id);
        return (
            <div className="class_updater">
                <RestWriter url="/api/class" id={id} view={ClassForm}/>
            </div>
        );
    }
}

module.exports = ClassUpdater;
