import { ExternalHTMLElementDeprecatedTagNameMap, ExternalHTMLElementTagNameMap } from "../types";
export declare function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): ExternalHTMLElementTagNameMap[K];
export declare function createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): ExternalHTMLElementDeprecatedTagNameMap[K];
