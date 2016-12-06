require('./KsPrompt.less');
import { Button,Jumbotron } from 'react-bootstrap';

class KsPrompt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        return (
            <div className="ks_prompt">

    <header className="intro-header exp-header" >
                        <h3 style={{color:"white",padding:"20px",marginTop:0}}>实验考试管理系统</h3>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1>学员考试请刷卡</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

      <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="post-preview " style={{textAlign:"center"}}>
                        <img src='/img/banner2.png' width="400px"/>
                </div>
            </div>
        </div>
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

module.exports = KsPrompt;
