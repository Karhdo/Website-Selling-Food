import { ValidationFlags } from './types';
interface ModeContext {
    errors: string[];
    value: any;
    flags: ValidationFlags;
}
export interface InteractionSetting {
    on?: string[];
    debounce?: number;
}
export declare type InteractionModeFactory = (ctx: ModeContext) => InteractionSetting;
export declare const modes: {
    [k: string]: InteractionModeFactory;
};
export declare const setInteractionMode: (mode: string, implementation?: InteractionModeFactory | undefined) => void;
export {};
