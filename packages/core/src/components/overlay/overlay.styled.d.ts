import * as SC from "styled-components";
import * as Spring from "react-spring";
/**
 * Table of Contents
 *
 * [Overlay]
 */
/**
 * [Overlay]
 * - [Overlay.Container(WRAPPER)]
 * - - [Overlay.Content(WRAPPER)]
 * - [Overlay.Backdrop(ELEMENT)]
 */
export interface Overlay {
    Container: SC.StyledComponent<Spring.AnimatedComponent<"div">, any, IOverlayContainerAttrs, keyof IOverlayContainerAttrs>;
    Backdrop: SC.StyledComponent<Spring.AnimatedComponent<"div">, any, IOverlayBackdropAttrs, keyof IOverlayBackdropAttrs>;
    Content: SC.StyledComponent<Spring.AnimatedComponent<"div">, any, IOverlayContentAttrs, keyof IOverlayContentAttrs>;
}
export declare const Overlay: Overlay;
/**
 * [Overlay.Container]
 */
interface IOverlayContainerProps extends SC.ThemeProps<SC.DefaultTheme> {
    isOpen: boolean;
    usePortal: boolean;
}
interface IOverlayContainerAttrs extends IOverlayContainerProps {
    overflow: Nullable<string>;
    pointerEvents: Nullable<string>;
}
/**
 * [Overlay.Content]
 */
interface IOverlayContentProps {
}
interface IOverlayContentAttrs extends IOverlayContentProps {
}
/**
 * [Overlay.Backdrop]
 */
interface IOverlayBackdropProps {
}
interface IOverlayBackdropAttrs extends IOverlayBackdropProps {
}
export {};
