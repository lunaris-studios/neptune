import * as React from "react";
import * as Knobs from "@storybook/addon-knobs";
import * as Actions from "@storybook/addon-actions";

import { Nine } from "./nine";

import { default as Border } from "~/assets/png/border.png";

export default {
	title: "Nine",
	component: Nine,
	decorators: [Knobs.withKnobs],
};

export const interactive = () => {
	const corner = Knobs.number("Corner Width", 50);
	const height = Knobs.number("Height", 300);
	const width = Knobs.number("Width", 300);

	return <Nine image={Border} corner={corner} height={height} width={width} />;
};
interactive.story = {
	parameters: {
		jest: ["nine.test.tsx"],
	},
};
