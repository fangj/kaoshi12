import { Button,Jumbotron,Table } from 'react-bootstrap';
import RoomChooser from '../exam_form_room_chooser';
var agent = require('superagent-promise')(require('superagent'),Promise);

require('./KsBindReader.less');

/**
 * 使用 RoomChooser 选择考场
 * 接收"room.choose"信息得到选中的考场
 * 绑定考场后发送到/api/room/room_id更新考场信息
 */
class KsBindReader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {msg}=this.props;
        let me = this;
        return (
            <div className="ks_bind_reader">
            <Jumbotron>
                <h2>读卡器:{msg.readerID}</h2> 
                <h2>本机IP:{msg.browserIP}</h2>
                <h2>您的读卡器尚未登记,请选择考场进行登记</h2>
                <RoomChooser/>
              </Jumbotron>
            </div>
        );
    }

    componentDidMount() {
        const {msg}=this.props;
        this.token_choose_room=PubSub.subscribe( "room.choose",(pubsubmsg,room)=>{
            console.log('room.choose',room);
            var desk={
              readerID:msg.readerID,
              browserIP:msg.browserIP
            };
            room.desks=room.desks||[];
            room.desks.push(desk);
            agent.put('/api/room/'+room._id,room).then(resp=>{
                PubSub.publish('refresh');//刷新页面
            })
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token_choose_room );
    }
}

module.exports = KsBindReader;
