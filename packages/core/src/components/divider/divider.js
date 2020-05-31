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
import * as React from "react";
import * as Common from "~/common";
import * as Components from "~/components";
import * as Styled from "./divider.styled";
var defaultProps = Object.freeze({
    tagName: "div",
});
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var tagName = this.props.tagName;
        return React.createElement(Styled.Divider.Element, { as: tagName });
    };
    Divider.displayName = Common.DISPLAYNAME_PREFIX + ".Divider";
    Divider.defaultProps = defaultProps;
    return Divider;
}(Components.AbstractPureComponent));
export { Divider };
//# sourceMappingURL=divider.js.map