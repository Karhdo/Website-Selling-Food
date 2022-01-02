export declare function identity<T>(x: T): T;
export declare function debounce(fn: Function, wait?: number, token?: {
    cancelled: boolean;
}): Function;
