import * as React from "react";
import * as Knobs from "@storybook/addon-knobs";
import * as Actions from "@storybook/addon-actions";

import * as Component from "./divider";

export default {
	title: "Divider",
	component: Component.Divider,
	decorators: [Knobs.withKnobs],
};

export const interactive = () => {
	return <Component.Divider />;
};
