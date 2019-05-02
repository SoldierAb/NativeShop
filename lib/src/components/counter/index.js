"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
exports.default = ({ name, count = 11111, onInc = (() => { }), onDec = (() => { }) }) => (React.createElement(react_native_1.View, { style: styles.root },
    React.createElement(react_native_1.Text, null,
        "Counter  ",
        name,
        ": ",
        count),
    React.createElement(react_native_1.View, { style: { marginLeft: 20 } },
        React.createElement(react_native_1.Button, { title: "+", onPress: onInc }),
        React.createElement(react_native_1.Button, { title: "-", onPress: onDec }))));
// styles
const styles = react_native_1.StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
});
//# sourceMappingURL=index.js.map