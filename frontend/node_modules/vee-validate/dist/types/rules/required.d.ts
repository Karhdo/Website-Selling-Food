import { RuleParamSchema } from '../types';
declare const validate: (value: any, { allowFalse }?: Record<string, any>) => {
    valid: boolean;
    required: boolean;
};
export declare const computesRequired = true;
declare const params: RuleParamSchema[];
export { validate, params };
declare const _default: {
    validate: (value: any, { allowFalse }?: Record<string, any>) => {
        valid: boolean;
        required: boolean;
    };
    params: RuleParamSchema[];
    computesRequired: boolean;
};
export default _default;
