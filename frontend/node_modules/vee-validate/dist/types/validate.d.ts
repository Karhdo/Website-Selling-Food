import { ValidationResult } from './types';
interface ValidationOptions {
    name?: string;
    values?: Record<string, any>;
    names?: Record<string, string>;
    bails?: boolean;
    skipIfEmpty?: boolean;
    isInitial?: boolean;
    customMessages?: Record<string, string>;
}
/**
 * Validates a value against the rules.
 */
export declare function validate(value: any, rules: string | Record<string, any>, options?: ValidationOptions): Promise<ValidationResult>;
export {};
