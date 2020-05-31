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
export var Portal = {};
Portal.Container = styled("div").attrs(function (props) { return ({
    ...props,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), Protocol.Snippets.cover());
var templateObject_1;
//# sourceMappingURL=portal.styled.js.map