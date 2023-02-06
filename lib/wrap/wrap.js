export function wrap(dom) {
    let prototype = dom.__proto__;
    let proto = Object.create(prototype);
    proto.addEventListener = addEventListener;
    Object.setPrototypeOf(dom, proto);
    Object.setPrototypeOf(proto, prototype);
    return dom;
}
//# sourceMappingURL=wrap.js.map