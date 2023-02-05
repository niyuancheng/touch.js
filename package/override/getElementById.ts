import { addEventListener } from "..";
import { ExternalHTMLElement } from "../types";

let fn2 = Document.prototype.getElementById;

export function getElementById(elementId: string): ExternalHTMLElement | null {
    let dom = fn2.call(window.document, elementId) || null;
    if(dom === null) return null;
    if(dom.__proto__ instanceof HTMLElement) {
        let proto = Object.create(dom.__proto__);
        proto.addEventListener = addEventListener;
        Object.setPrototypeOf(dom,proto);
    } else {
        // do nothing    
    }
    return dom;
}
