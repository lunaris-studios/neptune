import { css } from "styled-components";

import * as Style from "~/style";

export function borderShadow(alpha: number, color: string = Style.Color.BLACK_1, size: Style.TS.Value = "1px") {
	size = Style.Snippets.value(size);
	color = Style.Snippets.transparentize(alpha, color);

	return `0 0 0 ${size} ${color}`;
}
