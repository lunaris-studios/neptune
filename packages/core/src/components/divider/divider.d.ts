import * as React from "react";
import * as Common from "~/common";
import * as Components from "~/components";
export interface IDividerProps extends Common.IProps, React.HTMLAttributes<HTMLElement> {
    /**
     * HTML tag to use for element.
     * @default "div"
     */
    tagName?: keyof JSX.IntrinsicElements;
}
export declare class Divider extends Components.AbstractPureComponent<IDividerProps> {
    static displayName: string;
    static readonly defaultProps: IDividerProps;
    render(): JSX.Element;
}
