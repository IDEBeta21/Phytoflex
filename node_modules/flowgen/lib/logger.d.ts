import type { SourceFile } from "typescript";
import type { ErrorMessage } from "./errors/error-message";
export declare function setSourceFile(file: SourceFile): void;
export declare function error(node: any, message: ErrorMessage): void;
