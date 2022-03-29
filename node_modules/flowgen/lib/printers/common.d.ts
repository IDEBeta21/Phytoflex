import * as ts from "typescript";
import type { RawNode } from "../nodes/node";
export declare const literalType: (node: RawNode) => string;
export declare const typeParameter: (node: ts.TypeParameterDeclaration & {
    withoutDefault: boolean;
}) => string;
export declare const parameter: (param: RawNode) => string;
export declare const methodSignature: (param: RawNode) => string;
export declare const parseTypeReference: (node: RawNode) => string;
export declare const generics: (types?: ReadonlyArray<RawNode> | null, map?: (node: RawNode) => RawNode) => string;
export declare const comment: {
    (...args: any[]): string;
    withEnv<T>(env: T): (...args: any[]) => string;
};
