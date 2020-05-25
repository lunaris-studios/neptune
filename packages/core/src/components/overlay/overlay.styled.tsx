import * as React from "react";
import * as SC from "styled-components";
import * as Spring from "react-spring";

import * as Common from "~/common";
import * as Components from "~/components";
import * as Style from "~/style";

// re-import `styled-components` development mode DOM classnames.
import styled, { css } from "styled-components";

/**
 * Table of Contents
 *
 * [Overlay]
 */

/**
 * [Overlay]
 * - [Overlay.Container(WRAPPER)]
 * - - [Overlay.Content(WRAPPER)]
 * - [Overlay.Backdrop(ELEMENT)]
 */

interface Overlay {
	Container: SC.StyledComponent<
		Spring.AnimatedComponent<"div">,
		any,
		IOverlayContainerAttrs,
		keyof IOverlayContainerAttrs
	>;
	Backdrop: SC.StyledComponent<
		Spring.AnimatedComponent<"div">,
		any,
		IOverlayBackdropAttrs,
		keyof IOverlayBackdropAttrs
	>;
	Content: SC.StyledComponent<Spring.AnimatedComponent<"div">, any, IOverlayContentAttrs, keyof IOverlayContentAttrs>;
	Transition: SC.StyledComponent<Spring.TransitionFn, any, IOverlayTransitionAttrs, keyof IOverlayTransitionAttrs>;
}

export const Overlay = {} as Overlay;

/**
 * [Overlay.Container]
 */

interface IOverlayContainerProps {
	isOpen: boolean;
	usePortal: boolean;
}

interface IOverlayContainerAttrs extends IOverlayContainerProps {
	pointerEvents: string;
	overflow: string;
}

const AnimatedOverlayContainer = Spring.animated.div;

Overlay.Container = styled(AnimatedOverlayContainer).attrs(
	(props: IOverlayContainerProps): IOverlayContainerAttrs => ({
		pointerEvents: !props.isOpen && "none",
		overflow: props.isOpen && "hidden",
		...props,
	})
)`
	${Style.Snippets.cover()}
	${Style.Snippets.flex()}

	z-index: ${Style.ZIndex.OVERLAY};
	overflow: ${(props) => props.overflow};
	pointer-events: ${(props) => props.pointerEvents};
`;

/**
 * [Overlay.Content]
 */

interface IOverlayContentProps {}

interface IOverlayContentAttrs extends IOverlayContentProps {}

const AnimatedOverlayContent = Spring.animated("div");

Overlay.Content = styled(AnimatedOverlayContent).attrs(
	(props: IOverlayContentProps): IOverlayContentAttrs => ({
		...props,
	})
)``;

/**
 * [Overlay.Backdrop]
 */

interface IOverlayBackdropProps {}

interface IOverlayBackdropAttrs extends IOverlayBackdropProps {}

const AnimatedOverlayBackdrop = Spring.animated("div");

Overlay.Backdrop = styled(AnimatedOverlayBackdrop).attrs(
	(props: IOverlayBackdropProps): IOverlayBackdropAttrs => ({
		...props,
	})
)`
	${Style.Snippets.cover()}

	z-index: ${Style.ZIndex.OVERLAY};
	background: ${Style.Color.BLACK_2};
`;
