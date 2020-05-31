import * as Protocol from "@nucleus/protocol";
/** Returns whether the key code is `enter` or `space`, the two keys that can click a button. */
export function isKeyboardClick(keyCode) {
    return keyCode === Protocol.Key.ENTER || keyCode === Protocol.Key.SPACE;
}
//# sourceMappingURL=_is-key-board-click.js.map