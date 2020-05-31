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
import * as React from "react";
import * as Common from "~/common";
import * as Components from "~/components";
var defaultProps = Object.freeze({
    canOutsideClickClose: true,
    isOpen: false,
});
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        return (React.createElement(Components.Overlay, __assign({}, this.props, { className: Classes.OVERLAY_SCROLL_CONTAINER, hasBackdrop: true }),
            React.createElement("div", { className: Classes.DIALOG_CONTAINER },
                React.createElement("div", { className: classNames(Classes.DIALOG, this.props.className), style: this.props.style },
                    this.maybeRenderHeader(),
                    this.props.children))));
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.icon != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        var _a = this.props, isCloseButtonShown = _a.isCloseButtonShown, onClose = _a.onClose;
        // show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (isCloseButtonShown !== false) {
            return (React.createElement(Components.Button, { "aria-label": "Close", 
                // className={Classes.DIALOG_CLOSE_BUTTON}
                icon: React.createElement(Icon, { icon: "small-cross", iconSize: Icon.SIZE_LARGE }), minimal: true, onClick: onClose }));
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        var _a = this.props, icon = _a.icon, title = _a.title;
        if (title == null) {
            return undefined;
        }
        return (React.createElement("div", { className: Classes.DIALOG_HEADER },
            React.createElement(Icon, { icon: icon, iconSize: Icon.SIZE_LARGE }),
            React.createElement(H4, null, title),
            this.maybeRenderCloseButton()));
    };
    Dialog.displayName = Common.DISPLAYNAME_PREFIX + ".Dialog";
    Dialog.defaultProps = defaultProps;
    return Dialog;
}(Components.AbstractPureComponent));
export { Dialog };
//# sourceMappingURL=dialog.js.map