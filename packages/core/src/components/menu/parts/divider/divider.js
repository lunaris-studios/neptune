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
var MenuDivider = /** @class */ (function (_super) {
    __extends(MenuDivider, _super);
    function MenuDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuDivider.prototype.render = function () {
        var title = this.props.title;
        if (title == null) {
            // simple divider
            return React.createElement("li", null);
        }
        else {
            // section header with title
            return (React.createElement("li", null,
                React.createElement(Components.H6, null, title)));
        }
    };
    MenuDivider.displayName = Common.DISPLAYNAME_PREFIX + ".MenuDivider";
    return MenuDivider;
}(React.Component));
export { MenuDivider };
//# sourceMappingURL=divider.js.map