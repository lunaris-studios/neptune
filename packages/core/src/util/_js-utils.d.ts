/**
 * Returns the difference in length between two arrays. A `null` argument is
 * considered an empty list. The return value will be positive if `a` is longer
 * than `b`, negative if the opposite is true, and zero if their lengths are
 * equal.
 */
export declare function arrayLengthCompare(a?: any[], b?: any[]): number;
/**
 * Returns true if the two numbers are within the given tolerance of each other.
 * This is useful to correct for floating point precision issues, less useful
 * for integers.
 */
export declare function approxEqual(a: number, b: number, tolerance?: number): boolean;
/** Returns the number of decimal places in the given number. */
export declare function countDecimalPlaces(num: number): number;
