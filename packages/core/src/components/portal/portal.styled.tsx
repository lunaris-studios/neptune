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
 * [Portal]
 */

/**
 * [Portal]
 * - [Portal.Container(WRAPPER)]
 */

export interface Portal {
	Container: SC.StyledComponent<"div", any, IPortalContainerAttrs, keyof IPortalContainerAttrs>;
}

export const Portal = {} as Portal;

/**
 * [Portal.Container]
 */

interface IPortalContainerProps {}

interface IPortalContainerAttrs extends IPortalContainerProps {}

Portal.Container = styled("div").attrs(
	(props: IPortalContainerProps): IPortalContainerAttrs => ({
		...props,
	})
)`
	${Style.Snippets.cover()}
`;
