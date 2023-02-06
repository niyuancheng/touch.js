import { ExternalDocument, ExternalTouchEvent } from "./types";
export declare function addEventListener<K extends keyof ExternalTouchEvent>(event: K, listener: (this: HTMLElement, ev: ExternalTouchEvent[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare let document: ExternalDocument;
export default document;
