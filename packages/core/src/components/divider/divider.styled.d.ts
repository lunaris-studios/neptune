import * as Protocol from "@nucleus/protocol";
import * as SC from "styled-components";
/**
 * Table of Contents
 *
 * [Divider]
 */
/**
 * [Divider]
 * - [Divider.Element(ELEMENT)]
 */
interface Divider {
    Element: SC.StyledComponent<"div", any, IDividerElementAttrs, keyof IDividerElementAttrs>;
}
export declare const Divider: Divider;
/**
 * [Divider.Element]
 */
interface IDividerElementProps extends SC.ThemeProps<SC.DefaultTheme> {
}
interface IDividerElementAttrs extends IDividerElementProps {
    margin: Protocol.Space;
    color: Protocol.Color;
}
export {};
