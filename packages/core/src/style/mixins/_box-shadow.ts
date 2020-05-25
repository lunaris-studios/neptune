import * as Polished from "polished";
import { css } from "styled-components";

import * as Style from "~/style";

export enum BoxShadow {
	DEFAULT = "DEFAULT",
	ELEVATION = "ELEVATION",
}

interface IBoxShadowProps {
	/**
	 * Indicates the variant of custom box shadow
	 * to use.
	 * @default BoxShadow.DEFAULT
	 */
	type: BoxShadow;
}

export const boxShadowDefaultProps = Object.freeze<IBoxShadowProps>({
	type: BoxShadow.DEFAULT,
});

export function boxShadow(props: IBoxShadowProps = boxShadowDefaultProps) {
	const { type } = props;
	switch (type) {
		case BoxShadow.ELEVATION:
			return boxShadowElevation;
		default:
			return boxShadowDefault;
	}
}

const boxShadowDefault = Style.bind(Style.Theme.MODE, {
	[Style.Mode.DARK]: css`box-shadow: 0 0 0 1px ${Style.Color.BLACK_5};`,
	[Style.Mode.LIGHT]: css`box-shadow: 0 0 0 1px ${Style.Color.BLACK_4};`,
});

const BORDER_SHADOW_OPACITY_LIGHT = 0.1;
const DROP_SHADOW_OPACITY_LIGHT = 0.2;

const BORDER_SHADOW_OPACITY_DARK = BORDER_SHADOW_OPACITY_LIGHT * 2;
const DROP_SHADOW_OPACITY_DARK = DROP_SHADOW_OPACITY_LIGHT * 2;

const boxShadowElevation = Style.bind.variants(Style.Theme.MODE, "elevation", {
	[Style.Elevation.ZERO]: {
		[Style.Mode.LIGHT]: css`
			box-shadow: 0 0 0 1px ${Style.Color.BLACK_5}, 0 0 0 ${Style.Color.TRANSPARENT}, 0 0 0 ${Style.Color.TRANSPARENT};
		`,
		[Style.Mode.DARK]: css`
			box-shadow: 0 0 0 1px ${Style.Color.BLACK_4}, 0 0 0 ${Style.Color.TRANSPARENT}, 0 0 0 ${Style.Color.TRANSPARENT};
		`,
	},
	[Style.Elevation.ONE]: {
		[Style.Mode.LIGHT]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_LIGHT)},
				0 0 0 ${Style.Color.TRANSPARENT},
				0 1px 1px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)};
		`,
		[Style.Mode.DARK]: css`
		box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_DARK)},
			0 0 0 ${Style.Color.TRANSPARENT},
			0 1px 1px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)};
	`,
	},
	[Style.Elevation.TWO]: {
		[Style.Mode.LIGHT]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_LIGHT)},
				0 1px 1px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)},
				0 2px 6px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)};
		`,
		[Style.Mode.DARK]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_DARK)},
				0 1px 1px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)},
				0 2px 6px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)};
		`,
	},
	[Style.Elevation.THREE]: {
		[Style.Mode.LIGHT]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_LIGHT)},
				0 2px 4px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)},
				0 8px 24px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)};
		`,
		[Style.Mode.DARK]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_DARK)},
				0 2px 4px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)},
				0 8px 24px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)};
		`,
	},
	[Style.Elevation.FOUR]: {
		[Style.Mode.LIGHT]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_LIGHT)},
				0 4px 8px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)},
				0 18px 46px 6px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_LIGHT)};
		`,
		[Style.Mode.DARK]: css`
			box-shadow: 0 0 0 1px ${Polished.rgba(Style.Color.BLACK_1, BORDER_SHADOW_OPACITY_DARK)},
				0 4px 8px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)},
				0 18px 46px 6px ${Polished.rgba(Style.Color.BLACK_1, DROP_SHADOW_OPACITY_DARK)};
		`,
	},
});
