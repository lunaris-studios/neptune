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
// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";
export var Menu = {};
Menu.Container = styled("ul").attrs(function (props) { return ({
    ...props,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t/* background: $menu-background-color; */\n\t/* border-radius: $pt-border-radius; */\n\t/* color: $pt-text-color; */\n\tlist-style: none;\n\tmargin: 0;\n\t/* min-width: $menu-min-width; */\n\t/* padding: $half-grid-size; */\n\ttext-align: left;\n"], ["\n\t/* background: $menu-background-color; */\n\t/* border-radius: $pt-border-radius; */\n\t/* color: $pt-text-color; */\n\tlist-style: none;\n\tmargin: 0;\n\t/* min-width: $menu-min-width; */\n\t/* padding: $half-grid-size; */\n\ttext-align: left;\n"])));
var templateObject_1;
//# sourceMappingURL=menu.styled.js.map