import * as ts from "typescript";
import type { Options } from "../options";
export declare function importEqualsTransformer(): (ctx: ts.TransformationContext) => ts.Transformer<any>;
export declare function legacyModules(): (ctx: ts.TransformationContext) => ts.Transformer<any>;
export declare function declarationFileTransform(options?: Options): (ctx: ts.TransformationContext) => ts.Transformer<any>;
