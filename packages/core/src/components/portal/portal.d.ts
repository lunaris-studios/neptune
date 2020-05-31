import * as React from "react";
import * as Common from "~/common";
export interface IPortalProps extends Common.IProps {
    /**
     * Callback invoked when the children of this `Portal` have been added to the DOM.
     */
    onChildrenMount?: () => void;
    /**
     * The HTML element that children will be mounted to.
     * @default document.body
     */
    container: HTMLElement | null;
}
export interface IPortalState {
    hasMounted: boolean;
}
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
export declare class Portal extends React.Component<IPortalProps, IPortalState> {
    static displayName: string;
    static readonly defaultProps: IPortalProps;
    readonly state: IPortalState;
    render(): React.ReactPortal | null;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private unstableRenderNoPortal;
}
