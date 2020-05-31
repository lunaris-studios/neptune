import * as Styled from "styled-components";
/**
 * Table of Contents
 *
 * [Menu]
 */
/**
 * [Menu]
 * - [Menu.Container(WRAPPER)]
 */
interface Menu {
    Container: Styled.StyledComponent<"ul", any, IMenuContainerAttrs, keyof IMenuContainerAttrs>;
}
export declare const Menu: Menu;
/**
 * [Menu.Container]
 */
interface IMenuContainerProps {
}
interface IMenuContainerAttrs extends Partial<IMenuContainerProps> {
}
export {};
