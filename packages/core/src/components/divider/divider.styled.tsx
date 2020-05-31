import * as Protocol from "@nucleus/protocol";
import * as SC from "styled-components";

// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";

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

export const Divider = {} as Divider;

/**
 * [Divider.Element]
 */

interface IDividerElementProps extends SC.ThemeProps<SC.DefaultTheme> {}

interface IDividerElementAttrs extends IDividerElementProps {
	margin: Protocol.Space;
	color: Protocol.Color;
}

Divider.Element = styled("div").attrs(
	(props: IDividerElementProps): IDividerElementAttrs => ({
		margin: props.theme.spaces.TWO,
		color: props.theme.colors.BLACK_5,
		...props,
	}),
)`
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${(props) => props.color};
	/** 
   * Since the element is empty, it will occupy minimal space and only show
   * the appropriate border based on direction of container. 
   */
	border-right-width: 1px;
	border-right-style: solid;
	margin: ${(props) => Protocol.Snippets.px(props.margin)};
`;
