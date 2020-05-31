import * as React from "react";
import * as Spring from "react-spring";
import * as Component from "./overlay";
export declare enum Type {
    CONTAINER_TRANSITION = "CONTAINER_TRANSITION"
}
export interface IContainerTransition {
    opacity: number;
    transform: string;
}
export interface IContainerTransitionOptions extends Component.IOverlayProps, Component.IOverlayLifecycleProps {
}
export declare class Controller {
    controller: Spring.Controller;
}
/** Transitions */
interface IOverlayContainerTransitionProps extends Component.IOverlayProps {
    render?: any;
}
export declare class OverlayContainerTransition extends React.Component<IOverlayContainerTransitionProps> {
    static displayName: string;
    readonly defaultProps: IOverlayContainerTransitionProps;
    render(): JSX.Element;
}
export {};
