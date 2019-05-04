"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("./default"));
const deepmerge_1 = __importDefault(require("deepmerge"));
//默认皮肤类型
exports.ThemeCtx = react_1.default.createContext(default_1.default);
exports.ThemeProvider = (props) => {
    const theme = Object.assign({}, default_1.default, props.value);
    return (react_1.default.createElement(exports.ThemeCtx.Provider, { value: theme }, props.children));
};
//主题高阶组件
class ThemeBox extends react_1.default.Component {
    constructor() {
        super(...arguments);
        //获取当前组件主题样式
        this.getCurrentStyles = (theme) => {
            const { themeStyles, styles } = this.props;
            const currentThemedCompStyles = themeStyles(theme); //当前组件默认的主题样式  ---> Comp/style/index.tsx
            if (styles) {
                return deepmerge_1.default(currentThemedCompStyles, styles); //合并样式
            }
            return currentThemedCompStyles;
        };
    }
    render() {
        return (
        // Consumer接收一个函数作为子节点，函数接收当前Context（主题）值作为参数，并返回一个React节点;
        // theme参数为组件树中上层context的最近的Provider的  value 属性，
        // 如果context没有Provider，那么theme默认为createContext()的defaultTheme
        react_1.default.createElement(exports.ThemeCtx.Consumer, null, theme => this.props.children(this.getCurrentStyles(theme), theme)));
    }
}
ThemeBox.defaultProps = {
    themeStyles: () => { }
};
exports.ThemeBox = ThemeBox;
//# sourceMappingURL=index.js.map