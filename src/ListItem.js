'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Component) {
    _inherits(ListItem, _Component);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var primaryText = _props.primaryText;
            var style = _props.style;
            var _props2 = this.props;
            var onTouchTap = _props2.onTouchTap;
            var leftIcon = _props2.leftIcon;


            var styles = {
                root: {
                    cursor: 'pointer',
                    transition: 'all 0.25s ease-in-out'
                },
                primaryText: {
                    lineHeight: '32px'
                }
            };

            return _react2.default.createElement(
                'div',
                {
                    style: Object.assign({}, styles.root, style),
                    onTouchTap: onTouchTap },
                leftIcon,
                _react2.default.createElement(
                    'span',
                    { style: Object.assign({}, styles.primaryText) },
                    primaryText
                )
            );
        }
    }]);

    return ListItem;
}(_react.Component);

ListItem.PropTypes = {
    primaryText: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object.isRequired,
    leftIcon: _react.PropTypes.element,
    rightIcon: _react.PropTypes.element,
    onTouchTap: _react.PropTypes.func
};

exports.default = ListItem;