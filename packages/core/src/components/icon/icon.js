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
import * as Icons from "@nucleus/icons";
import * as Common from "~/common";
import * as Components from "~/components";
import * as Styled from "./icon.styled";
export var IconSize;
(function (IconSize) {
    IconSize[IconSize["SIZE_STANDARD"] = 16] = "SIZE_STANDARD";
    IconSize[IconSize["SIZE_LARGE"] = 20] = "SIZE_LARGE";
})(IconSize || (IconSize = {}));
var defaultProps = Object.freeze({
    iconSize: IconSize.SIZE_STANDARD,
    tagName: "span",
});
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var icon = this.props.icon;
        if (icon == null || typeof icon === "boolean") {
            return null;
        }
        else if (typeof icon !== "string") {
            return icon;
        }
        var _a = this.props, color = _a.color, htmlTitle = _a.htmlTitle, iconSize = _a.iconSize, intent = _a.intent, _b = _a.title, title = _b === void 0 ? icon : _b, tagName = _a.tagName, htmlprops = __rest(_a, ["color", "htmlTitle", "iconSize", "intent", "title", "tagName"]);
        // choose which pixel grid is most appropriate for given icon size
        var pixelGridSize = iconSize >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
        // render path elements, or nothing if icon name is unknown.
        var paths = this.renderSvgPaths(pixelGridSize, icon);
        var viewBox = "0 0 " + pixelGridSize + " " + pixelGridSize;
        return (React.createElement(Styled.Icon.Container, __assign({ as: tagName }, htmlprops),
            React.createElement(Styled.Icon.SVG, { fill: color, "data-icon": icon, width: iconSize, height: iconSize, viewBox: viewBox },
                title && React.createElement(Styled.Icon.Title, null, title),
                paths)));
    };
    /** Render `<path>` elements for the given icon name. Returns `null` if name is unknown. */
    Icon.prototype.renderSvgPaths = function (pathsSize, iconName) {
        var svgPathsRecord = pathsSize === Icon.SIZE_STANDARD ? Icons.IconSvgPaths16 : Icons.IconSvgPaths20;
        var pathStrings = svgPathsRecord[iconName];
        if (pathStrings == null) {
            return null;
        }
        return pathStrings.map(function (d, i) { return React.createElement("path", { key: i, d: d, fillRule: "evenodd" }); });
    };
    Icon.displayName = Common.DISPLAYNAME_PREFIX + ".Icon";
    Icon.SIZE_STANDARD = IconSize.SIZE_STANDARD;
    Icon.SIZE_LARGE = IconSize.SIZE_LARGE;
    Icon.defaultProps = defaultProps;
    return Icon;
}(Components.AbstractPureComponent));
export { Icon };
//# sourceMappingURL=icon.js.map