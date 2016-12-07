webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(4);

	var _login = __webpack_require__(61);

	var _login2 = _interopRequireDefault(_login);

	var _main = __webpack_require__(67);

	var _main2 = _interopRequireDefault(_main);

	var _manage = __webpack_require__(196);

	var _manage2 = _interopRequireDefault(_manage);

	var _banks = __webpack_require__(198);

	var _banks2 = _interopRequireDefault(_banks);

	var _papers = __webpack_require__(503);

	var _papers2 = _interopRequireDefault(_papers);

	var _exams = __webpack_require__(509);

	var _exams2 = _interopRequireDefault(_exams);

	var _teachers = __webpack_require__(523);

	var _teachers2 = _interopRequireDefault(_teachers);

	var _classes = __webpack_require__(525);

	var _classes2 = _interopRequireDefault(_classes);

	var _rooms = __webpack_require__(527);

	var _rooms2 = _interopRequireDefault(_rooms);

	var _room_creater = __webpack_require__(690);

	var _room_creater2 = _interopRequireDefault(_room_creater);

	var _class_creater = __webpack_require__(698);

	var _class_creater2 = _interopRequireDefault(_class_creater);

	var _paper_creater = __webpack_require__(624);

	var _paper_creater2 = _interopRequireDefault(_paper_creater);

	var _exam_creater = __webpack_require__(702);

	var _exam_creater2 = _interopRequireDefault(_exam_creater);

	var _teacher_creater = __webpack_require__(742);

	var _teacher_creater2 = _interopRequireDefault(_teacher_creater);

	var _class_updater = __webpack_require__(746);

	var _class_updater2 = _interopRequireDefault(_class_updater);

	var _room_updater = __webpack_require__(750);

	var _room_updater2 = _interopRequireDefault(_room_updater);

	var _exam_updater = __webpack_require__(754);

	var _exam_updater2 = _interopRequireDefault(_exam_updater);

	var _paper_updater = __webpack_require__(654);

	var _paper_updater2 = _interopRequireDefault(_paper_updater);

	var _teacher_updater = __webpack_require__(758);

	var _teacher_updater2 = _interopRequireDefault(_teacher_updater);

	var _answersheet_updater = __webpack_require__(762);

	var _answersheet_updater2 = _interopRequireDefault(_answersheet_updater);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(770);
	// import appHistory from '../../components/history';

	var userManager = __webpack_require__(675);

	var PageManage = function (_React$Component) {
	    _inherits(PageManage, _React$Component);

	    function PageManage(props) {
	        _classCallCheck(this, PageManage);

	        var _this = _possibleConstructorReturn(this, (PageManage.__proto__ || Object.getPrototypeOf(PageManage)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(PageManage, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'exam' },
	                _react2.default.createElement(
	                    _reactRouter.Router,
	                    { history: _reactRouter.hashHistory },
	                    _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _login2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _main2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/main', component: _main2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/banks', component: _banks2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/teachers', component: _teachers2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/teachers/create', component: _teacher_creater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/teachers/:id', component: _teacher_updater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/papers', component: _papers2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/papers/create', component: _paper_creater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/papers/:id', component: _paper_updater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/exams', component: _exams2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/exams/create', component: _exam_creater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/exams/:id', component: _exam_updater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/classes', component: _classes2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/classes/create', component: _class_creater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/classes/:id', component: _class_updater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/rooms', component: _rooms2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/rooms/create', component: _room_creater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/rooms/:id', component: _room_updater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/answersheet/:id', component: _answersheet_updater2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/manage', component: _main2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/manage/0', component: _main2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/manage/1', component: _main2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/manage/:gid', component: _manage2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/manage/:gid/:vtype', component: _manage2.default })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            userManager.refreshUser(); //取得登陆用户
	        }
	    }]);

	    return PageManage;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(PageManage, null), document.getElementById('App'));

	module.exports = PageManage;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(62);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(63);

	var Login = function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Login, [{
	        key: "render",
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                "div",
	                { className: "login" },
	                "component login"
	            );
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	    }]);

	    return Login;
	}(React.Component);

	module.exports = Login;

/***/ },
/* 63 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(68);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(69);

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main(props) {
	        _classCallCheck(this, Main);

	        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

	        _this.state = {};
	        _this.createPathIfNotExist();
	        return _this;
	    }

	    _createClass(Main, [{
	        key: 'createPathIfNotExist',
	        value: function createPathIfNotExist() {
	            var menu_node, menu_gid;
	            return regeneratorRuntime.async(function createPathIfNotExist$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath("0/menu"));

	                        case 2:
	                            menu_node = _context.sent;
	                            menu_gid = menu_node._id;
	                            _context.next = 6;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath(menu_gid + "/banks"));

	                        case 6:
	                            _context.next = 8;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath(menu_gid + "/papers"));

	                        case 8:
	                            _context.next = 10;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath(menu_gid + "/exams"));

	                        case 10:
	                            _context.next = 12;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath(menu_gid + "/teachers"));

	                        case 12:
	                            _context.next = 14;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath(menu_gid + "/classes"));

	                        case 14:
	                            _context.next = 16;
	                            return regeneratorRuntime.awrap(tool.createNodeByPath(menu_gid + "/rooms"));

	                        case 16:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-12' },
	                        _react2.default.createElement('h1', { className: 'page-header' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-primary' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-heading' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-3' },
	                                        _react2.default.createElement('i', { className: 'fa fa-database fa-5x' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-9 text-right' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'huge' },
	                                            '\u9898\u5E93\u7BA1\u7406'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '\u5F55\u5165\u4E0E\u7EC4\u7EC7\u8BD5\u9898'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#/banks' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-footer' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-left' },
	                                        '\u8FDB\u5165\u6A21\u5757'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
	                                    ),
	                                    _react2.default.createElement('div', { className: 'clearfix' })
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-green' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-heading' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-3' },
	                                        _react2.default.createElement('i', { className: 'fa fa-tasks fa-5x' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-9 text-right' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'huge' },
	                                            '\u81EA\u52A8\u6210\u5377'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '\u4ECE\u9898\u5E93\u4E2D\u9009\u62E9\u9898\u76EE\u751F\u6210\u8BD5\u5377'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#/papers' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-footer' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-left' },
	                                        '\u8FDB\u5165\u6A21\u5757'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
	                                    ),
	                                    _react2.default.createElement('div', { className: 'clearfix' })
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-yellow' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-heading' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-3' },
	                                        _react2.default.createElement('i', { className: 'fa fa-edit fa-5x' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-9 text-right' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'huge' },
	                                            '\u8003\u6838\u7BA1\u7406'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '\u9009\u62E9\u8BD5\u5377\u8003\u573A\uFF0C\u7EC4\u7EC7\u8003\u8BD5'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#/exams' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-footer' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-left' },
	                                        '\u8FDB\u5165\u6A21\u5757'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
	                                    ),
	                                    _react2.default.createElement('div', { className: 'clearfix' })
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-red' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-heading' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-3' },
	                                        _react2.default.createElement('i', { className: 'fa fa-user fa-5x' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-9 text-right' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'huge' },
	                                            '\u7CFB\u7EDF\u7BA1\u7406'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '\u7BA1\u7406\u5458\u6388\u6743'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#/teachers' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-footer' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-left' },
	                                        '\u8FDB\u5165\u6A21\u5757'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
	                                    ),
	                                    _react2.default.createElement('div', { className: 'clearfix' })
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-teal' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-heading' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-3' },
	                                        _react2.default.createElement('i', { className: 'fa fa-users fa-5x' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-9 text-right' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'huge' },
	                                            '\u8003\u6838\u5BF9\u8C61'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '\u5B66\u751F\u4FE1\u606F\u7BA1\u7406'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#/classes' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-footer' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-left' },
	                                        '\u8FDB\u5165\u6A21\u5757'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
	                                    ),
	                                    _react2.default.createElement('div', { className: 'clearfix' })
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-4 col-md-6' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-purple' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-heading' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'row' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-3' },
	                                        _react2.default.createElement('i', { className: 'fa fa-desktop fa-5x' })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-xs-9 text-right' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'huge' },
	                                            '\u8003\u573A\u7BA1\u7406'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            null,
	                                            '\u8003\u573A\u4FE1\u606F\u7BA1\u7406'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { href: '#/rooms' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-footer' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-left' },
	                                        '\u8FDB\u5165\u6A21\u5757'
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
	                                    ),
	                                    _react2.default.createElement('div', { className: 'clearfix' })
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Main;
	}(_react2.default.Component);

	exports.default = Main;

/***/ },
/* 69 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 70 */,
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LRU = __webpack_require__(72),
	    cache = LRU(5000);
	var _ = __webpack_require__(79);
	// var cache=require('./cache');//LRU cache没有问题，是删除sgid父节点后又误读取了父节点（dgid）
	var _api;
	var api = {
	  read: read,
	  read_nodes: read_nodes,
	  mk_son_by_data: mk_son_by_data,
	  mk_son_by_name: mk_son_by_name,
	  namepath2node: namepath2node,
	  mk_brother_by_data: mk_brother_by_data,
	  remove: remove,
	  update: update,
	  mv_as_son: mv_as_son,
	  mv_as_brother: mv_as_brother,
	  read_big_node: read_big_node
	};
	function factory(_prefix) {
	  _api = __webpack_require__(81)(_prefix);
	  return api;
	}
	module.exports = factory;

	function clone(obj) {
	  if (!obj) {
	    return null;
	  }
	  return JSON.parse(JSON.stringify(obj));
	}

	function read(gid) {
	  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (!gid) {
	    console.warn('read:invalid param', gid);
	    return Promise.resolve(null);
	  }
	  if (!force && cache.has(gid)) {
	    return Promise.resolve(cache.get(gid));
	  }
	  return _api.read(gid).then(function (node) {
	    cache.set(node._id, node);
	    return node;
	  });
	}

	function read_nodes(gids) {
	  if (!gids || gids.length === 0) {
	    return Promise.resolve([]);
	  }
	  var cachedNodes = [];
	  var unCachedGids = [];
	  gids.map(function (gid) {
	    if (cache.has(gid)) {
	      cachedNodes.push(cache.get(gid));
	    } else {
	      unCachedGids.push(gid);
	    }
	  });
	  console.log('read_nodes', gids, 'unCachedGids', unCachedGids);
	  if (unCachedGids.length === 0) {
	    return Promise.resolve(cachedNodes.map(clone)); //全在cache中直接返回 //返回克隆避免缓存被修改
	  }
	  //否则合并返回
	  return _api.read_nodes(unCachedGids).then(function (new_nodes) {
	    new_nodes.map(function (node) {
	      return cache.set(node._id, node);
	    }); //更新nodes cache
	    // 调整顺序
	    var tmp = {};
	    cachedNodes.map(function (node) {
	      return tmp[node._id] = node;
	    });
	    new_nodes.map(function (node) {
	      return tmp[node._id] = node;
	    });
	    var nodes = gids.map(function (gid) {
	      return clone(tmp[gid]);
	    }); //返回克隆避免缓存被修改
	    return _.compact(nodes);
	  });
	}

	function mk_son_by_data(pgid, data) {
	  return _api.mk_son_by_data(pgid, data).then(function (node) {
	    cache.set(node._id, node); //更新子节点
	    cache.del(pgid); //删除旧的父节点
	    return node; //返回新的子节点
	  });
	}

	function mk_son_by_name(pgid, name) {
	  return _api.mk_son_by_name(pgid, name).then(function (node) {
	    cache.set(node._id, node); //更新子节点
	    cache.del(pgid); //删除旧的父节点
	    return node; //返回新的子节点
	  });
	}

	function _remove_parent_from_cache(gid) {
	  return api.read(gid).then(function (node) {
	    console.log("_remove_parent_from_cache", node._link.p);
	    cache.del(node._link.p);
	  });
	}

	function mk_brother_by_data(bgid, data) {
	  return _remove_parent_from_cache(bgid).then(function (_) {
	    return _api.mk_brother_by_data(bgid, data);
	  });
	}

	/**
	 * 删除节点，并刷新父节点和删除子节点，返回被删除的节点
	 * 注意，返回值与api.remove不一致
	 */
	function remove(gid) {
	  //删除某节点后，缓存中该节点的父节点要更新，后续子节点都要删除
	  return read(gid).then(function (node) {
	    return (//删除前先取出。待会儿还有用。
	      //删除节点
	      _api.remove(gid).then(function (res) {
	        if (node) {
	          //如果删除前没有取到当前节点，父节点将无法刷新。
	          //递归删除cache中所有子节点
	          _remove_all_children(node._link.children);
	          cache.del(node._link.p); //刷新父节点
	          return node; //返回被删除的节点
	        }
	        return null;
	      })
	    );
	  });
	}

	//递归删除cache中所有子节点
	function _remove_all_children(gids) {
	  if (!gids) {
	    return;
	  }
	  gids.map(function (gid) {
	    if (cache.has(gid)) {
	      _remove_all_children(cache.get(gid)._link.chilren);
	      cache.del(gid);
	    }
	  });
	}

	function update(gid, data) {
	  return _api.update(gid, data).then(function (node) {
	    return cache.set(node._id, node);
	  });
	}

	function mv_as_son(sgid, dgid) {
	  cache.del(dgid);
	  return _remove_parent_from_cache(sgid).then(function (_) {
	    return _api.mv_as_son(sgid, dgid).then(function (node) {
	      cache.set(node._id, node);
	      return node;
	    });
	  });
	}

	function mv_as_brother(sgid, dgid) {
	  return _remove_parent_from_cache(dgid) //顺序重要！要先删除目标节点dgid的父节点，因为目标节点dgid可能是sgid的父节点
	  .then(function (_) {
	    return _remove_parent_from_cache(sgid);
	  }).then(function (_) {
	    return _api.mv_as_brother(sgid, dgid).then(function (node) {
	      cache.set(node._id, node);
	      return node;
	    });
	  });
	}

	//not cached
	function read_big_node(gid) {
	  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  return _api.read_big_node(gid, level);
	}

	function namepath2node(namepath) {
	  return _api.namepath2node(namepath);
	}

/***/ },
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // var agent = require('superagent-promise')(require('superagent'), Promise);

	var _frisbee = __webpack_require__(82);

	var _frisbee2 = _interopRequireDefault(_frisbee);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create a new instance of Frisbee
	var agent = new _frisbee2.default({
	  baseURI: '/',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json'
	  }
	});

	var prefix;
	var api = {
	  read: read,
	  read_nodes: read_nodes,
	  mk_son_by_data: mk_son_by_data,
	  mk_son_by_name: mk_son_by_name,
	  namepath2node: namepath2node,
	  mk_brother_by_data: mk_brother_by_data,
	  remove: remove,
	  update: update,
	  mv_as_son: mv_as_son,
	  mv_as_brother: mv_as_brother,
	  read_big_node: read_big_node
	};
	function factory(_prefix) {
	  prefix = _prefix;
	  return api;
	}
	module.exports = factory;

	function read(gid) {
	  return agent.get(prefix + '/' + gid).then(function (res) {
	    return res.body;
	  });
	}

	function read_nodes(gids) {
	  return agent.post(prefix + '/nodes/', { body: gids }).then(function (res) {
	    return res.body;
	  });
	}

	function mk_son_by_data(pgid, data) {
	  if (data === null) {
	    data = {};
	  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== "object") {
	    data = { data: data };
	  }
	  return agent.post(prefix + '/mk/son/' + pgid, { body: data }).then(function (res) {
	    return res.body;
	  });
	}

	function mk_son_by_name(pgid, name) {
	  return agent.post(prefix + '/mk/son_name/' + pgid, { body: { name: name } }).then(function (res) {
	    return res.body;
	  });
	}

	function namepath2node(namepath) {
	  return agent.get(prefix + '/namepath/' + namepath).then(function (res) {
	    return res.body;
	  });
	}

	function mk_brother_by_data(bgid, data) {
	  return agent.post(prefix + '/mk/brother/' + bgid, { body: data }).then(function (res) {
	    return res.body;
	  });
	}

	function remove(gid) {
	  return agent.del(prefix + '/' + gid).then(function (res) {
	    return res.body;
	  });
	}

	function update(gid, data) {
	  if (data === null) {
	    data = {};
	  } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== "object") {
	    data = { data: data };
	  }
	  return agent.put(prefix + '/' + gid, { body: data }).then(function (res) {
	    return res.body;
	  });
	}

	function mv_as_son(sgid, dgid) {
	  return agent.post(prefix + '/mv/' + sgid + '/son/' + dgid).then(function (res) {
	    return res.body;
	  });
	}

	function mv_as_brother(sgid, dgid) {
	  return agent.post(prefix + '/mv/' + sgid + '/brother/' + dgid).then(function (res) {
	    return res.body;
	  });
	}

	function read_big_node(gid) {
	  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  return agent.get(prefix + '/bignode/' + gid + '/' + level).then(function (res) {
	    return res.body;
	  });
	}

/***/ },
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var R = __webpack_require__(194);
	// const tree=require('treenote/lib/client/tree-cache')('_api');
	var tree;
	var path = __webpack_require__(195);
	var cache = {}; //walkaround,由于连续两个相同的tree.lidpath2gid(ppath)调用会导致第二个不执行。所以放到缓存中。

	function clone(obj) {
	    return JSON.parse(JSON.stringify(obj));
	}

	function expand(node, level) {
	    //level用于控制展开的层级
	    if (node._link.children.length == 0 || level <= 0) {
	        //不做展开的2种情况。1.没有子节点。2，展开层级小于0
	        var cloneNode = clone(node);
	        cloneNode._children = [];
	        return Promise.resolve(cloneNode);
	    } else {
	        return tree.read_nodes(node._link.children).then(function (nodes) {
	            var fnodes = nodes.map(function (node) {
	                return expand(node, level - 1);
	            });
	            return Promise.all(fnodes).then(function (nodes) {
	                var cloneNode = clone(node);
	                cloneNode._children = nodes || []; //展开的节点放到_children中
	                return cloneNode;
	            });
	        });
	    }
	}

	function includes(arr, obj) {
	    return arr.indexOf(obj) > -1;
	}

	function expand2(node) {
	    var expands = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    //expands用于控制展开的节点列表
	    if (node._link.children.length == 0 || !includes(expands, node._id)) {
	        //不做展开的2种情况。1.没有子节点。2，expands数组中没有此项
	        var cloneNode = clone(node);
	        cloneNode._children = [];
	        return Promise.resolve(cloneNode);
	    } else {
	        return tree.read_nodes(node._link.children).then(function (nodes) {
	            var fnodes = nodes.map(function (node) {
	                return expand2(node, expands);
	            });
	            return Promise.all(fnodes).then(function (nodes) {
	                var cloneNode = clone(node);
	                cloneNode._children = nodes || []; //展开的节点放到_children中
	                return cloneNode;
	            });
	        });
	    }
	}

	//填充父节点直到根节点,包含根节点 
	//[19]==>[0,1,17,19]
	function expandToRoot(gids) {
	    var _this = this;

	    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

	    var gid = gids[0];
	    return tree.read(gid).then(function (node) {
	        var p = node._link.p;
	        gids.unshift(p);
	        if (p === root || p === '0' || p === 0) {
	            return gids;
	        } else {
	            return _this.expandToRoot(gids, root);
	        }
	    });
	}

	function createChildByName(pgid, name) {
	    // console.log('createChildByName',pgid,name);
	    return tree.mk_son_by_name(pgid, name);
	}

	//根据路径创建节点
	/**
	 * @param  {String}
	 * @param  {Array}
	 * @return {Promise<String>}
	 */
	function createNodeByPath(path) {
	    //path="0/abc/def" gid加上路径的形式表达
	    var paths = path.split('/');
	    var gid = paths.shift(); //移出第一个gid，剩下部分为路径
	    var f = function f(P, name) {
	        return P.then(function (pnode) {
	            return createChildByName(pnode._id, name);
	        });
	    };
	    return paths.reduce(f, tree.read(gid));
	}

	//node为展开的节点，拥有_children
	//gid为展开节点中的一个，求gid的展开层级
	//level为node所在层级
	function findLevel(node, gid) {
	    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	    if (node._id === gid) {
	        return level; //当前节点就是，返回当前层级
	    } else if (node._children.length > 0) {
	        return _.compact(node._children.map(function (node) {
	            return findLevel(node, gid, level + 1);
	        }))[0];
	    } else {
	        return null; //当前节点不是，又没有子节点，返回null
	    }
	}

	module.exports = function (_tree) {
	    tree = _tree;
	    return {
	        expand: expand,
	        expand2: expand2,
	        expandToRoot: expandToRoot,
	        createNodeByPath: createNodeByPath,
	        findLevel: findLevel
	    };
	};

/***/ },
/* 194 */,
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(197);

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _main = __webpack_require__(67);

	var _main2 = _interopRequireDefault(_main);

	var _banks = __webpack_require__(198);

	var _banks2 = _interopRequireDefault(_banks);

	var _papers = __webpack_require__(503);

	var _papers2 = _interopRequireDefault(_papers);

	var _exams = __webpack_require__(509);

	var _exams2 = _interopRequireDefault(_exams);

	var _teachers = __webpack_require__(523);

	var _teachers2 = _interopRequireDefault(_teachers);

	var _classes = __webpack_require__(525);

	var _classes2 = _interopRequireDefault(_classes);

	var _rooms = __webpack_require__(527);

	var _rooms2 = _interopRequireDefault(_rooms);

	var _soneditor = __webpack_require__(529);

	var _soneditor2 = _interopRequireDefault(_soneditor);

	var _topic_choice_creater = __webpack_require__(533);

	var _topic_choice_creater2 = _interopRequireDefault(_topic_choice_creater);

	var _topic_qa_creater = __webpack_require__(588);

	var _topic_qa_creater2 = _interopRequireDefault(_topic_qa_creater);

	var _topic_tf_creater = __webpack_require__(592);

	var _topic_tf_creater2 = _interopRequireDefault(_topic_tf_creater);

	var _topic_revise_creater = __webpack_require__(596);

	var _topic_revise_creater2 = _interopRequireDefault(_topic_revise_creater);

	var _bank_folder = __webpack_require__(600);

	var _bank_folder2 = _interopRequireDefault(_bank_folder);

	var _bank_folder_creater = __webpack_require__(608);

	var _bank_folder_creater2 = _interopRequireDefault(_bank_folder_creater);

	var _paper_folder = __webpack_require__(612);

	var _paper_folder2 = _interopRequireDefault(_paper_folder);

	var _paper_folder_creater = __webpack_require__(620);

	var _paper_folder_creater2 = _interopRequireDefault(_paper_folder_creater);

	var _paper_creater = __webpack_require__(624);

	var _paper_creater2 = _interopRequireDefault(_paper_creater);

	var _paper_updater = __webpack_require__(654);

	var _paper_updater2 = _interopRequireDefault(_paper_updater);

	var _topic_choice_updater = __webpack_require__(658);

	var _topic_choice_updater2 = _interopRequireDefault(_topic_choice_updater);

	var _topic_qa_updater = __webpack_require__(676);

	var _topic_qa_updater2 = _interopRequireDefault(_topic_qa_updater);

	var _topic_tf_updater = __webpack_require__(680);

	var _topic_tf_updater2 = _interopRequireDefault(_topic_tf_updater);

	var _topic_revise_updater = __webpack_require__(684);

	var _topic_revise_updater2 = _interopRequireDefault(_topic_revise_updater);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(688);
	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	function v(node) {
	    if (!node) {
	        return null;
	    }
	    if (node._data && node._data.type) {
	        return vByType(node._data.type, node);
	    }
	    var components = {
	        menu: React.createElement(_main2.default, null),
	        banks: React.createElement(_banks2.default, null),
	        papers: React.createElement(_papers2.default, null),
	        exams: React.createElement(_exams2.default, null),
	        teachers: React.createElement(_teachers2.default, null),
	        classes: React.createElement(_classes2.default, null),
	        rooms: React.createElement(_rooms2.default, null)
	    };
	    return components[node._name] || null;
	}

	function vByType(type, node) {
	    var components = {
	        "ks1/banks": React.createElement(_banks2.default, null),
	        "ks1/papers": React.createElement(_papers2.default, null),
	        "ks1/exams": React.createElement(_exams2.default, null),
	        "ks1/teachers": React.createElement(_teachers2.default, null),
	        "ks1/classes": React.createElement(_classes2.default, null),
	        "ks1/rooms": React.createElement(_rooms2.default, null),
	        "ks1/bank/folder": React.createElement(_bank_folder2.default, { node: node }),
	        "ks1/choice": React.createElement(_topic_choice_updater2.default, { node: node }),
	        "ks1/qa": React.createElement(_topic_qa_updater2.default, { node: node }),
	        "ks1/tf": React.createElement(_topic_tf_updater2.default, { node: node }),
	        "ks1/revise": React.createElement(_topic_revise_updater2.default, { node: node }),
	        "ks1/paper": React.createElement(_paper_updater2.default, { node: node }),
	        "ks1/paper/folder": React.createElement(_paper_folder2.default, { node: node })

	    };
	    return components[type] || null;
	}

	var Manage = function (_React$Component) {
	    _inherits(Manage, _React$Component);

	    function Manage(props) {
	        _classCallCheck(this, Manage);

	        var _this = _possibleConstructorReturn(this, (Manage.__proto__ || Object.getPrototypeOf(Manage)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Manage, [{
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                node = _state.node,
	                vtype = _state.vtype;
	            // console.log('manage render ',node,vtype)

	            switch (vtype) {//优先看vtype
	                case "son_editor":
	                    return React.createElement(_soneditor2.default, { node: node });
	                case "son_editor_bank_folder":
	                    return React.createElement(_bank_folder_creater2.default, { node: node });
	                case "son_editor_choice":
	                    return React.createElement(_topic_choice_creater2.default, { node: node });
	                case "son_editor_qa":
	                    return React.createElement(_topic_qa_creater2.default, { node: node });
	                case "son_editor_revise":
	                    return React.createElement(_topic_revise_creater2.default, { node: node });
	                case "son_editor_tf":
	                    return React.createElement(_topic_tf_creater2.default, { node: node });
	                case "son_editor_paper_folder":
	                    return React.createElement(_paper_folder_creater2.default, { node: node });
	                case "son_editor_paper":
	                    return React.createElement(_paper_creater2.default, { node: node });
	                default:
	                    return v(node); //其次看node
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.refresh(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.refresh(nextProps);
	        }
	    }, {
	        key: 'refresh',
	        value: function refresh(props) {
	            var _this2 = this;

	            var gid = props.params.gid;
	            var vtype = props.params.vtype;
	            // debugger;
	            tree.read(gid).then(function (node) {
	                _this2.setState({ node: node, vtype: vtype });
	            });
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

	    return Manage;
	}(React.Component);

	module.exports = Manage;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(199);

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _bank_summary = __webpack_require__(380);

	var _bank_summary2 = _interopRequireDefault(_bank_summary);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	var Banks = function (_React$Component) {
	    _inherits(Banks, _React$Component);

	    function Banks(props) {
	        _classCallCheck(this, Banks);

	        var _this = _possibleConstructorReturn(this, (Banks.__proto__ || Object.getPrototypeOf(Banks)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Banks, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/banks' }),
	                React.createElement(_reader2.default, { view: _bank_summary2.default, path: '0/menu/banks', level: 1 })
	            );
	        }
	    }]);

	    return Banks;
	}(React.Component);

	module.exports = Banks;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(201);

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _navview = __webpack_require__(202);

	var _navview2 = _interopRequireDefault(_navview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(377);

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);
	var util = __webpack_require__(379);


	function name(node) {
	    var d = node._data || {};
	    return d.title || d.data && (d.data.name || d.data.question) || lid2name(node._name) || node._name || "noname";
	}

	function lid2name(lid) {
	    var names = { "menu": "主页", "banks": "题库", "papers": "试卷", "exams": "考试", "teachers": "教师", "classes": "班级", "rooms": "考场" };
	    return names[lid];
	}

	var Nav = function (_React$Component) {
	    _inherits(Nav, _React$Component);

	    function Nav(props) {
	        _classCallCheck(this, Nav);

	        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

	        _this.state = {
	            nodes: props.nodes
	        };
	        return _this;
	    }

	    _createClass(Nav, [{
	        key: 'render',
	        value: function render() {
	            var items = this.state.nodes.map(function (node) {
	                return { title: name(node), href: "#/manage/" + node._id };
	            });
	            return React.createElement(_navview2.default, { items: items });
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
	            this.setState({ nodes: nextProps.nodes });
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

	    return Nav;
	}(React.Component);

	module.exports = Nav;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(203);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(375);

	var NavView = function (_React$Component) {
	    _inherits(NavView, _React$Component);

	    function NavView(props) {
	        _classCallCheck(this, NavView);

	        var _this = _possibleConstructorReturn(this, (NavView.__proto__ || Object.getPrototypeOf(NavView)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(NavView, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var items = this.props.items;

	            return React.createElement(
	                _reactBootstrap.Breadcrumb,
	                null,
	                items.map(function (item, idx) {
	                    return item.onClick ? React.createElement(
	                        _reactBootstrap.BreadcrumbItem,
	                        { onClick: item.onClick, key: item.key },
	                        item.title
	                    ) : React.createElement(
	                        _reactBootstrap.BreadcrumbItem,
	                        { href: item.href, key: item.href },
	                        item.title
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return NavView;
	}(React.Component);

	module.exports = NavView;

/***/ },
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 376 */,
/* 377 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 378 */,
/* 379 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var makeCancelable = exports.makeCancelable = function makeCancelable(promise) {
	  var hasCanceled_ = false;

	  var wrappedPromise = new Promise(function (resolve, reject) {
	    promise.then(function (val) {
	      return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val);
	    });
	    promise.catch(function (error) {
	      return hasCanceled_ ? reject({ isCanceled: true }) : reject(error);
	    });
	  });

	  return {
	    promise: wrappedPromise,
	    cancel: function cancel() {
	      hasCanceled_ = true;
	    }
	  };
	};

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(381);

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(382);
	var common = __webpack_require__(384);
	var goto = function goto(url) {
	   location.href = '#' + url;
	};

	var BankSummary = function (_React$Component) {
	   _inherits(BankSummary, _React$Component);

	   function BankSummary(props) {
	      _classCallCheck(this, BankSummary);

	      var _this = _possibleConstructorReturn(this, (BankSummary.__proto__ || Object.getPrototypeOf(BankSummary)).call(this, props));

	      _this.state = {};
	      return _this;
	   }

	   _createClass(BankSummary, [{
	      key: 'render',
	      value: function render() {
	         var node = this.props.node;
	         //题型选择

	         return React.createElement(
	            'div',
	            { className: 'children-grid bank_summary' },
	            React.createElement(
	               'div',
	               { className: 'cells clearfix' },
	               React.createElement(
	                  'div',
	                  { className: 'cell create', onClick: function onClick() {
	                        return goto('/manage/' + node._id + '/son_editor_bank_folder');
	                     } },
	                  React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	                  React.createElement(
	                     'div',
	                     null,
	                     '\u6587\u4EF6\u5939'
	                  )
	               ),
	               React.createElement(
	                  'div',
	                  { className: 'cell create', onClick: function onClick() {
	                        return goto('/manage/' + node._id + '/son_editor_choice');
	                     } },
	                  React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	                  React.createElement(
	                     'div',
	                     null,
	                     '\u9009\u62E9\u9898'
	                  )
	               ),
	               React.createElement(
	                  'div',
	                  { className: 'cell create', onClick: function onClick() {
	                        return goto('/manage/' + node._id + '/son_editor_tf');
	                     } },
	                  React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	                  React.createElement(
	                     'div',
	                     null,
	                     '\u5224\u65AD\u9898'
	                  )
	               ),
	               React.createElement(
	                  'div',
	                  { className: 'cell create', onClick: function onClick() {
	                        return goto('/manage/' + node._id + '/son_editor_qa');
	                     } },
	                  React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	                  React.createElement(
	                     'div',
	                     null,
	                     '\u95EE\u7B54\u9898'
	                  )
	               ),
	               React.createElement(
	                  'div',
	                  { className: 'cell create', onClick: function onClick() {
	                        return goto('/manage/' + node._id + '/son_editor_revise');
	                     } },
	                  React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	                  React.createElement(
	                     'div',
	                     null,
	                     '\u6539\u9519\u9898'
	                  )
	               )
	            ),
	            React.createElement('hr', null),
	            React.createElement(
	               'div',
	               { className: 'cells clearfix' },
	               node._children.map(function (node) {
	                  console.log(node);
	                  return React.createElement(
	                     'div',
	                     { key: node._id, className: 'cell', onClick: function onClick() {
	                           return goto("/manage/" + node._id);
	                        } },
	                     common.icon(node),
	                     React.createElement(
	                        'div',
	                        null,
	                        common.name(node)
	                     )
	                  );
	               })
	            )
	         );
	      }
	   }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {}
	   }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {}
	   }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {}
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

	   return BankSummary;
	}(React.Component);

	module.exports = BankSummary;

/***/ },
/* 382 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 383 */,
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.m = exports.icon = exports.icons = exports.name = undefined;

	var _reactBootstrap = __webpack_require__(204);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _imageviewer = __webpack_require__(387);

	var _imageviewer2 = _interopRequireDefault(_imageviewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ = __webpack_require__(79);

	var moment = __webpack_require__(391);
	var cx = __webpack_require__(217);


	var show_exam_name = function show_exam_name(data) {
	  // const room_name=_.get(data,'room_name','');
	  // const paper_name=_.get(data,'paper_name','');
	  // var node_name=room_name+" "+paper_name; //examname=roomname+papername
	  var node_name = data.name;
	  var now = moment();
	  var start = moment(data.start);
	  var end = moment(data.end);
	  var status;
	  if (now.isAfter(end)) {
	    status = "over";
	  } else if (now.isBefore(start)) {
	    status = "prepare";
	  } else {
	    status = "doing";
	  }
	  return React.createElement(
	    'span',
	    { className: cx('exam', status) },
	    node_name
	  );
	};
	var name = exports.name = function name(node) {
	  var node_name = _.get(node, 'name') || _.get(node, '_data.data.name');
	  if (node.room_name || node.paper_name) {
	    node_name = show_exam_name(node);
	  }
	  if (node_name) {
	    return node_name;
	  }
	  var node_type = _.get(node, '_data.type');
	  switch (node_type) {
	    case "ks1/choice":
	      return _.get(node, '_data.data.question');
	    case "ks1/tf":
	      return _.get(node, '_data.data.question');
	    case "ks1/qa":
	      return _.get(node, '_data.data.question');
	    case "ks1/revise":
	      return _.get(node, '_data.data.question');
	  }
	  return "noname";
	};
	var icons = exports.icons = {
	  "unknow": React.createElement('i', { className: 'fa fa-tripadvisor fa-3x' }),
	  "ks1/teacher": React.createElement('i', { className: 'fa fa-user fa-3x' }),
	  "ks1/bank": React.createElement('i', { className: 'fa fa-book fa-3x' }),
	  "ks1/qa": React.createElement('i', { className: 'fa fa-question-circle fa-3x' }),
	  "ks1/choice": React.createElement('i', { className: 'fa fa-list fa-3x' }),
	  "ks1/tf": React.createElement('i', { className: 'fa fa-check-square fa-3x' }),
	  "ks1/revise": React.createElement('i', { className: 'fa fa-eraser fa-3x' }),
	  "ks1/bank/folder": React.createElement('i', { className: 'fa fa-folder fa-3x' }),
	  "ks1/paper/folder": React.createElement('i', { className: 'fa fa-folder fa-3x' }),
	  "ks1/class": React.createElement('i', { className: 'fa fa-users fa-3x' }),
	  "ks1/paper": React.createElement('i', { className: 'fa fa-file fa-3x' }),
	  "ks1/exam": React.createElement('i', { className: 'fa fa-edit fa-3x' }),
	  "ks1/room": React.createElement('i', { className: 'fa fa-desktop fa-3x' })
	};
	var icon = exports.icon = function icon(node) {
	  return typeof node === "string" ? icons[node] : icons[_.get(node, '_data.type', 'unknow')];
	};

	//题型显示，用于组卷
	var vm_qa = function vm_qa(data, gid) {
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { collapsible: true, defaultExpanded: true, header: "[问答题] " + data.question, key: gid },
	    data.answer,
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: gid, level: 1 })
	  );
	};
	var vm_tf = function vm_tf(data, gid) {
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { collapsible: true, defaultExpanded: true, header: "[判断题] " + data.question, key: gid },
	    data.ok ? "正确" : "错误",
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: gid, level: 1 })
	  );
	};

	var vm_choice = function vm_choice(data, gid) {
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { collapsible: true, defaultExpanded: true, header: "[选择题] " + data.question, key: gid },
	    React.createElement(
	      _reactBootstrap.ListGroup,
	      { fill: true },
	      data.answers && data.answers.map(function (ans, idx) {
	        return React.createElement(
	          _reactBootstrap.ListGroupItem,
	          {
	            key: idx,
	            bsStyle: ans.ok ? "success" : null },
	          "ABCDEFGHI"[idx] + ". " + ans.answer
	        );
	      })
	    ),
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: gid, level: 1 })
	  );
	};
	var vm_revise = function vm_revise(data, gid) {
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { collapsible: true, defaultExpanded: true, header: "[改错题] " + data.question, key: gid },
	    React.createElement(
	      'h4',
	      null,
	      '\u6539\u9519\u5185\u5BB9'
	    ),
	    React.createElement(
	      'pre',
	      null,
	      data.content
	    ),
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: gid, level: 1 }),
	    React.createElement(
	      'h4',
	      null,
	      '\u53C2\u8003\u7B54\u6848'
	    ),
	    React.createElement(
	      'pre',
	      null,
	      data.answer
	    )
	  );
	};

	var m = exports.m = function m(node) {
	  var node_type = _.get(node, '_data.type');
	  // console.log(node,node_type)
	  var vm = {
	    "ks1/choice": vm_choice,
	    "ks1/tf": vm_tf,
	    "ks1/qa": vm_qa,
	    "ks1/revise": vm_revise
	  };
	  var fn = vm[node_type] || function () {
	    return null;
	  };
	  return fn(node._data.data, node._id);
	};

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(386);

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var treetool = __webpack_require__(193)(tree);

	var util = __webpack_require__(379);

	var Reader = function (_React$Component) {
	    _inherits(Reader, _React$Component);

	    function Reader(props) {
	        _classCallCheck(this, Reader);

	        var _this = _possibleConstructorReturn(this, (Reader.__proto__ || Object.getPrototypeOf(Reader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Reader, [{
	        key: 'render',
	        value: function render() {
	            // console.log('render reader')
	            var me = this;
	            var node = this.state.node;

	            if (!node) {
	                return null;
	            } else {
	                var _props = this.props,
	                    view = _props.view,
	                    others = _objectWithoutProperties(_props, ['view']);

	                var View = view;
	                return React.createElement(View, _extends({ node: node }, others));
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData(this.props);
	            var me = this;
	            var mySubscriber = function mySubscriber(msg, data) {
	                console.log(msg, data);
	                // me.forceUpdate();
	                me.fetchData();
	            };
	            var subscribe = this.props.subscribe || [];
	            this.tokens = subscribe.map(function (msg) {
	                console.log('subscribe msg', msg);
	                return PubSub.subscribe(msg, mySubscriber);
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this2 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (node) {
	                _this2.setState({ node: node });
	            }).catch(function (reason) {
	                //console.log('isCanceled', reason.isCanceled)
	                if (!reason.isCanceled) {
	                    Promise.reject(reason);
	                }
	            });
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var _this3 = this;

	            var gid = props.gid,
	                level = props.level,
	                path = props.path;

	            if (gid !== undefined) {
	                return this.fetchDataByGid(gid, level);
	            } else if (path) {
	                return tree.namepath2node(path).then(function (node) {
	                    return _this3.fetchDataByGid(node, level);
	                });
	            }
	        }
	    }, {
	        key: '_fetchDataByGid',
	        value: function _fetchDataByGid(gid, level) {
	            //服务器端展开，没有缓存。未来可以拆解到缓存中
	            return tree.read_big_node(gid, level);
	        }

	        // fetchDataByGid(gid,level){ //客户端展开，可利用缓存
	        //     // debugger;
	        //     return tree.read(gid).then(node=>{
	        //             if(!level){
	        //                 return node;
	        //             }else{
	        //                 return treetool.expand(node,level);
	        //             }
	        //         })
	        // }

	    }, {
	        key: 'fetchDataByGid',
	        value: function fetchDataByGid(node, level) {
	            //客户端展开，可利用缓存
	            if (!level) {
	                return node;
	            } else {
	                return treetool.expand(node, level);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.fetchData(nextProps);
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
	        value: function componentWillUnmount() {
	            this.cancelablePromise.cancel();
	            this.tokens.map(function (token) {
	                PubSub.unsubscribe(token);
	                console.log('unsubscribe', token);
	            });
	        }
	    }]);

	    return Reader;
	}(React.Component);

	Reader.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    gid: _react.PropTypes.number,
	    path: _react.PropTypes.string,
	    level: _react.PropTypes.number, //展开的层次，0为不展开
	    subscribe: _react.PropTypes.array
	};


	module.exports = Reader;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(388);

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(389);
	var tree = __webpack_require__(71)('_api');
	var treetool = __webpack_require__(193)(tree);

	var Imageviewer = function (_React$Component) {
	    _inherits(Imageviewer, _React$Component);

	    function Imageviewer(props) {
	        _classCallCheck(this, Imageviewer);

	        var _this = _possibleConstructorReturn(this, (Imageviewer.__proto__ || Object.getPrototypeOf(Imageviewer)).call(this, props));

	        _this.state = {
	            urls: []
	        };
	        return _this;
	    }

	    _createClass(Imageviewer, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var me = this;
	            var node = this.props.node;

	            var urls = [];
	            for (var i = node._children.length - 1; i >= 0; i--) {
	                var child = node._children[i];
	                if (child._data.type == 'tn/nfile/url') {
	                    urls.push({ gid: child._id, url: child._data.data });
	                }
	            }
	            return React.createElement(
	                'div',
	                { className: 'imageviewer' },
	                urls.map(function (url) {
	                    return React.createElement('img', { id: url.gid, src: url.url, onClick: function onClick() {
	                            return _this2.remove(url.gid);
	                        },
	                        onLoad: function onLoad(e) {
	                            var img = e.target;
	                            var obj = { gid: url.gid, w: img.width, h: img.height };
	                            PubSub.publish('img-load', obj);
	                            console.log('publish,img-load', obj);
	                        } });
	                })
	            )
	            //img-load：通知AnswersheetForm去收集图片
	            ;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(gid) {
	            treetool.remove(gid).then(function (node) {
	                PubSub.publish('img.removed', node);
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Imageviewer;
	}(React.Component);

	module.exports = Imageviewer;

/***/ },
/* 389 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(502);

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ = __webpack_require__(79);
	var tree = __webpack_require__(71)('_api');
	var treetool = __webpack_require__(193)(tree);
	var util = __webpack_require__(379);

	var hasSlash = function hasSlash(str) {
	    return str.indexOf('/') > -1;
	};

	function path2gid(treetool, gidOrPath) {
	    return hasSlash(gidOrPath) ? treetool.createNodeByPath(gidOrPath).then(function (node) {
	        return node._id;
	    }) : Promise.resolve(gidOrPath); //有斜杠的视为路径，没有的视为gid直接返回
	}
	var _path2gid = _.curry(path2gid)(treetool); //单参数函数fn(gidOrPath)

	var TreePathReader = function (_React$Component) {
	    _inherits(TreePathReader, _React$Component);

	    function TreePathReader(props) {
	        _classCallCheck(this, TreePathReader);

	        var _this = _possibleConstructorReturn(this, (TreePathReader.__proto__ || Object.getPrototypeOf(TreePathReader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TreePathReader, [{
	        key: 'render',
	        value: function render() {
	            // console.log('render reader')
	            var me = this;
	            var nodes = this.state.nodes;

	            if (!nodes) {
	                return null;
	            } else {
	                var View = this.props.view;
	                return React.createElement(View, { nodes: nodes });
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData(this.props);
	            var me = this;
	            var mySubscriber = function mySubscriber(msg, data) {
	                console.log(msg, data);
	                // me.forceUpdate();
	                me.fetchData(me.props);
	            };
	            var subscribe = this.props.subscribe || [];
	            this.tokens = subscribe.map(function (msg) {
	                console.log('subscribe msg', msg);
	                return PubSub.subscribe(msg, mySubscriber);
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this2 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (nodes) {
	                console.log('fetchData', nodes);
	                _this2.setState({ nodes: nodes });
	            }).catch(function (reason) {
	                if (!reason.isCanceled) {
	                    Promise.reject(reason);
	                }
	            });
	        }

	        // _fetchData(props){
	        //     // debugger;
	        //     const me=this;
	        //     var {from,to}=props;
	        //     if(to===undefined){
	        //         to=from;
	        //     }
	        //     return me.prepare(from,"from")
	        //     .then(()=>{
	        //         // console.log("from",me.from);
	        //         return me.prepare(to,"to")
	        //     })
	        //     .then(()=>{
	        //         // console.log("to",me.to);
	        //         if(me.from===me.to){
	        //             return [me.to];
	        //         }else{  
	        //             return treetool.expandToRoot([me.to],me.from)
	        //         }
	        //     })
	        //     .then(gids=>{
	        //         // console.log("gids",gids);
	        //         return tree.read_nodes(gids);
	        //     }).then(nodes=>{
	        //         // console.log('nodes',nodes)
	        //         return nodes;
	        //     })

	        // }

	        // prepare(gidOrPath,name){
	        //     // debugger;
	        //     const me=this;
	        //     if(typeof gidOrPath==='number'){
	        //         me[name]=gidOrPath;
	        //         return Promise.resolve();
	        //     }else if(typeof gidOrPath==='string'){
	        //         return tree.lidpath2gid(gidOrPath).then(gid=>{
	        //             return me[name]=gid;
	        //         })
	        //     }else{
	        //         throw name+"should be number or string"
	        //     }
	        // }
	        // 

	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var from, to;
	            return regeneratorRuntime.async(function _fetchData$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            from = props.from, to = props.to;

	                            if (!hasSlash(from)) {
	                                _context.next = 5;
	                                break;
	                            }

	                            _context.next = 4;
	                            return regeneratorRuntime.awrap(_path2gid(from));

	                        case 4:
	                            from = _context.sent;

	                        case 5:
	                            if (to === undefined) {
	                                to = from;
	                            }

	                            if (!hasSlash(to)) {
	                                _context.next = 10;
	                                break;
	                            }

	                            _context.next = 9;
	                            return regeneratorRuntime.awrap(_path2gid(to));

	                        case 9:
	                            to = _context.sent;

	                        case 10:
	                            if (!(from === to)) {
	                                _context.next = 14;
	                                break;
	                            }

	                            return _context.abrupt('return', [to]);

	                        case 14:
	                            return _context.abrupt('return', treetool.expandToRoot([to], from).then(tree.read_nodes));

	                        case 15:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.fetchData(nextProps);
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
	        value: function componentWillUnmount() {
	            this.cancelablePromise.cancel();
	            this.tokens.map(function (token) {
	                PubSub.unsubscribe(token);
	                console.log('unsubscribe', token);
	            });
	        }
	    }]);

	    return TreePathReader;
	}(React.Component);

	TreePathReader.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    from: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	    to: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	    subscribe: React.PropTypes.array
	};


	module.exports = TreePathReader;

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(504);

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _paper_summary = __webpack_require__(505);

	var _paper_summary2 = _interopRequireDefault(_paper_summary);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	var Papers = function (_React$Component) {
	    _inherits(Papers, _React$Component);

	    function Papers(props) {
	        _classCallCheck(this, Papers);

	        var _this = _possibleConstructorReturn(this, (Papers.__proto__ || Object.getPrototypeOf(Papers)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Papers, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/papers' }),
	                React.createElement(_reader2.default, { view: _paper_summary2.default, path: '0/menu/papers', level: 1 })
	            );
	        }
	    }]);

	    return Papers;
	}(React.Component);

	module.exports = Papers;

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(506);

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(507);
	var common = __webpack_require__(384);
	var goto = function goto(url) {
	  location.href = '#' + url;
	};

	var PaperSummary = function (_React$Component) {
	  _inherits(PaperSummary, _React$Component);

	  function PaperSummary(props) {
	    _classCallCheck(this, PaperSummary);

	    var _this = _possibleConstructorReturn(this, (PaperSummary.__proto__ || Object.getPrototypeOf(PaperSummary)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(PaperSummary, [{
	    key: 'render',
	    value: function render() {
	      var node = this.props.node;

	      return React.createElement(
	        'div',
	        { className: 'children-grid paper_summary pad10' },
	        React.createElement(
	          'div',
	          { className: 'cells clearfix' },
	          React.createElement(
	            'div',
	            { className: 'cell create', onClick: function onClick() {
	                return goto('/manage/' + node._id + '/son_editor_paper_folder');
	              } },
	            React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	            React.createElement(
	              'div',
	              null,
	              '\u8BD5\u5377\u96C6'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'cell create', onClick: function onClick() {
	                return goto('/manage/' + node._id + '/son_editor_paper');
	              } },
	            React.createElement('i', { className: 'fa fa-plus fa-3x' }),
	            React.createElement(
	              'div',
	              null,
	              '\u8BD5\u5377'
	            )
	          )
	        ),
	        React.createElement('hr', null),
	        React.createElement(
	          'div',
	          { className: 'cells clearfix' },
	          node._children.map(function (node) {
	            console.log(node);
	            return React.createElement(
	              'div',
	              { key: node._id, className: 'cell', onClick: function onClick() {
	                  return goto("/manage/" + node._id);
	                } },
	              common.icon(node),
	              React.createElement(
	                'div',
	                null,
	                common.name(node)
	              )
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {}
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

	  return PaperSummary;
	}(React.Component);

	module.exports = PaperSummary;

/***/ },
/* 507 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 508 */,
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(510);

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _rest_summary = __webpack_require__(511);

	var _rest_summary2 = _interopRequireDefault(_rest_summary);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _rest_reader = __webpack_require__(515);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	function goto(url) {
	    location.href = '#' + url;
	}

	var Exams = function (_React$Component) {
	    _inherits(Exams, _React$Component);

	    function Exams(props) {
	        _classCallCheck(this, Exams);

	        var _this = _possibleConstructorReturn(this, (Exams.__proto__ || Object.getPrototypeOf(Exams)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Exams, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/exams' }),
	                React.createElement(
	                    'div',
	                    { className: 'children-grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'cells clearfix' },
	                        React.createElement(
	                            'div',
	                            { className: 'cell create', onClick: function onClick() {
	                                    return goto('/exams/create');
	                                } },
	                            React.createElement('i', { className: 'fa fa-plus fa-4x' })
	                        )
	                    )
	                ),
	                React.createElement(_rest_reader2.default, { view: _rest_summary2.default, url: '/api/exam',
	                    type: 'ks1/exam', route: 'exams' })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Exams;
	}(React.Component);

	module.exports = Exams;

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(512);

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(513);
	var common = __webpack_require__(384);

	function goto(url) {
	    location.href = '#' + url;
	}

	var RestSummary = function (_React$Component) {
	    _inherits(RestSummary, _React$Component);

	    function RestSummary(props) {
	        _classCallCheck(this, RestSummary);

	        var _this = _possibleConstructorReturn(this, (RestSummary.__proto__ || Object.getPrototypeOf(RestSummary)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RestSummary, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                data = _props.data,
	                type = _props.type,
	                route = _props.route;

	            console.log('render Summary', data, type);

	            return React.createElement(
	                'div',
	                { className: 'children-grid' },
	                React.createElement(
	                    'div',
	                    { className: 'cells clearfix' },
	                    data.map(function (d) {
	                        return React.createElement(
	                            'div',
	                            { key: d._id, className: 'cell', onClick: function onClick() {
	                                    return goto('/' + route + '/' + d._id);
	                                } },
	                            common.icon(type),
	                            React.createElement(
	                                'div',
	                                null,
	                                common.name(d)
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return RestSummary;
	}(React.Component);

	module.exports = RestSummary;

/***/ },
/* 513 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 514 */,
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(516);

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var util = __webpack_require__(379);

	var agent = __webpack_require__(517)(__webpack_require__(518), Promise);

	var RestReader = function (_React$Component) {
	    _inherits(RestReader, _React$Component);

	    function RestReader(props) {
	        _classCallCheck(this, RestReader);

	        var _this = _possibleConstructorReturn(this, (RestReader.__proto__ || Object.getPrototypeOf(RestReader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RestReader, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var data = this.state.data;

	            if (!data) {
	                return null;
	            } else {
	                var _props = this.props,
	                    view = _props.view,
	                    others = _objectWithoutProperties(_props, ['view']);

	                var View = view;
	                return React.createElement(View, _extends({ data: data }, others));
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData(this.props);

	            var me = this;
	            var mySubscriber = function mySubscriber(msg, data) {
	                console.log(msg, data);
	                me.fetchData();
	            };
	            var subscribe = this.props.subscribe || [];
	            this.tokens = subscribe.map(function (msg) {
	                console.log('subscribe msg', msg);
	                return PubSub.subscribe(msg, mySubscriber);
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this2 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (data) {
	                _this2.setState({ data: data });
	            }).catch(function (reason) {
	                //console.log('isCanceled', reason.isCanceled);
	                if (!reason.isCanceled) {
	                    console.log('catch', reason);
	                    // Promise.reject(reason);
	                }
	            });
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var url = props.url;
	            // console.log('restreader _fetchData',url);

	            return agent.get(url).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.fetchData(nextProps);
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
	        value: function componentWillUnmount() {
	            this.cancelablePromise.cancel();
	            this.tokens.map(function (token) {
	                PubSub.unsubscribe(token);
	                console.log('unsubscribe', token);
	            });
	        }
	    }]);

	    return RestReader;
	}(React.Component);

	RestReader.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    url: _react.PropTypes.string.isRequired,
	    subscribe: React.PropTypes.array
	};


	module.exports = RestReader;

/***/ },
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(524);

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _rest_summary = __webpack_require__(511);

	var _rest_summary2 = _interopRequireDefault(_rest_summary);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _rest_reader = __webpack_require__(515);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	var goto = function goto(url) {
	    location.href = '#' + url;
	};

	var Teachers = function (_React$Component) {
	    _inherits(Teachers, _React$Component);

	    function Teachers(props) {
	        _classCallCheck(this, Teachers);

	        var _this = _possibleConstructorReturn(this, (Teachers.__proto__ || Object.getPrototypeOf(Teachers)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Teachers, [{
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/teachers' }),
	                React.createElement(
	                    'div',
	                    { className: 'children-grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'cells clearfix' },
	                        React.createElement(
	                            'div',
	                            { className: 'cell create', onClick: function onClick() {
	                                    return goto('/teachers/create');
	                                } },
	                            React.createElement('i', { className: 'fa fa-plus fa-4x' })
	                        )
	                    )
	                ),
	                React.createElement(_rest_reader2.default, { view: _rest_summary2.default, url: '/api/teacher',
	                    type: 'ks1/teacher', route: 'teachers' })
	            );
	        }
	    }]);

	    return Teachers;
	}(React.Component);

	module.exports = Teachers;

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(526);

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _rest_summary = __webpack_require__(511);

	var _rest_summary2 = _interopRequireDefault(_rest_summary);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _rest_reader = __webpack_require__(515);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	var goto = function goto(url) {
	    location.href = '#' + url;
	};

	var Classes = function (_React$Component) {
	    _inherits(Classes, _React$Component);

	    function Classes(props) {
	        _classCallCheck(this, Classes);

	        var _this = _possibleConstructorReturn(this, (Classes.__proto__ || Object.getPrototypeOf(Classes)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Classes, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/classes' }),
	                React.createElement(
	                    'div',
	                    { className: 'children-grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'cells clearfix' },
	                        React.createElement(
	                            'div',
	                            { className: 'cell create', onClick: function onClick() {
	                                    return goto('/classes/create');
	                                } },
	                            React.createElement('i', { className: 'fa fa-plus fa-4x' })
	                        )
	                    )
	                ),
	                React.createElement(_rest_reader2.default, { view: _rest_summary2.default, url: '/api/class',
	                    type: 'ks1/class', route: 'classes' })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Classes;
	}(React.Component);

	module.exports = Classes;

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(528);

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _rest_summary = __webpack_require__(511);

	var _rest_summary2 = _interopRequireDefault(_rest_summary);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _rest_reader = __webpack_require__(515);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	function goto(url) {
	    location.href = '#' + url;
	}

	var Rooms = function (_React$Component) {
	    _inherits(Rooms, _React$Component);

	    function Rooms(props) {
	        _classCallCheck(this, Rooms);

	        var _this = _possibleConstructorReturn(this, (Rooms.__proto__ || Object.getPrototypeOf(Rooms)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Rooms, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/rooms' }),
	                React.createElement(
	                    'div',
	                    { className: 'children-grid' },
	                    React.createElement(
	                        'div',
	                        { className: 'cells clearfix' },
	                        React.createElement(
	                            'div',
	                            { className: 'cell create', onClick: function onClick() {
	                                    return goto('/rooms/create');
	                                } },
	                            React.createElement('i', { className: 'fa fa-plus fa-4x' })
	                        )
	                    )
	                ),
	                React.createElement(_rest_reader2.default, { view: _rest_summary2.default, url: '/api/room',
	                    type: 'ks1/room', route: 'rooms' })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Rooms;
	}(React.Component);

	module.exports = Rooms;

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(530);

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(531);
	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);

	var SonEditor = function (_React$Component) {
	    _inherits(SonEditor, _React$Component);

	    function SonEditor(props) {
	        _classCallCheck(this, SonEditor);

	        var _this = _possibleConstructorReturn(this, (SonEditor.__proto__ || Object.getPrototypeOf(SonEditor)).call(this, props));

	        _this.state = {
	            node: props.node
	        };
	        return _this;
	    }

	    _createClass(SonEditor, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.state.node;

	            var components = {
	                papers: React.createElement(PaperEditor, { node: node }),
	                exams: React.createElement(ExamEditor, { node: node }),
	                teachers: React.createElement(TeacherEditor, { node: node }),
	                classes: React.createElement(ClassEditor, { node: node }),
	                rooms: React.createElement(RoomEditor, { node: node })
	            };
	            return React.createElement(
	                'div',
	                { className: 'soneditor' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                components[node._name]
	            );
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
	            this.setState({ node: nextProps.node });
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

	    return SonEditor;
	}(React.Component);

	module.exports = SonEditor;

/***/ },
/* 531 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 532 */,
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(534);

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(586);

	var tree = __webpack_require__(71)('_api');

	var schema = {
	    title: "选择题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        answers: {
	            type: "array",
	            title: "选项",
	            items: {
	                type: "object",
	                required: ["answer"],
	                properties: {
	                    "answer": { type: "string", title: "选支" },
	                    "ok": { type: "boolean", title: "正确?", default: false }
	                }
	            }
	        }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" },
	    answers: { "items": { "answer": { "ui:widget": "textarea" } } }
	};
	var node_type = 'ks1/choice';
	var ChoiceForm = function ChoiceForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save({
	                        type: node_type,
	                        data: obj.formData
	                    }, obj.formData.name);
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var TopicChoiceCreater = function (_React$Component) {
	    _inherits(TopicChoiceCreater, _React$Component);

	    function TopicChoiceCreater(props) {
	        _classCallCheck(this, TopicChoiceCreater);

	        var _this = _possibleConstructorReturn(this, (TopicChoiceCreater.__proto__ || Object.getPrototypeOf(TopicChoiceCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicChoiceCreater, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            var data = {
	                type: node_type,
	                data: {}
	            };
	            tree.mk_son_by_data(node._id, data).then(function (new_node) {
	                location.href = "#/manage/" + new_node._id;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return TopicChoiceCreater;
	}(React.Component);

	module.exports = TopicChoiceCreater;

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(536);

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(537);

	var tree = __webpack_require__(71)('_api');
	var treetool = __webpack_require__(193)(tree);

	var Writer = function (_React$Component) {
	    _inherits(Writer, _React$Component);

	    function Writer(props) {
	        _classCallCheck(this, Writer);

	        var _this = _possibleConstructorReturn(this, (Writer.__proto__ || Object.getPrototypeOf(Writer)).call(this, props));

	        _this.state = {};

	        return _this;
	    }

	    _createClass(Writer, [{
	        key: 'render',
	        value: function render() {
	            // debugger;
	            // const View=this.props.view;
	            var _props = this.props,
	                view = _props.view,
	                others = _objectWithoutProperties(_props, ['view']);

	            var View = view;
	            var _props2 = this.props,
	                gid = _props2.gid,
	                path = _props2.path,
	                node = _props2.node;

	            if (gid || path || node) {
	                //更新或删除
	                node = node || this.state.node;
	                if (node === undefined) {
	                    return null; //等待异步取得数据
	                } else {
	                    return React.createElement(View, _extends({ node: node, update: this.update.bind(this), remove: this.remove.bind(this) }, others));
	                }
	            } else {
	                //新建
	                return React.createElement(View, _extends({ save: this.save.bind(this) }, others));
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update(data) {
	            var _this2 = this;

	            return this._update(data).then(function (node) {
	                var publish = _this2.props.publish;

	                if (publish) {
	                    if (publish.update) {
	                        PubSub.publish(publish.update, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	                return node;
	            });
	        }
	    }, {
	        key: '_update',
	        value: function _update(data) {
	            var _props3 = this.props,
	                gid = _props3.gid,
	                path = _props3.path,
	                node = _props3.node;

	            if (gid) {
	                return tree.update(gid, data);
	            } else if (node) {
	                return tree.update(node._id, data);
	            } else if (path) {
	                return tree.namepath2node(path).then(function (node) {
	                    return tree.update(node._id, data);
	                });
	            } else {
	                throw "update node needs gid or path or node";
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            var _this3 = this;

	            return this._remove().then(function (node) {
	                var publish = _this3.props.publish;

	                if (publish) {
	                    if (publish.remove) {
	                        PubSub.publish(publish.remove, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	            });
	        }
	    }, {
	        key: '_remove',
	        value: function _remove() {
	            var _props4 = this.props,
	                gid = _props4.gid,
	                path = _props4.path,
	                node = _props4.node;

	            if (gid) {
	                return tree.remove(gid);
	            } else if (node) {
	                return tree.remove(node._id);
	            } else if (path) {
	                return tree.remove_by_path(path);
	            } else {
	                throw "remove node needs gid or path or node";
	            }
	        }
	    }, {
	        key: 'save',
	        value: function save(data, lid) {
	            var _this4 = this;

	            return this._save(data, lid).then(function (node) {
	                var publish = _this4.props.publish;
	                // debugger;

	                if (publish) {
	                    if (publish.save) {
	                        PubSub.publish(publish.save, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	                return node;
	            });
	        }
	    }, {
	        key: '_save',
	        value: function _save(data, lid) {
	            console.log('save', data);
	            var _props5 = this.props,
	                bgid = _props5.bgid,
	                pgid = _props5.pgid,
	                ppath = _props5.ppath;

	            if (bgid) {
	                return tree.mk_brother_by_data(bgid, data, lid);
	            } else if (pgid != undefined) {
	                return tree.mk_son_by_data(pgid, data, lid);
	            } else if (ppath) {
	                return this.createDataNodeByPath(ppath, data, lid);
	            } else {
	                throw "create node needs pgid or bgid";
	            }
	        }
	    }, {
	        key: 'createDataNodeByPath',
	        value: function createDataNodeByPath(ppath, data, lid) {
	            return treetool.fetchOrCreatePath(ppath).then(function (pgid) {
	                return tree.mk_son_by_data(pgid, data, lid);
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this5 = this;

	            var _props6 = this.props,
	                gid = _props6.gid,
	                path = _props6.path;

	            if (gid) {
	                tree.read(gid).then(function (node) {
	                    _this5.setState({ node: node });
	                });
	            } else if (path) {
	                tree.read_by_path(path).then(function (node) {
	                    _this5.setState({ node: node });
	                });
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Writer;
	}(React.Component);

	Writer.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    node: _react.PropTypes.object,
	    path: _react.PropTypes.string,
	    ppath: _react.PropTypes.string,
	    gid: _react.PropTypes.number,
	    bgid: _react.PropTypes.number,
	    pgid: _react.PropTypes.number,
	    publish: _react.PropTypes.string
	};


	module.exports = Writer;

/***/ },
/* 537 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 587 */,
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(589);

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(590);

	var tree = __webpack_require__(71)('_api');

	var schema = {
	    title: "问答题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        answer: { type: "string", title: "参考答案" }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" },
	    answer: { "ui:widget": "textarea" }
	};
	var node_type = 'ks1/qa';
	var QaForm = function QaForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save({
	                        type: node_type,
	                        data: obj.formData
	                    }, obj.formData.name);
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var TopicQaCreater = function (_React$Component) {
	    _inherits(TopicQaCreater, _React$Component);

	    function TopicQaCreater(props) {
	        _classCallCheck(this, TopicQaCreater);

	        var _this = _possibleConstructorReturn(this, (TopicQaCreater.__proto__ || Object.getPrototypeOf(TopicQaCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicQaCreater, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            var data = {
	                type: node_type,
	                data: {}
	            };
	            tree.mk_son_by_data(node._id, data).then(function (new_node) {
	                location.href = "#/manage/" + new_node._id;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return TopicQaCreater;
	}(React.Component);

	module.exports = TopicQaCreater;

/***/ },
/* 590 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 591 */,
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(593);

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(594);

	var tree = __webpack_require__(71)('_api');

	var schema = {
	    title: "判断题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        ok: { type: "boolean", title: "正确?", default: false }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" }
	};
	var node_type = 'ks1/tf';
	var TfForm = function TfForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save({
	                        type: node_type,
	                        data: obj.formData
	                    }, obj.formData.name);
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var TopicTfCreater = function (_React$Component) {
	    _inherits(TopicTfCreater, _React$Component);

	    function TopicTfCreater(props) {
	        _classCallCheck(this, TopicTfCreater);

	        var _this = _possibleConstructorReturn(this, (TopicTfCreater.__proto__ || Object.getPrototypeOf(TopicTfCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicTfCreater, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            var data = {
	                type: node_type,
	                data: {}
	            };
	            tree.mk_son_by_data(node._id, data).then(function (new_node) {
	                location.href = "#/manage/" + new_node._id;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return TopicTfCreater;
	}(React.Component);

	module.exports = TopicTfCreater;

/***/ },
/* 594 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 595 */,
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(597);

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(598);

	var tree = __webpack_require__(71)('_api');
	var node_type = 'ks1/revise';

	var TopicReviseCreater = function (_React$Component) {
	    _inherits(TopicReviseCreater, _React$Component);

	    function TopicReviseCreater(props) {
	        _classCallCheck(this, TopicReviseCreater);

	        return _possibleConstructorReturn(this, (TopicReviseCreater.__proto__ || Object.getPrototypeOf(TopicReviseCreater)).call(this, props));
	    }

	    _createClass(TopicReviseCreater, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            var data = {
	                type: node_type,
	                data: {}
	            };
	            tree.mk_son_by_data(node._id, data).then(function (new_node) {
	                location.href = "#/manage/" + new_node._id;
	            });
	        }
	    }]);

	    return TopicReviseCreater;
	}(React.Component);

	module.exports = TopicReviseCreater;

/***/ },
/* 598 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 599 */,
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(601);

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _bank_summary = __webpack_require__(380);

	var _bank_summary2 = _interopRequireDefault(_bank_summary);

	var _bank_folder_updater = __webpack_require__(602);

	var _bank_folder_updater2 = _interopRequireDefault(_bank_folder_updater);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(606);

	var BankFolder = function (_React$Component) {
	    _inherits(BankFolder, _React$Component);

	    function BankFolder(props) {
	        _classCallCheck(this, BankFolder);

	        var _this = _possibleConstructorReturn(this, (BankFolder.__proto__ || Object.getPrototypeOf(BankFolder)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(BankFolder, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            console.log('BankFolder render ', node);
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_bank_folder_updater2.default, { node: node }),
	                React.createElement(_reader2.default, { view: _bank_summary2.default, gid: node._id, level: 1 })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return BankFolder;
	}(React.Component);

	module.exports = BankFolder;

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(603);

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(604);


	var schema = {
	    title: "文件夹",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "文件夹名称" }
	    }
	};
	var node_type = 'ks1/bank/folder';

	var FolderForm = function FolderForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema,
	                formData: props.node._data.data,
	                onSubmit: function onSubmit(obj) {
	                    return props.update({
	                        type: node_type,
	                        data: obj.formData
	                    });
	                } },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'button',
	                    { type: 'submit', className: 'btn btn-success' },
	                    '\u4FDD\u5B58'
	                ),
	                React.createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: function onClick(e) {
	                            e.preventDefault(); //不知为何submit会被调用，人为阻止
	                            var sure = confirm("确定要删除吗?");
	                            if (!sure) {
	                                return;
	                            }
	                            props.remove();
	                        } },
	                    '\u5220\u9664'
	                )
	            )
	        )
	    );
	};

	var FolderUpdater = function (_React$Component) {
	    _inherits(FolderUpdater, _React$Component);

	    function FolderUpdater(props) {
	        _classCallCheck(this, FolderUpdater);

	        var _this = _possibleConstructorReturn(this, (FolderUpdater.__proto__ || Object.getPrototypeOf(FolderUpdater)).call(this, props));

	        _this.state = {
	            node: props.node
	        };
	        return _this;
	    }

	    _createClass(FolderUpdater, [{
	        key: 'render',
	        value: function render() {

	            var me = this;
	            var node = this.state.node;

	            console.log('FolderUpdater render ', node);
	            return React.createElement(
	                'div',
	                { className: 'folder_updater' },
	                React.createElement(_writer2.default, { node: node, view: FolderForm, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("updated", function () {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, node) {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到当前节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ node: nextProps.node });
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }]);

	    return FolderUpdater;
	}(React.Component);

	module.exports = FolderUpdater;

/***/ },
/* 604 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 605 */,
/* 606 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 607 */,
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(609);

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(610);


	var schema = {
	    title: "文件夹",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "文件夹名称" }
	    }
	};
	var node_type = 'ks1/bank/folder';

	var FolderForm = function FolderForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save({
	                        type: node_type,
	                        data: obj.formData
	                    }, obj.formData.name);
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var FolderCreater = function (_React$Component) {
	    _inherits(FolderCreater, _React$Component);

	    function FolderCreater(props) {
	        _classCallCheck(this, FolderCreater);

	        var _this = _possibleConstructorReturn(this, (FolderCreater.__proto__ || Object.getPrototypeOf(FolderCreater)).call(this, props));

	        _this.state = {
	            node: props.node
	        };
	        return _this;
	    }

	    _createClass(FolderCreater, [{
	        key: 'render',
	        value: function render() {

	            var me = this;
	            var node = this.state.node;

	            console.log('folderCreater render ', node);
	            return React.createElement(
	                'div',
	                { className: 'folder_creater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { pgid: node._id, view: FolderForm, publish: 'saved' })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("saved", function (msg, new_node) {
	                location.href = "#/manage/" + new_node._id;
	            }); //保存数据后到新节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ node: nextProps.node });
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return FolderCreater;
	}(React.Component);

	module.exports = FolderCreater;

/***/ },
/* 610 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 611 */,
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(613);

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _paper_summary = __webpack_require__(505);

	var _paper_summary2 = _interopRequireDefault(_paper_summary);

	var _paper_folder_updater = __webpack_require__(614);

	var _paper_folder_updater2 = _interopRequireDefault(_paper_folder_updater);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(618);

	var PaperFolder = function (_React$Component) {
	    _inherits(PaperFolder, _React$Component);

	    function PaperFolder(props) {
	        _classCallCheck(this, PaperFolder);

	        var _this = _possibleConstructorReturn(this, (PaperFolder.__proto__ || Object.getPrototypeOf(PaperFolder)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(PaperFolder, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            console.log('PaperFolder render ', node);
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_paper_folder_updater2.default, { node: node }),
	                React.createElement(_reader2.default, { view: _paper_summary2.default, gid: node._id, level: 1 })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return PaperFolder;
	}(React.Component);

	module.exports = PaperFolder;

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(615);

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(616);

	var schema = {
	    title: "试题集",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "试题集名称" }
	    }
	};
	var node_type = 'ks1/paper/folder';

	var FolderForm = function FolderForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema,
	                formData: props.node._data.data,
	                onSubmit: function onSubmit(obj) {
	                    return props.update({
	                        type: node_type,
	                        data: obj.formData
	                    });
	                } },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'button',
	                    { type: 'submit', className: 'btn btn-success' },
	                    '\u4FDD\u5B58'
	                ),
	                React.createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: function onClick(e) {
	                            e.preventDefault(); //不知为何submit会被调用，人为阻止
	                            var sure = confirm("确定要删除吗?");
	                            if (!sure) {
	                                return;
	                            }
	                            props.remove();
	                        } },
	                    '\u5220\u9664'
	                )
	            )
	        )
	    );
	};

	var FolderUpdater = function (_React$Component) {
	    _inherits(FolderUpdater, _React$Component);

	    function FolderUpdater(props) {
	        _classCallCheck(this, FolderUpdater);

	        var _this = _possibleConstructorReturn(this, (FolderUpdater.__proto__ || Object.getPrototypeOf(FolderUpdater)).call(this, props));

	        _this.state = {
	            node: props.node
	        };
	        return _this;
	    }

	    _createClass(FolderUpdater, [{
	        key: 'render',
	        value: function render() {

	            var me = this;
	            var node = this.state.node;

	            console.log('FolderUpdater render ', node);
	            return React.createElement(
	                'div',
	                { className: 'folder_updater' },
	                React.createElement(_writer2.default, { node: node, view: FolderForm, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("updated", function () {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, node) {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到当前节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ node: nextProps.node });
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }]);

	    return FolderUpdater;
	}(React.Component);

	module.exports = FolderUpdater;

/***/ },
/* 616 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 617 */,
/* 618 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 619 */,
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(621);

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(622);


	var schema = {
	    title: "试题集",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "试题集名称" }
	    }
	};
	var node_type = 'ks1/paper/folder';

	var FolderForm = function FolderForm(props) {
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save({
	                        type: node_type,
	                        data: obj.formData
	                    }, obj.formData.name);
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var FolderCreater = function (_React$Component) {
	    _inherits(FolderCreater, _React$Component);

	    function FolderCreater(props) {
	        _classCallCheck(this, FolderCreater);

	        var _this = _possibleConstructorReturn(this, (FolderCreater.__proto__ || Object.getPrototypeOf(FolderCreater)).call(this, props));

	        _this.state = {
	            node: props.node
	        };
	        return _this;
	    }

	    _createClass(FolderCreater, [{
	        key: 'render',
	        value: function render() {

	            var me = this;
	            var node = this.state.node;

	            console.log('folderCreater render ', node);
	            return React.createElement(
	                'div',
	                { className: 'folder_creater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { pgid: node._id, view: FolderForm, publish: 'saved' })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("saved", function (msg, new_node) {
	                location.href = "#/manage/" + new_node._id;
	            }); //保存数据后到新节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ node: nextProps.node });
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return FolderCreater;
	}(React.Component);

	module.exports = FolderCreater;

/***/ },
/* 622 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 623 */,
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(625);

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _paper_form = __webpack_require__(626);

	var _paper_form2 = _interopRequireDefault(_paper_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(652);

	var PaperCreater = function (_React$Component) {
	    _inherits(PaperCreater, _React$Component);

	    function PaperCreater(props) {
	        _classCallCheck(this, PaperCreater);

	        var _this = _possibleConstructorReturn(this, (PaperCreater.__proto__ || Object.getPrototypeOf(PaperCreater)).call(this, props));

	        _this.state = {
	            node: props.node
	        };
	        return _this;
	    }

	    _createClass(PaperCreater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.state.node;

	            return React.createElement(
	                'div',
	                { className: 'paper_creater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { pgid: node._id, view: _paper_form2.default, publish: 'saved' })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.token = PubSub.subscribe("saved", function (msg, new_node) {
	                location.href = "#/manage/" + new_node._link.p;
	            }); //保存数据后到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ node: nextProps.node });
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	        }
	    }]);

	    return PaperCreater;
	}(React.Component);

	module.exports = PaperCreater;

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(627);

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _paper_preview = __webpack_require__(628);

	var _paper_preview2 = _interopRequireDefault(_paper_preview);

	var _paper_topic_chooser = __webpack_require__(638);

	var _paper_topic_chooser2 = _interopRequireDefault(_paper_topic_chooser);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(650);


	var _ = __webpack_require__(79);

	var PaperForm = function (_React$Component) {
	    _inherits(PaperForm, _React$Component);

	    function PaperForm(props) {
	        _classCallCheck(this, PaperForm);

	        var _this = _possibleConstructorReturn(this, (PaperForm.__proto__ || Object.getPrototypeOf(PaperForm)).call(this, props));

	        var node = props.node;

	        if (node) {
	            _this.state = node._data.data; //更新
	        } else {
	            _this.state = {
	                name: "未命名试卷 " + new Date().toLocaleString(),
	                questions: [],
	                scores: {}
	            };
	        }

	        return _this;
	    }

	    _createClass(PaperForm, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _props = this.props,
	                save = _props.save,
	                update = _props.update,
	                remove = _props.remove;
	            var _state = this.state,
	                name = _state.name,
	                questions = _state.questions,
	                scores = _state.scores;

	            return React.createElement(
	                'div',
	                { className: 'pad' },
	                React.createElement(
	                    _reactBootstrap.ButtonToolbar,
	                    { style: { textAlign: 'right', paddingBottom: "15px" } },
	                    save ? React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'success', onClick: this.save.bind(this) },
	                        '\u4FDD\u5B58'
	                    ) : null,
	                    update ? React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'success', onClick: this.update.bind(this) },
	                        '\u4FDD\u5B58'
	                    ) : null,
	                    remove ? React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'danger', onClick: this.remove.bind(this) },
	                        '\u5220\u9664'
	                    ) : null
	                ),
	                React.createElement(
	                    'div',
	                    { style: { padding: "15px 0" } },
	                    React.createElement(
	                        'legend',
	                        null,
	                        '\u8BD5\u5377\u540D\u79F0:',
	                        React.createElement('input', { onChange: this.onChangeName.bind(this),
	                            value: name })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: { float: "right" } },
	                        '\u603B\u5206: ',
	                        this.totalScore(),
	                        '\u5206'
	                    )
	                ),
	                React.createElement(
	                    _reactBootstrap.Tabs,
	                    { defaultActiveKey: 1, id: 'questions' },
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 1, title: '\u9884\u89C8' },
	                        React.createElement(_paper_preview2.default, { selected_questions: questions, scores: scores })
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 2, title: '\u9009\u9898' },
	                        React.createElement(_paper_topic_chooser2.default, { selected_questions: questions })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            var sure = confirm("确定要删除吗?");
	            if (!sure) {
	                return;
	            }
	            return this.props.remove();
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            return this.props.save({ type: "ks1/paper", data: this.state });
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            return this.props.update({ type: "ks1/paper", data: this.state });
	        }
	    }, {
	        key: 'onChangeName',
	        value: function onChangeName(e) {
	            this.setState({ name: e.target.value });
	        }
	    }, {
	        key: 'changeScore',
	        value: function changeScore(gid, score) {
	            var scores = this.state.scores;

	            scores[gid] = Number(score) || 0;
	            this.forceUpdate(); //更新总分
	        }
	    }, {
	        key: 'totalScore',
	        value: function totalScore() {
	            var _state2 = this.state,
	                scores = _state2.scores,
	                questions = _state2.questions;

	            return _.sum(_.values(_.pick(scores, questions)));
	        }
	    }, {
	        key: 'toggleQuestion',
	        value: function toggleQuestion(gid) {
	            console.log('toggleQuestion...', gid);
	            var _state3 = this.state,
	                questions = _state3.questions,
	                scores = _state3.scores;

	            var qs = questions;
	            var idx = qs.indexOf(gid);
	            if (idx > -1) {
	                //原先被选中，现在除去。
	                qs.splice(idx, 1);
	            } else {
	                //原先没有，加入。
	                qs.push(gid);
	                scores[gid] = scores[gid] || 1; //默认每题1分
	            }
	            console.log('qs', qs);
	            this.setState({ questions: qs, scores: scores });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.tokenToggle = PubSub.subscribe("topic.toggle", function (msg, gid) {
	                return _this2.toggleQuestion(gid);
	            });
	            this.tokenScore = PubSub.subscribe("topic.score", function (msg, obj) {
	                return _this2.changeScore(obj.gid, obj.score);
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.tokenToggle);
	            PubSub.unsubscribe(this.tokenScore);
	        }
	    }]);

	    return PaperForm;
	}(React.Component);

	module.exports = PaperForm;

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(629);

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _paper_preview_questions = __webpack_require__(630);

	var _paper_preview_questions2 = _interopRequireDefault(_paper_preview_questions);

	var _tree_nodes_reader = __webpack_require__(634);

	var _tree_nodes_reader2 = _interopRequireDefault(_tree_nodes_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(636);

	var PaperPreview = function (_React$Component) {
	    _inherits(PaperPreview, _React$Component);

	    function PaperPreview(props) {
	        _classCallCheck(this, PaperPreview);

	        var _this = _possibleConstructorReturn(this, (PaperPreview.__proto__ || Object.getPrototypeOf(PaperPreview)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(PaperPreview, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                selected_questions = _props.selected_questions,
	                scores = _props.scores;

	            if (selected_questions.length === 0) {
	                return React.createElement(
	                    _reactBootstrap.Well,
	                    null,
	                    '\u60A8\u8FD8\u6CA1\u6709\u9009\u62E9\u8BD5\u9898\uFF0C\u8BF7\u70B9\u51FB"\u9009\u9898"\u6807\u7B7E\u9009\u62E9'
	                );
	            }
	            return React.createElement(_tree_nodes_reader2.default, { view: _paper_preview_questions2.default, gids: selected_questions, scores: scores });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return PaperPreview;
	}(React.Component);

	module.exports = PaperPreview;

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(631);

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _common = __webpack_require__(384);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(632);

	var PaperPreviewQuestions = function (_React$Component) {
	    _inherits(PaperPreviewQuestions, _React$Component);

	    function PaperPreviewQuestions(props) {
	        _classCallCheck(this, PaperPreviewQuestions);

	        var _this = _possibleConstructorReturn(this, (PaperPreviewQuestions.__proto__ || Object.getPrototypeOf(PaperPreviewQuestions)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(PaperPreviewQuestions, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var me = this;
	            var _props = this.props,
	                nodes = _props.nodes,
	                scores = _props.scores;

	            return React.createElement(
	                'div',
	                null,
	                nodes.map(function (node) {
	                    return React.createElement(
	                        _reactBootstrap.Row,
	                        { key: node._id, className: 'no-gutter' },
	                        _this2.showTopic(node, scores[node._id])
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'showTopic',
	        value: function showTopic(node, score) {
	            var _this3 = this;

	            return React.createElement(
	                'div',
	                { style: { paddingTop: "20px" } },
	                React.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 1 },
	                    React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'danger', onClick: function onClick() {
	                                PubSub.publish('topic.toggle', node._id);
	                            } },
	                        React.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
	                    )
	                ),
	                React.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 10 },
	                    (0, _common.m)(node)
	                ),
	                React.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 1 },
	                    React.createElement('input', { type: 'number', min: '1', max: '100', step: '1',
	                        placeholder: '\u5206\u503C', value: score, onChange: function onChange(e) {
	                            return _this3.changeScore(node, e.target.value);
	                        },
	                        style: { padding: "8px", width: "50px" } })
	                )
	            );
	        }
	    }, {
	        key: 'changeScore',
	        value: function changeScore(node, score) {
	            console.log('changeScore', node._id, score);
	            PubSub.publish('topic.score', { gid: node._id, score: score });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return PaperPreviewQuestions;
	}(React.Component);

	module.exports = PaperPreviewQuestions;

/***/ },
/* 632 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 633 */,
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(635);

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tree = __webpack_require__(71)('_api');

	var util = __webpack_require__(379);

	var TreeNodesReader = function (_React$Component) {
	    _inherits(TreeNodesReader, _React$Component);

	    function TreeNodesReader(props) {
	        _classCallCheck(this, TreeNodesReader);

	        var _this = _possibleConstructorReturn(this, (TreeNodesReader.__proto__ || Object.getPrototypeOf(TreeNodesReader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TreeNodesReader, [{
	        key: 'render',
	        value: function render() {
	            // console.log('render reader')
	            var me = this;
	            var nodes = this.state.nodes;

	            if (!nodes) {
	                return null;
	            } else {
	                var _props = this.props,
	                    view = _props.view,
	                    others = _objectWithoutProperties(_props, ['view']);

	                var View = view;
	                return React.createElement(View, _extends({ nodes: nodes }, others));
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData(this.props);
	            var me = this;
	            var mySubscriber = function mySubscriber(msg, data) {
	                console.log(msg, data);
	                me.fetchData();
	            };
	            var subscribe = this.props.subscribe || [];
	            this.tokens = subscribe.map(function (msg) {
	                console.log('subscribe msg', msg);
	                return PubSub.subscribe(msg, mySubscriber);
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this2 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (nodes) {
	                _this2.setState({ nodes: nodes });
	            }).catch(function (reason) {
	                // console.log('isCanceled', reason.isCanceled)
	                if (!reason.isCanceled) {
	                    Promise.reject(reason);
	                }
	            });
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var gids = props.gids;

	            return tree.read_nodes(gids);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.fetchData(nextProps);
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
	        value: function componentWillUnmount() {
	            this.cancelablePromise.cancel();
	            this.tokens.map(function (token) {
	                PubSub.unsubscribe(token);
	                console.log('unsubscribe', token);
	            });
	        }
	    }]);

	    return TreeNodesReader;
	}(React.Component);

	TreeNodesReader.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    gids: _react.PropTypes.array,
	    subscribe: _react.PropTypes.array
	};


	module.exports = TreeNodesReader;

/***/ },
/* 636 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 637 */,
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(639);

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _paper_topic_chooser_nav = __webpack_require__(640);

	var _paper_topic_chooser_nav2 = _interopRequireDefault(_paper_topic_chooser_nav);

	var _paper_topic_chooser_browser = __webpack_require__(644);

	var _paper_topic_chooser_browser2 = _interopRequireDefault(_paper_topic_chooser_browser);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(648);

	var PaperTopicChooser = function (_React$Component) {
	    _inherits(PaperTopicChooser, _React$Component);

	    function PaperTopicChooser(props) {
	        _classCallCheck(this, PaperTopicChooser);

	        var _this = _possibleConstructorReturn(this, (PaperTopicChooser.__proto__ || Object.getPrototypeOf(PaperTopicChooser)).call(this, props));

	        _this.state = {
	            to: "0/menu/banks"
	        };
	        return _this;
	    }

	    _createClass(PaperTopicChooser, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var to = this.state.to;
	            var selected_questions = this.props.selected_questions;

	            return React.createElement(
	                'div',
	                { className: 'paper_topic_chooser' },
	                React.createElement(_treepathreader2.default, { view: _paper_topic_chooser_nav2.default, from: '0/menu/banks', to: to }),
	                typeof to === 'number' ? React.createElement(_reader2.default, { view: _paper_topic_chooser_browser2.default, gid: to, level: 1, selected_questions: selected_questions }) : React.createElement(_reader2.default, { view: _paper_topic_chooser_browser2.default, path: to, level: 1, selected_questions: selected_questions })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            this.token_goto = PubSub.subscribe("topic.goto", function (msg, gid) {
	                console.log('topic.goto', gid);
	                _this2.setState({ to: gid });
	            }); //保存数据后到新节点
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token_goto);
	        }
	    }]);

	    return PaperTopicChooser;
	}(React.Component);

	module.exports = PaperTopicChooser;

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(641);

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _navview = __webpack_require__(202);

	var _navview2 = _interopRequireDefault(_navview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(642);

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);
	var util = __webpack_require__(379);


	function name(node) {
	    var d = node._data || {};
	    return d.title || d.data && (d.data.name || d.data.question) || lid2name(node._name) || node._name || "noname";
	}

	function lid2name(lid) {
	    var names = { "menu": "主页", "banks": "题库", "papers": "试卷", "exams": "考试", "teachers": "教师", "classes": "班级", "rooms": "考场" };
	    return names[lid];
	}

	var PaperTopicChooserNav = function (_React$Component) {
	    _inherits(PaperTopicChooserNav, _React$Component);

	    function PaperTopicChooserNav(props) {
	        _classCallCheck(this, PaperTopicChooserNav);

	        var _this = _possibleConstructorReturn(this, (PaperTopicChooserNav.__proto__ || Object.getPrototypeOf(PaperTopicChooserNav)).call(this, props));

	        _this.state = {
	            nodes: props.nodes
	        };
	        return _this;
	    }

	    _createClass(PaperTopicChooserNav, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var items = this.state.nodes.map(function (node) {
	                return { title: name(node), onClick: function onClick() {
	                        return _this2.onClick(node);
	                    }, key: node._id };
	            });
	            return React.createElement(_navview2.default, { items: items });
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(node) {
	            console.log('nav onClick', node._id);
	            PubSub.publish('topic.goto', node._id);
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
	            this.setState({ nodes: nextProps.nodes });
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

	    return PaperTopicChooserNav;
	}(React.Component);

	module.exports = PaperTopicChooserNav;

/***/ },
/* 642 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 643 */,
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(645);

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _common = __webpack_require__(384);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(646);


	function isFolderOrTopic(node) {
	    var type = node._data.type;
	    return type == 'ks1/bank/folder' || type == 'ks1/qa' || type == 'ks1/tf' || type == 'ks1/choice' || type == 'ks1/revise';
	}

	var PaperTopicChooserBrowser = function (_React$Component) {
	    _inherits(PaperTopicChooserBrowser, _React$Component);

	    function PaperTopicChooserBrowser(props) {
	        _classCallCheck(this, PaperTopicChooserBrowser);

	        var _this = _possibleConstructorReturn(this, (PaperTopicChooserBrowser.__proto__ || Object.getPrototypeOf(PaperTopicChooserBrowser)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(PaperTopicChooserBrowser, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var me = this;
	            var node = this.props.node;

	            var nodes = node._children;
	            // console.log(nodes);
	            return React.createElement(
	                'div',
	                { className: 'paper-questions' },
	                nodes.filter(isFolderOrTopic).map(function (node) {
	                    return React.createElement(
	                        _reactBootstrap.Row,
	                        { key: node._id, className: 'no-gutter' },
	                        _this2.wrapNode(node)
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'wrapNode',
	        value: function wrapNode(node) {
	            // console.log(node);
	            if (node._data.type == 'ks1/bank/folder') {
	                return React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        _reactBootstrap.Col,
	                        { xs: 1 },
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { bsStyle: 'default', onClick: function onClick() {
	                                    PubSub.publish('topic.goto', node._id);
	                                } },
	                            React.createElement(_reactBootstrap.Glyphicon, { glyph: 'folder-open' })
	                        )
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Col,
	                        { xs: 11 },
	                        React.createElement(
	                            _reactBootstrap.Well,
	                            { onClick: function onClick() {
	                                    PubSub.publish('topic.goto', node._id);
	                                } },
	                            (0, _common.name)(node)
	                        )
	                    ),
	                    ';'
	                );
	            } else {
	                // console.log(node,v);
	                return React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        _reactBootstrap.Col,
	                        { xs: 1 },
	                        React.createElement(
	                            _reactBootstrap.Button,
	                            { bsStyle: this.questionStyle(node), onClick: function onClick() {
	                                    PubSub.publish('topic.toggle', node._id);
	                                } },
	                            this.props.selected_questions.indexOf(node._id) > -1 ? React.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' }) : "__"
	                        )
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Col,
	                        { xs: 11 },
	                        (0, _common.m)(node)
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'questionStyle',
	        value: function questionStyle(node) {
	            // console.log("questionStyle",this.props.selected_questions,node._id,this.props.selected_questions.indexOf(node._id))
	            if (this.props.selected_questions.indexOf(node._id) > -1) {
	                return 'success';
	            } else {
	                return 'default';
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return PaperTopicChooserBrowser;
	}(React.Component);

	module.exports = PaperTopicChooserBrowser;

/***/ },
/* 646 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 647 */,
/* 648 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 649 */,
/* 650 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 651 */,
/* 652 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 653 */,
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(655);

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _paper_form = __webpack_require__(626);

	var _paper_form2 = _interopRequireDefault(_paper_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(656);

	var PaperUpdater = function (_React$Component) {
	    _inherits(PaperUpdater, _React$Component);

	    function PaperUpdater(props) {
	        _classCallCheck(this, PaperUpdater);

	        var _this = _possibleConstructorReturn(this, (PaperUpdater.__proto__ || Object.getPrototypeOf(PaperUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(PaperUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            return React.createElement(
	                'div',
	                { className: 'paper_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { node: node, view: _paper_form2.default, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.tokenUpdate = PubSub.subscribe("updated", function (msg, new_node) {
	                location.href = "#/manage/" + new_node._link.p;
	            }); //更新数据后到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, new_node) {
	                location.href = "#/manage/" + new_node._link.p;
	            }); //删除数据后到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.tokenUpdate);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }]);

	    return PaperUpdater;
	}(React.Component);

	module.exports = PaperUpdater;

/***/ },
/* 656 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 657 */,
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(659);

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _upload = __webpack_require__(660);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(673);

	var userManager = __webpack_require__(675);

	var schema = {
	    title: "选择题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        answers: {
	            type: "array",
	            title: "选项",
	            items: {
	                type: "object",
	                required: ["answer"],
	                properties: {
	                    "answer": { type: "string", title: "选支" },
	                    "ok": { type: "boolean", title: "正确?", default: false }
	                }
	            }
	        }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" },
	    answers: { "items": { "answer": { "ui:widget": "textarea" } } }
	};
	var node_type = 'ks1/choice';
	var ChoiceForm = function ChoiceForm(props) {
	    var user = userManager.getUser();
	    var isAdmin = user.isAdmin;
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                formData: props.node._data.data,
	                onSubmit: function onSubmit(obj) {
	                    return props.update({
	                        type: node_type,
	                        data: obj.formData
	                    });
	                } },
	            React.createElement(_upload2.default, { pgid: props.node._id }),
	            React.createElement(
	                'div',
	                { className: 'btn-toolbar' },
	                React.createElement(
	                    'button',
	                    { type: 'submit', className: 'btn btn-success' },
	                    '\u4FDD\u5B58'
	                ),
	                !isAdmin ? null : React.createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: function onClick(e) {
	                            e.preventDefault(); //不知为何submit会被调用，人为阻止
	                            var sure = confirm("确定要删除吗?");
	                            if (!sure) {
	                                return;
	                            }
	                            props.remove();
	                        } },
	                    '\u5220\u9664'
	                )
	            )
	        )
	    );
	};

	var TopicChoiceUpdater = function (_React$Component) {
	    _inherits(TopicChoiceUpdater, _React$Component);

	    function TopicChoiceUpdater(props) {
	        _classCallCheck(this, TopicChoiceUpdater);

	        var _this = _possibleConstructorReturn(this, (TopicChoiceUpdater.__proto__ || Object.getPrototypeOf(TopicChoiceUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicChoiceUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            return React.createElement(
	                'div',
	                { className: 'topic_choice_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { node: node, view: ChoiceForm, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("updated", function () {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, node) {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentDidUpdate(prevProps, prevState) {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return TopicChoiceUpdater;
	}(React.Component);

	module.exports = TopicChoiceUpdater;

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(661);

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _uploader = __webpack_require__(662);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _dropbox = __webpack_require__(666);

	var _dropbox2 = _interopRequireDefault(_dropbox);

	var _imageviewer = __webpack_require__(387);

	var _imageviewer2 = _interopRequireDefault(_imageviewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(671);

	//给出pgid,可以上传图片作为pgid子节点，并显示pgid所有子节点图片。
	var Upload = function (_React$Component) {
	    _inherits(Upload, _React$Component);

	    function Upload(props) {
	        _classCallCheck(this, Upload);

	        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Upload, [{
	        key: "render",
	        value: function render() {
	            var pgid = this.props.pgid;

	            return React.createElement(
	                "div",
	                null,
	                React.createElement(_uploader2.default, { view: _dropbox2.default, pgid: pgid }),
	                React.createElement(_reader2.default, { view: _imageviewer2.default, gid: pgid, level: 1 })
	            );
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var me = this;
	            var mySubscriber = function mySubscriber(msg, data) {
	                console.log(msg, data);
	                me.forceUpdate();
	            };
	            this.token = PubSub.subscribe('img.saved', mySubscriber);
	            this.token2 = PubSub.subscribe('img.removed', mySubscriber);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.token2);
	        }
	    }]);

	    return Upload;
	}(React.Component);

	module.exports = Upload;

/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(663);

/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(664);

	var tree = __webpack_require__(71)('_api');
	var treetool = __webpack_require__(193)(tree);

	var Uploader = function (_React$Component) {
	    _inherits(Uploader, _React$Component);

	    function Uploader(props) {
	        _classCallCheck(this, Uploader);

	        var _this = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Uploader, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                view = _props.view,
	                others = _objectWithoutProperties(_props, ['view']);

	            var View = view;
	            return React.createElement(View, _extends({ upload: this.upload.bind(this) }, others));
	        }
	    }, {
	        key: 'upload',
	        value: function upload(files, filename, onProgress) {
	            var _props2 = this.props,
	                pgid = _props2.pgid,
	                bgid = _props2.bgid,
	                ppath = _props2.ppath;

	            if (pgid !== undefined) {
	                return tree.mk_son_by_file(pgid, files[0], filename, onProgress);
	            } else if (bgid) {
	                return tree.mk_brother_by_file(pgid, files[0], filename, onProgress);
	            } else if (ppath) {
	                return treetool.fetchOrCreatePath(ppath).then(function (pgid) {
	                    return tree.mk_son_by_file(pgid, files[0], filename, onProgress);
	                });
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Uploader;
	}(React.Component);

	Uploader.propTypes = {
	    view: _react.PropTypes.object.isRequired,
	    pgid: _react.PropTypes.string,
	    ppath: _react.PropTypes.string
	};


	module.exports = Uploader;

/***/ },
/* 664 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 665 */,
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(667);

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(668);
	var Dropzone = __webpack_require__(670);

	var Dropbox = function (_React$Component) {
	    _inherits(Dropbox, _React$Component);

	    function Dropbox(props) {
	        _classCallCheck(this, Dropbox);

	        var _this = _possibleConstructorReturn(this, (Dropbox.__proto__ || Object.getPrototypeOf(Dropbox)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Dropbox, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                Dropzone,
	                { className: 'my-dropzone', accept: 'image/*', onDrop: this.upload.bind(this) },
	                '\u865A\u7EBF\u6846\u5185\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247'
	            );
	        }
	    }, {
	        key: 'upload',
	        value: function upload(files) {
	            this.props.upload(files).then(function (node) {
	                PubSub.publish('img.saved', node);
	                // alert("ok");
	            }).catch(function (e) {
	                return alert("fail");
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return Dropbox;
	}(React.Component);

	module.exports = Dropbox;

/***/ },
/* 668 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 669 */,
/* 670 */,
/* 671 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 672 */,
/* 673 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 674 */,
/* 675 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var agent = __webpack_require__(517)(__webpack_require__(518), Promise);

	var user = {};

	function refreshUser() {
	  agent.get('/user').then(function (resp) {
	    user = resp.body;
	  });
	}

	function getUser() {
	  return user;
	}

	module.exports = {
	  refreshUser: refreshUser,
	  getUser: getUser
	};

/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(677);

/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _upload = __webpack_require__(660);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(678);

	var userManager = __webpack_require__(675);

	var schema = {
	    title: "问答题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        answer: { type: "string", title: "参考答案" }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" },
	    answer: { "ui:widget": "textarea" }
	};
	var node_type = 'ks1/qa';
	var QaForm = function QaForm(props) {
	    var user = userManager.getUser();
	    var isAdmin = user.isAdmin;
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                formData: props.node._data.data,
	                onSubmit: function onSubmit(obj) {
	                    return props.update({
	                        type: node_type,
	                        data: obj.formData
	                    });
	                } },
	            React.createElement(_upload2.default, { pgid: props.node._id }),
	            React.createElement(
	                'div',
	                { className: 'btn-toolbar' },
	                React.createElement(
	                    'button',
	                    { type: 'submit', className: 'btn btn-success' },
	                    '\u4FDD\u5B58'
	                ),
	                !isAdmin ? null : React.createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: function onClick(e) {
	                            e.preventDefault(); //不知为何submit会被调用，人为阻止
	                            var sure = confirm("确定要删除吗?");
	                            if (!sure) {
	                                return;
	                            }
	                            props.remove();
	                        } },
	                    '\u5220\u9664'
	                )
	            )
	        )
	    );
	};

	var TopicQaUpdater = function (_React$Component) {
	    _inherits(TopicQaUpdater, _React$Component);

	    function TopicQaUpdater(props) {
	        _classCallCheck(this, TopicQaUpdater);

	        var _this = _possibleConstructorReturn(this, (TopicQaUpdater.__proto__ || Object.getPrototypeOf(TopicQaUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicQaUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            return React.createElement(
	                'div',
	                { className: 'topic_choice_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { node: node, view: QaForm, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("updated", function () {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, node) {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentDidUpdate(prevProps, prevState) {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return TopicQaUpdater;
	}(React.Component);

	module.exports = TopicQaUpdater;

/***/ },
/* 678 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 679 */,
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(681);

/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _upload = __webpack_require__(660);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(682);

	var userManager = __webpack_require__(675);

	var schema = {
	    title: "判断题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        ok: { type: "boolean", title: "正确?", default: false }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" }
	};
	var node_type = "ks1/tf";
	var TfForm = function TfForm(props) {
	    var user = userManager.getUser();
	    var isAdmin = user.isAdmin;
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                formData: props.node._data.data,
	                onSubmit: function onSubmit(obj) {
	                    return props.update({
	                        type: node_type,
	                        data: obj.formData
	                    });
	                } },
	            React.createElement(_upload2.default, { pgid: props.node._id }),
	            React.createElement(
	                'div',
	                { className: 'btn-toolbar' },
	                React.createElement(
	                    'button',
	                    { type: 'submit', className: 'btn btn-success' },
	                    '\u4FDD\u5B58'
	                ),
	                !isAdmin ? null : React.createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: function onClick(e) {
	                            e.preventDefault(); //不知为何submit会被调用，人为阻止
	                            var sure = confirm("确定要删除吗?");
	                            if (!sure) {
	                                return;
	                            }
	                            props.remove();
	                        } },
	                    '\u5220\u9664'
	                )
	            )
	        )
	    );
	};

	var TopicTfUpdater = function (_React$Component) {
	    _inherits(TopicTfUpdater, _React$Component);

	    function TopicTfUpdater(props) {
	        _classCallCheck(this, TopicTfUpdater);

	        var _this = _possibleConstructorReturn(this, (TopicTfUpdater.__proto__ || Object.getPrototypeOf(TopicTfUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicTfUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            return React.createElement(
	                'div',
	                { className: 'topic_choice_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { node: node, view: TfForm, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("updated", function () {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, node) {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentDidUpdate(prevProps, prevState) {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return TopicTfUpdater;
	}(React.Component);

	module.exports = TopicTfUpdater;

/***/ },
/* 682 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 683 */,
/* 684 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(685);

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _writer = __webpack_require__(535);

	var _writer2 = _interopRequireDefault(_writer);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _upload = __webpack_require__(660);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(686);

	var userManager = __webpack_require__(675);

	var schema = {
	    title: "改错题",
	    type: "object",
	    required: ["question"],
	    properties: {
	        question: { type: "string", title: "问题" },
	        content: { type: "string", title: "要改错的内容" },
	        answer: { type: "string", title: "参考答案" }
	    }
	};
	var uiSchema = {
	    question: { "ui:widget": "textarea" },
	    content: { "ui:widget": "textarea" },
	    answer: { "ui:widget": "textarea" }
	};
	var node_type = 'ks1/revise';
	var ReviseForm = function ReviseForm(props) {
	    var user = userManager.getUser();
	    var isAdmin = user.isAdmin;
	    return React.createElement(
	        'div',
	        { style: { padding: "30px" } },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                formData: props.node._data.data,
	                onSubmit: function onSubmit(obj) {
	                    return props.update({
	                        type: node_type,
	                        data: obj.formData
	                    });
	                } },
	            React.createElement(_upload2.default, { pgid: props.node._id }),
	            React.createElement(
	                'div',
	                { className: 'btn-toolbar' },
	                React.createElement(
	                    'button',
	                    { type: 'submit', className: 'btn btn-success' },
	                    '\u4FDD\u5B58'
	                ),
	                !isAdmin ? null : React.createElement(
	                    'button',
	                    { className: 'btn btn-danger', onClick: function onClick(e) {
	                            e.preventDefault(); //不知为何submit会被调用，人为阻止
	                            var sure = confirm("确定要删除吗?");
	                            if (!sure) {
	                                return;
	                            }
	                            props.remove();
	                        } },
	                    '\u5220\u9664'
	                )
	            )
	        )
	    );
	};

	var TopicReviseUpdater = function (_React$Component) {
	    _inherits(TopicReviseUpdater, _React$Component);

	    function TopicReviseUpdater(props) {
	        _classCallCheck(this, TopicReviseUpdater);

	        var _this = _possibleConstructorReturn(this, (TopicReviseUpdater.__proto__ || Object.getPrototypeOf(TopicReviseUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TopicReviseUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var node = this.props.node;

	            return React.createElement(
	                'div',
	                { className: 'topic_choice_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: node._id }),
	                React.createElement(_writer2.default, { node: node, view: ReviseForm, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node = this.props.node;

	            this.token = PubSub.subscribe("updated", function () {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, node) {
	                location.href = "#/manage/" + node._link.p;
	            }); //保存数据后回到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentDidUpdate(prevProps, prevState) {
	            PubSub.unsubscribe(this.token);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return TopicReviseUpdater;
	}(React.Component);

	module.exports = TopicReviseUpdater;

/***/ },
/* 686 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 687 */,
/* 688 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 689 */,
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(691);

/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(696);

	var schema = {
	    title: "考场",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "考场名称" },
	        desks: {
	            title: "桌位",
	            type: "array",
	            items: {
	                type: "object",
	                required: ["readerID", "browserIP"],
	                properties: {
	                    readerID: { type: "string", title: "读卡器编号" },
	                    browserIP: { type: "string", title: "浏览器IP" }
	                }
	            }
	        }
	    }
	};

	var goto = function goto(url) {
	    location.href = '#' + url;
	};
	var roomForm = function roomForm(props) {
	    return React.createElement(
	        'div',
	        { className: 'pad' },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save(obj.formData).then(function (_) {
	                        return goto('/rooms');
	                    });
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var RoomCreater = function (_React$Component) {
	    _inherits(RoomCreater, _React$Component);

	    function RoomCreater(props) {
	        _classCallCheck(this, RoomCreater);

	        var _this = _possibleConstructorReturn(this, (RoomCreater.__proto__ || Object.getPrototypeOf(RoomCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RoomCreater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/rooms' }),
	                React.createElement(_rest_writer2.default, { url: '/api/room', view: roomForm })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return RoomCreater;
	}(React.Component);

	module.exports = RoomCreater;

/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(693);

/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(694);

	var util = __webpack_require__(379);

	var agent = __webpack_require__(517)(__webpack_require__(518), Promise);

	var RestWriter = function (_React$Component) {
	    _inherits(RestWriter, _React$Component);

	    function RestWriter(props) {
	        _classCallCheck(this, RestWriter);

	        var _this = _possibleConstructorReturn(this, (RestWriter.__proto__ || Object.getPrototypeOf(RestWriter)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RestWriter, [{
	        key: 'render',
	        value: function render() {
	            var me = this;

	            var _props = this.props,
	                view = _props.view,
	                url = _props.url,
	                id = _props.id,
	                others = _objectWithoutProperties(_props, ['view', 'url', 'id']);

	            var View = view;
	            if (id) {
	                //更新或删除
	                var data = this.state.data;

	                if (data === undefined) {
	                    return null; //等待异步取得数据
	                } else {
	                    return React.createElement(View, _extends({ data: data, update: this.update.bind(this), remove: this.remove.bind(this) }, others));
	                }
	            } else {
	                //新建
	                return React.createElement(View, _extends({ save: this.save.bind(this) }, others));
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update(data) {
	            var _this2 = this;

	            return this._update(data).then(function (node) {
	                var publish = _this2.props.publish;

	                if (publish) {
	                    if (publish.update) {
	                        PubSub.publish(publish.update, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	                return node;
	            });
	        }
	    }, {
	        key: '_update',
	        value: function _update(data) {
	            var _props2 = this.props,
	                url = _props2.url,
	                id = _props2.id;

	            return agent.put(url + '/' + id, data).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            var _this3 = this;

	            return this._remove().then(function (node) {
	                var publish = _this3.props.publish;

	                if (publish) {
	                    if (publish.remove) {
	                        PubSub.publish(publish.remove, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	            });
	        }
	    }, {
	        key: '_remove',
	        value: function _remove() {
	            var _props3 = this.props,
	                url = _props3.url,
	                id = _props3.id;

	            return agent.del(url + '/' + id).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'save',
	        value: function save(data) {
	            var _this4 = this;

	            return this._save(data).then(function (node) {
	                var publish = _this4.props.publish;
	                // debugger;

	                if (publish) {
	                    if (publish.save) {
	                        PubSub.publish(publish.save, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	                return node;
	            });
	        }
	    }, {
	        key: '_save',
	        value: function _save(data) {
	            var url = this.props.url;

	            return agent.post(url, data).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this5 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (data) {
	                _this5.setState({ data: data });
	            }).catch(function (reason) {
	                //console.log('isCanceled', reason.isCanceled)
	                if (!reason.isCanceled) {
	                    Promise.reject(reason);
	                }
	            });
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var url = props.url,
	                id = props.id;

	            if (!id) {
	                return Promise.resolve();
	            }
	            return agent.get(url + '/' + id).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.fetchData(nextProps);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return RestWriter;
	}(React.Component);

	RestWriter.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    url: _react.PropTypes.string,
	    id: _react.PropTypes.string,
	    publish: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])
	};


	module.exports = RestWriter;

/***/ },
/* 694 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 695 */,
/* 696 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 697 */,
/* 698 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(699);

/***/ },
/* 699 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(700);

	var schema = {
	    title: "班级",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "班级名称" },
	        students: {
	            title: "学生",
	            type: "array",
	            items: {
	                type: "object",
	                required: ["name", "id", "card"],
	                properties: {
	                    name: { type: "string", title: "姓名" },
	                    id: { type: "string", title: "学号" },
	                    card: { type: "string", title: "卡号" }
	                }
	            }
	        }
	    }
	};

	var goto = function goto(url) {
	    location.href = '#' + url;
	};
	var classForm = function classForm(props) {
	    return React.createElement(
	        'div',
	        { className: 'pad' },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save(obj.formData).then(function (_) {
	                        return goto('/classes');
	                    });
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var ClassCreater = function (_React$Component) {
	    _inherits(ClassCreater, _React$Component);

	    function ClassCreater(props) {
	        _classCallCheck(this, ClassCreater);

	        var _this = _possibleConstructorReturn(this, (ClassCreater.__proto__ || Object.getPrototypeOf(ClassCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ClassCreater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/classes' }),
	                React.createElement(_rest_writer2.default, { url: '/api/class', view: classForm })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return ClassCreater;
	}(React.Component);

	module.exports = ClassCreater;

/***/ },
/* 700 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 701 */,
/* 702 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(703);

/***/ },
/* 703 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _exam_form = __webpack_require__(704);

	var _exam_form2 = _interopRequireDefault(_exam_form);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(740);

	var ExamCreater = function (_React$Component) {
	    _inherits(ExamCreater, _React$Component);

	    function ExamCreater(props) {
	        _classCallCheck(this, ExamCreater);

	        var _this = _possibleConstructorReturn(this, (ExamCreater.__proto__ || Object.getPrototypeOf(ExamCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ExamCreater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                'div',
	                { className: 'exam_creater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/exams' }),
	                React.createElement(_rest_writer2.default, { url: '/api/exam', view: _exam_form2.default })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return ExamCreater;
	}(React.Component);

	module.exports = ExamCreater;

/***/ },
/* 704 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(705);

/***/ },
/* 705 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _exam_form_summary = __webpack_require__(706);

	var _exam_form_summary2 = _interopRequireDefault(_exam_form_summary);

	var _exam_form_paper_chooser = __webpack_require__(710);

	var _exam_form_paper_chooser2 = _interopRequireDefault(_exam_form_paper_chooser);

	var _exam_form_room_chooser = __webpack_require__(722);

	var _exam_form_room_chooser2 = _interopRequireDefault(_exam_form_room_chooser);

	var _exam_form_time_chooser = __webpack_require__(730);

	var _exam_form_time_chooser2 = _interopRequireDefault(_exam_form_time_chooser);

	var _exam_form_scores = __webpack_require__(734);

	var _exam_form_scores2 = _interopRequireDefault(_exam_form_scores);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(738);

	var ExamForm = function (_React$Component) {
	    _inherits(ExamForm, _React$Component);

	    function ExamForm(props) {
	        _classCallCheck(this, ExamForm);

	        var _this = _possibleConstructorReturn(this, (ExamForm.__proto__ || Object.getPrototypeOf(ExamForm)).call(this, props));

	        _this.state = _extends({}, props.data);
	        return _this;
	    }

	    _createClass(ExamForm, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _props = this.props,
	                save = _props.save,
	                update = _props.update,
	                remove = _props.remove;
	            var _state = this.state,
	                room_id = _state.room_id,
	                paper_gid = _state.paper_gid,
	                room_name = _state.room_name,
	                paper_name = _state.paper_name,
	                duration = _state.duration,
	                start = _state.start,
	                end = _state.end,
	                _id = _state._id;
	            // const paper_name=paper&&paper._data.data.name;
	            // const paper=paper&&paper._id;
	            // const room_name=room&&room.name;
	            // const room_id=room&&room._id;

	            return React.createElement(
	                'div',
	                { className: 'pad' },
	                React.createElement(
	                    _reactBootstrap.ButtonToolbar,
	                    { style: { textAlign: 'right', paddingBottom: "15px" } },
	                    save ? React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'success', onClick: this.save.bind(this) },
	                        '\u4FDD\u5B58'
	                    ) : null,
	                    update ? React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'success', onClick: this.update.bind(this) },
	                        '\u4FDD\u5B58'
	                    ) : null,
	                    remove ? React.createElement(
	                        _reactBootstrap.Button,
	                        { bsStyle: 'danger', onClick: this.remove.bind(this) },
	                        '\u5220\u9664'
	                    ) : null
	                ),
	                React.createElement(
	                    _reactBootstrap.Tabs,
	                    { defaultActiveKey: 1, id: 'examform' },
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 1, title: '\u6982\u8981' },
	                        React.createElement(_exam_form_summary2.default, { room: room_name, paper: paper_name, duration: duration, start: start, end: end })
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 2, title: '\u8003\u573A' },
	                        React.createElement(_exam_form_room_chooser2.default, { choosen: room_id })
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 3, title: '\u8BD5\u5377' },
	                        React.createElement(_exam_form_paper_chooser2.default, { choosen: paper_gid })
	                    ),
	                    React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 4, title: '\u65F6\u95F4' },
	                        React.createElement(_exam_form_time_chooser2.default, { start: start, end: end, duration: duration,
	                            cbSetStart: this.setStart.bind(this),
	                            cbSetEnd: this.setEnd.bind(this),
	                            cbSetDuration: this.setDuration.bind(this)
	                        })
	                    ),
	                    _id ? React.createElement(
	                        _reactBootstrap.Tab,
	                        { eventKey: 5, title: '\u6210\u7EE9' },
	                        React.createElement(_exam_form_scores2.default, { examID: _id })
	                    ) : null
	                )
	            );
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            var sure = confirm("确定要删除吗?");
	            if (!sure) {
	                return;
	            }
	            return this.props.remove();
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var _state2 = this.state,
	                room_id = _state2.room_id,
	                paper_gid = _state2.paper_gid,
	                room_name = _state2.room_name,
	                paper_name = _state2.paper_name,
	                duration = _state2.duration,
	                start = _state2.start,
	                end = _state2.end;

	            var name = paper_name + "@" + room_name;
	            return this.props.save({ name: name, room_id: room_id, paper_gid: paper_gid, room_name: room_name, paper_name: paper_name, duration: duration, start: start, end: end });
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var _state3 = this.state,
	                _id = _state3._id,
	                room_id = _state3.room_id,
	                paper_gid = _state3.paper_gid,
	                room_name = _state3.room_name,
	                paper_name = _state3.paper_name,
	                duration = _state3.duration,
	                start = _state3.start,
	                end = _state3.end;

	            var name = paper_name + "@" + room_name;
	            return this.props.update({ _id: _id, name: name, room_id: room_id, paper_gid: paper_gid, room_name: room_name, paper_name: paper_name, duration: duration, start: start, end: end });
	        }
	    }, {
	        key: 'setStart',
	        value: function setStart(start) {
	            this.setState({ start: start });
	        }
	    }, {
	        key: 'setEnd',
	        value: function setEnd(end) {
	            this.setState({ end: end });
	        }
	    }, {
	        key: 'setDuration',
	        value: function setDuration(duration) {
	            this.setState({ duration: duration });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.token_choose_paper = PubSub.subscribe("paper.choose", function (msg, node) {
	                console.log('paper.choose', node);
	                _this2.setState({ paper_gid: node._id, paper_name: node._data.data.name });
	            });
	            this.token_choose_room = PubSub.subscribe("room.choose", function (msg, data) {
	                console.log('room.choose', data);
	                _this2.setState({ room_id: data._id, room_name: data.name });
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token_choose_paper);
	            PubSub.unsubscribe(this.token_choose_room);
	        }
	    }]);

	    return ExamForm;
	}(React.Component);

	module.exports = ExamForm;

/***/ },
/* 706 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(707);

/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _moment = __webpack_require__(391);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(708);

	_moment2.default.locale('zh-cn');

	var room_name = function room_name(props) {
	  return React.createElement(
	    'span',
	    null,
	    props.data.name
	  );
	};
	var paper_name = function paper_name(props) {
	  return React.createElement(
	    'span',
	    null,
	    props.node._data.data.name
	  );
	};

	var ExamFormSummary = function (_React$Component) {
	  _inherits(ExamFormSummary, _React$Component);

	  function ExamFormSummary(props) {
	    _classCallCheck(this, ExamFormSummary);

	    var _this = _possibleConstructorReturn(this, (ExamFormSummary.__proto__ || Object.getPrototypeOf(ExamFormSummary)).call(this, props));

	    _this.state = _extends({}, props);
	    return _this;
	  }

	  _createClass(ExamFormSummary, [{
	    key: 'render',
	    value: function render() {
	      var me = this;
	      var _state = this.state,
	          room = _state.room,
	          paper = _state.paper,
	          duration = _state.duration,
	          start = _state.start,
	          end = _state.end;

	      return React.createElement(
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
	              '\u8003\u573A'
	            ),
	            React.createElement(
	              'td',
	              null,
	              room ? room : "未选择"
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              '\u8BD5\u5377'
	            ),
	            React.createElement(
	              'td',
	              null,
	              paper ? paper : "未选择"
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              '\u65F6\u957F(\u5206\u949F)'
	            ),
	            React.createElement(
	              'td',
	              null,
	              duration ? duration : "未选择"
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              '\u8003\u8BD5\u5F00\u653E\u65F6\u95F4'
	            ),
	            React.createElement(
	              'td',
	              null,
	              start ? (0, _moment2.default)(start).format('LLL') : "未选择"
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              '\u8003\u8BD5\u5173\u95ED\u65F6\u95F4'
	            ),
	            React.createElement(
	              'td',
	              null,
	              end ? (0, _moment2.default)(end).format('LLL') : "未选择"
	            )
	          )
	        )
	      );
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

	  return ExamFormSummary;
	}(React.Component);

	module.exports = ExamFormSummary;

/***/ },
/* 708 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 709 */,
/* 710 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(711);

/***/ },
/* 711 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _exam_form_paper_chooser_nav = __webpack_require__(712);

	var _exam_form_paper_chooser_nav2 = _interopRequireDefault(_exam_form_paper_chooser_nav);

	var _exam_form_paper_chooser_browser = __webpack_require__(716);

	var _exam_form_paper_chooser_browser2 = _interopRequireDefault(_exam_form_paper_chooser_browser);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(720);

	var ExamFormPaperChooser = function (_React$Component) {
	    _inherits(ExamFormPaperChooser, _React$Component);

	    function ExamFormPaperChooser(props) {
	        _classCallCheck(this, ExamFormPaperChooser);

	        var _this = _possibleConstructorReturn(this, (ExamFormPaperChooser.__proto__ || Object.getPrototypeOf(ExamFormPaperChooser)).call(this, props));

	        _this.state = _extends({
	            to: "0/menu/papers"
	        }, props);
	        return _this;
	    }

	    _createClass(ExamFormPaperChooser, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _state = this.state,
	                to = _state.to,
	                choosen = _state.choosen;

	            return React.createElement(
	                'div',
	                { className: 'exam_form_paper_chooser' },
	                React.createElement(_treepathreader2.default, { view: _exam_form_paper_chooser_nav2.default, from: '0/menu/papers', to: to }),
	                typeof to === 'number' ? React.createElement(_reader2.default, { view: _exam_form_paper_chooser_browser2.default, gid: to, level: 1, choosen: choosen }) : React.createElement(_reader2.default, { view: _exam_form_paper_chooser_browser2.default, path: to, level: 1, choosen: choosen })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            this.token_goto = PubSub.subscribe("paper.goto", function (msg, gid) {
	                console.log('paper.goto', gid);
	                _this2.setState({ to: gid });
	            }); //保存数据后到新节点
	        }
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.token_goto);
	        }
	    }]);

	    return ExamFormPaperChooser;
	}(React.Component);

	ExamFormPaperChooser.propTypes = {
	    choosen: React.PropTypes.number
	};


	module.exports = ExamFormPaperChooser;

/***/ },
/* 712 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(713);

/***/ },
/* 713 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _navview = __webpack_require__(202);

	var _navview2 = _interopRequireDefault(_navview);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(714);

	var tree = __webpack_require__(71)('_api');
	var tool = __webpack_require__(193)(tree);
	var util = __webpack_require__(379);


	function name(node) {
	    var d = node._data || {};
	    return d.title || d.data && (d.data.name || d.data.question) || lid2name(node._name) || node._name || "noname";
	}

	function lid2name(lid) {
	    var names = { "menu": "主页", "banks": "题库", "papers": "试卷", "exams": "考试", "teachers": "教师", "classes": "班级", "rooms": "考场" };
	    return names[lid];
	}

	var ExamFormPaperChooserNav = function (_React$Component) {
	    _inherits(ExamFormPaperChooserNav, _React$Component);

	    function ExamFormPaperChooserNav(props) {
	        _classCallCheck(this, ExamFormPaperChooserNav);

	        var _this = _possibleConstructorReturn(this, (ExamFormPaperChooserNav.__proto__ || Object.getPrototypeOf(ExamFormPaperChooserNav)).call(this, props));

	        _this.state = {
	            nodes: props.nodes
	        };
	        return _this;
	    }

	    _createClass(ExamFormPaperChooserNav, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var items = this.state.nodes.map(function (node) {
	                return { title: name(node), onClick: function onClick() {
	                        return _this2.onClick(node);
	                    }, key: node._id };
	            });
	            return React.createElement(_navview2.default, { items: items });
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(node) {
	            console.log('nav onClick', node._id);
	            PubSub.publish('paper.goto', node._id);
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
	            this.setState({ nodes: nextProps.nodes });
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

	    return ExamFormPaperChooserNav;
	}(React.Component);

	module.exports = ExamFormPaperChooserNav;

/***/ },
/* 714 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 715 */,
/* 716 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(717);

/***/ },
/* 717 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(384);

	var _reactBootstrap = __webpack_require__(204);

	var _classnames = __webpack_require__(217);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(718);

	var ExamFormPaperChooserBrowser = function (_React$Component) {
	    _inherits(ExamFormPaperChooserBrowser, _React$Component);

	    function ExamFormPaperChooserBrowser(props) {
	        _classCallCheck(this, ExamFormPaperChooserBrowser);

	        var _this = _possibleConstructorReturn(this, (ExamFormPaperChooserBrowser.__proto__ || Object.getPrototypeOf(ExamFormPaperChooserBrowser)).call(this, props));

	        _this.state = _extends({}, props);
	        return _this;
	    }

	    _createClass(ExamFormPaperChooserBrowser, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var me = this;
	            var node = this.state.node;

	            var nodes = node._children;
	            return React.createElement(
	                'div',
	                { className: 'cells' },
	                nodes.map(function (node) {
	                    return _this2.wrapNode(node);
	                })
	            );
	        }
	    }, {
	        key: 'wrapNode',
	        value: function wrapNode(node) {
	            var _this3 = this;

	            var v = this.props.v;

	            if (node._data.type == 'ks1/paper/folder') {
	                return React.createElement(
	                    'div',
	                    { className: 'cell', key: node._id, onClick: function onClick() {
	                            return _this3.choosePaperFolder(node);
	                        } },
	                    (0, _common.icon)(node),
	                    React.createElement(
	                        'div',
	                        null,
	                        (0, _common.name)(node)
	                    )
	                );
	            } else {
	                return React.createElement(
	                    'div',
	                    { className: (0, _classnames2.default)('cell', { selected: this.isChoosen(node) }), key: node._id, onClick: function onClick() {
	                            return _this3.choosePaper(node);
	                        } },
	                    (0, _common.icon)(node),
	                    this.isChoosen(node) ? React.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { float: "right" } }) : "",
	                    React.createElement(
	                        'div',
	                        null,
	                        (0, _common.name)(node)
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'isChoosen',
	        value: function isChoosen(node) {
	            var choosen = this.state.choosen;

	            return choosen === node._id;
	        }
	    }, {
	        key: 'choosePaper',
	        value: function choosePaper(node) {
	            PubSub.publish('paper.choose', node);
	            console.log('paper.choose', node);
	        }
	    }, {
	        key: 'choosePaperFolder',
	        value: function choosePaperFolder(node) {
	            PubSub.publish('paper.goto', node._id);
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

	    return ExamFormPaperChooserBrowser;
	}(React.Component);

	module.exports = ExamFormPaperChooserBrowser;

/***/ },
/* 718 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 719 */,
/* 720 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 721 */,
/* 722 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(723);

/***/ },
/* 723 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _exam_form_room_chooser_browser = __webpack_require__(724);

	var _exam_form_room_chooser_browser2 = _interopRequireDefault(_exam_form_room_chooser_browser);

	var _rest_reader = __webpack_require__(515);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(728);

	var ExamFormRoomChooser = function (_React$Component) {
	    _inherits(ExamFormRoomChooser, _React$Component);

	    function ExamFormRoomChooser(props) {
	        _classCallCheck(this, ExamFormRoomChooser);

	        var _this = _possibleConstructorReturn(this, (ExamFormRoomChooser.__proto__ || Object.getPrototypeOf(ExamFormRoomChooser)).call(this, props));

	        _this.state = _extends({}, props);
	        return _this;
	    }

	    _createClass(ExamFormRoomChooser, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var choosen = this.state.choosen;

	            return React.createElement(_rest_reader2.default, { view: _exam_form_room_chooser_browser2.default, url: '/api/room',
	                choosen: choosen });
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

	    return ExamFormRoomChooser;
	}(React.Component);

	ExamFormRoomChooser.propTypes = {
	    choosen: React.PropTypes.string
	};


	module.exports = ExamFormRoomChooser;

/***/ },
/* 724 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(725);

/***/ },
/* 725 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(217);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactBootstrap = __webpack_require__(204);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(726);
	var common = __webpack_require__(384);

	var ExamFormRoomChooserBrowser = function (_React$Component) {
	    _inherits(ExamFormRoomChooserBrowser, _React$Component);

	    function ExamFormRoomChooserBrowser(props) {
	        _classCallCheck(this, ExamFormRoomChooserBrowser);

	        var _this = _possibleConstructorReturn(this, (ExamFormRoomChooserBrowser.__proto__ || Object.getPrototypeOf(ExamFormRoomChooserBrowser)).call(this, props));

	        _this.state = _extends({}, props);
	        return _this;
	    }

	    _createClass(ExamFormRoomChooserBrowser, [{
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
	                            { className: (0, _classnames2.default)('cell', { selected: _this2.isChoosen(d) }), key: d._id, onClick: function onClick() {
	                                    return _this2.chooseRoom(d);
	                                } },
	                            common.icon("ks1/room"),
	                            _this2.isChoosen(d) ? React.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { float: "right" } }) : "",
	                            React.createElement(
	                                'div',
	                                null,
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
	        key: 'chooseRoom',
	        value: function chooseRoom(data) {
	            PubSub.publish('room.choose', data);
	            console.log('room.choose', data);
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

	    return ExamFormRoomChooserBrowser;
	}(React.Component);

	module.exports = ExamFormRoomChooserBrowser;

/***/ },
/* 726 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 727 */,
/* 728 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 729 */,
/* 730 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(731);

/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _moment = __webpack_require__(391);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(732);

	var ExamFormTimeChooser = function (_React$Component) {
	    _inherits(ExamFormTimeChooser, _React$Component);

	    function ExamFormTimeChooser(props) {
	        _classCallCheck(this, ExamFormTimeChooser);

	        var _this = _possibleConstructorReturn(this, (ExamFormTimeChooser.__proto__ || Object.getPrototypeOf(ExamFormTimeChooser)).call(this, props));

	        _this.state = _extends({}, props);
	        //保存默认值
	        props.cbSetStart(props.start);
	        props.cbSetEnd(props.end);
	        props.cbSetDuration(props.duration);
	        return _this;
	    }

	    _createClass(ExamFormTimeChooser, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _state = this.state,
	                start = _state.start,
	                end = _state.end,
	                duration = _state.duration;

	            return React.createElement(
	                'form',
	                null,
	                React.createElement(
	                    _reactBootstrap.FormGroup,
	                    null,
	                    React.createElement(
	                        _reactBootstrap.ControlLabel,
	                        null,
	                        '\u8003\u8BD5\u65F6\u957F(\u5206\u949F)'
	                    ),
	                    React.createElement(_reactBootstrap.FormControl, { type: 'number', label: '\u8003\u8BD5\u65F6\u957F(\u5206\u949F)', min: '10', max: '240', step: '10', placeholder: '\u8003\u8BD5\u65F6\u957F', value: duration, onChange: this.changeDuration.bind(this) })
	                ),
	                React.createElement(
	                    _reactBootstrap.FormGroup,
	                    null,
	                    React.createElement(
	                        _reactBootstrap.ControlLabel,
	                        null,
	                        '\u8003\u8BD5\u5F00\u653E\u65F6\u95F4'
	                    ),
	                    React.createElement(_reactBootstrap.FormControl, { type: 'datetime-local', label: '\u8003\u8BD5\u5F00\u653E\u65F6\u95F4', placeholder: '\u8003\u8BD5\u5F00\u653E\u65F6\u95F4', value: start, onChange: this.changeStart.bind(this) })
	                ),
	                React.createElement(
	                    _reactBootstrap.FormGroup,
	                    null,
	                    React.createElement(
	                        _reactBootstrap.ControlLabel,
	                        null,
	                        '\u8003\u8BD5\u5173\u95ED\u65F6\u95F4'
	                    ),
	                    React.createElement(_reactBootstrap.FormControl, { type: 'datetime-local', label: '\u8003\u8BD5\u5173\u95ED\u65F6\u95F4', placeholder: '\u8003\u8BD5\u5173\u95ED\u65F6\u95F4', value: end, onChange: this.changeEnd.bind(this) })
	                )
	            );
	        }
	    }, {
	        key: 'changeStart',
	        value: function changeStart(e) {
	            var start = e.target.value;
	            this.props.cbSetStart(start);
	        }
	    }, {
	        key: 'changeEnd',
	        value: function changeEnd(e) {
	            var end = e.target.value;
	            this.props.cbSetEnd(end);
	        }
	    }, {
	        key: 'changeDuration',
	        value: function changeDuration(e) {
	            var duration = Number(e.target.value);
	            this.props.cbSetDuration(duration);
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

	    return ExamFormTimeChooser;
	}(React.Component);

	ExamFormTimeChooser.propTypes = {
	    start: React.PropTypes.string.isRequired,
	    end: React.PropTypes.string.isRequired,
	    duration: React.PropTypes.number
	};
	ExamFormTimeChooser.defaultProps = {
	    start: (0, _moment2.default)().format('YYYY-MM-DDTHH:mm:ss'),
	    end: (0, _moment2.default)().add(1, 'hour').format('YYYY-MM-DDTHH:mm:ss'),
	    duration: 45
	};


	module.exports = ExamFormTimeChooser;

/***/ },
/* 732 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 733 */,
/* 734 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(735);

/***/ },
/* 735 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rest_reader = __webpack_require__(515);

	var _rest_reader2 = _interopRequireDefault(_rest_reader);

	var _reactBootstrap = __webpack_require__(204);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(736);


	var goto = function goto(url) {
	    location.href = '#' + url;
	};

	var ScoreRow = function ScoreRow(props) {
	    var a = props.answersheet;
	    return React.createElement(
	        'tr',
	        { onClick: function onClick() {
	                return goto("/answersheet/" + a._id);
	            } },
	        React.createElement(
	            'td',
	            null,
	            a.studentName
	        ),
	        React.createElement(
	            'td',
	            null,
	            a.studentID
	        ),
	        React.createElement(
	            'td',
	            null,
	            a.totalScore
	        )
	    );
	};

	var ScoreView = function ScoreView(props) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            _reactBootstrap.Table,
	            { striped: true, bordered: true, condensed: true, hover: true },
	            React.createElement(
	                'thead',
	                null,
	                React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                        'th',
	                        null,
	                        '\u59D3\u540D'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        '\u5B66\u53F7'
	                    ),
	                    React.createElement(
	                        'th',
	                        null,
	                        '\u6210\u7EE9'
	                    )
	                )
	            ),
	            React.createElement(
	                'tbody',
	                null,
	                props.data.map(function (answersheet) {
	                    return React.createElement(ScoreRow, { key: answersheet._id, answersheet: answersheet });
	                })
	            )
	        ),
	        React.createElement(
	            _reactBootstrap.Button,
	            { onClick: function onClick() {
	                    return saveScores(props.data);
	                } },
	            '\u5BFC\u51FA'
	        )
	    );
	};

	function saveScores(answersheets) {
	    var title = "姓名,学号,成绩\r\n";
	    var scores = answersheets.map(function (a) {
	        return a.studentName + "," + a.studentID + "," + a.totalScore;
	    });
	    var content = title + scores.join("\r\n");
	    console.log(scores, content);
	    var name = "成绩.csv";
	    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
	    saveAs(blob, name);
	}

	var ExamFormScores = function (_React$Component) {
	    _inherits(ExamFormScores, _React$Component);

	    function ExamFormScores(props) {
	        _classCallCheck(this, ExamFormScores);

	        var _this = _possibleConstructorReturn(this, (ExamFormScores.__proto__ || Object.getPrototypeOf(ExamFormScores)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ExamFormScores, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var examID = this.props.examID;

	            return React.createElement(_rest_reader2.default, { view: ScoreView, url: "/answersheet/" + examID });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return ExamFormScores;
	}(React.Component);

	module.exports = ExamFormScores;

/***/ },
/* 736 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 737 */,
/* 738 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 739 */,
/* 740 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 741 */,
/* 742 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(743);

/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(744);

	var userManager = __webpack_require__(675);

	var schema = {
	    title: "教师",
	    type: "object",
	    required: ["name", "password"],
	    properties: {
	        name: { type: "string", title: "登陆名" },
	        password: { type: "string", title: "密码" },
	        isAdmin: { type: "boolean", title: "管理员?", default: false }
	    }
	};
	var uiSchema = {
	    password: {
	        "ui:widget": "password"
	    }
	};

	var goto = function goto(url) {
	    location.href = '#' + url;
	};
	var teacherForm = function teacherForm(props) {
	    return React.createElement(
	        'div',
	        { className: 'pad' },
	        React.createElement(
	            _reactJsonschemaForm2.default,
	            { schema: schema, uiSchema: uiSchema,
	                onSubmit: function onSubmit(obj) {
	                    return props.save(obj.formData).then(function (_) {
	                        return goto('/teachers');
	                    });
	                } },
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-success' },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	var TeacherCreater = function (_React$Component) {
	    _inherits(TeacherCreater, _React$Component);

	    function TeacherCreater(props) {
	        _classCallCheck(this, TeacherCreater);

	        var _this = _possibleConstructorReturn(this, (TeacherCreater.__proto__ || Object.getPrototypeOf(TeacherCreater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TeacherCreater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var user = userManager.getUser();
	            var isAdmin = user.isAdmin;
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/teachers' }),
	                isAdmin ? React.createElement(_rest_writer2.default, { url: '/api/teacher', view: teacherForm }) : React.createElement(
	                    'h3',
	                    null,
	                    '\u53EA\u6709\u7BA1\u7406\u5458\u53EF\u4EE5\u6DFB\u52A0\u6559\u5E08'
	                )
	            );
	        }
	    }]);

	    return TeacherCreater;
	}(React.Component);

	module.exports = TeacherCreater;

/***/ },
/* 744 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 745 */,
/* 746 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(747);

/***/ },
/* 747 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(748);

	var schema = {
	    title: "班级",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "班级名称" },
	        students: {
	            title: "学生",
	            type: "array",
	            items: {
	                type: "object",
	                required: ["name", "id", "card"],
	                properties: {
	                    name: { type: "string", title: "姓名" },
	                    id: { type: "string", title: "学号" },
	                    card: { type: "string", title: "卡号" }
	                }
	            }
	        }
	    }
	};
	var goto = function goto(url) {
	    location.href = '#' + url;
	};
	var ClassForm = function ClassForm(props) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/classes' }),
	        React.createElement(
	            'div',
	            { className: 'pad' },
	            React.createElement(
	                _reactJsonschemaForm2.default,
	                { schema: schema,
	                    formData: props.data,
	                    onSubmit: function onSubmit(obj) {
	                        return props.update(obj.formData).then(function (_) {
	                            return goto('/classes');
	                        });
	                    } },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-success' },
	                        '\u4FDD\u5B58'
	                    ),
	                    React.createElement(
	                        'button',
	                        { className: 'btn btn-danger', onClick: function onClick(e) {
	                                e.preventDefault(); //不知为何submit会被调用，人为阻止
	                                var sure = confirm("确定要删除吗?");
	                                if (!sure) {
	                                    return;
	                                }
	                                props.remove().then(function (_) {
	                                    return goto('/classes');
	                                });
	                            } },
	                        '\u5220\u9664'
	                    )
	                )
	            )
	        )
	    );
	};

	var ClassUpdater = function (_React$Component) {
	    _inherits(ClassUpdater, _React$Component);

	    function ClassUpdater(props) {
	        _classCallCheck(this, ClassUpdater);

	        var _this = _possibleConstructorReturn(this, (ClassUpdater.__proto__ || Object.getPrototypeOf(ClassUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ClassUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var id = this.props.params.id;
	            console.log('id', id);
	            return React.createElement(
	                'div',
	                { className: 'class_updater' },
	                React.createElement(_rest_writer2.default, { url: '/api/class', id: id, view: ClassForm })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return ClassUpdater;
	}(React.Component);

	module.exports = ClassUpdater;

/***/ },
/* 748 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 749 */,
/* 750 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(751);

/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(752);

	var schema = {
	    title: "考场",
	    type: "object",
	    required: ["name"],
	    properties: {
	        name: { type: "string", title: "考场名称" },
	        desks: {
	            title: "桌位",
	            type: "array",
	            items: {
	                type: "object",
	                required: ["readerID", "browserIP"],
	                properties: {
	                    readerID: { type: "string", title: "读卡器编号" },
	                    browserIP: { type: "string", title: "浏览器IP" }
	                }
	            }
	        }
	    }
	};
	var goto = function goto(url) {
	    location.href = '#' + url;
	};
	var RoomForm = function RoomForm(props) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/rooms' }),
	        React.createElement(
	            'div',
	            { className: 'pad' },
	            React.createElement(
	                _reactJsonschemaForm2.default,
	                { schema: schema,
	                    formData: props.data,
	                    onSubmit: function onSubmit(obj) {
	                        return props.update(obj.formData).then(function (_) {
	                            return goto('/rooms');
	                        });
	                    } },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-success' },
	                        '\u4FDD\u5B58'
	                    ),
	                    React.createElement(
	                        'button',
	                        { className: 'btn btn-danger', onClick: function onClick(e) {
	                                e.preventDefault(); //不知为何submit会被调用，人为阻止
	                                var sure = confirm("确定要删除吗?");
	                                if (!sure) {
	                                    return;
	                                }
	                                props.remove().then(function (_) {
	                                    return goto('/rooms');
	                                });
	                            } },
	                        '\u5220\u9664'
	                    )
	                )
	            )
	        )
	    );
	};

	var RoomUpdater = function (_React$Component) {
	    _inherits(RoomUpdater, _React$Component);

	    function RoomUpdater(props) {
	        _classCallCheck(this, RoomUpdater);

	        var _this = _possibleConstructorReturn(this, (RoomUpdater.__proto__ || Object.getPrototypeOf(RoomUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RoomUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var id = this.props.params.id;
	            console.log('id', id);
	            return React.createElement(
	                'div',
	                { className: 'room_updater' },
	                React.createElement(_rest_writer2.default, { url: '/api/room', id: id, view: RoomForm })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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

	    return RoomUpdater;
	}(React.Component);

	module.exports = RoomUpdater;

/***/ },
/* 752 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 753 */,
/* 754 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(755);

/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _exam_form = __webpack_require__(704);

	var _exam_form2 = _interopRequireDefault(_exam_form);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(756);

	var ExamUpdater = function (_React$Component) {
	    _inherits(ExamUpdater, _React$Component);

	    function ExamUpdater(props) {
	        _classCallCheck(this, ExamUpdater);

	        var _this = _possibleConstructorReturn(this, (ExamUpdater.__proto__ || Object.getPrototypeOf(ExamUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ExamUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var id = this.props.params.id;
	            return React.createElement(
	                'div',
	                { className: 'exam_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/exams' }),
	                React.createElement(_rest_writer2.default, { url: '/api/exam', id: id, view: _exam_form2.default, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.tokenUpdate = PubSub.subscribe("updated", function (msg, data) {
	                location.href = "#/exams";
	            }); //更新数据后到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, data) {
	                location.href = "#/exams";
	            }); //删除数据后到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.tokenUpdate);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }]);

	    return ExamUpdater;
	}(React.Component);

	module.exports = ExamUpdater;

/***/ },
/* 756 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 757 */,
/* 758 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(759);

/***/ },
/* 759 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _reactJsonschemaForm = __webpack_require__(539);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(760);

	var userManager = __webpack_require__(675);

	var schema = {
	    title: "教师",
	    type: "object",
	    required: ["name", "password"],
	    properties: {
	        name: { type: "string", title: "登陆名" },
	        password: { type: "string", title: "密码" },
	        isAdmin: { type: "boolean", title: "管理员?", default: false }
	    }
	};
	var uiSchema = {
	    password: {
	        "ui:widget": "password"
	    }
	};

	var goto = function goto(url) {
	    location.href = '#' + url;
	};
	var teacherForm = function teacherForm(props) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/teachers' }),
	        React.createElement(
	            'div',
	            { className: 'pad' },
	            React.createElement(
	                _reactJsonschemaForm2.default,
	                { schema: schema, uiSchema: uiSchema,
	                    formData: props.data,
	                    onSubmit: function onSubmit(obj) {
	                        return props.update(obj.formData).then(function (_) {
	                            return goto('/teachers');
	                        });
	                    } },
	                React.createElement(
	                    'div',
	                    { className: 'btn-toolbar' },
	                    React.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-success' },
	                        '\u4FDD\u5B58'
	                    ),
	                    React.createElement(
	                        'button',
	                        { className: 'btn btn-danger', onClick: function onClick(e) {
	                                e.preventDefault(); //不知为何submit会被调用，人为阻止
	                                props.remove().then(function (_) {
	                                    return goto('/teachers');
	                                });
	                            } },
	                        '\u5220\u9664'
	                    )
	                )
	            )
	        )
	    );
	};

	var TeacherUpdater = function (_React$Component) {
	    _inherits(TeacherUpdater, _React$Component);

	    function TeacherUpdater(props) {
	        _classCallCheck(this, TeacherUpdater);

	        var _this = _possibleConstructorReturn(this, (TeacherUpdater.__proto__ || Object.getPrototypeOf(TeacherUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(TeacherUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var id = this.props.params.id;
	            console.log('id', id);
	            var user = userManager.getUser();
	            var isAdmin = user.isAdmin;
	            return React.createElement(
	                'div',
	                null,
	                isAdmin ? React.createElement(_rest_writer2.default, { url: '/api/teacher', id: id, view: teacherForm }) : React.createElement(
	                    'h3',
	                    null,
	                    '\u53EA\u6709\u7BA1\u7406\u5458\u53EF\u4EE5\u4FEE\u6539\u6559\u5E08'
	                )
	            );
	        }
	    }]);

	    return TeacherUpdater;
	}(React.Component);

	module.exports = TeacherUpdater;

/***/ },
/* 760 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 761 */,
/* 762 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(763);

/***/ },
/* 763 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _treepathreader = __webpack_require__(501);

	var _treepathreader2 = _interopRequireDefault(_treepathreader);

	var _nav = __webpack_require__(200);

	var _nav2 = _interopRequireDefault(_nav);

	var _answersheet_form = __webpack_require__(764);

	var _answersheet_form2 = _interopRequireDefault(_answersheet_form);

	var _rest_writer = __webpack_require__(692);

	var _rest_writer2 = _interopRequireDefault(_rest_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(768);

	var AnswersheetUpdater = function (_React$Component) {
	    _inherits(AnswersheetUpdater, _React$Component);

	    function AnswersheetUpdater(props) {
	        _classCallCheck(this, AnswersheetUpdater);

	        var _this = _possibleConstructorReturn(this, (AnswersheetUpdater.__proto__ || Object.getPrototypeOf(AnswersheetUpdater)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(AnswersheetUpdater, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var id = this.props.params.id;
	            return React.createElement(
	                'div',
	                { className: 'answersheet_updater' },
	                React.createElement(_treepathreader2.default, { view: _nav2.default, from: '0/menu', to: '0/menu/exams' }),
	                React.createElement(_rest_writer2.default, { url: '/api/answersheet', id: id, view: _answersheet_form2.default, publish: { update: "updated", remove: "removed" } })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.tokenUpdate = PubSub.subscribe("updated", function (msg, data) {
	                history.go(-1);
	            }); //更新数据后到父节点
	            this.tokenRemove = PubSub.subscribe("removed", function (msg, data) {
	                history.go(-1);
	            }); //更新数据后到父节点
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
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
	        value: function componentWillUnmount() {
	            PubSub.unsubscribe(this.tokenUpdate);
	            PubSub.unsubscribe(this.tokenRemove);
	        }
	    }]);

	    return AnswersheetUpdater;
	}(React.Component);

	module.exports = AnswersheetUpdater;

/***/ },
/* 764 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(765);

/***/ },
/* 765 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(204);

	var _reader = __webpack_require__(385);

	var _reader2 = _interopRequireDefault(_reader);

	var _imageviewer = __webpack_require__(387);

	var _imageviewer2 = _interopRequireDefault(_imageviewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(766);
	var agent = __webpack_require__(517)(__webpack_require__(518), Promise);
	var tree = __webpack_require__(71)('_api');

	var _ = __webpack_require__(79);


	function dataURItoBlob(dataURI) {
	  // convert base64/URLEncoded data component to raw binary data held in a string
	  var byteString;
	  if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);

	  // separate out the mime component
	  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	  // write the bytes of the string to a typed array
	  var ia = new Uint8Array(byteString.length);
	  for (var i = 0; i < byteString.length; i++) {
	    ia[i] = byteString.charCodeAt(i);
	  }

	  // return new Blob([ia], {type:mimeString});
	  return ia;
	}

	window.imgs = {}; //暴露给全局
	window.imgsSize = {}; //暴露给全局
	function getImgBlob(obj) {
	  //收集图片到imgs中
	  var imgID = obj.gid;
	  var img = document.getElementById(imgID),
	      canvas = document.createElement('canvas'),
	      ctx = canvas.getContext('2d');
	  var imgBlob;

	  canvas.width = img.width;
	  canvas.height = img.height;
	  ctx.drawImage(img, 0, 0, img.width, img.height);
	  var dataURL = canvas.toDataURL();
	  imgBlob = dataURItoBlob(dataURL);
	  imgs[imgID] = imgBlob;
	  imgsSize[imgID] = [obj.w, obj.h];
	  canvas = null;
	  console.log(imgs, imgsSize);
	}

	var QS = function QS(props) {
	  return React.createElement(
	    'div',
	    { style: { paddingTop: "20px" } },
	    React.createElement(
	      _reactBootstrap.Col,
	      { xs: 11 },
	      React.createElement(Q, props),
	      React.createElement('textarea', { className: 'form-control', rows: '3', placeholder: '\u6279\u6CE8',
	        defaultValue: props.comment || '',
	        onChange: function onChange(e) {
	          PubSub.publish('comment.change', { gid: props.node._id, comment: e.target.value });
	        }
	      })
	    ),
	    React.createElement(
	      _reactBootstrap.Col,
	      { xs: 1 },
	      React.createElement('input', { type: 'number', min: '0', max: '100', step: '1',
	        placeholder: '\u5F97\u5206', value: props.score,
	        onChange: function onChange(e) {
	          PubSub.publish('score.change', { gid: props.node._id, score: Number(e.target.value) });
	        },
	        style: { padding: "8px", width: "50px" } })
	    )
	  );
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
	//阅卷
	var Qchoice = function Qchoice(_ref) {
	  var node = _ref.node,
	      answer = _ref.answer;

	  var data = node._data.data;
	  var correct = isCorrectChoice(data, answer);
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { header: "[选择题] " + data.question, collapsible: true, defaultExpanded: true,
	      bsStyle: correct ? "success" : "danger" },
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 }),
	    React.createElement(
	      _reactBootstrap.ListGroup,
	      { fill: true },
	      data.answers.map(function (ans, idx) {
	        return React.createElement(
	          _reactBootstrap.ListGroupItem,
	          { key: idx },
	          React.createElement(
	            'div',
	            null,
	            "ABCDEFGHI"[idx] + ". " + ans.answer + "  " + (ans.ok ? " ✓ " : " "),
	            answer === idx ? React.createElement(CheckSign, null) : null
	          )
	        );
	      })
	    )
	  );
	};
	var CheckSign = function CheckSign(props) {
	  return React.createElement(
	    'span',
	    { style: { fontSize: "1.4em", color: "SteelBlue" } },
	    '\u2713'
	  );
	};
	var CrossSign = function CrossSign(props) {
	  return React.createElement(
	    'span',
	    { style: { fontSize: "1.4em", color: "SteelBlue" } },
	    '\u2717'
	  );
	};
	//阅卷
	var Qqa = function Qqa(_ref2) {
	  var node = _ref2.node,
	      answer = _ref2.answer;

	  var data = node._data.data;
	  var ans = answer || "";
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { header: "[问答题] " + data.question, collapsible: true, defaultExpanded: true },
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 }),
	    React.createElement(
	      'div',
	      { style: { fontSize: "1.4em", color: "SteelBlue" } },
	      ans
	    )
	  );
	};

	//阅卷
	var Qtf = function Qtf(_ref3) {
	  var node = _ref3.node,
	      answer = _ref3.answer;

	  var data = node._data.data;
	  var correct = isCorrectTf(data, answer);
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { collapsible: true, defaultExpanded: true,
	      header: "[判断题] " + data.question + " " + (data.ok ? " ( ✓ )" : " ( ✗ )"), bsStyle: correct ? "success" : "danger" },
	    React.createElement(_reader2.default, { view: _imageviewer2.default, gid: node._id, level: 1 }),
	    answer === undefined ? null : answer ? React.createElement(CheckSign, null) : React.createElement(CrossSign, null)
	  );
	};

	//阅卷
	var Qrevise = function Qrevise(_ref4) {
	  var node = _ref4.node,
	      answer = _ref4.answer;

	  var data = node._data.data;
	  var ans = answer || "";
	  return React.createElement(
	    _reactBootstrap.Panel,
	    { header: "[问答题] " + data.question, collapsible: true, defaultExpanded: true },
	    React.createElement(
	      'h4',
	      null,
	      '\u6539\u9519\u5185\u5BB9'
	    ),
	    React.createElement(
	      'pre',
	      { style: { color: "SteelBlue" } },
	      ans
	    ),
	    React.createElement(
	      'h4',
	      null,
	      '\u53C2\u8003\u7B54\u6848'
	    ),
	    React.createElement(
	      'pre',
	      null,
	      data.answer
	    )
	  );
	};

	function isCorrectChoice(data, answer) {
	  data.answers = data.answers || [];
	  for (var idx = 0; idx < data.answers.length; idx++) {
	    var ans = data.answers[idx];
	    if (ans.ok && idx !== answer || !ans.ok && idx === answer) return false;
	  }
	  return true;
	}

	function isCorrectTf(data, answer) {
	  return data.ok == answer;
	}

	function convert2txt(exam, questions, scores, comments, answers, totalScore) {
	  var contents = [];
	  contents.push(exam.name);
	  contents.push("总分：" + totalScore);
	  questions.map(function (question) {
	    var qid = question._id;
	    var score = scores[qid] || 0;
	    var comment = comments[qid] || "";
	    var answer = answers[qid];
	    var qtxt = QTxt(question, answer, comment, score);
	    contents.push(qtxt + '\r\n得分：' + score + '\r\n批注：' + comment);
	  });
	  return contents.join("\r\n\r\n");
	}

	function QTxt(qnode, answer, comment, score) {
	  // console.log('QTxt',qnode);

	  var type = qnode._data.type;

	  switch (type) {
	    case "ks1/choice":
	      return QTxtChoice(qnode._data, answer, comment, score);
	    case "ks1/tf":
	      return QTxtTf(qnode._data, answer, comment, score);
	    case "ks1/qa":
	      return QTxtQa(qnode._data, answer, comment, score);
	    case "ks1/revise":
	      return QTxtRevise(qnode._data, answer, comment, score);
	  }
	  return "";
	}

	function QTxtChoice(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = [];
	  contents.push("[选择题] " + data.question);
	  var correctAnswer = "";
	  for (var idx = 0; idx < data.answers.length; idx++) {
	    var ans = data.answers[idx];
	    console.log(ans.answer);
	    var line = "ABCDEFGHI"[idx] + ". " + ans.answer + (idx === answer ? " (✓)" : "");
	    contents.push(line);
	    if (ans.ok) {
	      correctAnswer = correctAnswer + "ABCDEFGHI"[idx];
	    }
	  }
	  contents.push('正确答案：' + correctAnswer);
	  return contents.join("\r\n");
	}

	function QTxtTf(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = [];
	  contents.push("[判断题] " + data.question + (answer ? " ( ✓ )" : " ( ✗ )"));
	  contents.push('正确答案：' + (data.ok ? " ( ✓ )" : " ( ✗ )"));
	  return contents.join("\r\n");
	}

	function QTxtQa(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = [];
	  contents.push("[问答题] " + data.question);
	  contents.push(answer);
	  contents.push('参考答案：' + data.answer);
	  return contents;
	}

	function QTxtRevise(qdata, answer, comment, score) {
	  return "";
	}

	function convert2json(exam, questions, scores, comments, answers, totalScore) {
	  var paper = {};
	  paper.name = exam.name;
	  paper.totalScore = totalScore;
	  var group_questions = _.groupBy(nodes, function (obj) {
	    return obj._data.type;
	  });
	  _.keys(group_questions).map(function (qtype) {
	    console.log('convert2json', qtype);
	    paper[qtype.replace('/', '_')] = group_questions[qtype].map(function (qnode) {
	      return QJson(qnode, questions, scores, comments, answers);
	    });
	  }); //模板中不能出现/所以替换成_
	  return paper;
	}

	function QJson(qnode, questions, scores, comments, answers) {
	  var qid = qnode._id;
	  var score = scores[qid] || 0;
	  var comment = comments[qid] || "";
	  var answer = answers[qid];
	  var type = qnode._data.type;

	  var qjson = {};
	  switch (type) {
	    case "ks1/choice":
	      {
	        qjson = QJsonChoice(qnode._data, answer, comment, score);break;
	      }
	    case "ks1/tf":
	      {
	        qjson = QJsonTf(qnode._data, answer, comment, score);break;
	      }
	    case "ks1/qa":
	      {
	        qjson = QJsonQa(qnode._data, answer, comment, score);break;
	      }
	    case "ks1/revise":
	      {
	        qjson = QJsonRevise(qnode._data, answer, comment, score);break;
	      }
	  }
	  if (qnode._link.children && qnode._link.children.length > 0) {
	    qjson.imgs = qnode._link.children.map(function (gid) {
	      return { image: gid };
	    });
	  }
	  return qjson;
	}

	function QJsonChoice(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = {};
	  contents.question = "[选择题] " + data.question;
	  contents.answers = [];
	  var correctAnswer = "",
	      studentAnswer = "";
	  data.answers = data.answers || [];
	  for (var idx = 0; idx < data.answers.length; idx++) {
	    var ans = data.answers[idx];
	    var line = "ABCDEFGHI"[idx] + ". " + ans.answer;
	    contents.answers[idx] = { "choice": line };
	    if (idx === answer) {
	      studentAnswer = studentAnswer + "ABCDEFGHI"[idx];
	    }
	    if (ans.ok) {
	      correctAnswer = correctAnswer + "ABCDEFGHI"[idx];
	    }
	  }
	  contents.studentAnswer = studentAnswer;
	  contents.correctAnswer = correctAnswer;
	  contents.comment = comment;
	  contents.score = score;

	  return contents;
	}

	function QJsonTf(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = {};
	  contents.question = "[判断题] " + data.question;
	  contents.studentAnswer = answer ? " ( ✓ )" : " ( ✗ )";
	  contents.correctAnswer = data.ok ? " ( ✓ )" : " ( ✗ )";
	  contents.comment = comment;
	  contents.score = score;
	  return contents;
	}

	function QJsonQa(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = {};
	  contents.question = "[问答题] " + data.question;
	  contents.studentAnswer = answer;
	  contents.correctAnswer = data.answer;
	  contents.comment = comment;
	  contents.score = score;
	  return contents;
	}

	function QJsonRevise(qdata, answer, comment, score) {
	  var data = qdata.data;
	  var contents = {};
	  contents.question = "[改错题] " + data.question;
	  contents.studentAnswer = answer;
	  contents.correctAnswer = data.answer;
	  contents.comment = comment;
	  contents.score = score;
	  return contents;
	}

	var AnswersheetForm = function (_React$Component) {
	  _inherits(AnswersheetForm, _React$Component);

	  function AnswersheetForm(props) {
	    _classCallCheck(this, AnswersheetForm);

	    var _this = _possibleConstructorReturn(this, (AnswersheetForm.__proto__ || Object.getPrototypeOf(AnswersheetForm)).call(this, props));

	    var answersheet = props.data;
	    _this.state = {
	      scores: answersheet.scores || {},
	      totalScore: answersheet.totalScore || 0,
	      comments: answersheet.comments || {}
	    };
	    return _this;
	  }
	  //收集图片放到this.imgs中


	  _createClass(AnswersheetForm, [{
	    key: 'collectImage',
	    value: function collectImage(questions) {
	      // var children=questions.map(qnode=> qnode._link.children )
	      // var img_gids=_.flatten(children);
	      // console.log("img_gids",img_gids);//imageviewer中图片的id与对应节点的gid相同，以便采集图片
	      // img_gids.map(imgID=>getImgBlob(imgID))
	      function mysubscriber(msg, obj) {
	        console.log(msg, obj);
	        getImgBlob(obj);
	      }
	      console.log('subscribe:img-load');
	      PubSub.subscribe('img-load', mysubscriber);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var me = this;
	      var _state = this.state,
	          exam = _state.exam,
	          student = _state.student,
	          questions = _state.questions;

	      var answersheet = this.props.data;
	      var answers = answersheet.answers;
	      var _state2 = this.state,
	          scores = _state2.scores,
	          totalScore = _state2.totalScore,
	          comments = _state2.comments;
	      //id="printButton" 导出按钮
	      //id='forPrint' 要导出的内容
	      //导出功能 参考 https://github.com/evidenceprime/html-docx-js/blob/master/test/sample.html

	      if (exam && student && questions) {
	        this.collectImage(questions);
	        return React.createElement(
	          'div',
	          { className: 'pad' },
	          React.createElement(
	            _reactBootstrap.ButtonToolbar,
	            { style: { textAlign: 'right' } },
	            React.createElement(
	              _reactBootstrap.Button,
	              { bsStyle: 'success', onClick: this.update.bind(this) },
	              '\u4FDD\u5B58'
	            ),
	            React.createElement(
	              _reactBootstrap.Button,
	              { bsStyle: 'danger', onClick: this.remove.bind(this) },
	              '\u5220\u9664'
	            ),
	            React.createElement(
	              _reactBootstrap.Button,
	              { bsStyle: 'info', id: 'printButton', onClick: this.saveDocx.bind(this) },
	              '\u5BFC\u51FA'
	            )
	          ),
	          React.createElement('div', { style: { clear: "both", paddingTop: "15px" } }),
	          React.createElement(
	            'div',
	            { id: 'forPrint' },
	            React.createElement(
	              _reactBootstrap.Panel,
	              null,
	              exam.name + '  ' + student.name + ' ' + student.id,
	              React.createElement(
	                'div',
	                { style: { float: "right" } },
	                '\u603B\u5206 ',
	                totalScore
	              )
	            ),
	            React.createElement(
	              _reactBootstrap.Grid,
	              { fluid: true },
	              _.map(questions, function (node) {
	                return React.createElement(
	                  _reactBootstrap.Row,
	                  { key: node._id, className: 'no-gutter' },
	                  React.createElement(QS, { node: node, score: scores[node._id] || 0, comment: comments[node._id] || '', answer: answers[node._id] })
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'saveDoc',
	    value: function saveDoc() {
	      var contentDocument = document.getElementById('forPrint');
	      var content = '<!DOCTYPE html>' + contentDocument.outerHTML;
	      var converted = htmlDocx.asBlob(content, { orientation: "portrait" });
	      saveAs(converted, 'exam.docx');
	    }
	  }, {
	    key: 'saveJson',
	    value: function saveJson() {
	      var _state3 = this.state,
	          exam = _state3.exam,
	          student = _state3.student,
	          questions = _state3.questions;

	      var answersheet = this.props.data;
	      var answers = answersheet.answers;
	      var _state4 = this.state,
	          scores = _state4.scores,
	          totalScore = _state4.totalScore,
	          comments = _state4.comments;

	      var name = exam._id + "_" + student.name + ".txt";
	      // console.log('saveTxt',exam);
	      // console.log('saveTxt',name);
	      // var content=convert2txt(exam,questions,scores,comments,answers,totalScore);
	      // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
	      var jcontent = convert2json(exam, questions, scores, comments, answers, totalScore);
	      var content = JSON.stringify(jcontent, null, 2);
	      var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
	      saveAs(blob, name);
	    }
	  }, {
	    key: 'saveDocx',
	    value: function saveDocx() {
	      var _state5 = this.state,
	          exam = _state5.exam,
	          student = _state5.student,
	          questions = _state5.questions;

	      var answersheet = this.props.data;
	      var answers = answersheet.answers;
	      var _state6 = this.state,
	          scores = _state6.scores,
	          totalScore = _state6.totalScore,
	          comments = _state6.comments;
	      // var name=exam._id+"_"+student.name+".txt";
	      // console.log('saveTxt',exam);
	      // console.log('saveTxt',name);
	      // var content=convert2txt(exam,questions,scores,comments,answers,totalScore);
	      // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});

	      var jcontent = convert2json(exam, questions, scores, comments, answers, totalScore);
	      // var content=JSON.stringify(jcontent,null,2);
	      // var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
	      // saveAs(blob, name);
	      var name = student.id + "_" + student.name + ".docx";
	      saveAsDocx(jcontent, name);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _state7 = this.state,
	          scores = _state7.scores,
	          totalScore = _state7.totalScore,
	          comments = _state7.comments;

	      var answersheet = this.props.data;
	      answersheet.scores = scores;
	      answersheet.totalScore = totalScore;
	      answersheet.comments = comments;
	      this.props.update(answersheet);
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var sure = confirm("确定要删除吗?");
	      if (!sure) {
	        return;
	      }
	      this.props.remove();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.fetchData();
	      this.tokenUpdate = PubSub.subscribe("score.change", function (msg, data) {
	        return _this2.changeScore(data);
	      });
	      this.tokenUpdateComment = PubSub.subscribe("comment.change", function (msg, data) {
	        return _this2.changeComment(data);
	      });
	    }
	  }, {
	    key: 'changeScore',
	    value: function changeScore(_ref5) {
	      var gid = _ref5.gid,
	          score = _ref5.score;
	      var _state8 = this.state,
	          scores = _state8.scores,
	          totalScore = _state8.totalScore;

	      scores[gid] = score;
	      totalScore = _.sum(_.values(scores));
	      this.setState({ scores: scores, totalScore: totalScore });
	    }
	  }, {
	    key: 'changeComment',
	    value: function changeComment(_ref6) {
	      var gid = _ref6.gid,
	          comment = _ref6.comment;
	      var comments = this.state.comments;

	      comments[gid] = comment;
	      this.setState({ comments: comments });
	    }
	  }, {
	    key: 'fetchData',
	    value: function fetchData() {
	      var _this3 = this;

	      var answersheet = this.props.data; //answersheet
	      var examID = answersheet.examID,
	          studentID = answersheet.studentID,
	          questions = answersheet.questions;

	      agent.get("/exam/" + examID).then(function (resp) {
	        _this3.setState({ exam: resp.body });
	      });
	      agent.get("/student/" + studentID).then(function (resp) {
	        _this3.setState({ student: resp.body });
	      });
	      tree.read_nodes(questions).then(function (nodes) {
	        _this3.setState({ questions: nodes });
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {}
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
	    value: function componentWillUnmount() {
	      PubSub.unsubscribe(this.tokenUpdate);
	      PubSub.unsubscribe(this.tokenUpdateComment);
	    }
	  }]);

	  return AnswersheetForm;
	}(React.Component);

	module.exports = AnswersheetForm;

/***/ },
/* 766 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 767 */,
/* 768 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 769 */,
/* 770 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);