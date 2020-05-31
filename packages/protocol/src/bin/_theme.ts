import * as Constants from "~/constants";

interface Binds {
	device: typeof Constants.Device;
	scheme: typeof Constants.Scheme;
}

export interface Theme {
	binds: Binds;
	alignments: typeof Constants.Alignment;
	boundaries: typeof Constants.Boundary;
	breakpoints: typeof Constants.Breakpoint;
	colors: typeof Constants.Color;
	devices: typeof Constants.Device;
	elevations: typeof Constants.Elevation;
	intents: typeof Constants.Intent;
	keys: typeof Constants.Key;
	positions: typeof Constants.Position;
	schemes: typeof Constants.Scheme;
	sizes: typeof Constants.Size;
	spaces: typeof Constants.Space;
};

/** Default theme values for root `styled-compoents` <ThemeProvider> */
export const Theme = Object.freeze({
	binds: {
		device: Constants.Device.DESKTOP,
		scheme: Constants.Scheme.DARK,
	},
	alignments: Constants.Alignment,
	boundaries: Constants.Boundary,
	breakpoints: Constants.Breakpoint,
	colors: Constants.Color,
	devices: Constants.Device,
	elevations: Constants.Elevation,
	intents: Constants.Intent,
	keys: Constants.Key,
	positions: Constants.Position,
	schemes: Constants.Scheme,
	sizes: Constants.Size,
	spaces: Constants.Space,
});
