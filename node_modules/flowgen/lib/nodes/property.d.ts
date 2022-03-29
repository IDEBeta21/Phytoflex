import type { RawNode } from "./node";
import type { FunctionDeclaration, ClassDeclaration, InterfaceDeclaration, TypeAliasDeclaration, EnumDeclaration, VariableStatement, JSDoc } from "typescript";
import Node from "./node";
declare type PropertyNode = ({
    jsDoc: Array<JSDoc>;
} & FunctionDeclaration) | ({
    jsDoc: Array<JSDoc>;
} & ClassDeclaration) | ({
    jsDoc: Array<JSDoc>;
} & InterfaceDeclaration) | ({
    jsDoc: Array<JSDoc>;
} & TypeAliasDeclaration) | ({
    jsDoc: Array<JSDoc>;
} & EnumDeclaration) | ({
    jsDoc: Array<JSDoc>;
} & VariableStatement);
export default class Property extends Node<PropertyNode> {
    name: string;
    skip: boolean;
    constructor(node: RawNode);
    skipNode(): void;
    print(namespace?: string, mod?: string): string;
}
export {};
