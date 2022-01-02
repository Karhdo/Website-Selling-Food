import { RuleParamSchema } from '../types';
declare const validate: (files: File | File[], { width, height }: Record<string, any>) => Promise<boolean>;
declare const params: RuleParamSchema[];
export { validate, params };
declare const _default: {
    validate: (files: File | File[], { width, height }: Record<string, any>) => Promise<boolean>;
    params: RuleParamSchema[];
};
export default _default;
