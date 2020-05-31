var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as Protocol from "@nucleus/protocol";
import MidgardRegular from "~/assets/fonts/kvc-midgard-regular.otf";
import MidgardSymbols from "~/assets/fonts/kvc-midgard-symbols.otf";
// re-import `styled-components` development mode DOM classnames.
import { createGlobalStyle } from "styled-components";
export var Head = {};
/**
 * [Head.Global]
 */
Head.Global = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  body {\n    ", "\n    min-height: 100vh;\n    /** mobile viewport bug fix*/\n    min-height: -webkit-fill-available;\n  }\n"], ["\n  ", "\n  ", "\n\n  body {\n    ", "\n    min-height: 100vh;\n    /** mobile viewport bug fix*/\n    min-height: -webkit-fill-available;\n  }\n"])), Protocol.Snippets.normalize(), Protocol.Snippets.miniReset(), Protocol.Snippets.page());
/**
 * [Head.Fonts]
 */
Head.Fonts = createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ",
    "\n\n  ",
    "\n"])), Protocol.Snippets.fontFace({
    fontFamily: "KVC Midgard",
    fontFilePath: MidgardRegular,
    fileFormats: ["otf"],
    fontWeight: "regular",
}), Protocol.Snippets.fontFace({
    fontFamily: "KVC Midgard",
    fontFilePath: MidgardSymbols,
    fileFormats: ["otf"],
    fontWeight: "regular",
}));
var templateObject_1, templateObject_2;
//# sourceMappingURL=head.styled.js.map