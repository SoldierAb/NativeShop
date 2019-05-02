"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const button_1 = __importDefault(require("../../components/button"));
class Home extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            disabled: false,
            loading: false
        };
        this.onPress = () => {
            react_native_1.Alert.alert('onPress ----');
        };
        this.onPressIn = () => {
            react_native_1.Alert.alert('onPressIn');
        };
        this.onPressOut = () => {
            react_native_1.Alert.alert('onPressOut');
        };
    }
    render() {
        const { disabled, loading } = this.state;
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(button_1.default, { disabled: disabled, loading: loading, onPress: this.onPress, onPressIn: this.onPressIn, onPressOut: this.onPressOut }, "\u6D4B\u8BD5\u6309\u94AE")));
    }
}
exports.default = Home;
//# sourceMappingURL=index.js.map