"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../theme");
const style_1 = __importDefault(require("./style"));
class KButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onPressIn = (...arg) => {
            this.setState({
                pressIn: true
            });
            if (this.props.onPressIn) {
                this.props.onPressIn(...arg);
            }
        };
        this.onPressOut = (...arg) => {
            this.setState({
                pressIn: false
            });
            if (this.props.onPressOut) {
                this.props.onPressOut(...arg);
            }
        };
        this.renderButton = (_styles, _theme) => {
            const _a = this.props, { size = 'large', type = 'primary', disabled, loading, onPress } = _a, restProps = __rest(_a, ["size", "type", "disabled", "loading", "onPress"]);
            const boxStyles = _styles[`wrapperStyle`], underlayColor = 'green', indicator_color = 'red', textStyle = _styles[`${type}Color`];
            return (react_1.default.createElement(react_native_1.TouchableHighlight, Object.assign({ activeOpacity: 0.4, style: boxStyles, disabled: disabled, underlayColor: underlayColor, onPress: (e) => onPress && onPress(e), onPressIn: this.onPressIn, onPressOut: this.onPressOut }, restProps),
                react_1.default.createElement(react_native_1.View, null,
                    loading ? (react_1.default.createElement(react_native_1.ActivityIndicator, { color: indicator_color, size: "small", animating: true })) : null,
                    react_1.default.createElement(react_native_1.Text, { style: textStyle }, this.props.children))));
        };
        this.state = {
            pressIn: false
        };
    }
    render() {
        const { styles } = this.props;
        return (react_1.default.createElement(theme_1.ThemeBox, { themeStyles: style_1.default, styles: styles }, (_styles, _theme) => this.renderButton(_styles, _theme)));
    }
}
KButton.defaultProps = {
    pressIn: false,
    disabled: false,
    loading: false,
    onPress: (_) => { },
    onPressIn: (_) => { },
    onPressOut: (_) => { },
};
exports.default = KButton;
//# sourceMappingURL=index.js.map