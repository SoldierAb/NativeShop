"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.default = (theme) => react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    primaryHighlight: {},
    warningHighlight: {},
    errorHighlight: {},
    primaryUnderlayColor: {},
    wrapperStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.border_radius_base,
        borderWidth: 1,
    },
    indicator: {
        color: theme.indicator_color
    },
    primaryColor: {
        color: theme.primary_color
    },
});
//# sourceMappingURL=index.js.map