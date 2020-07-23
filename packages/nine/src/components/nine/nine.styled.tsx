import * as Protocol from "@neptune/protocol";
import * as SC from "styled-components";

import * as Component from "./nine";

// re-import `styled-components` development mode DOM classnames.
import styled from "styled-components";

/**
 * Table of Contents
 *
 * [Nine]
 */

/**
 * [Nine]
 * - [Nine.Container(WRAPPER)]
 * - - [Nine.Row(WRAPPER)(MAP<3>)]
 * - - - [Nine.Section(ELEMENT)(MAP<3>)]
 */

interface Nine {
	Container: SC.StyledComponent<
		"div",
		any,
		INineContainerAttrs,
		keyof INineContainerAttrs
	>;
	Row: SC.StyledComponent<"div", any, INineRowAttrs, keyof INineRowAttrs>;

	StubImage: SC.StyledComponent<
		"img",
		any,
		INineStubImageAttrs,
		keyof INineStubImageAttrs
	>;
	Section: SC.StyledComponent<"div", any, INineSectionAttrs, keyof INineSectionAttrs>;
}

export const Nine = {} as Nine;

/**
 * [Nine.Container]
 */

interface INineContainerProps
	extends SC.ThemeProps<SC.DefaultTheme>,
		Component.INineDimensions {}

interface INineContainerAttrs extends INineContainerProps {}

Nine.Container = styled("div").attrs(
	(props: INineContainerProps): INineContainerAttrs => ({
		...props,
	}),
)`
	height: ${(props) =>
		props.height != null
			? Protocol.Snippets.value(props.height, Protocol.Unit.PX)
			: "auto"};
	width: ${(props) =>
		props.width != null
			? Protocol.Snippets.value(props.width, Protocol.Unit.PX)
			: "auto"};

	display: grid;
	grid-auto-columns: auto;
	grid-auto-rows: auto;
	grid-template-areas: 
		"${Component.Coordinate.NORTH_WEST} ${Component.Coordinate.NORTH} ${
	Component.Coordinate.NORTH_EAST
}"
		"${Component.Coordinate.WEST} ${Component.Coordinate.CENTER} ${Component.Coordinate.EAST}"
		"${Component.Coordinate.SOUTH_WEST} ${Component.Coordinate.SOUTH} ${
	Component.Coordinate.SOUTH_EAST
}";
`;

/**
 * [Nine.Row]
 */

interface INineRowProps extends SC.ThemeProps<SC.DefaultTheme> {}

interface INineRowAttrs extends INineRowProps {}

Nine.Row = styled("div").attrs(
	(props: INineRowProps): INineRowAttrs => ({
		...props,
	}),
)``;

/**
 * [Nine.StubImage]
 */

interface INineStubImageProps extends SC.ThemeProps<SC.DefaultTheme> {}

interface INineStubImageAttrs extends INineStubImageProps {}

Nine.StubImage = styled("img").attrs(
	(props: INineStubImageProps): INineStubImageAttrs => ({
		...props,
	}),
)`
	display: none;
`;

/**
 * [Nine.Section]
 */

interface INineSectionProps extends SC.ThemeProps<SC.DefaultTheme> {
	/**
	 * An array of coordinates that Inidicates the cardinal position  9-slice section
	 * on the surface.
	 */
	coordinates: Component.Coordinate;

	/**
	 * Used to indicated whether or not a section is a corner, as well as the diameter
	 * that that corner section should be.
	 */
	corner: Component.INineProps["corner"];

	/**
	 * Image of the 9-slice surface.
	 */
	image: Component.INineProps["image"];

	/**
	 * Height & width of the 9-slice image
	 */
	imageSize: Component.INineState["imageSize"];
}

interface INineSectionAttrs extends INineSectionProps {
	dimensions: ReturnType<typeof getSectionDimensions>;
	backgroundImagePosition: ReturnType<typeof getSectionBackgroundImagePosition>;
}

interface INineSectionBackgroundImagePosition {
	x: Nullable<string>;
	y: Nullable<string>;
}

Nine.Section = styled("div").attrs(
	(props: INineSectionProps): INineSectionAttrs => ({
		...props,
		dimensions: getSectionDimensions(props.coordinates, props.corner),
		backgroundImagePosition: getSectionBackgroundImagePosition(
			props.coordinates,
			props.corner,
		),
	}),
)`
	${Protocol.Snippets.debug()}

	height: ${(props) =>
		props.dimensions.height != null ? props.dimensions.height : "auto"};
	width: ${(props) => (props.dimensions.width != null ? props.dimensions.width : "auto")};
	
	grid-area: ${(props) => props.coordinates};

	background-image: ${(props) => props.image};
	background-position-x: ${(props) =>
		props.backgroundImagePosition.x != null ? props.backgroundImagePosition.x : "auto"};
	background-position-y: ${(props) =>
		props.backgroundImagePosition.y != null ? props.backgroundImagePosition.y : "auto"};
`;

function getSectionDimensions(
	coordinates: Component.Coordinate,
	corner: Component.INineProps["corner"],
): Component.INineDimensions {
	let dimensions = {} as Component.INineDimensions;

	const cornerPx = Protocol.Snippets.value(corner, Protocol.Unit.PX);

	switch (coordinates) {
		/** Corners */
		case Component.Coordinate.NORTH_WEST:
		case Component.Coordinate.NORTH_EAST:
		case Component.Coordinate.SOUTH_WEST:
		case Component.Coordinate.SOUTH_WEST:
			dimensions = Object.freeze<Component.INineDimensions>({
				height: cornerPx,
				width: cornerPx,
			});
			break;

		/** Top & Bottom */

		case Component.Coordinate.NORTH:
		case Component.Coordinate.SOUTH:
			dimensions = Object.freeze<Component.INineDimensions>({
				height: cornerPx,
				width: null,
			});
			break;

		/** Left & Right */

		case Component.Coordinate.EAST:
		case Component.Coordinate.WEST:
			dimensions = Object.freeze<Component.INineDimensions>({
				height: null,
				width: cornerPx,
			});
			break;

		/** Center */

		case Component.Coordinate.CENTER:
			dimensions = Object.freeze<Component.INineDimensions>({
				height: null,
				width: null,
			});
			break;
		default:
			break;
	}

	return dimensions;
}

function getSectionBackgroundImagePosition(
	coordinates: Component.Coordinate,
	corner: Component.INineProps["corner"],
): INineSectionBackgroundImagePosition {
	const backgroundPosition: INineSectionBackgroundImagePosition = {
		x: null,
		y: null,
	};

	const cornerPx = Protocol.Snippets.value(corner, Protocol.Unit.PX);

	switch (coordinates) {
		case Component.Coordinate.NORTH:
			backgroundPosition.x = "left";
			backgroundPosition.y = `top ${cornerPx}`;
			break;

		case Component.Coordinate.SOUTH:
			backgroundPosition.x = "center";
			backgroundPosition.y = `bottom ${cornerPx}`;
			break;

		case Component.Coordinate.EAST:
			backgroundPosition.x = "right";
			backgroundPosition.y = "center";
			break;

		case Component.Coordinate.WEST:
			backgroundPosition.x = "left";
			backgroundPosition.y = "center";
			break;

		case Component.Coordinate.CENTER:
			break;

		case Component.Coordinate.NORTH_WEST:
			backgroundPosition.x = `left ${cornerPx}`;
			backgroundPosition.y = `top ${cornerPx}`;
			break;

		case Component.Coordinate.NORTH_EAST:
			backgroundPosition.x = `right ${cornerPx}`;
			backgroundPosition.y = `top ${cornerPx}`;
			break;

		case Component.Coordinate.SOUTH_EAST:
			backgroundPosition.x = `right ${cornerPx}`;
			backgroundPosition.y = `bottom ${cornerPx}`;
			break;

		case Component.Coordinate.SOUTH_WEST:
			backgroundPosition.x = `left ${cornerPx}`;
			backgroundPosition.y = `bottom ${cornerPx}`;
			break;

		default:
			break;
	}

	return backgroundPosition;
}
