import { ExternalDocument, ExternalTouchEvent, ListenerConfig } from "./types";
export declare function addEventListener<K extends keyof ExternalTouchEvent>(event: K, listener: (this: HTMLElement, ev: ExternalTouchEvent[K]) => any, options?: boolean | AddEventListenerOptions | ListenerConfig): void;
declare let document: ExternalDocument;
export default document;
export * from "./types";
export * from "./wrap/wrap";
