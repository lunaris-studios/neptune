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
import * as Spring from "react-spring";
// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";
export var Button = {};
/**
 * This is overwritten for `AnchorButton` with a corresponding `Spring.animated("a")`
 * constant.
 */
var AniamtedButtonElement = Spring.animated("button");
Button.Element = styled(AniamtedButtonElement).attrs(function (props) { return ({
    ...props,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var AniamtedButtonText = Spring.animated("span");
Button.Text = styled(AniamtedButtonText).attrs(function (props) { return ({
    ...props,
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t/** default: don't grow to fill but allow shrinking as necessary */\n\tflex: 0 1 auto;\n"], ["\n\t/** default: don't grow to fill but allow shrinking as necessary */\n\tflex: 0 1 auto;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=button.styled.js.map