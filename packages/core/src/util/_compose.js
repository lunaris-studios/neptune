export var compose = function (fn1) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (prevFn, nextFn) { return function (value) { return prevFn(nextFn(value)); }; }, fn1);
};
//# sourceMappingURL=_compose.js.map