import * as React from "react";

import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { NucleusProvider } from "../src/bin/_nucleus-provider";
import results from "../coverage/.jest-test-results.json";

addDecorator((story) => <NucleusProvider>{story()}</NucleusProvider>);

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
	backgrounds: [
		{ name: "light", value: "#ffffff", default: true },
		{ name: "dark", value: "#aaaaaa" },
	],
});
addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});
addDecorator(
	withTests({
		results,
	}),
);
