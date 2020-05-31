export function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
//# sourceMappingURL=_can-use-dom.js.map