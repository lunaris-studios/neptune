/**
 * Generic interface defining constructor types, such as classes. This is used to type the class
 * itself in meta-programming situations such as decorators.
 */
export declare type Constructor<T> = new (...args: any[]) => T;
