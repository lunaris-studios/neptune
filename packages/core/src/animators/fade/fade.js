var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import * as Spring from "react-spring";
import * as Common from "~/common";
import * as Util from "~/util";
var defaultProps = Object.freeze({
    show: false,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
});
var Fade = /** @class */ (function (_super) {
    __extends(Fade, _super);
    function Fade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fade.prototype.render = function () {
        if (!React.isValidElement(this.props.children)) {
            return null;
        }
        var _a = this.props, children = _a.children, show = _a.show, from = _a.from, enter = _a.enter, leave = _a.leave, rest = __rest(_a, ["children", "show", "from", "enter", "leave"]);
        var type = children.type, props = children.props;
        var Component;
        if (Util.isFunction(type)) {
            Component = Spring.animated(type);
        }
        else if (typeof type === "string") {
            Component = Spring.animated[type];
        }
        var result = function (styles) {
            var newProps = __assign(__assign({}, props), { style: __assign(__assign({ willChange: "opacity" }, props.style), styles) });
            return React.createElement(Component, __assign({}, newProps));
        };
        return (React.createElement(Spring.Transition, { items: show, from: from, enter: enter, leave: leave, children: function (styles, show) { return show && result(styles); } }));
    };
    Fade.displayName = Common.DISPLAYNAME_PREFIX + ".Fade";
    Fade.defaultProps = defaultProps;
    return Fade;
}(React.PureComponent));
export { Fade };
//# sourceMappingURL=fade.js.map