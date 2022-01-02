import { RuleParamSchema } from '../types';
declare const validate: (value: string | number | string[], { length }: Record<string, any>) => boolean;
declare const params: RuleParamSchema[];
export { validate, params };
declare const _default: {
    validate: (value: string | number | string[], { length }: Record<string, any>) => boolean;
    params: RuleParamSchema[];
};
export default _default;
