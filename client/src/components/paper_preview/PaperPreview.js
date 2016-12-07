require('./PaperPreview.less');
import {Grid,Row,Col,Well}from 'react-bootstrap';
import PaperPreviewQuestions from '../paper_preview_questions';
import TreeNodesReader from '../tree_nodes_reader';

/**
 * 用PaperPreviewQuestions预览题目
 */
class PaperPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {selected_questions,scores}=this.props;
        if(selected_questions.length===0){
          return <Well>您还没有选择试题，请点击"选题"标签选择</Well>;
        }
        return (
          <TreeNodesReader view={PaperPreviewQuestions} gids={selected_questions} scores={scores}/>
        );
    }

}

module.exports = PaperPreview;
