import * as React from "react";
import * as SC from "styled-components";
import * as Component from "./popover-arrow";
/**
 * Table of Contents
 *
 * [PopoverArrow]
 */
/**
 * [PopoverArrow]
 * - [PopoverArrow.Container(WRAPPER)]
 */
interface PopoverArrow {
    Container: SC.StyledComponent<"div", any, IPopoverArrowContainerAttrs, keyof IPopoverArrowContainerAttrs>;
    SVG: SC.StyledComponent<"svg", any, IPopoverArrowSVGAttrs, keyof IPopoverArrowSVGAttrs>;
    Path: SC.StyledComponent<"path", any, IPopoverArrowPathAttrs, keyof IPopoverArrowPathAttrs>;
}
export declare const PopoverArrow: PopoverArrow;
/**
 * [PopoverArrow.Container]
 */
interface IPopoverArrowContainerProps extends SC.ThemeProps<SC.DefaultTheme> {
    arrowProps: Component.IPopoverArrowProps["arrowProps"];
}
interface IPopoverArrowContainerAttrs extends IPopoverArrowContainerProps {
}
/**
 * [PopoverArrow.SVG]
 */
interface IPopoverArrowSVGProps extends SC.ThemeProps<SC.DefaultTheme>, React.SVGAttributes<SVGElement> {
    placement: Component.IPopoverArrowProps["placement"];
}
interface IPopoverArrowSVGAttrs extends IPopoverArrowSVGProps {
    arrowAngle: number;
}
/**
 * [PopoverArrow.Path]
 */
export declare enum PopoverArrowPathType {
    ARROW = "ARROW",
    SHADOW = "SHADOW"
}
interface IPopoverArrowPathProps extends SC.ThemeProps<SC.DefaultTheme>, React.SVGAttributes<SVGElement> {
    type: PopoverArrowPathType;
}
interface IPopoverArrowPathAttrs extends IPopoverArrowPathProps {
}
export {};
