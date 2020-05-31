import * as SC from "styled-components";
/**
 * Table of Contents
 *
 * [Icon]
 */
/**
 * [Icon]
 * - [Icon.Container(WRAPPER)]
 * - - [Icon.SVG(ELEMENT)]
 * - - [Icon.Title(ELEMENT)]
 */
interface Icon {
    Container: SC.StyledComponent<"div", any, IIconContainerAttrs, keyof IIconContainerAttrs>;
    SVG: SC.StyledComponent<"svg", any, IIconSVGAttrs, keyof IIconSVGAttrs>;
    Title: SC.StyledComponent<"desc", any, IIconTitleAttrs, keyof IIconTitleAttrs>;
}
export declare const Icon: Icon;
/**
 * [Icon.Container]
 */
interface IIconContainerProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IIconContainerAttrs extends IIconContainerProps {
}
/**
 * [Icon.SVG]
 */
interface IIconSVGProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IIconSVGAttrs extends IIconSVGProps {
}
/**
 * [Icon.Title]
 */
interface IIconTitleProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IIconTitleAttrs extends IIconTitleProps {
}
export {};
