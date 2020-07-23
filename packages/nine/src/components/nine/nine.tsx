import * as Neptune from "@neptune/core";
import * as Protocol from "@neptune/protocol";
import * as React from "react";

import * as Styled from "./nine.styled";
import * as Errors from "./nine.errors";

export interface INineProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Squared length reserved for the non-scalable, static corner elements.
	 * of the 9-slice layout.
	 * @default 8;
	 */
	corner: number;

	/**
	 * Height of the surface.
	 * @default 128
	 */
	height: number;

	/**
	 * File path of the image to use for the background of the 9-slice
	 * surface.
	 * @default null
	 */
	image: Nullable<string>;

	/**
	 * Styling to apply to the child element.
	 */
	style?: object;

	/**
	 * HTML tag to use for element.
	 * @default "div"
	 */
	tagName: keyof JSX.IntrinsicElements;

	/**
	 * Width of the surface.
	 * @default 128
	 */
	width: number;
}

export interface INineState {
	imageSize: Nullable<INineDimensions>;
}

export interface INineDimensions {
	height: Nullable<number | string>;
	width: Nullable<number | string>;
}

export enum Coordinate {
	NORTH = "NORTH",
	SOUTH = "SOUTH",
	EAST = "EAST",
	WEST = "WEST",
	NORTH_WEST = "NORTH_WEST",
	NORTH_EAST = "NORTH_EAST",
	SOUTH_WEST = "SOUTH_WEST",
	SOUTH_EAST = "SOUTH_EAST",
	CENTER = "CENTER",
}

const defaultProps = Object.freeze<INineProps>({
	corner: 8,
	height: 128,
	image: null,
	tagName: "div",
	width: 128,
});

export class Nine extends Neptune.AbstractPureComponent<INineProps, INineState> {
	public static displayName = `${Neptune.DISPLAYNAME_PREFIX}.Nine`;

	public constructor(props: INineProps) {
		super(props);
		this.state = { imageSize: null };
		this.onImgLoad = this.onImgLoad.bind(this);
	}

	static readonly defaultProps: INineProps = defaultProps;

	public render() {
		if (this.props.image == null) return null;

		const { children, corner, height, image, tagName, width } = this.props;
		const { imageSize } = this.state;

		const sectionProps = { corner, image, imageSize };

		return (
			<React.Fragment>
				<Styled.Nine.StubImage src={image} onLoad={this.onImgLoad} />
				<Styled.Nine.Container height={height} width={width} as={tagName}>
					{/* Row One */}
					<Styled.Nine.Section coordinates={Coordinate.NORTH_WEST} {...sectionProps} />
					<Styled.Nine.Section coordinates={Coordinate.NORTH} />
					<Styled.Nine.Section coordinates={Coordinate.NORTH_EAST} {...sectionProps} />

					{/* Row Two */}
					<Styled.Nine.Section coordinates={Coordinate.WEST} />
					<Styled.Nine.Section coordinates={Coordinate.CENTER}>
						{children}
					</Styled.Nine.Section>
					<Styled.Nine.Section coordinates={Coordinate.EAST} />

					{/* Row Three */}
					<Styled.Nine.Section coordinates={Coordinate.SOUTH_WEST} {...sectionProps} />
					<Styled.Nine.Section coordinates={Coordinate.SOUTH} />
					<Styled.Nine.Section coordinates={Coordinate.SOUTH_EAST} {...sectionProps} />
				</Styled.Nine.Container>
			</React.Fragment>
		);
	}

	public onImgLoad(event: React.SyntheticEvent<HTMLImageElement, Event>): void {
		const { currentTarget: img } = event;
		this.setState({
			imageSize: {
				height: img.offsetHeight,
				width: img.offsetWidth,
			},
		});
	}

	protected validateProps(props: INineProps): void {
		const { height, image, corner, width } = props;
		if (height == null) {
			console.warn(Errors.WARN_NO_HEIGHT);
		}
		if (image == null) {
			console.error(Errors.ERROR_NO_IMAGE);
		}
		if (corner == null) {
			console.warn(Errors.WARN_NO_CORNER);
		}
		if (width == null) {
			console.warn(Errors.WARN_NO_WIDTH);
		}
	}
}
