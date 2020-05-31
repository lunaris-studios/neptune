import * as React from "react";
import * as Knobs from "@storybook/addon-knobs";
import { Divider } from "./divider";
export default {
    title: "Divider",
    component: Divider,
    decorators: [Knobs.withKnobs],
};
export var interactive = function () {
    return React.createElement(Divider, null);
};
export var Vertical = function () {
    return (React.createElement("div", { style: { display: "flex", justifyContent: "column" } },
        React.createElement("div", null),
        React.createElement(Divider, null),
        React.createElement("div", null)));
};
//# sourceMappingURL=divider.story.js.map