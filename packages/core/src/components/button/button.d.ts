import * as React from "react";
import * as Abstract from "./button.abstract";
export { IButtonProps } from "./button.abstract";
export declare class Button extends Abstract.AbstractButton<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class AnchorButton extends Abstract.AbstractButton<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class TestButton extends Abstract.AbstractButton<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    static displayName: string;
    render(): JSX.Element;
}
