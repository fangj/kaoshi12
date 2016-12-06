require('./NavView.less');
import {Breadcrumb,BreadcrumbItem}from 'react-bootstrap';

class NavView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {items}=this.props;
        return (
            <Breadcrumb>
                {items.map((item,idx)=> 
                    item.onClick?
                    <BreadcrumbItem  onClick={item.onClick} key={item.key}>{item.title}</BreadcrumbItem>:
                    <BreadcrumbItem  href={item.href} key={item.href}>{item.title}</BreadcrumbItem>
                )}
            </Breadcrumb>
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

module.exports = NavView;
