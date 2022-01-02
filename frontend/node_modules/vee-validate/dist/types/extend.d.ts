import { ValidationRule, ValidationRuleSchema, RuleParamConfig } from './types';
interface NormalizedRuleSchema extends ValidationRuleSchema {
    params?: RuleParamConfig[];
}
export declare class RuleContainer {
    static extend(name: string, schema: ValidationRuleSchema): void;
    static isLazy(name: string): boolean;
    static isRequireRule(name: string): boolean;
    static getRuleDefinition(ruleName: string): NormalizedRuleSchema;
}
/**
 * Adds a custom validator to the list of validation rules.
 */
export declare function extend(name: string, schema: ValidationRule): void;
export {};
