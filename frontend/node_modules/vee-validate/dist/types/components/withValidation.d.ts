import { Component } from 'vue';
import { ValidationContext } from './common';
declare type ValidationContextMapper = (ctx: ValidationContext) => Record<string, any>;
declare type ComponentLike = Component | {
    options: any;
};
export declare function withValidation(component: ComponentLike, mapProps?: ValidationContextMapper): Component;
export {};
