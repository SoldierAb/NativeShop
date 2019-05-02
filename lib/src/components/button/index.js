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
        this.state = {
            pressIn: false
        };
    }
    render() {
        const _a = this.props, { size = 'large', type = 'default', disabled, loading, onPress } = _a, restProps = __rest(_a, ["size", "type", "disabled", "loading", "onPress"]);
        return (react_1.default.createElement(react_native_1.TouchableHighlight, Object.assign({ activeOpacity: 0.4, disabled: disabled, onPress: (e) => onPress && onPress(e), onPressIn: this.onPressIn, onPressOut: this.onPressOut }, restProps),
            react_1.default.createElement(react_native_1.View, null,
                loading ? (react_1.default.createElement(react_native_1.ActivityIndicator, { size: "small", animating: true })) : null,
                react_1.default.createElement(react_native_1.Text, null, this.props.children))));
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