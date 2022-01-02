import { RuleParamSchema } from '../types';
declare const validate: (files: File | File[], { size }: Record<string, any>) => boolean;
declare const params: RuleParamSchema[];
export { validate, params };
declare const _default: {
    validate: (files: File | File[], { size }: Record<string, any>) => boolean;
    params: RuleParamSchema[];
};
export default _default;
