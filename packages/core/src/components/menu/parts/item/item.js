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
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent2, Classes, Position } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Icon } from "../icon/icon";
import { Popover, PopoverInteractionKind } from "../popover/popover";
import { Text } from "../text/text";
// eslint-disable-next-line import/no-cycle
import { Menu } from "./menu";
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItem.prototype.render = function () {
        var _a, _b;
        var _c = this.props, active = _c.active, className = _c.className, children = _c.children, disabled = _c.disabled, icon = _c.icon, intent = _c.intent, labelClassName = _c.labelClassName, labelElement = _c.labelElement, multiline = _c.multiline, popoverProps = _c.popoverProps, shouldDismissPopover = _c.shouldDismissPopover, text = _c.text, textClassName = _c.textClassName, _d = _c.tagName, tagName = _d === void 0 ? "a" : _d, htmlProps = __rest(_c, ["active", "className", "children", "disabled", "icon", "intent", "labelClassName", "labelElement", "multiline", "popoverProps", "shouldDismissPopover", "text", "textClassName", "tagName"]);
        var hasSubmenu = children != null;
        var intentClass = Classes.intentClass(intent);
        var anchorClasses = classNames(Classes.MENU_ITEM, intentClass, (_a = {},
            _a[Classes.ACTIVE] = active,
            _a[Classes.INTENT_PRIMARY] = active && intentClass == null,
            _a[Classes.DISABLED] = disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            _a[Classes.POPOVER_DISMISS] = shouldDismissPopover && !disabled && !hasSubmenu,
            _a), className);
        var target = React.createElement(tagName, __assign(__assign(__assign({}, htmlProps), (disabled ? DISABLED_PROPS : {})), { className: anchorClasses }), React.createElement(Icon, { icon: icon }), React.createElement(Text, { className: classNames(Classes.FILL, textClassName), ellipsize: !multiline }, text), this.maybeRenderLabel(labelElement), hasSubmenu ? React.createElement(Icon, { icon: "caret-right" }) : undefined);
        var liClasses = classNames((_b = {}, _b[Classes.MENU_SUBMENU] = hasSubmenu, _b));
        return React.createElement("li", { className: liClasses }, this.maybeRenderPopover(target, children));
    };
    MenuItem.prototype.maybeRenderLabel = function (labelElement) {
        var _a = this.props, label = _a.label, labelClassName = _a.labelClassName;
        if (label == null && labelElement == null) {
            return null;
        }
        return (React.createElement("span", { className: classNames(Classes.MENU_ITEM_LABEL, labelClassName) },
            label,
            labelElement));
    };
    MenuItem.prototype.maybeRenderPopover = function (target, children) {
        if (children == null) {
            return target;
        }
        var _a = this.props, disabled = _a.disabled, popoverProps = _a.popoverProps;
        return (React.createElement(Popover, __assign({ autoFocus: false, captureDismiss: false, disabled: disabled, enforceFocus: false, hoverCloseDelay: 0, interactionKind: PopoverInteractionKind.HOVER, modifiers: SUBMENU_POPOVER_MODIFIERS, position: Position.RIGHT_TOP, usePortal: false }, popoverProps, { content: React.createElement(Menu, null, children), minimal: true, popoverClassName: classNames(Classes.MENU_SUBMENU, popoverProps.popoverClassName), target: target })));
    };
    MenuItem.defaultProps = {
        disabled: false,
        multiline: false,
        popoverProps: {},
        shouldDismissPopover: true,
        text: "",
    };
    MenuItem.displayName = DISPLAYNAME_PREFIX + ".MenuItem";
    return MenuItem;
}(AbstractPureComponent2));
export { MenuItem };
var SUBMENU_POPOVER_MODIFIERS = {
    // 20px padding - scrollbar width + a bit
    flip: { boundariesElement: "viewport", padding: 20 },
    // shift popover up 5px so MenuItems align
    offset: { offset: -5 },
    preventOverflow: { boundariesElement: "viewport", padding: 20 },
};
// props to ignore when disabled
var DISABLED_PROPS = {
    href: undefined,
    onClick: undefined,
    onMouseDown: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    tabIndex: -1,
};
//# sourceMappingURL=item.js.map