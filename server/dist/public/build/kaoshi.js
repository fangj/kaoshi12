webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ks_bind_reader = __webpack_require__(2);

	var _ks_bind_reader2 = _interopRequireDefault(_ks_bind_reader);

	var _ks_bind_student = __webpack_require__(411);

	var _ks_bind_student2 = _interopRequireDefault(_ks_bind_student);

	var _ks_noexam = __webpack_require__(466);

	var _ks_noexam2 = _interopRequireDefault(_ks_noexam);

	var _ks_exam = __webpack_require__(473);

	var _ks_exam2 = _interopRequireDefault(_ks_exam);

	var _ks_prompt = __webpack_require__(482);

	var _ks_prompt2 = _interopRequireDefault(_ks_prompt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(486);
	var agent = __webpack_require__(281)(__webpack_require__(282), Promise);

	/**
	 * 考试页面完全由card消息驱动
	 * socket.io将card消息发给kaoshi.html页面
	 * kaoshi.html页面收到后以pubsub转发
	 *
	 * Kaoshi组件接受card消息和refresh消息
	 * refresh消息用于清除exam状态，刷新页面为提示页面
	 * card消息将被用于发送给服务/exam,得到考试信息
	 * 页面如何显示由exam决定
	 */
	var Kaoshi = function (_React$Component) {
	    _inherits(Kaoshi, _React$Component);

	    function Kaoshi(props) {
	        _classCallCheck(this, Kaoshi);

	        var _this = _possibleConstructorReturn(this, (Kaoshi.__proto__ || Object.getPrototypeOf(Kaoshi)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Kaoshi, [{
	        key: 'render',
	        value: function render() {
	            var exam = this.state.exam;

	            if (!exam) {
	                return React.createElement(_ks_prompt2.default, null);
	            }
	            switch (exam.msg) {
	                case 'bindReader':
	                    return React.createElement(_ks_bind_reader2.default, { msg: exam }); //绑定读卡器
	                case 'bindStudent':
	                    return React.createElement(_ks_bind_student2.default, { msg: exam }); //绑定学生
	                case 'noexam':
	                    return React.createElement(_ks_noexam2.default, { msg: exam }); //没有考试
	                case 'exam':
	                    return React.createElement(_ks_exam2.default, { msg: exam }); //考试信息
	                default:
	                    return React.createElement(_ks_prompt2.default, { msg: exam }); //提示信息
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var me = this;
	            var mySubscriber = function mySubscriber(msg, card) {
	                console.log(msg, card);
	                agent.post('/exam', card).then(function (resp) {
	                    me.setState({ exam: resp.body });
	                });
	            };
	            this.token = PubSub.subscribe('card', mySubscriber);
	            var refresher = function refresher(msg, data) {
	                me.setState({ exam: null });
	            };
	            this.token = PubSub.subscribe('refresh', refresher);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return Kaoshi;
	}(React.Component);

	ReactDOM.render(React.createElement(Kaoshi, null), document.getElementById('App'));

	module.exports = Kaoshi;

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(4);

	var _exam_form_room_chooser = __webpack_require__(259);

	var _exam_form_room_chooser2 = _interopRequireDefault(_exam_form_room_chooser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var agent = __webpack_require__(281)(__webpack_require__(282), Promise);

	__webpack_require__(409);

	/**
	 * 使用 RoomChooser 选择考场
	 * 接收"room.choose"信息得到选中的考场
	 * 绑定考场后发送到/api/room/room_id更新考场信息
	 */

	var KsBindReader = function (_React$Component) {
	    _inherits(KsBindReader, _React$Component);

	    function KsBindReader(props) {
	        _classCallCheck(this, KsBindReader);

	        var _this = _possibleConstructorReturn(this, (KsBindReader.__proto__ || Object.getPrototypeOf(KsBindReader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(KsBindReader, [{
	        key: 'render',
	        value: function render() {
	            var msg = this.props.msg;

	            var me = this;
	            return React.createElement(
	                'div',
	                { className: 'ks_bind_reader' },
	                React.createElement(
	                    _reactBootstrap.Jumbotron,
	                    null,
	                    React.createElement(
	                        'h2',
	                        null,
	                        '\u8BFB\u5361\u5668:',
	                        msg.readerID
	                    ),
	                    React.createElement(
	                        'h2',
	                        null,
	                        '\u672C\u673AIP:',
	                        msg.browserIP
	                    ),
	                    React.createElement(
	                        'h2',
	                        null,
	                        '\u60A8\u7684\u8BFB\u5361\u5668\u5C1A\u672A\u767B\u8BB0,\u8BF7\u9009\u62E9\u8003\u573A\u8FDB\u884C\u767B\u8BB0'
	                    ),
	                    React.createElement(_exam_form_room_chooser2.default, null)
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var msg = this.props.msg;

	            this.token_choose_room = PubSub.subscribe("room.choose", function (pubsubmsg, room) {
	                console.log('room.choose', room);
	                var desk = {
	                    readerID: msg.readerID,
	                    browserIP: msg.browserIP
	                };
	                room.desks = room.desks || [];
	                room.desks.push(desk);
	                agent.put('/api/room/' + room._id, room).then(function (resp) {
	                    PubSub.publish('refresh'); //刷新页面
	                });
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token_choose_room);
	        }
	    }]);

	    return KsBindReader;
	}(React.Component);

	module.exports = KsBindReader;

/***/ },

/***/ 409:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(412);

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(4);

	var _reactJsonschemaForm = __webpack_require__(413);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _class_chooser = __webpack_require__(460);

	var _class_chooser2 = _interopRequireDefault(_class_chooser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(464);

	var agent = __webpack_require__(281)(__webpack_require__(282), Promise);

	var schema = {
	    type: "object",
	    required: ["name", "id"],
	    properties: {
	        name: { type: "string", title: "姓名" },
	        id: { type: "string", title: "学号" }
	    }
	};

	/**
	 * 使用ClassChooser选择班级
	 * 通过"class.choose"消息接收选中的班级
	 * 绑定班级后发送到'/api/class/{classid}'更新班级信息
	 */

	var KsBindStudent = function (_React$Component) {
	    _inherits(KsBindStudent, _React$Component);

	    function KsBindStudent(props) {
	        _classCallCheck(this, KsBindStudent);

	        var _this = _possibleConstructorReturn(this, (KsBindStudent.__proto__ || Object.getPrototypeOf(KsBindStudent)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(KsBindStudent, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var choosen = this.state.choosen;

	            return React.createElement(
	                'div',
	                { className: 'ks_bind_student', style: { padding: "20px" } },
	                React.createElement(
	                    _reactBootstrap.Jumbotron,
	                    null,
	                    React.createElement(
	                        'h2',
	                        null,
	                        '\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u5C1A\u672A\u767B\u8BB0,\u8BF7\u9009\u62E9\u73ED\u7EA7\u8FDB\u884C\u767B\u8BB0'
	                    ),
	                    React.createElement(_class_chooser2.default, { choosen: choosen }),
	                    React.createElement(
	                        'div',
	                        { style: { width: "200px" } },
	                        React.createElement(_reactJsonschemaForm2.default, { schema: schema,
	                            onSubmit: this.save.bind(this)
	                        })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'save',
	        value: function save(obj) {
	            var klass = this.state.klass;
	            if (!klass) {
	                alert('请选择班级后保存');
	                return;
	            }
	            var msg = this.props.msg;

	            var student = obj.formData;
	            student.card = msg.cardID;
	            klass.students = klass.students || [];
	            klass.students.push(student);
	            agent.put('/api/class/' + klass._id, klass).then(function (resp) {
	                PubSub.publish('refresh'); //刷新页面
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var me = this;
	            this.token_choose_class = PubSub.subscribe("class.choose", function (pubsubmsg, klass) {
	                console.log('class.choose', klass);
	                me.setState({ klass: klass, choosen: klass._id });
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token_choose_class);
	        }
	    }]);

	    return KsBindStudent;
	}(React.Component);

	module.exports = KsBindStudent;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(461);

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(92);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactBootstrap = __webpack_require__(4);

	var _rest_reader = __webpack_require__(405);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(462);

	var common = __webpack_require__(267);

	var ClassChooserBrowser = function (_React$Component) {
	    _inherits(ClassChooserBrowser, _React$Component);

	    function ClassChooserBrowser(props) {
	        _classCallCheck(this, ClassChooserBrowser);

	        var _this = _possibleConstructorReturn(this, (ClassChooserBrowser.__proto__ || Object.getPrototypeOf(ClassChooserBrowser)).call(this, props));

	        _this.state = _extends({}, props);
	        return _this;
	    }

	    _createClass(ClassChooserBrowser, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var data = this.props.data;

	            return React.createElement(
	                'div',
	                { className: 'children-grid' },
	                React.createElement(
	                    'div',
	                    { className: 'cells clearfix' },
	                    data.map(function (d) {
	                        return React.createElement(
	                            'div',
	                            { style: { textAlign: "center", padding: "15px" }, className: (0, _classnames2.default)('cell', { selected: _this2.isChoosen(d) }), key: d._id, onClick: function onClick() {
	                                    return _this2.chooseClass(d);
	                                } },
	                            common.icon("ks1/class"),
	                            _this2.isChoosen(d) ? React.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { float: "right" } }) : "",
	                            React.createElement(
	                                'div',
	                                { style: { paddingTop: "5px" } },
	                                common.name(d)
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'isChoosen',
	        value: function isChoosen(data) {
	            var choosen = this.state.choosen;

	            return choosen === data._id;
	        }
	    }, {
	        key: 'chooseClass',
	        value: function chooseClass(data) {
	            PubSub.publish('class.choose', data);
	            console.log('class.choose', data);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(nextProps);
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return ClassChooserBrowser;
	}(React.Component);

	var ClassChooser = function ClassChooser(props) {
	    return React.createElement(_rest_reader2.default, { view: ClassChooserBrowser, url: '/api/class',
	        choosen: props.choosen });
	};
	module.exports = ClassChooser;

/***/ },

/***/ 462:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 464:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(467);

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(4);

	var _ks_queryscore = __webpack_require__(468);

	var _ks_queryscore2 = _interopRequireDefault(_ks_queryscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(471);

	var agent = __webpack_require__(281)(__webpack_require__(282), Promise);

	/**
	 * 没有考试时的界面
	 */
	var KsNoexam = function (_React$Component) {
	    _inherits(KsNoexam, _React$Component);

	    function KsNoexam(props) {
	        _classCallCheck(this, KsNoexam);

	        return _possibleConstructorReturn(this, (KsNoexam.__proto__ || Object.getPrototypeOf(KsNoexam)).call(this, props));
	    }

	    _createClass(KsNoexam, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var msg = this.props.msg;
	            // console.log(msg)

	            return React.createElement(
	                'div',
	                { className: 'ks_noexam ' },
	                React.createElement(
	                    _reactBootstrap.Jumbotron,
	                    null,
	                    React.createElement(
	                        'h1',
	                        { className: 'text-center' },
	                        '\u672C\u8003\u573A\u76EE\u524D\u6CA1\u6709\u8003\u8BD5\u5B89\u6392'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'center-block', style: { width: "400px" } },
	                        React.createElement(
	                            _reactBootstrap.Table,
	                            { striped: true, bordered: true, condensed: true, hover: true },
	                            React.createElement(
	                                'tbody',
	                                null,
	                                React.createElement(
	                                    'tr',
	                                    null,
	                                    React.createElement(
	                                        'td',
	                                        null,
	                                        '\u5361\u53F7'
	                                    ),
	                                    React.createElement(
	                                        'td',
	                                        null,
	                                        msg.cardID
	                                    )
	                                ),
	                                React.createElement(
	                                    'tr',
	                                    null,
	                                    React.createElement(
	                                        'td',
	                                        null,
	                                        '\u6D4F\u89C8\u5668'
	                                    ),
	                                    React.createElement(
	                                        'td',
	                                        null,
	                                        msg.browserIP
	                                    )
	                                ),
	                                React.createElement(
	                                    'tr',
	                                    null,
	                                    React.createElement(
	                                        'td',
	                                        null,
	                                        '\u8BFB\u5361\u5668'
	                                    ),
	                                    React.createElement(
	                                        'td',
	                                        null,
	                                        msg.readerID
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(_ks_queryscore2.default, { studentID: msg.studentID })
	            );
	        }
	    }]);

	    return KsNoexam;
	}(React.Component);

	module.exports = KsNoexam;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(89);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(469);

	var QueryScore = function (_React$Component) {
	  _inherits(QueryScore, _React$Component);

	  function QueryScore(props) {
	    _classCallCheck(this, QueryScore);

	    var _this = _possibleConstructorReturn(this, (QueryScore.__proto__ || Object.getPrototypeOf(QueryScore)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(QueryScore, [{
	    key: 'render',
	    value: function render() {
	      var scores = this.state.scores;

	      return _react2.default.createElement(
	        'div',
	        { className: 'queryscore' },
	        !scores ? null : _react2.default.createElement(
	          _reactBootstrap.Table,
	          { striped: true, bordered: true, condensed: true, hover: true },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'th',
	                null,
	                '\u8003\u751F\u59D3\u540D'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                '\u8003\u8BD5\u540D\u79F0'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                '\u8003\u8BD5\u6210\u7EE9'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            scores.map(function (score) {
	              return _react2.default.createElement(
	                'tr',
	                { key: score._id },
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  score.studentName
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  score.examName
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  score.totalScore
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var me = this;
	      var stuID = this.props.studentID;
	      if (!stuID) {
	        return;
	      }
	      agent.get('/queryscore/' + stuID).then(function (resp) {
	        var scores = resp.body;
	        me.setState({ scores: scores });
	      });
	    }
	  }]);

	  return QueryScore;
	}(_react2.default.Component);

	QueryScore.propTypes = {
	  name: _react2.default.PropTypes.string
	};
	exports.default = QueryScore;

/***/ },

/***/ 469:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 471:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(474);

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(4);

	var _ks_examing = __webpack_require__(475);

	var _ks_examing2 = _interopRequireDefault(_ks_examing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(480);


	//开始考试前的提示界面
	var Start = function Start(props) {
	    var msg = props.msg,
	        go = props.go;

	    return React.createElement(
	        'div',
	        { className: 'ks_exam' },
	        React.createElement(
	            _reactBootstrap.Jumbotron,
	            { className: 'text-center' },
	            React.createElement(
	                'h1',
	                null,
	                msg.exam.name
	            ),
	            React.createElement(
	                'h2',
	                null,
	                msg.className
	            ),
	            React.createElement(
	                'h2',
	                null,
	                msg.studentName
	            ),
	            React.createElement(
	                'h2',
	                null,
	                msg.studentID
	            ),
	            React.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: 'success', bsSize: 'large', onClick: go },
	                '\u5F00\u59CB\u8003\u8BD5'
	            )
	        )
	    );
	};

	//考试结束时提示界面
	var Over = function Over(props) {
	    var msg = props.msg,
	        scores = props.scores;
	    // var totalScore=_.sum(_.values(scores));
	    // console.log(totalScore)

	    return React.createElement(
	        'div',
	        { className: 'ks_exam' },
	        React.createElement(
	            _reactBootstrap.Jumbotron,
	            { className: 'text-center' },
	            React.createElement(
	                'h1',
	                null,
	                '\u8003\u8BD5\u7ED3\u675F'
	            ),
	            React.createElement(
	                'h1',
	                null,
	                msg.exam.name
	            ),
	            React.createElement(
	                'h2',
	                null,
	                msg.className
	            ),
	            React.createElement(
	                'h2',
	                null,
	                msg.studentName
	            ),
	            React.createElement(
	                'h2',
	                null,
	                msg.studentID
	            )
	        )
	    );
	};

	/**
	 * 考试界面
	 * 接受'exam.over'消息，显示结束界面
	 */

	var KsExam = function (_React$Component) {
	    _inherits(KsExam, _React$Component);

	    //三种状态：开始start，答题go，已结束over
	    //开始 start:获取考题和中断的答题卡(如果有)
	    //答题 go:考试进行中
	    //已结束 over:考生已经交卷或者考试时间到
	    function KsExam(props) {
	        _classCallCheck(this, KsExam);

	        var _this = _possibleConstructorReturn(this, (KsExam.__proto__ || Object.getPrototypeOf(KsExam)).call(this, props));

	        _this.state = {
	            s: "start"
	        };
	        return _this;
	    }

	    _createClass(KsExam, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var msg = this.props.msg;

	            console.log(msg);
	            switch (this.state.s) {
	                case "start":
	                    return React.createElement(Start, { msg: msg, go: function go() {
	                            return me.setState({ s: "go" });
	                        } });
	                case "go":
	                    return React.createElement(_ks_examing2.default, { msg: msg });
	                case "over":
	                    return React.createElement(Over, { msg: msg, scores: this.state.scores });
	            }
	            return null;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.token = PubSub.subscribe('exam.over', function (msg, scores) {
	                return _this2.setState({ s: "over", scores: scores });
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return KsExam;
	}(React.Component);

	module.exports = KsExam;

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(476);

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(4);

	var _classnames = __webpack_require__(92);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _CountdownTimer = __webpack_require__(477);

	var _CountdownTimer2 = _interopRequireDefault(_CountdownTimer);

	var _reader = __webpack_require__(268);

	var _reader2 = _interopRequireDefault(_reader);

	var _imageviewer = __webpack_require__(291);

	var _imageviewer2 = _interopRequireDefault(_imageviewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(478);

	var agent = __webpack_require__(281)(__webpack_require__(282), Promise);

	//倒计时组件
	var Timer = function Timer(props) {
	  var begin = props.begin,
	      duration = props.duration;

	  var now = new Date().getTime() / 1000;
	  var secondsRemaining = Math.floor(begin / 1000 + duration * 60 - now);
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { style: { textAlign: "center" } },
	    React.createElement(_CountdownTimer2.default, { secondsRemaining: secondsRemaining })
	  );
	};

	//题目缩略指示区，接受'thumbs.refresh'刷新内容
	//根据题目是否完成显示不同样式
	//点击题号可以跳转到题目

	var Thumbs = function (_React$Component) {
	  _inherits(Thumbs, _React$Component);

	  function Thumbs(props) {
	    _classCallCheck(this, Thumbs);

	    return _possibleConstructorReturn(this, (Thumbs.__proto__ || Object.getPrototypeOf(Thumbs)).call(this, props));
	  }

	  _createClass(Thumbs, [{
	    key: 'render',
	    value: function render() {
	      var answersheet = this.props.answersheet;
	      var questions = answersheet.questions,
	          answers = answersheet.answers;

	      return React.createElement(
	        _reactBootstrap.Panel,
	        null,
	        questions.map(function (gid, idx) {
	          return React.createElement(Thumb, { key: gid, gid: gid, idx: idx, done: answers.hasOwnProperty(gid) });
	        })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.token = PubSub.subscribe('thumbs.refresh', function () {
	        return _this2.forceUpdate();
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      PubSub.unsubscribe(this.token);
	    }
	  }]);

	  return Thumbs;
	}(React.Component);

	//题目缩略指示


	Thumbs.propTypes = {
	  answersheet: React.PropTypes.object
	};
	var Thumb = function Thumb(props) {
	  var gid = props.gid,
	      idx = props.idx,
	      done = props.done;

	  return React.createElement(
	    'div',
	    { className: (0, _classnames2.default)("thumb", { done: done }) },
	    React.createElement(
	      'a',
	      { href: "#q-" + gid },
	      idx + 1
	    )
	  );
	};

	/**
	 * 根据答题卡answersheet，从'/questions'取得题目
	 * 接受'answer'消息，更新答案
	 * 发布'thumbs.refresh'消息，更新题目缩略
	 * 用QuestionsView显示题目
	 */

	var Questions = function (_React$Component2) {
	  _inherits(Questions, _React$Component2);

	  function Questions(props) {
	    _classCallCheck(this, Questions);

	    var _this3 = _possibleConstructorReturn(this, (Questions.__proto__ || Object.getPrototypeOf(Questions)).call(this, props));

	    _this3.state = { answersheet: props.answersheet };
	    return _this3;
	  }

	  _createClass(Questions, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          questions = _state.questions,
	          answersheet = _state.answersheet;

	      if (!questions) {
	        return null;
	      }
	      return React.createElement(QuestionsView, { questions: questions, answersheet: answersheet });
	    }
	  }, {
	    key: 'onAnswer',
	    value: function onAnswer(msg, ans) {
	      // console.log('onAnswer',msg,ans);
	      var answersheet = this.state.answersheet;
	      var answers = answersheet.answers;

	      answers[ans.gid] = ans.answer;
	      this.setState({ answersheet: answersheet });
	      PubSub.publish('thumbs.refresh');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.fetchQuestions();
	      this.token = PubSub.subscribe('answer', this.onAnswer.bind(this));
	    }
	  }, {
	    key: 'fetchQuestions',
	    value: function fetchQuestions() {
	      var _this4 = this;

	      console.log('fetchQuestions');
	      var answersheet = this.props.answersheet;

	      agent.post('/questions', answersheet.questions).then(function (resp) {
	        _this4.setState({ questions: resp.body });
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      PubSub.unsubscribe(this.token);
	    }
	  }]);

	  return Questions;
	}(React.Component);

	//负责显示具体题目


	Questions.propTypes = {
	  answersheet: React.PropTypes.object
	};

	var QuestionsView = function (_React$Component3) {
	  _inherits(QuestionsView, _React$Component3);

	  function QuestionsView(props) {
	    _classCallCheck(this, QuestionsView);

	    return _possibleConstructorReturn(this, (QuestionsView.__proto__ || Object.getPrototypeOf(QuestionsView)).call(this, props));
	  }

	  _createClass(QuestionsView, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          questions = _props.questions,
	          answersheet = _props.answersheet;
	      var answers = answersheet.answers,
	          prices = answersheet.prices;

	      console.log('QuestionsView', questions);
	      return React.createElement(
	        'div',
	        null,
	        questions.map(function (node, idx) {
	          return React.createElement(
	            'div',
	            { id: "q-" + node._id, key: node._id },
	            React.createElement(Q, { node: node, prefix: idx + 1 + ". ", answer: answers[node._id],
	              price: prices[node._id] })
	          );
	        })
	      );
	    }
	  }]);

	  return QuestionsView;
	}(React.Component);

	//具体到每一题的显示组件


	QuestionsView.propTypes = {
	  questions: React.PropTypes.array,
	  answersheet: React.PropTypes.object
	};
	var Q = function Q(props) {
	  var node = props.node;
	  var type = node._data.type;

	  switch (type) {
	    case "ks1/choice":
	      return React.createElement(Qchoice, props);
	    case "ks1/tf":
	      return React.createElement(Qtf, props);
	    case "ks1/qa":
	      return React.createElement(Qqa, props);
	    case "ks1/revise":
	      return React.createElement(Qrevise, props);
	  }
	  return null;
	};

	//单选题，answer是答案的序号,answers是选支
	//发布'answer'信息更新答案
	var Qchoice = function Qchoice(_ref) {
	  var node = _ref.node,
	      prefix = _ref.prefix,
	      answer = _ref.answer,
	      price = _ref.price;
	  var _node$_data$data = node._data.data,
	      question = _node$_data$data.question,
	      answers = _node$_data$data.answers;

	  answers = answers || [];
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { header: prefix + "[" + price + "分]" + "[选择题] " + question },
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 }),
	    React.createElement(
	      _reactBootstrap.ListGroup,
	      { fill: true },
	      answers.map(function (ans, idx) {
	        return React.createElement(
	          _reactBootstrap.ListGroupItem,
	          {
	            key: idx,
	            bsStyle: answer === idx ? "info" : null
	          },
	          React.createElement(
	            'div',
	            { onClick: function onClick() {
	                return PubSub.publish('answer', { gid: node._id, answer: idx });
	              } },
	            "ABCDEFGHI"[idx] + ". " + ans.answer
	          )
	        );
	      })
	    )
	  );
	};

	//问答题
	//发布'answer'信息更新答案
	var Qqa = function Qqa(_ref2) {
	  var node = _ref2.node,
	      prefix = _ref2.prefix,
	      answer = _ref2.answer,
	      price = _ref2.price;
	  var question = node._data.data.question;

	  var onChange = function onChange(e) {
	    return PubSub.publish('answer', { gid: node._id, answer: e.target.value });
	  };
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { header: prefix + "[" + price + "分]" + "[问答题] " + question },
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 }),
	    React.createElement('textarea', { className: 'form-control answer', style: { width: "100%" },
	      rows: '5', placeholder: '\u7B54\u6848\u5199\u5728\u8FD9\u91CC', onChange: onChange, defaultValue: answer })
	  );
	};

	//判断题
	//发布'answer'信息更新答案
	var Qtf = function Qtf(_ref3) {
	  var node = _ref3.node,
	      prefix = _ref3.prefix,
	      answer = _ref3.answer,
	      price = _ref3.price;
	  var question = node._data.data.question;

	  var onClick = function onClick(e) {
	    PubSub.publish('answer', { gid: node._id, answer: !answer });
	  };
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { onClick: onClick },
	    prefix + "[" + price + "分]" + "[判断题] " + question + "   ",
	    '(',
	    React.createElement(
	      'span',
	      { className: 'answer' },
	      answer === undefined ? " " : answer ? "✓" : "✗"
	    ),
	    ')',
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 })
	  );
	};

	//改错题
	//发布'answer'信息更新答案
	var Qrevise = function Qrevise(_ref4) {
	  var node = _ref4.node,
	      prefix = _ref4.prefix,
	      answer = _ref4.answer,
	      price = _ref4.price;
	  var _node$_data$data2 = node._data.data,
	      question = _node$_data$data2.question,
	      content = _node$_data$data2.content;

	  var onChange = function onChange(e) {
	    return PubSub.publish('answer', { gid: node._id, answer: e.target.value });
	  };
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { header: prefix + "[" + price + "分]" + "[改错题] " + question },
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 }),
	    React.createElement('textarea', { className: 'form-control answer', style: { width: "100%" }, defaultValue: answer || content,
	      rows: '5', placeholder: '\u7B54\u6848\u5199\u5728\u8FD9\u91CC', onChange: onChange, value: answer })
	  );
	};

	//进行考试组件
	//点击交卷按钮或者时间到收到'timer.over'会导致交卷
	//交卷时将答题卡提交"/api/answersheet/answersheet_id"
	//然后交由"/score/answersheet_id"评分，完成后发布'exam.over'事件进入结束界面

	var KsExaming = function (_React$Component4) {
	  _inherits(KsExaming, _React$Component4);

	  function KsExaming(props) {
	    _classCallCheck(this, KsExaming);

	    var _this6 = _possibleConstructorReturn(this, (KsExaming.__proto__ || Object.getPrototypeOf(KsExaming)).call(this, props));

	    _this6.state = {};
	    return _this6;
	  }

	  _createClass(KsExaming, [{
	    key: 'render',
	    value: function render() {
	      var _this7 = this;

	      var me = this;
	      var answersheet = this.state.answersheet;

	      if (!answersheet) {
	        return null;
	      }
	      var msg = this.props.msg;

	      console.log(answersheet, msg);
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'left', style: { padding: "5px" } },
	          React.createElement(
	            'div',
	            { style: { position: "fixed", width: "29%" } },
	            React.createElement(
	              'div',
	              { style: { fontSize: "2em", paddingBottom: "15px" } },
	              React.createElement('img', { src: '/img/logo.png', width: '50' }),
	              ' \u5B9E\u9A8C\u8003\u8BD5\u7BA1\u7406\u7CFB\u7EDF'
	            ),
	            React.createElement(
	              _reactBootstrap.Button,
	              { block: true, bsSize: 'lg', bsStyle: 'success', style: { marginBottom: "20px" }, onClick: function onClick() {
	                  return _this7.finish();
	                } },
	              '\u4EA4\u5377'
	            ),
	            React.createElement(Timer, { begin: answersheet.begin, duration: msg.exam.duration }),
	            React.createElement(Thumbs, { answersheet: answersheet })
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'right', style: { padding: "5px" } },
	          React.createElement(Questions, { answersheet: answersheet })
	        )
	      );
	    }

	    //交卷

	  }, {
	    key: 'finish',
	    value: function finish() {
	      var answersheet = this.state.answersheet;

	      answersheet.end = new Date().getTime();
	      agent.put("/api/answersheet/" + answersheet._id, answersheet).then(function (resp) {
	        agent.get("/score/" + answersheet._id) //评分
	        .then(function (resp) {
	          var scores = resp.body;
	          PubSub.publish('exam.over', scores);
	        });
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this8 = this;

	      this.fetchAnswerSheet();
	      this.token = PubSub.subscribe('timer.over', function () {
	        return _this8.finish();
	      });
	    }
	  }, {
	    key: 'fetchAnswerSheet',
	    value: function fetchAnswerSheet() {
	      var _this9 = this;

	      var msg = this.props.msg;

	      var data = { examID: msg.exam._id, studentID: msg.studentID };
	      agent.get("/answersheet/" + data.examID + "/" + data.studentID).then(function (resp) {
	        _this9.setState({ answersheet: resp.body });
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      PubSub.unsubscribe(this.token);
	    }
	  }]);

	  return KsExaming;
	}(React.Component);

	module.exports = KsExaming;

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(89);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var moment=require('moment');

	//倒计时组件，每秒更新一次，倒计时结束时发布'timer.over'
	var CountdownTimer = _react2.default.createClass({
	  displayName: 'CountdownTimer',

	  getInitialState: function getInitialState() {
	    return {
	      secondsRemaining: 0
	    };
	  },
	  tick: function tick() {
	    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
	    if (this.state.secondsRemaining <= 0) {
	      clearInterval(this.interval);
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ secondsRemaining: this.props.secondsRemaining });
	    this.interval = setInterval(this.tick, 1000);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      this.sec2str(this.state.secondsRemaining)
	    );
	  },

	  sec2str: function sec2str(t) {
	    if (t < 0) {
	      PubSub.publish('timer.over');
	      return '时间到';
	    }
	    var d = Math.floor(t / 86400),
	        h = ('0' + Math.floor(t / 3600) % 24).slice(-2),
	        m = ('0' + Math.floor(t / 60) % 60).slice(-2),
	        s = ('0' + t % 60).slice(-2);
	    return (d > 0 ? d + 'd ' : '') + (h > 0 ? h + ':' : '') + (m > 0 ? m + ':' : '') + (t > 60 ? s : s + 's');
	  }
	});
	module.exports = CountdownTimer;

/***/ },

/***/ 478:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 480:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(483);

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(484);

	var KsPrompt = function (_React$Component) {
	    _inherits(KsPrompt, _React$Component);

	    function KsPrompt(props) {
	        _classCallCheck(this, KsPrompt);

	        var _this = _possibleConstructorReturn(this, (KsPrompt.__proto__ || Object.getPrototypeOf(KsPrompt)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(KsPrompt, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                'div',
	                { className: 'ks_prompt' },
	                React.createElement(
	                    'header',
	                    { className: 'intro-header exp-header' },
	                    React.createElement(
	                        'h3',
	                        { style: { color: "white", padding: "20px", marginTop: 0 } },
	                        '\u5B9E\u9A8C\u8003\u8BD5\u7BA1\u7406\u7CFB\u7EDF'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'container' },
	                        React.createElement(
	                            'div',
	                            { className: 'row' },
	                            React.createElement(
	                                'div',
	                                { className: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1' },
	                                React.createElement(
	                                    'div',
	                                    { className: 'site-heading' },
	                                    React.createElement(
	                                        'h1',
	                                        null,
	                                        '\u5B66\u5458\u8003\u8BD5\u8BF7\u5237\u5361'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'row' },
	                        React.createElement(
	                            'div',
	                            { className: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1' },
	                            React.createElement(
	                                'div',
	                                { className: 'post-preview ', style: { textAlign: "center" } },
	                                React.createElement('img', { src: '/img/banner2.png', width: '400px' })
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return KsPrompt;
	}(React.Component);

	module.exports = KsPrompt;

/***/ },

/***/ 484:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 486:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});