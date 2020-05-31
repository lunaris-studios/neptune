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
import * as Protocol from "@nucleus/protocol";
import * as React from "react";
import * as Components from "~/components";
import * as Util from "~/util";
import * as Styled from "./button.styled";
var defaultProps = Object.freeze({
    active: false,
    alignText: Protocol.Alignment.CENTER,
    disabled: false,
    fill: false,
    intent: Protocol.Intent.NONE,
    large: false,
    loading: false,
    minimal: false,
    outlined: false,
    small: false,
    type: "button",
});
export var defaultState = Object.freeze({
    isActive: false,
});
var AbstractButton = /** @class */ (function (_super) {
    __extends(AbstractButton, _super);
    function AbstractButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = defaultState;
        _this.currentKeyDown = null;
        _this.buttonRef = null;
        _this.refHandlers = {
            button: function (ref) {
                _this.buttonRef = ref;
                if (_this.props.elementRef && ref) {
                    Util.safeInvoke(_this.props.elementRef, ref);
                }
            },
        };
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        _this.handleKeyDown = function (event) {
            if (Util.isKeyboardClick(event.which)) {
                event.preventDefault();
                if (event.which !== _this.currentKeyDown) {
                    _this.setState({ isActive: true });
                }
            }
            _this.currentKeyDown = event.which;
            Util.safeInvoke(_this.props.onKeyDown, event);
        };
        _this.handleKeyUp = function (event) {
            if (!Util.isNull(_this.buttonRef) && Util.isKeyboardClick(event.which)) {
                _this.setState({ isActive: false });
                _this.buttonRef.click();
            }
            _this.currentKeyDown = null;
            Util.safeInvoke(_this.props.onKeyUp, event);
        };
        return _this;
    }
    AbstractButton.prototype.getCommonButtonProps = function () {
        var disabled = this.props.disabled || this.props.loading;
        return __assign(__assign({}, this.props), { disabled: disabled, onClick: disabled ? null : this.props.onClick, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, ref: this.refHandlers.button, tabIndex: disabled ? -1 : this.props.tabIndex });
    };
    AbstractButton.prototype.renderChildren = function () {
        var _a = this.props, children = _a.children, icon = _a.icon, loading = _a.loading, rightIcon = _a.rightIcon, text = _a.text;
        return (React.createElement(React.Fragment, null,
            loading && React.createElement(Components.Spinner, { key: "loading", size: Components.Icon.SIZE_LARGE }),
            React.createElement(Components.Icon, { key: "leftIcon", icon: icon }),
            (!Util.isReactNodeEmpty(text) || !Util.isReactNodeEmpty(children)) && (React.createElement(Styled.Button.Text, null,
                text,
                children)),
            React.createElement(Components.Icon, { key: "rightIcon", icon: rightIcon })));
    };
    AbstractButton.defaultProps = defaultProps;
    return AbstractButton;
}(Components.AbstractPureComponent));
export { AbstractButton };
//# sourceMappingURL=button.abstract.js.map