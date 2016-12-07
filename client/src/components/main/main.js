/**
 * 主菜单
 * 显示主菜单并且创建默认的基本树结构
 */
import React from 'react';
require('./main.less');
import {Link } from 'react-router';
const tree=require('../../tree/tree-cache')('_api');
const tool=require('../../tree/tool')(tree);

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    };
    this.createPathIfNotExist();
  }

  async createPathIfNotExist(){
    var menu_node=await tool.createNodeByPath("0/menu");
    var menu_gid=menu_node._id;
    await tool.createNodeByPath(menu_gid+"/banks");
    await tool.createNodeByPath(menu_gid+"/papers");
    await tool.createNodeByPath(menu_gid+"/exams");
    await tool.createNodeByPath(menu_gid+"/teachers");
    await tool.createNodeByPath(menu_gid+"/classes");
    await tool.createNodeByPath(menu_gid+"/rooms");
  }


  render() {
    return (
      <div>
       <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header"></h1>
                </div>
            </div>
                   <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-database fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">题库管理</div>
                                    <div>录入与组织试题</div>
                                </div>
                            </div>
                        </div>
                        <a href="#/banks">
                            <div className="panel-footer">
                                <span className="pull-left">进入模块</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-green">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-tasks fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">自动成卷</div>
                                    <div>从题库中选择题目生成试卷</div>
                                </div>
                            </div>
                        </div>
                        <a href="#/papers">
                            <div className="panel-footer">
                                <span className="pull-left">进入模块</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-yellow">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-edit fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">考核管理</div>
                                    <div>选择试卷考场，组织考试</div>
                                </div>
                            </div>
                        </div>
                        <a href="#/exams">
                            <div className="panel-footer">
                                <span className="pull-left">进入模块</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-red">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-user fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">系统管理</div>
                                    <div>管理员授权</div>
                                </div>
                            </div>
                        </div>
                        <a href="#/teachers">
                            <div className="panel-footer">
                                <span className="pull-left">进入模块</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-teal">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-users fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">考核对象</div>
                                    <div>学生信息管理</div>
                                </div>
                            </div>
                        </div>
                        <a href="#/classes">
                            <div className="panel-footer">
                                <span className="pull-left">进入模块</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-purple">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-desktop fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">考场管理</div>
                                    <div>考场信息管理</div>
                                </div>
                            </div>
                        </div>
                        <a href="#/rooms">
                            <div className="panel-footer">
                                <span className="pull-left">进入模块</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
