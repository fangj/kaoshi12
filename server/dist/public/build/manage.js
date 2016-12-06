webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(114);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Manage = function (_React$Component) {
	  _inherits(Manage, _React$Component);

	  function Manage(props) {
	    _classCallCheck(this, Manage);

	    return _possibleConstructorReturn(this, (Manage.__proto__ || Object.getPrototypeOf(Manage)).call(this, props));
	  }

	  _createClass(Manage, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Manage'
	      );
	    }
	  }]);

	  return Manage;
	}(_react2.default.Component);

	Manage.propTypes = {
	  name: _react2.default.PropTypes.string
	};
	exports.default = Manage;


	_reactDom2.default.render(_react2.default.createElement(Manage, null), document.getElementById('App'));

	var p1 = new Promise(function (resolve, reject) {
	  setTimeout(resolve, 1000, "one");
	});

	function u() {
	  var a;
	  return regeneratorRuntime.async(function u$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return regeneratorRuntime.awrap(p1);

	        case 2:
	          a = _context.sent;

	          console.log(a);

	        case 4:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this);
	}

	u();

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 114:
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }

});