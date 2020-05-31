import * as SC from "styled-components";
import * as Spring from "react-spring";
import * as Component from "./button";
/**
 * Table of Contents
 *
 * [Button]
 * - [Button.Element]
 * - [Button.Text]
 */
/**
 * [Button]
 * - [Button.Element(WRAPPER)]
 */
interface Button {
    Element: SC.StyledComponent<Spring.AnimatedComponent<"button">, any, IButtonElementAttrs, keyof IButtonElementAttrs>;
    Text: SC.StyledComponent<Spring.AnimatedComponent<"span">, any, IButtonTextAttrs, keyof IButtonTextAttrs>;
}
export declare const Button: Button;
/**
 * [Button.Element]
 */
interface IButtonElementProps extends SC.ThemeProps<SC.DefaultTheme>, Component.IButtonProps {
}
interface IButtonElementAttrs extends IButtonElementProps {
}
/**
 * [Button.Text]
 */
interface IButtonTextProps extends SC.ThemeProps<SC.DefaultTheme>, Component.IButtonProps {
}
interface IButtonTextAttrs extends IButtonTextProps {
}
export {};
