import * as Style from "~/style";

const ns = Style.Classes.NS;

export const SPINNER_WARN_VALUE_OUT_OF_BOUNDS = `${ns} <Spinner> props.value is out of bounds. Values below 0 or above 1 will be interpreted as 0 or 1 respectively. `