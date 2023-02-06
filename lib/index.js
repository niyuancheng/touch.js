import { createElement } from "./override/createElement";
import { getElementsByClassName } from "./override/getElementsByClassName";
import { getElementById } from "./override/getElementById";
import { getElementsByTagName } from "./override/getElementsByTagName";
import { singleOrDoubleOrLongTap } from "./events/SingleOrDoubleOrLongTap";
import { moveOrSwipe } from "./events/MoveOrSwipe";
import { fastSlide } from "./events/FastSlide";
import { pintchOrRotate } from "./events/PintchOrRotate";
const fn = HTMLElement.prototype.addEventListener;
export function addEventListener(event, listener, options) {
    let ctx = this;
    switch (event) {
        case "singleTap":
        case "doubleTap":
        case "longTap":
            singleOrDoubleOrLongTap(ctx, event, listener, options);
            break;
        case "swipe":
        case "swipeLeft":
        case "swipeRight":
        case "swipeTop":
        case "swipeDown":
        case "move":
        case "moveLeft":
        case "moveRight":
        case "moveTop":
        case "moveDown":
            moveOrSwipe(ctx, event, listener, options);
            break;
        case "fastSlide":
        case "fastSlideLeft":
        case "fastSlideRight":
        case "fastSlideTop":
        case "fastSlideDown":
            fastSlide(ctx, event, listener, options);
            break;
        case "pintch":
        case "pintchOver":
        case "rotate":
            pintchOrRotate(ctx, event, listener, options);
            break;
        default:
            if (ctx === document.body) {
                fn.call(window.document.body, event, listener, options);
            }
            else {
                fn.call(ctx, event, listener, options);
            }
    }
}
let body = Object.create(window.document.body);
body.addEventListener = addEventListener;
let document = { body: body };
document.createElement = createElement;
document.getElementById = getElementById;
document.getElementsByClassName = getElementsByClassName;
document.getElementsByTagName = getElementsByTagName;
export default document;
export * from "./types";
export * from "./wrap/wrap";
//# sourceMappingURL=index.js.map