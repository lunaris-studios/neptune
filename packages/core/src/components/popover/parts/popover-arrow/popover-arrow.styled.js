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
import * as Util from "./popover-arrow.util";
// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";
export var PopoverArrow = {};
PopoverArrow.Container = styled("div").attrs(function (props) { return ({
    ...props,
    ...(props.arrowProps ? (!isNaN(Number(props.arrowProps.style.left)) ? props.arrowProps.style : {}) : {}),
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t::before {\n\t\tborder-radius: $pt-border-radius - 1;\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttransform: rotate(45deg);\n\t}\n"], ["\n\t::before {\n\t\tborder-radius: $pt-border-radius - 1;\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttransform: rotate(45deg);\n\t}\n"])));
PopoverArrow.SVG = styled("svg").attrs(function (props) { return ({
    viewBox: "0 0 30 30",
    arrowAngle: Util.getArrowAngle(props.placement),
    ...props,
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\ttransform: ", ";\n"], ["\n\ttransform: ", ";\n"])), function (props) { return "rotate(" + Protocol.Snippets.deg(props.arrowAngle) + ")"; });
/**
 * [PopoverArrow.Path]
 */
export var PopoverArrowPathType;
(function (PopoverArrowPathType) {
    PopoverArrowPathType["ARROW"] = "ARROW";
    PopoverArrowPathType["SHADOW"] = "SHADOW";
})(PopoverArrowPathType || (PopoverArrowPathType = {}));
// TODO (sam): provide source of truth via Figma design library?
var SVG_SHADOW_PATH = "M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378" +
    "-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z";
var SVG_ARROW_PATH = "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005" +
    "c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z";
PopoverArrow.Path = styled("path").attrs(function (props) { return ({
    ...props,
    d: props.type === PopoverArrowPathType.ARROW ? SVG_ARROW_PATH : SVG_SHADOW_PATH,
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=popover-arrow.styled.js.map