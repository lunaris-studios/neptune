import * as Icons from "@nucleus/icons";
import * as React from "react";
import * as Common from "~/common";
import * as Components from "~/components";
export interface IDialogProps extends Components.IOverlayableProps, Components.IBackdropProps, Common.IProps {
    /**
     * Toggles the visibility of the overlay and its children.
     * This prop is required because the component is controlled.
     */
    isOpen: boolean;
    /**
     * Dialog always has a backdrop so this prop is excluded from the public API.
     * @internal
     */
    hasBackdrop?: boolean;
    /**
     * Name of a Blueprint UI icon (or an icon element) to render in the
     * dialog's header. Note that the header will only be rendered if `title` is
     * provided.
     * @default null
     */
    icon?: Nullable<Icons.IconName | Common.MaybeElement>;
    /**
     * Whether to show the close button in the dialog's header.
     * Note that the header will only be rendered if `title` is provided.
     * @default true
     */
    isCloseButtonShown?: boolean;
    /**
     * CSS styles to apply to the dialog.
     * @default {}
     */
    style?: React.CSSProperties;
    /**
     * Title of the dialog. If provided, an element with `Classes.DIALOG_HEADER`
     * will be rendered inside the dialog before any children elements.
     */
    title?: React.ReactNode;
    /**
     * Name of the transition for internal `CSSTransition`. Providing your own
     * name here will require defining new CSS transition properties.
     */
    transitionName?: string;
}
export declare class Dialog extends Components.AbstractPureComponent<IDialogProps, {}> {
    static displayName: string;
    static readonly defaultProps: IDialogProps;
    render(): JSX.Element;
    protected validateProps(props: IDialogProps): void;
    private maybeRenderCloseButton;
    private maybeRenderHeader;
}
