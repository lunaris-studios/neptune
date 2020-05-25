import * as Style from "~/style";

/** */
export function value(value: Style.TS.Value) {
	if (typeof value === "number") {
		value = `${value}px`;
	}

	return value;
}
