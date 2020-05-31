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
export var Icon = {};
Icon.Container = styled("div").attrs(function (props) { return ({
    ...props,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t/* ensure icons sit inline with text & isolate svg from surrounding elements */\n\t/* (vertical alignment in flow is usually off due to svg - not an issue with flex.) */\n\tdisplay: inline-block;\n\t/* respect dimensions exactly */\n\tflex: 0 0 auto;\n\t/* sit nicely with inline text */\n\tvertical-align: text-bottom;\n\n\t&:not(:empty)::before {\n\t\t/* clear font icon when there's an <svg> image */\n\t\tcontent: \"\" !important; // fallback for IE11\n\t\tcontent: unset !important;\n\t}\n"], ["\n\t/* ensure icons sit inline with text & isolate svg from surrounding elements */\n\t/* (vertical alignment in flow is usually off due to svg - not an issue with flex.) */\n\tdisplay: inline-block;\n\t/* respect dimensions exactly */\n\tflex: 0 0 auto;\n\t/* sit nicely with inline text */\n\tvertical-align: text-bottom;\n\n\t&:not(:empty)::before {\n\t\t/* clear font icon when there's an <svg> image */\n\t\tcontent: \"\" !important; // fallback for IE11\n\t\tcontent: unset !important;\n\t}\n"])));
Icon.SVG = styled("svg").attrs(function (props) { return ({
    ...props,
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t/* prevent extra vertical whitespace */\n\tdisplay: block;\n\n\t/* inherit text color unless explicit fill is set */\n\t&:not([fill]) {\n\t\tfill: currentColor;\n\t}\n"], ["\n\t/* prevent extra vertical whitespace */\n\tdisplay: block;\n\n\t/* inherit text color unless explicit fill is set */\n\t&:not([fill]) {\n\t\tfill: currentColor;\n\t}\n"])));
Icon.Title = styled("desc").attrs(function (props) { return ({
    ...props,
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=icon.styled.js.map