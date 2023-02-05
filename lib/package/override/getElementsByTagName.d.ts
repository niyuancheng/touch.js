import { ExternalHTMLElementTagNameMap, ExternalSVGElementTagNameMap } from "../types";
export declare function getElementsByTagName<K extends keyof ExternalHTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<ExternalHTMLElementTagNameMap[K]>;
export declare function getElementsByTagName<K extends keyof ExternalSVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<ExternalSVGElementTagNameMap[K]>;
