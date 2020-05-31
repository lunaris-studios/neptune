import * as Popper from "@popperjs/core";
import * as ReactPopper from "react-popper";
import * as Components from "~/components";
export interface IPopoverArrowProps {
    /**
     * Inherited element properties from the parent <Popper> parent.
     */
    arrowProps?: ReactPopper.PopperArrowProps;
    /**
     * Directional flag to indicate arrow placement
     * @default "left"
     */
    placement: Popper.Placement;
}
export declare class PopoverArrow extends Components.AbstractPureComponent<IPopoverArrowProps> {
    static displayName: string;
    static readonly defaultProps: IPopoverArrowProps;
    render(): JSX.Element;
}
