import type { SourceFile } from "typescript";
import type { Options } from "../options";
declare const _default: {
    reset: (options?: Options) => void;
    compile: (args_0: SourceFile) => string;
    setChecker(typeChecker: any): void;
    getTransformers(options?: Options): ((ctx: import("typescript").TransformationContext) => import("typescript").Transformer<any>)[];
    compileTest: (path: string, target: string) => void;
    compileDefinitionString: (string: string, options?: Options) => string;
    compileDefinitionFile: (path: string, options?: Options, mapSourceCode?: (source: string | undefined, fileName: string) => string | undefined) => string;
    compileDefinitionFiles: (paths: string[], options?: Options, mapSourceCode?: (source: string | undefined, fileName: string) => string | undefined) => Array<[string, string]>;
};
/**
 * Compiles typescript files
 */
export default _default;
