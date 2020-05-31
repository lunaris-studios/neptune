import * as React from "react";
import * as Spring from "react-spring";
export interface IFadeAnimationProps {
    opacity: number;
}
export interface IFadeProps extends Spring.UseTransitionProps<boolean> {
    show: boolean;
}
export declare class Fade extends React.PureComponent<IFadeProps, {}> {
    static readonly displayName: string;
    static readonly defaultProps: IFadeProps;
    render(): JSX.Element | null;
}
