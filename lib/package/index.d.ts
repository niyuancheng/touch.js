import { ExternalDocument, ExternalTouchEvent } from "./types";
export declare function addEventListener<K extends keyof WindowEventMap>(event: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
export declare function addEventListener<K extends keyof ExternalTouchEvent>(event: K, listener: (this: Window, ev: ExternalTouchEvent[K]) => any): void;
declare let doc: ExternalDocument;
export default doc;
