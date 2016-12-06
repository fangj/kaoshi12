require('./ExamFormRoomChooser.less');

import RoomChooserBrowser from '../exam_form_room_chooser_browser';
import RestReader from '../rest_reader';

class ExamFormRoomChooser extends React.Component {
    static propTypes = {
        choosen: React.PropTypes.string
    }; 

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        let me = this;
        const {choosen}=this.state;
        return (
            <RestReader view={RoomChooserBrowser} url="/api/room"
            choosen={choosen}/>
        );
    }

    componentWillMount() {
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

module.exports = ExamFormRoomChooser;
