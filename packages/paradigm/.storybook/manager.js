import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

addons.setConfig({
	isFullscreen: false,
	showAddonsPanel: true,
	panelPosition: "right",
	theme: create({
		base: "light",
		brandTitle: "Neptune",
		brandUrl: "https://github.com/lunaris-studios/neptune",
		gridCellSize: 12,
	}),
});
