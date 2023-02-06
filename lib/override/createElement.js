import { addEventListener } from "..";
let fn1 = Document.prototype.createElement;
// 此函数为重载实现
export function createElement(tagName, options) {
    let dom = fn1.call(window.document, tagName, options);
    let prototype = dom.__proto__;
    let proto = Object.create(prototype);
    proto.addEventListener = addEventListener;
    Object.setPrototypeOf(dom, proto);
    Object.setPrototypeOf(proto, prototype);
    return dom;
}
//# sourceMappingURL=createElement.js.map