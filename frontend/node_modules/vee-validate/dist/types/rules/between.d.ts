import { RuleParamSchema, StringOrNumber } from '../types';
declare const validate: (value: StringOrNumber | StringOrNumber[], { min, max }?: Record<string, any>) => boolean;
declare const params: RuleParamSchema[];
export { validate, params };
declare const _default: {
    validate: (value: string | number | (string | number)[], { min, max }?: Record<string, any>) => boolean;
    params: RuleParamSchema[];
};
export default _default;
