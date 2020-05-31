import * as Popper from "@popperjs/core";
import * as Props from "./popover.props";
/** Converts a full placement to one of the four positions by stripping text after the `-`. */
export declare function getPosition(placement: Popper.Placement): Popper.BasePlacement;
/** Returns true if position is left or right. */
export declare function isVerticalPosition(side: Popper.BasePlacement): boolean;
/** Returns the opposite position. */
export declare function getOppositePosition(side: Popper.BasePlacement): "left" | "right" | "top" | "bottom";
/** Returns the CSS alignment keyword corresponding to given placement. */
export declare function getAlignment(placement: Popper.Placement): "left" | "center" | "right";
/** Modifier helper function to compute popper transform-origin based on arrow position */
export declare function getTransformOrigin(data: Popper.Instance): string;
/** Popper modifier that offsets popper and arrow so arrow points out of the correct side */
export declare const arrowOffsetModifier: Popper.ModifierFn;
/**
 * Convert a position to a placement.
 * @param position the position to convert
 */
export declare function positionToPlacement(position: Props.PopoverPosition): Popper.Placement;
