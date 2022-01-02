import { Locator } from '../types';
/**
 * Normalizes the given rules expression.
 */
export declare function normalizeRules(rules: any): {
    [x: string]: any;
};
/**
 * Parses a rule string expression.
 */
export declare const parseRule: (rule: string) => {
    name: string;
    params: string[];
};
export declare function extractLocators(params: Record<string, string> | string[]): (string | Locator)[];
