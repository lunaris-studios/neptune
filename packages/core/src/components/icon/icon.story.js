import * as React from "react";
import * as Knobs from "@storybook/addon-knobs";
import * as Component from "./icon";
export default {
    title: "Icon",
    component: Component.Icon,
    decorators: [Knobs.withKnobs],
};
export var interactive = function () {
    return React.createElement(Component.Icon, null);
};
//# sourceMappingURL=icon.story.js.map