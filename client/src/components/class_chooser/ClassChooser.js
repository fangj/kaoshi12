require('./ClassChooser.less');

var common=require('../common');

import cx from 'classnames';
import {Glyphicon}from 'react-bootstrap';
import RestReader from '../rest_reader';

class ClassChooserBrowser extends React.Component {

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
                <div style={{textAlign:"center",padding:"15px"}} className={cx('cell',{selected:this.isChoosen(d)})} key={d._id} onClick={()=>this.chooseClass(d)}>
                       {common.icon("ks1/class")}
                       {this.isChoosen(d)?<Glyphicon glyph="ok" style={{float:"right"}} />:""}
                       <div style={{paddingTop:"5px"}}>{common.name(d)}</div>
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
    chooseClass(data){
        PubSub.publish('class.choose',data);
        console.log('class.choose',data)
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

const ClassChooser=(props)=>{
    return <RestReader view={ClassChooserBrowser} url="/api/class"
            choosen={props.choosen}/>
}
module.exports = ClassChooser;
