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
import * as Protocol from "@nucleus/protocol";
import * as React from "react";
import * as RT from "react-typography";
import * as SC from "styled-components";
import * as Components from "~/components";
var defaultProps = Object.freeze({
    theme: Protocol.Theme,
    typography: Protocol.Typography,
});
var NucleusProvider = /** @class */ (function (_super) {
    __extends(NucleusProvider, _super);
    function NucleusProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NucleusProvider.prototype.render = function () {
        var _a = this.props, children = _a.children, theme = _a.theme, typography = _a.typography;
        return (React.createElement(React.Fragment, null,
            React.createElement(Components.Head, null),
            React.createElement(RT.TypographyStyle, { typography: typography }),
            React.createElement(SC.ThemeProvider, { theme: theme }, children)));
    };
    NucleusProvider.defaultProps = defaultProps;
    return NucleusProvider;
}(Components.AbstractPureComponent));
export { NucleusProvider };
//# sourceMappingURL=_nucleus-provider.js.map