var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as Protocol from "@nucleus/protocol";
// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";
export var Divider = {};
Divider.Element = styled("div").attrs(function (props) { return ({
    margin: props.theme.spaces.TWO,
    color: props.theme.colors.BLACK_5,
    ...props,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tborder-bottom-width: 1px;\n\tborder-bottom-style: solid;\n\tborder-bottom-color: ", ";\n\t/** \n   * Since the element is empty, it will occupy minimal space and only show\n   * the appropriate border based on direction of container. \n   */\n\tborder-right-width: 1px;\n\tborder-right-style: solid;\n\tmargin: ", ";\n"], ["\n\tborder-bottom-width: 1px;\n\tborder-bottom-style: solid;\n\tborder-bottom-color: ", ";\n\t/** \n   * Since the element is empty, it will occupy minimal space and only show\n   * the appropriate border based on direction of container. \n   */\n\tborder-right-width: 1px;\n\tborder-right-style: solid;\n\tmargin: ", ";\n"])), function (props) { return props.color; }, function (props) { return Protocol.Snippets.px(props.margin); });
var templateObject_1;
//# sourceMappingURL=divider.styled.js.map