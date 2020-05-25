import * as React from "react";
import * as Knobs from "@storybook/addon-knobs";
import * as Actions from "@storybook/addon-actions";

import * as Component from "./icon";

export default {
	title: "Icon",
	component: Component.Icon,
	decorators: [Knobs.withKnobs],
};

export const interactive = () => {
	return <Component.Icon />;
};
