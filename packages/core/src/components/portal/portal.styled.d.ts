import * as React from "react";
import * as SC from "styled-components";
/**
 * Table of Contents
 *
 * [Portal]
 */
/**
 * [Portal]
 * - [Portal.Container(WRAPPER)]
 */
export interface Portal {
    Container: SC.StyledComponent<"div", any, IPortalContainerAttrs, keyof IPortalContainerAttrs>;
}
export declare const Portal: Portal;
/**
 * [Portal.Container]
 */
interface IPortalContainerProps extends SC.ThemeProps<SC.DefaultTheme>, React.HTMLProps<HTMLDivElement> {
}
interface IPortalContainerAttrs extends IPortalContainerProps {
}
export {};
