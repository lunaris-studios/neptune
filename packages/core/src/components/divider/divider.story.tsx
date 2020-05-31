import * as React from "react";
import * as Knobs from "@storybook/addon-knobs";
import * as Actions from "@storybook/addon-actions";

import { Divider } from "./divider";

export default {
	title: "Divider",
	component: Divider,
	decorators: [Knobs.withKnobs],
};

export const interactive = () => {
	return <Divider />;
};

export const Vertical = () => {
	return (
		<div style={{ display: "flex", justifyContent: "column" }}>
			<div />
			<Divider />
			<div />
		</div>
	)
}
