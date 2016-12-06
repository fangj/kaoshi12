require('./RestSummary.less');
var common=require('../common');

function goto(url){
  location.href='#'+url;
}

class RestSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {data,type,route}=this.props;
        console.log('render Summary',data,type)

        return (
          <div className='children-grid'>
           <div className='cells clearfix'>
            {
              data.map(d=>
                <div key={d._id} className='cell' onClick={()=>goto('/'+route+'/'+d._id)}>
                  {common.icon(type)}
                  <div>{common.name(d)}</div>
                </div>)
            }
          </div>
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

module.exports = RestSummary;
