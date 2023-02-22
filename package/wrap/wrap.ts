import { addEventListener } from "..";
import { ExternalHTMLElement } from "../types";

export function wrap(dom: HTMLElement): ExternalHTMLElement {
    if((dom as any).__proto__.addEventListener === addEventListener) {
        return dom;
    }
    let prototype = (dom as any).__proto__;
    let proto = Object.create(prototype);
    proto.addEventListener = addEventListener;
    Object.setPrototypeOf(dom, proto);
    Object.setPrototypeOf(proto, prototype);

    return dom as ExternalHTMLElement;
}