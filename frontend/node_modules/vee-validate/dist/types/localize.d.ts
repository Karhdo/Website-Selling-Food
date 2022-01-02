import { ValidationMessageTemplate } from './types';
interface PartialI18nDictionary {
    name?: string;
    messages?: Record<string, ValidationMessageTemplate>;
    names?: Record<string, string>;
    fields?: Record<string, Record<string, ValidationMessageTemplate>>;
}
declare type RootI18nDictionary = Record<string, PartialI18nDictionary>;
declare function localize(dictionary: RootI18nDictionary): void;
declare function localize(locale: string, dictionary?: PartialI18nDictionary): void;
export { localize };
