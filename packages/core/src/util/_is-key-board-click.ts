import * as Protocol from "@nucleus/protocol";

/** Returns whether the key code is `enter` or `space`, the two keys that can click a button. */
export function isKeyboardClick(keyCode: number) {
	return keyCode === Protocol.Key.ENTER || keyCode === Protocol.Key.SPACE;
}
