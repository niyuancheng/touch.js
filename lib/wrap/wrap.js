import { addEventListener } from "..";
export function wrap(dom) {
    if (dom.__proto__.addEventListener === addEventListener) {
        return dom;
    }
    let prototype = dom.__proto__;
    let proto = Object.create(prototype);
    proto.addEventListener = addEventListener;
    Object.setPrototypeOf(dom, proto);
    Object.setPrototypeOf(proto, prototype);
    return dom;
}
//# sourceMappingURL=wrap.js.map