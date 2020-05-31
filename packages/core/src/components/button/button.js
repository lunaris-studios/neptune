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
import * as Spring from "react-spring";
import * as Common from "~/common";
import * as Util from "~/util";
import * as Abstract from "./button.abstract";
import * as Styled from "./button.styled";
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement(Styled.Button.Element, __assign({}, Util.removeNonHTMLProps(this.props), this.getCommonButtonProps(), { type: "button" }), this.renderChildren()));
    };
    Button.displayName = Common.DISPLAYNAME_PREFIX + ".Button";
    return Button;
}(Abstract.AbstractButton));
export { Button };
var AnchorButton = /** @class */ (function (_super) {
    __extends(AnchorButton, _super);
    function AnchorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, href = _a.href, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b;
        var commonProps = this.getCommonButtonProps();
        var AniamtedAnchorElement = Spring.animated("a");
        return (React.createElement(Styled.Button.Element, __assign({ as: AniamtedAnchorElement, role: "button" }, Util.removeNonHTMLProps(this.props), commonProps, { href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? -1 : tabIndex }), this.renderChildren()));
    };
    AnchorButton.displayName = Common.DISPLAYNAME_PREFIX + ".AnchorButton";
    return AnchorButton;
}(Abstract.AbstractButton));
export { AnchorButton };
import ButtonSVG, { ReactComponent as ButtonSVGComponent } from "~/assets/svg/button.svg";
var TestButton = /** @class */ (function (_super) {
    __extends(TestButton, _super);
    function TestButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestButton.prototype.render = function () {
        console.log("ButtonSVG", ButtonSVG, ButtonSVGComponent);
        return (React.createElement(ButtonSVGComponent, null));
    };
    TestButton.displayName = Common.DISPLAYNAME_PREFIX + ".TestButton";
    return TestButton;
}(Abstract.AbstractButton));
export { TestButton };
//# sourceMappingURL=button.js.map