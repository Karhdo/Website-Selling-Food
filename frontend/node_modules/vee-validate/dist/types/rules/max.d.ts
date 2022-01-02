import { RuleParamSchema, StringOrNumber } from '../types';
declare const validate: (value: StringOrNumber | StringOrNumber[], { length }: Record<string, any>) => boolean;
declare const params: RuleParamSchema[];
export { validate, params };
declare const _default: {
    validate: (value: string | number | (string | number)[], { length }: Record<string, any>) => boolean;
    params: RuleParamSchema[];
};
export default _default;
