export declare function findIndex<T>(arrayLike: ArrayLike<T>, predicate: (item: T, idx: number) => boolean): number;
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
export declare function find<T>(arrayLike: ArrayLike<T>, predicate: (item: T, idx: number) => boolean): T | undefined;
export declare function includes(collection: any[] | string, item: any): boolean;
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
export declare function toArray<T>(arrayLike: ArrayLike<T>): T[];
export declare function values<T>(obj: {
    [x: string]: T;
}): T[];
export declare function merge(target: any, source: any): any;
