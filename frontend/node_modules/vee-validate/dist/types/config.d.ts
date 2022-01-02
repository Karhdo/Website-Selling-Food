import { InteractionModeFactory } from './modes';
import { ValidationMessageTemplate } from './types';
declare type ValidationClass = string | string[] | undefined;
export interface ValidationClassMap {
    touched?: ValidationClass;
    untouched?: ValidationClass;
    valid?: ValidationClass;
    invalid?: ValidationClass;
    pristine?: ValidationClass;
    dirty?: ValidationClass;
    [k: string]: ValidationClass;
}
export interface VeeValidateConfig {
    bails: boolean;
    useConstraintAttrs: boolean;
    mode: string | InteractionModeFactory;
    classes: ValidationClassMap;
    defaultMessage: ValidationMessageTemplate;
    skipOptional: boolean;
}
export declare let currentConfig: VeeValidateConfig;
export declare const getConfig: () => VeeValidateConfig;
export declare const setConfig: (newConf: Partial<VeeValidateConfig>) => void;
export declare const configure: (cfg: Partial<VeeValidateConfig>) => void;
export {};
