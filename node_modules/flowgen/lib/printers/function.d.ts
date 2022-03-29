import type { RawNode } from "../nodes/node";
export declare const functionType: (func: RawNode, dotAsReturn?: boolean) => string;
export declare const functionDeclaration: (nodeName: string, node: RawNode) => string;
