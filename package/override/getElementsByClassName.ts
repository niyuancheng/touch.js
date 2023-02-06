import { addEventListener } from "..";
import { createElement } from "./createElement";

let fn3 = Document.prototype.getElementsByClassName;

export function getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
    let doms = fn3.call(window.document,classNames);
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