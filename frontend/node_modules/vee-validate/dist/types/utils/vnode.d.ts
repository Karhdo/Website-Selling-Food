import Vue, { VNode, VNodeDirective } from 'vue';
export declare const isTextInput: (vnode: VNode) => boolean;
export declare function findModel(vnode: VNode): VNodeDirective | undefined;
export declare function findValue(vnode: VNode): {
    value: any;
} | undefined;
export declare function findInputNodes(vnode: VNode | VNode[]): VNode[];
export declare function findModelConfig(vnode: VNode): {
    prop: string;
    event: string;
} | null;
export declare function mergeVNodeListeners(obj: any, eventName: string, handler: Function): void;
export declare function addVNodeListener(vnode: VNode, eventName: string, handler: Function): void;
export declare function getInputEventName(vnode: VNode, model?: VNodeDirective): string;
export declare function isHTMLNode(node: VNode): boolean;
export declare function normalizeSlots(slots: any, ctx: Vue): VNode[];
export declare function resolveRules(vnode: VNode): {
    [x: string]: any;
};
export declare function normalizeChildren(context: Vue, slotProps: any): VNode[];
