import * as React from "react";
import * as SC from "styled-components";

import * as Common from "~/common";
import * as Components from "~/components";
import * as Style from "~/style";

// re-import `styled-components` development mode DOM classnames.
import styled, { css } from "styled-components";

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
	margin: Style.Space;
	color: Style.Color;
}

Divider.Element = styled("div").attrs(
	(props: IDividerElementProps): IDividerElementAttrs => ({
		margin: props.theme.spaces.TWO,
		color: props.theme.colors.BLACK_5,
		...props,
	})
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
	border-right-color: ${(props) => props.color};
	margin: ${(props) => Style.Snippets.px(props.margin)};
`;