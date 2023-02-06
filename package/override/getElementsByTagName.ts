import { addEventListener } from "..";
import { ExternalElement, ExternalHTMLElement, ExternalHTMLElementTagNameMap, ExternalSVGElementTagNameMap } from "../types";
import { createElement } from "./createElement";

let fn3 = Document.prototype.getElementsByTagName;

export function getElementsByTagName<K extends keyof ExternalHTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<ExternalHTMLElementTagNameMap[K]>;
export function getElementsByTagName<K extends keyof ExternalSVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<ExternalSVGElementTagNameMap[K]>;
export function getElementsByTagName(qualifiedName: string): HTMLCollectionOf<ExternalElement> {
    let doms = fn3.call(window.document, qualifiedName);
    doms.forEach(dom => {
        if(dom.__proto__ instanceof HTMLElement) {
            let proto = Object.create(dom.__proto__);
            proto.addEventListener = addEventListener;
            Object.setPrototypeOf(dom,proto);
        } else {
            // do nothing    
        }
    })
    return doms;
}
