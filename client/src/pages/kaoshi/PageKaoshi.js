require('./PageKaoshi.less');
var agent = require('superagent-promise')(require('superagent'),Promise);
import BindReader from '../../components/ks_bind_reader';
import BindStudent from '../../components/ks_bind_student';
import NoExam from '../../components/ks_noexam';
import Exam from '../../components/ks_exam';
import Prompt from '../../components/ks_prompt';

/**
 * 考试页面完全由card消息驱动
 * socket.io将card消息发给kaoshi.html页面
 * kaoshi.html页面收到后以pubsub转发
 *
 * Kaoshi组件接受card消息和refresh消息
 * refresh消息用于清除exam状态，刷新页面为提示页面
 * card消息将被用于发送给服务/exam,得到考试信息
 * 页面如何显示由exam决定
 */
class Kaoshi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {exam}=this.state;
        if(!exam){
            return <Prompt/>;
        }
        switch(exam.msg){
            case 'bindReader':return <BindReader msg={exam}/>;//绑定读卡器
            case 'bindStudent':return <BindStudent msg={exam}/>;//绑定学生
            case 'noexam':return <NoExam msg={exam}/>;//没有考试
            case 'exam':return <Exam msg={exam}/>;//考试信息
            default:return <Prompt msg={exam}/>;//提示信息
        }

    }

    componentWillMount() {
    }

    componentDidMount() {
        const me=this;
        var mySubscriber = function( msg, card ){
            console.log( msg, card );
            agent.post('/exam',card).then(resp=>{
                me.setState({exam:resp.body});
            })
        };
        this.token = PubSub.subscribe( 'card', mySubscriber );
        var refresher=function(msg,data){
            me.setState({exam:null});
        }
        this.token = PubSub.subscribe( 'refresh', refresher );
    }

    componentWillUnmount() {
        window.PubSub.unsubscribe( this.token );
    }
}

ReactDOM.render(<Kaoshi/>, document.getElementById('App'));

module.exports = Kaoshi;
