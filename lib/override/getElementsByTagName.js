import { addEventListener } from "..";
let fn3 = Document.prototype.getElementsByTagName;
export function getElementsByTagName(qualifiedName) {
    let doms = fn3.call(window.document, qualifiedName);
    doms.forEach(dom => {
        if (dom.__proto__ instanceof HTMLElement) {
            let proto = Object.create(dom.__proto__);
            proto.addEventListener = addEventListener;
            Object.setPrototypeOf(dom, proto);
        }
        else {
            // do nothing    
        }
    });
    return doms;
}
//# sourceMappingURL=getElementsByTagName.js.map