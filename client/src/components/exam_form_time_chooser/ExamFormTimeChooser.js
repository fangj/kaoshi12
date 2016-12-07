require('./ExamFormTimeChooser.less');
import {FormControl,FormGroup,ControlLabel } from 'react-bootstrap';
import moment from 'moment';

class ExamFormTimeChooser extends React.Component {
    static propTypes = {
        start: React.PropTypes.string.isRequired,
        end: React.PropTypes.string.isRequired,
        duration: React.PropTypes.number
    }; 
    static defaultProps = {
        start: moment().format('YYYY-MM-DDTHH:mm:ss'),
        end: moment().add(1, 'hour').format('YYYY-MM-DDTHH:mm:ss'),
        duration: 45
    };
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        let me = this;
        const {start,end,duration}=this.state;
        return (
            <form>
            <FormGroup>
              <ControlLabel>考试时长(分钟)</ControlLabel>
              <FormControl type="number" label="考试时长(分钟)" min="10" max="240" step="10" placeholder="考试时长" value={duration} onChange={this.changeDuration.bind(this)} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>考试开放时间</ControlLabel>
              <FormControl type="datetime-local" label="考试开放时间" placeholder="考试开放时间" value={start} onChange={this.changeStart.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>考试关闭时间</ControlLabel>
              <FormControl type="datetime-local" label="考试关闭时间" placeholder="考试关闭时间" value={end} onChange={this.changeEnd.bind(this)} />
            </FormGroup>
            </form>
        );
    }

    changeStart(e){
        const start=e.target.value;
        this.props.cbSetStart(start);
    }
    changeEnd(e){
       const end=e.target.value;
       this.props.cbSetEnd(end);
    }
    changeDuration(e){
       const duration=Number(e.target.value);
       this.props.cbSetDuration(duration);
    }

    componentWillMount() {
        const props=this.props;
        //保存默认值
        props.cbSetStart(props.start);
        props.cbSetEnd(props.end);
        props.cbSetDuration(props.duration);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
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

module.exports = ExamFormTimeChooser;
