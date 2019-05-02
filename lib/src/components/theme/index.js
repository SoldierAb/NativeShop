"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("./default"));
const deepmerge_1 = __importDefault(require("deepmerge"));
exports.ThemeCtx = react_1.default.createContext(default_1.default);
class ThemeBox extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.getStyles = (theme) => {
            const { themeStyles, styles } = this.props;
            const defaultThemeStyles = themeStyles(theme);
            if (styles) {
                return deepmerge_1.default(defaultThemeStyles, styles);
            }
            return defaultThemeStyles;
        };
    }
    render() {
        return (react_1.default.createElement(exports.ThemeCtx.Consumer, null, theme => this.props.children(this.getStyles(theme), theme)));
    }
}
ThemeBox.defaultProps = {
    themeStyles: () => { }
};
exports.ThemeBox = ThemeBox;
//# sourceMappingURL=index.js.map