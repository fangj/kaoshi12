import React from 'react';
import ReactDOM from 'react-dom';

require('./PageManage.less');

import { Router, Route ,hashHistory} from 'react-router';
// import appHistory from '../../components/history';

import Login from '../../components/login';
import Main from '../../components/main';
import Manage from '../../components/manage';

import Banks from '../../components/banks';
import Papers from '../../components/papers';
import Exams from '../../components/exams';
import Teachers from '../../components/teachers';
import Classes from '../../components/classes';
import Rooms from '../../components/rooms';

import RoomCreater from '../../components/room_creater';
import ClassCreater from '../../components/class_creater';
import PaperCreater from '../../components/paper_creater';
import ExamCreater from '../../components/exam_creater';
import TeacherCreater from '../../components/teacher_creater';

import ClassUpdater from '../../components/class_updater';
import RoomUpdater from '../../components/room_updater';
import ExamUpdater from '../../components/exam_updater';
import PaperUpdater from '../../components/paper_updater';
import TeacherUpdater from '../../components/teacher_updater';

import AnswersheetUpdater from '../../components/answersheet_updater';

const userManager=require('../../components/user');


class PageManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="exam">
                   <Router history={hashHistory}>
                      <Route path="/login" component={Login}/>
                      <Route path="/" component={Main}/>
                      <Route path="/main" component={Main}/>
                      <Route path="/banks" component={Banks}/>
                      <Route path="/teachers" component={Teachers}/>
                      <Route path="/teachers/create" component={TeacherCreater}/>
                      <Route path="/teachers/:id" component={TeacherUpdater}/>
                      <Route path="/papers" component={Papers}/>
                      <Route path="/papers/create" component={PaperCreater}/>
                      <Route path="/papers/:id" component={PaperUpdater}/>
                      <Route path="/exams" component={Exams}/>
                      <Route path="/exams/create" component={ExamCreater}/>
                      <Route path="/exams/:id" component={ExamUpdater}/>
                      <Route path="/classes" component={Classes}/>
                      <Route path="/classes/create" component={ClassCreater}/>
                      <Route path="/classes/:id" component={ClassUpdater}/>
                      <Route path="/rooms" component={Rooms}/>
                      <Route path="/rooms/create" component={RoomCreater}/>
                      <Route path="/rooms/:id" component={RoomUpdater}/>
                      <Route path="/answersheet/:id" component={AnswersheetUpdater}/>
                      <Route path="/manage" component={Main}/>
                      <Route path="/manage/0" component={Main}/>
                      <Route path="/manage/1" component={Main}/>
                      <Route path="/manage/:gid" component={Manage}/>
                      <Route path="/manage/:gid/:vtype" component={Manage}/>
                    </Router>
            </div>
        );
    }

    componentDidMount() {
        userManager.refreshUser(); //取得登陆用户
    }

}

ReactDOM.render(<PageManage/>, document.getElementById('App'));

module.exports = PageManage;
