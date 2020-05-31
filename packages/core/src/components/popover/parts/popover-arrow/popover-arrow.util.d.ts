import * as Popper from "@popperjs/core";
/**
 * Modifier helper function to compute arrow rotate() transform
 * @param {Popper.Placement} [placement] - directional flag to indicate arrow placement
 */
export declare function getArrowAngle(placement?: Popper.Placement): 0 | 90 | -90 | 180;
export * from "../../popover.util";
