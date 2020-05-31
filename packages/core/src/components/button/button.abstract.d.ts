import * as Icons from "@nucleus/icons";
import * as Protocol from "@nucleus/protocol";
import * as React from "react";
import * as Common from "~/common";
import * as Components from "~/components";
export interface IButtonProps extends Common.IActionProps {
    /**
     * If set to `true`, the button will display in an active state.
     * This is equivalent to setting `className={Classes.ACTIVE}`.
     * @default false
     */
    active: boolean;
    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     * @default Alignment.CENTER
     */
    alignText: Protocol.Alignment;
    /**
     * A ref handler that receives the native HTML element backing this component.
     */
    elementRef?: (ref: Nullable<HTMLElement | null>) => any;
    /**
     * Whether this button should expand to fill its container.
     * @default false
     */
    fill: boolean;
    /**
     * Name of a Nucleus UI icon (or an icon element) to render before the text.
     */
    icon?: Icons.IconName | Common.MaybeElement;
    /**
     * Whether this button should use large styles.
     * @default false
     */
    large: boolean;
    /**
     * If set to `true`, the button will display a centered loading spinner instead of its contents.
     * The width of the button is not affected by the value of this prop.
     * @default false
     */
    loading: boolean;
    /**
     * Whether this button should use minimal styles.
     * @default false
     */
    minimal: boolean;
    /**
     * Whether this button should use outlined styles.
     * @default false
     */
    outlined: boolean;
    /**
     * Name of a Nucleus UI icon (or an icon element) to render after the text.
     */
    rightIcon?: Icons.IconName | Common.MaybeElement;
    /**
     * Whether this button should use small styles.
     * @default false
     */
    small: boolean;
    /**
     * HTML `type` attribute of button. Accepted values are `"button"`, `"submit"`, and `"reset"`.
     * Note that this prop has no effect on `AnchorButton`; it only affects `Button`.
     * @default "button"
     */
    type: "submit" | "reset" | "button";
}
export interface IButtonState {
    isActive: boolean;
}
export declare const defaultState: Readonly<IButtonState>;
export declare abstract class AbstractButton<H extends React.HTMLAttributes<any>> extends Components.AbstractPureComponent<IButtonProps & H, IButtonState> {
    static readonly defaultProps: IButtonProps;
    state: IButtonState;
    private currentKeyDown;
    buttonRef: Nullable<HTMLElement>;
    protected refHandlers: {
        button: (ref: HTMLElement | null) => void;
    };
    abstract render(): JSX.Element;
    getCommonButtonProps(): Readonly<IButtonProps & H> & {
        disabled: (IButtonProps & H)["loading"] | (IButtonProps & H)["disabled"];
        onClick: (IButtonProps & H)["onClick"] | null;
        onKeyDown: (event: React.KeyboardEvent<any>) => void;
        onKeyUp: (event: React.KeyboardEvent<any>) => void;
        ref: (ref: HTMLElement | null) => void;
        tabIndex: (IButtonProps & H)["tabIndex"];
        children?: React.ReactNode;
    };
    protected handleKeyDown: (event: React.KeyboardEvent<any>) => void;
    protected handleKeyUp: (event: React.KeyboardEvent<any>) => void;
    protected renderChildren(): React.ReactNode;
}
