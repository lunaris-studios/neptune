import * as SC from "styled-components";
/**
 * [HTML]
 * - [HTML.Header(ELEMENT)]
 * - [HTML.Blockquote(ELEMENT)]
 * - [HTML.Code(ELEMENT)]
 * - [HTML.Pre(ELEMENT)]
 * - [HTML.Label(ELEMENT)]
 * - [HTML.OL(ELEMENT)]
 * - [HTML.UL(ELEMENT)]
 */
interface HTML {
    Header: SC.StyledComponent<"h1", any, IHTMLHeaderAttrs, keyof IHTMLHeaderAttrs>;
    Blockquote: SC.StyledComponent<"blockquote", any, IHTMLBlockquoteAttrs, keyof IHTMLBlockquoteAttrs>;
    Code: SC.StyledComponent<"code", any, IHTMLCodeAttrs, keyof IHTMLCodeAttrs>;
    Pre: SC.StyledComponent<"pre", any, IHTMLPreAttrs, keyof IHTMLPreAttrs>;
    Label: SC.StyledComponent<"label", any, IHTMLLabelAttrs, keyof IHTMLLabelAttrs>;
    OL: SC.StyledComponent<"ol", any, IHTMLOLAttrs, keyof IHTMLOLAttrs>;
    UL: SC.StyledComponent<"ul", any, IHTMLULAttrs, keyof IHTMLULAttrs>;
}
export declare const HTML: HTML;
/**
 * [HTML.Header]
 */
interface IHTMLHeaderProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLHeaderAttrs extends IHTMLHeaderProps {
}
/**
 * [HTML.Blockquote]
 */
interface IHTMLBlockquoteProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLBlockquoteAttrs extends IHTMLBlockquoteProps {
}
/**
 * [HTML.Code]
 */
interface IHTMLCodeProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLCodeAttrs extends IHTMLCodeProps {
}
/**
 * [HTML.Pre]
 */
interface IHTMLPreProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLPreAttrs extends IHTMLPreProps {
}
/**
 * [HTML.Label]
 */
interface IHTMLLabelProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLLabelAttrs extends IHTMLLabelProps {
}
/**
 * [HTML.OL]
 */
interface IHTMLOLProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLOLAttrs extends IHTMLOLProps {
}
/**
 * [HTML.UL]
 */
interface IHTMLULProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IHTMLULAttrs extends IHTMLULProps {
}
export {};
