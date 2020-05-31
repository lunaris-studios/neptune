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
import * as Styled from "./popover-arrow.styled";
var defaultProps = Object.freeze({
    placement: "left",
});
var PopoverArrow = /** @class */ (function (_super) {
    __extends(PopoverArrow, _super);
    function PopoverArrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoverArrow.prototype.render = function () {
        var _a = this.props, placement = _a.placement, arrowProps = _a.arrowProps;
        return (React.createElement(Styled.PopoverArrow.Container, { arrowProps: arrowProps },
            React.createElement(Styled.PopoverArrow.SVG, { placement: placement },
                React.createElement(Styled.PopoverArrow.Path, { type: Styled.PopoverArrowPathType.ARROW }),
                React.createElement(Styled.PopoverArrow.Path, { type: Styled.PopoverArrowPathType.SHADOW }))));
    };
    PopoverArrow.displayName = Common.DISPLAYNAME_PREFIX + ".PopoverArrow";
    PopoverArrow.defaultProps = defaultProps;
    return PopoverArrow;
}(Components.AbstractPureComponent));
export { PopoverArrow };
//# sourceMappingURL=popover-arrow.js.map