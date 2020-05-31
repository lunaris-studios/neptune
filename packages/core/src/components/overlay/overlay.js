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
import * as Common from "~/common";
import * as Components from "~/components";
import * as Util from "~/util";
import * as Animated from "./overlay.animated";
import * as Styled from "./overlay.styled";
var defaultProps = Object.freeze({
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    isOpen: false,
    hasBackdrop: true,
    lazy: true,
    usePortal: true,
});
var defaultState = Object.freeze({
    hasEverOpened: false,
});
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasEverOpened: _this.props.isOpen };
        _this.animated = new Animated.Controller();
        _this.containerRef = React.createRef();
        _this.handleDocumentClick = function (event) {
            var _a = _this.props, canOutsideClickClose = _a.canOutsideClickClose, isOpen = _a.isOpen, onClose = _a.onClose;
            var eventTarget = event.target;
            var isClickInThisOverlayOrDescendant = _this.containerRef.current &&
                _this.containerRef.current.contains(eventTarget) &&
                !_this.containerRef.current.isSameNode(eventTarget);
            if (isOpen && canOutsideClickClose && !isClickInThisOverlayOrDescendant) {
                // casting to any because this is a native event
                Util.safeInvoke(onClose, event);
            }
        };
        _this.handleBackdropMouseDown = function (event) {
            var _a = _this.props, canOutsideClickClose = _a.canOutsideClickClose, enforceFocus = _a.enforceFocus, onClose = _a.onClose;
            if (canOutsideClickClose) {
                Util.safeInvoke(onClose, event);
            }
            if (enforceFocus) {
                // make sure document.activeElement is updated before bringing the focus back
                _this.focusOverlay();
            }
        };
        _this.handleDocumentFocus = function (event) {
            var enforceFocus = _this.props.enforceFocus;
            if (enforceFocus &&
                _this.containerRef.current != null &&
                event.target instanceof Node &&
                !_this.containerRef.current.contains(event.target)) {
                // prevent default focus behavior (sometimes auto-scrolls the page)
                event.preventDefault();
                event.stopImmediatePropagation();
                _this.focusOverlay();
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, canEscapeKeyClose = _a.canEscapeKeyClose, onClose = _a.onClose;
            if (event.which === Protocol.Key.ESCAPE && canEscapeKeyClose) {
                Util.safeInvoke(onClose, event);
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                event.preventDefault();
            }
        };
        return _this;
    }
    Overlay.prototype.render = function () {
        /** No reason to render anything at all if we're being truly lazy */
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        var _a = this.props, children = _a.children, canOutsideClickClose = _a.canOutsideClickClose, hasBackdrop = _a.hasBackdrop, isOpen = _a.isOpen, onClosing = _a.onClosing, onClosed = _a.onClosed, onOpening = _a.onOpening, onOpened = _a.onOpened, usePortal = _a.usePortal;
        var transitionContent = (React.createElement(Styled.Overlay.Container, { onKeyDown: this.handleKeyDown, ref: this.containerRef },
            React.createElement(Styled.Overlay.Content, null, children),
            hasBackdrop && (React.createElement(Styled.Overlay.Backdrop, { onMouseDown: this.handleBackdropMouseDown, tabIndex: canOutsideClickClose ? 0 : -1 }))));
        var transitionGroup = (React.createElement(Animated.OverlayContainerTransition, { isOpen: isOpen, onClosing: onClosing, onClosed: onClosed, onOpening: onOpening, onOpened: onOpened, render: transitionContent }));
        // const transitionGroup = (
        // 	<Spring.Transition
        // 		items={isOpen}
        // 		from={{ opacity: 0, transform: "translate3d(0%, -100%, 0%)" }}
        // 		enter={() => async (next) => {
        // 			await next({ opacity: 1, transform: "translate3d(100%, 0%, 0%)" });
        // 		}}
        // 		leave={() => async (next) => {
        // 			await next({
        // 				opacity: 0,
        // 				transform: "translate3d(100%, 0%, 0%)",
        // 			});
        // 		}}
        // 		onStart={() => {
        // 			if (isOpen && Util.isFunction(onOpening)) return onOpening();
        // 			if (!isOpen && Util.isFunction(onClosing)) return onClosing();
        // 			return;
        // 		}}
        // 		onRest={() => {
        // 			if (isOpen && Util.isFunction(onOpened)) return onOpened();
        // 			if (!isOpen && Util.isFunction(onClosed)) return onClosed();
        // 			return;
        // 		}}
        // 	>
        // 		{(style, visible) =>
        // 			visible && (
        // 				<Styled.Overlay.Container style={style} onKeyDown={this.handleKeyDown} ref={this.containerRef}>
        // 					<Styled.Overlay.Content>{children}</Styled.Overlay.Content>
        // 					{hasBackdrop && (
        // 						<Styled.Overlay.Backdrop
        // 							onMouseDown={this.handleBackdropMouseDown}
        // 							tabIndex={canOutsideClickClose ? 0 : -1}
        // 						/>
        // 					)}
        // 				</Styled.Overlay.Container>
        // 			)
        // 		}
        // 	</Spring.Transition>
        // );
        return usePortal ? React.createElement(Components.Portal, null, transitionGroup) : transitionGroup;
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.overlayWillClose();
    };
    /** */
    Overlay.prototype.overlayWillOpen = function () {
        var _a = this.props, autoFocus = _a.autoFocus, enforceFocus = _a.enforceFocus, canOutsideClickClose = _a.canOutsideClickClose, hasBackdrop = _a.hasBackdrop;
        if (autoFocus) {
            this.focusOverlay();
        }
        if (enforceFocus) {
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (canOutsideClickClose && !hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
    };
    Overlay.prototype.overlayWillClose = function () {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
    };
    Overlay.prototype.focusOverlay = function () {
        // container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (this.containerRef.current == null || document.activeElement == null || !this.props.isOpen) {
            return;
        }
        var isFocusOutsideModal = !this.containerRef.current.contains(document.activeElement);
        if (isFocusOutsideModal) {
            this.containerRef.current.focus();
        }
    };
    Overlay.displayName = Common.DISPLAYNAME_PREFIX + ".Overlay";
    Overlay.defaultProps = defaultProps;
    Overlay.defaultState = defaultState;
    return Overlay;
}(Components.AbstractPureComponent));
export { Overlay };
//# sourceMappingURL=overlay.js.map