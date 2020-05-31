import * as Protocol from "@nucleus/protocol";
import * as Components from "~/components";
export interface INucleusProviderProps {
    theme: Protocol.Theme;
    typography: Protocol.Typography;
}
export declare class NucleusProvider extends Components.AbstractPureComponent<INucleusProviderProps> {
    static readonly defaultProps: INucleusProviderProps;
    render(): JSX.Element;
}
