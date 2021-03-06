import * as Protocol from "@lunaris/paradigm-protocol";
import * as React from "react";
import * as SC from "styled-components";

import * as Common from "~/common";

// re-import `styled-components` development mode DOM classnames.
import styled, { keyframes } from "styled-components";

/**
 * Table of Contents
 *
 * [Spinner]
 */

/**
 * [Spinner]
 * - [Spinner.Container(WRAPPER)]
 */

interface Spinner {
	Container: SC.StyledComponent<
		"div",
		any,
		ISpinnerContainerAttrs,
		keyof ISpinnerContainerAttrs
	>;

	SVG: SpinnerSVG;
}

export const Spinner = {} as Spinner;

/**
 * [Spinner.Container]
 */

interface ISpinnerContainerProps {}

interface ISpinnerContainerAttrs extends ISpinnerContainerProps {}

Spinner.Container = styled("div").attrs(
	(props: ISpinnerContainerProps): ISpinnerContainerAttrs => ({
		...props,
	}),
)`
	align-items: center;
	/* center animation container inside parent element to isolate layout */
	display: flex;
	justify-content: center;

	/* allow paths to overflow container -- critical for edges of circles! */
	overflow: visible;
	vertical-align: middle;
`;

/**
 * [Spinner.SVG]
 * - [Spinner.SVG.Container(WRAPPER)]
 */

interface SpinnerSVG {
	Container: SC.StyledComponent<
		"svg",
		any,
		ISpinnerSVGContainerAttrs,
		keyof ISpinnerSVGContainerAttrs
	>;

	Shared: SpinnerSVGShared;
	Path: SpinnerSVGPath;
}

Spinner.SVG = {} as SpinnerSVG;

/**
 * [Spinner.SVG.Container]
 */

interface ISpinnerSVGContainerProps extends Common.IIntentProps {
	isSpinning: boolean;
	animation: SC.Keyframes | string;
}

interface ISpinnerSVGContainerAttrs extends ISpinnerSVGContainerProps {}

const spinnerAnimation = keyframes`{
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}`;

Spinner.SVG.Container = styled("svg").attrs(
	(props: ISpinnerSVGContainerProps): ISpinnerSVGContainerAttrs => ({
		...props,
		animation: props.isSpinning ? spinnerAnimation : "none",
	}),
)`
	display: block;
	fill: ${Protocol.Color.TRANSPARENT};
	animation: ${(props) => props.animation} 500ms linear infinite;
`;

/**
 * [Spinner.SVG.Shared]
 * - [Spinner.SVG.Shared.Path(WRAPPER)]
 */

interface SpinnerSVGShared {
	Path: SC.StyledComponent<
		"path",
		any,
		ISpinnerSVGSharedPathAttrs,
		keyof ISpinnerSVGSharedPathAttrs
	>;
}

Spinner.SVG.Shared = {} as SpinnerSVGShared;

/**
 * [Spinner.SVG.Shared.Path]
 */

interface ISpinnerSVGSharedPathProps {}

interface ISpinnerSVGSharedPathAttrs extends ISpinnerSVGSharedPathProps {}

Spinner.SVG.Shared.Path = styled("path").attrs(
	(props: ISpinnerSVGSharedPathProps): ISpinnerSVGSharedPathAttrs => ({
		...props,
	}),
)`
	fill-opacity: 0;
`;

/**
 * [Spinner.SVG.Path]
 * - [Spinner.SVG.Path.Track(ELEMENT)]
 * - [Spinner.SVG.Path.Head(ELEMENT)]
 */

interface SpinnerSVGPath {
	Head: SC.StyledComponent<
		typeof Spinner.SVG.Shared.Path,
		any,
		ISpinnerSVGPathHeadAttrs,
		keyof ISpinnerSVGPathHeadAttrs
	>;
	Track: SC.StyledComponent<
		typeof Spinner.SVG.Shared.Path,
		any,
		ISpinnerSVGPathTrackAttrs,
		keyof ISpinnerSVGPathTrackAttrs
	>;
}

Spinner.SVG.Path = {} as SpinnerSVGPath;

/**
 * [Spinner.SVG.Path.Track]
 */

interface ISpinnerSVGPathTrackProps {}

interface ISpinnerSVGPathTrackAttrs extends ISpinnerSVGPathTrackProps {}

const SPINNER_SVG_PATH_HEAD_TRACK = Protocol.bind("scheme", {
	[Protocol.Scheme.DARK]: Protocol.Color.BLACK_2,
	[Protocol.Scheme.LIGHT]: Protocol.Color.BLACK_4,
});

Spinner.SVG.Path.Track = styled(Spinner.SVG.Shared.Path).attrs(
	(props: ISpinnerSVGPathTrackProps): ISpinnerSVGPathTrackAttrs => ({
		...props,
	}),
)`
	stroke: ${SPINNER_SVG_PATH_HEAD_TRACK};
`;

/**
 * [Spinner.SVG.Path.Head]
 */

interface ISpinnerSVGPathHeadProps {}

interface ISpinnerSVGPathHeadAttrs extends ISpinnerSVGPathHeadProps {}

const SPINNER_SVG_PATH_HEAD_HEAD = Protocol.bind("scheme", {
	[Protocol.Scheme.DARK]: Protocol.Color.BLACK_3,
	[Protocol.Scheme.LIGHT]: Protocol.Color.BLACK_5,
});

// TODO (sam): Add intent / color injection
Spinner.SVG.Path.Head = styled("path").attrs(
	(props: ISpinnerSVGPathHeadProps): ISpinnerSVGPathHeadAttrs => ({
		...props,
	}),
)`
	stroke: ${SPINNER_SVG_PATH_HEAD_HEAD};
	stroke-linecap: round;
	transform-origin: center;
	transition: stroke-dashoffset 200ms ${Protocol.TRANSITION_EASE};
`;
