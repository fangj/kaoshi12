require('./Summary.less');

function goto(url){
  location.href='#'+url;
}


class Summary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    const {node}=this.props;
    console.log('render Summary',node)

    return (
      <div className='children-grid'>
       <div className='cells'>
          <div className='cell' onClick={()=>goto('/manage/'+node._id+'/son_editor')}>
             <i className='fa fa-plus fa-4x'/>
          </div>
        {
          node._children.map(node=>
            <div key={node._id} className='cell' onClick={()=>goto(node._id)}>
              v(node,'icon')
              <div>v(node,'name')</div>
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

module.exports = Summary;
