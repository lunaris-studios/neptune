export var pipe = function (fn1) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    var piped = fns.reduce(function (prevFn, nextFn) { return function (value) { return nextFn(prevFn(value)); }; }, function (value) { return value; });
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return piped(fn1.apply(void 0, args));
    };
};
//# sourceMappingURL=_pipe.js.map