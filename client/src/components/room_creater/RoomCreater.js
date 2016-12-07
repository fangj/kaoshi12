require('./RoomCreater.less');
import Nav from '../nav';
import TreePathReader from '../treepathreader';
import Form from "react-jsonschema-form";
import RestWriter from '../rest_writer';
const schema = {
  title: "考场",
  type: "object",
  required: ["name"],
  properties: {
    name: {type: "string", title: "考场名称"},
    desks:{
      title: "桌位",
      type:"array",
      items:{
        type: "object",
      required: ["readerID","browserIP"],
      properties: {
          readerID: {type: "string", title: "读卡器编号"},
          browserIP: {type: "string", title: "浏览器IP"},
      }
      }
    }
  }
};

const goto=url=>{location.href='#'+url}
const roomForm=(props)=><div className="pad">
                    <Form schema={schema} 
                    onSubmit={(obj)=>props.save(obj.formData).then(_=>goto('/rooms'))}>
                    <button type="submit" className="btn btn-success">保存</button>
                    </Form>
                </div>

/**
 * 用roomForm创建考场，保存到"/api/room"
 */
class RoomCreater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        return (
            <div>
                <TreePathReader view={Nav} from="0/menu" to="0/menu/rooms"/>
                <RestWriter url="/api/room" view={roomForm} />
            </div>
        );
    }
}

module.exports = RoomCreater;
