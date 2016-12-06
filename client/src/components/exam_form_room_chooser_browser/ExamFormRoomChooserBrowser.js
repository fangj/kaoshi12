require('./ExamFormRoomChooserBrowser.less');
var common=require('../common');

import cx from 'classnames';
import {Glyphicon}from 'react-bootstrap';

class ExamFormRoomChooserBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        const {data}=this.props;
        return (
          <div className='children-grid'>
           <div className='cells clearfix'>
            {
              data.map(d=>
                <div  className={cx('cell',{selected:this.isChoosen(d)})} key={d._id} onClick={()=>this.chooseRoom(d)}>
                       {common.icon("ks1/room")}
                       {this.isChoosen(d)?<Glyphicon glyph="ok" style={{float:"right"}} />:""}
                       <div>{common.name(d)}</div>
                    </div>)
            }
          </div>
        </div>
        );
    }
    isChoosen(data){
        const {choosen}=this.state;
        return choosen===data._id;
    }
    chooseRoom(data){
        PubSub.publish('room.choose',data);
        console.log('room.choose',data)
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
module.exports = ExamFormRoomChooserBrowser;
