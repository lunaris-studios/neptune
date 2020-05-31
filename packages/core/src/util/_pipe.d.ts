export declare const pipe: <T extends any[], R>(fn1: (...args: T) => R, ...fns: ((a: R) => R)[]) => (...args: T) => R;
