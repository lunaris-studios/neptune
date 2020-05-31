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
import * as Styled from "./head.styled";
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Styled.Head.Global, null)));
    };
    Head.displayName = Common.DISPLAYNAME_PREFIX + ".Head";
    return Head;
}(Components.AbstractPureComponent));
export { Head };
//# sourceMappingURL=head.js.map