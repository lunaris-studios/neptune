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
import * as Spring from "react-spring";
// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";
export var Overlay = {};
var AnimatedOverlayContainer = Spring.animated.div;
Overlay.Container = styled(AnimatedOverlayContainer).attrs(function (props) { return ({
    overflow: props.isOpen ? "hidden" : null,
    pointerEvents: !props.isOpen ? "none" : null,
    ...props,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", "\n\t", "\n\n\toverflow: ", ";\n\tpointer-events:  ", ";\n\n\tz-index: ", ";\n"], ["\n\t", "\n\t", "\n\n\toverflow: ", ";\n\tpointer-events:  ", ";\n\n\tz-index: ", ";\n"])), Protocol.Snippets.cover(), Protocol.Snippets.flex(), function (props) { return props.overflow; }, function (props) { return props.pointerEvents; }, Protocol.ZIndex.OVERLAY);
var AnimatedOverlayContent = Spring.animated("div");
Overlay.Content = styled(AnimatedOverlayContent).attrs(function (props) { return ({
    ...props,
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var AnimatedOverlayBackdrop = Spring.animated("div");
Overlay.Backdrop = styled(AnimatedOverlayBackdrop).attrs(function (props) { return ({
    ...props,
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n\n\tz-index: ", ";\n\tbackground: ", ";\n"], ["\n\t", "\n\n\tz-index: ", ";\n\tbackground: ", ";\n"])), Protocol.Snippets.cover(), Protocol.ZIndex.OVERLAY, Protocol.Color.BLACK_2);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=overlay.styled.js.map