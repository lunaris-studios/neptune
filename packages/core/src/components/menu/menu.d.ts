import * as React from "react";
import * as Common from "~/common";
import * as Components from "~/components";
export interface IMenuProps extends Common.IProps, React.HTMLAttributes<HTMLUListElement> {
    /** Ref handler that receives the HTML `<ul>` element backing this component. */
    ulRef?: (ref: HTMLUListElement | null) => any;
}
export declare class Menu extends Components.AbstractPureComponent<IMenuProps> {
    static displayName: string;
    render(): JSX.Element;
}
