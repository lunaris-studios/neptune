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
import * as ReactDOM from "react-dom";
import * as Common from "~/common";
import * as Util from "~/util";
import * as Styled from "./portal.styled";
/** Detect if `React.createPortal()` API method does not exist. */
var cannotCreatePortal = !Util.isFunction(ReactDOM.createPortal);
var defaultProps = Object.freeze({
    container: typeof document !== "undefined" ? document.body : null,
});
var defaultState = Object.freeze({
    hasMounted: false,
});
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = defaultState;
        return _this;
    }
    Portal.prototype.render = function () {
        var _a = this.props, children = _a.children, container = _a.container;
        // Only render `children` once this component has mounted in a browser environment, so they are
        // immediately attached to the DOM tree and can do DOM things like measuring or `autoFocus`.
        // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
        if (cannotCreatePortal || typeof document === "undefined" || !this.state.hasMounted || !container) {
            return null;
        }
        else {
            return ReactDOM.createPortal(React.createElement(Styled.Portal.Container, null, children), container);
        }
    };
    Portal.prototype.componentDidMount = function () {
        if (!this.props.container) {
            return;
        }
        this.setState({ hasMounted: true }, this.props.onChildrenMount);
        if (cannotCreatePortal) {
            this.unstableRenderNoPortal();
        }
    };
    Portal.prototype.componentDidUpdate = function () {
        if (cannotCreatePortal) {
            this.unstableRenderNoPortal();
        }
    };
    Portal.prototype.unstableRenderNoPortal = function () {
        var container = document.createElement("div");
        container.setAttribute("style", "position: absolute; top: 0; right: 0; bottom: 0; left: 0;");
        ReactDOM.unstable_renderSubtreeIntoContainer(
        /* parentComponent */ this, React.createElement("div", null, this.props.children), container);
    };
    Portal.displayName = Common.DISPLAYNAME_PREFIX + ".Portal";
    Portal.defaultProps = defaultProps;
    return Portal;
}(React.Component));
export { Portal };
//# sourceMappingURL=portal.js.map