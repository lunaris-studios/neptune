/** Returns whether the value is a function. Acts as a type guard. */
// tslint:disable-next-line:ban-types
export function isFunction(value) {
    return typeof value === "function";
}
// tslint:disable-next-line:ban-types
export function safeInvoke(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
    return undefined;
}
// tslint:disable-next-line:ban-types
export function safeInvokeOrValue(funcOrValue) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return isFunction(funcOrValue) ? funcOrValue.apply(void 0, args) : funcOrValue;
}
//# sourceMappingURL=_function-utils.js.map