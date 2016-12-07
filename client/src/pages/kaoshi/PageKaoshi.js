require('./PageKaoshi.less');
var agent = require('superagent-promise')(require('superagent'),Promise);
import BindReader from '../../components/ks_bind_reader';
import BindStudent from '../../components/ks_bind_student';
import NoExam from '../../components/ks_noexam';
import Exam from '../../components/ks_exam';
import Prompt from '../../components/ks_prompt';
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
            case 'bindReader':return <BindReader msg={exam}/>;
            case 'bindStudent':return <BindStudent msg={exam}/>;
            case 'noexam':return <NoExam msg={exam}/>;
            case 'exam':return <Exam msg={exam}/>;
            default:return <Prompt msg={exam}/>;
        }

    }

    componentWillMount() {
    }

    componentDidMount() {
        const me=this;
        var mySubscriber = function( msg, data ){
            console.log( msg, data );
            agent.post('/exam',data).then(resp=>{
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
