require('./RoomUpdater.less');
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
const RoomForm=(props)=>(
  <div>
    <TreePathReader view={Nav} from="0/menu" to="0/menu/rooms"/>
    <div className="pad">
        <Form schema={schema}
              formData={props.data}
              onSubmit={(obj)=>props.update(obj.formData).then(_=>goto('/rooms'))}>
        <div>
            <button type="submit" className="btn btn-success">保存</button>
            <button className="btn btn-danger" onClick={(e)=>{e.preventDefault();//不知为何submit会被调用，人为阻止
              var sure=confirm("确定要删除吗?");
              if(!sure){return}
                props.remove().then(_=>goto('/rooms'))}}>删除</button>
        </div>
        </Form>
    </div>
  </div>);

class RoomUpdater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const id=this.props.params.id;
        console.log('id',id);
        return (
            <div className="room_updater">
                <RestWriter url="/api/room" id={id} view={RoomForm}/>
            </div>
        );
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

module.exports = RoomUpdater;
