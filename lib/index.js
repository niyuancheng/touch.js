import { createElement } from "./override/createElement";
import { getElementsByClassName } from "./override/getElementsByClassName";
import { getElementById } from "./override/getElementById";
import { getElementsByTagName } from "./override/getElementsByTagName";
import { computeAngle, computeDistance, computeVectorLen } from "./utils";
const fn = HTMLElement.prototype.addEventListener;
export function addEventListener(event, listener, options) {
    let ctx = this;
    let tapTimer = null;
    let longTapTimer = null;
    let lastTapEndTime = -1;
    function singleOrDoubleOrLongTap() {
        let isMove = false;
        let startTime = 0;
        let isDoubleTap = false;
        let betweenTime = 0;
        ctx.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1)
                return;
            startTime = Date.now();
            if (event === "longTap") {
                longTapTimer = window.setTimeout(() => {
                    // ToDo,触发长按事件
                }, 800);
            }
            // 如果lastTapEndTime不小于0的话则表明上一次也发生过点击事件且上一次的单击事件的监听器还未触发，说明两次点击间隔很短，
            // 但是为了区别是双击还是单击，在第二次点击发生时判断开始点击的时间和上一次点击结束的时间，
            // 如果间隔很短，说明是双击，此时不应该触发单击事件;如果距离上一次点击间隔很长，表明此次点击是单击
            if (lastTapEndTime > 0 && startTime - lastTapEndTime < 150) {
                window.clearTimeout(tapTimer);
                betweenTime = startTime - lastTapEndTime;
                tapTimer = null;
                lastTapEndTime = -1;
                isDoubleTap = true;
            }
        });
        ctx.addEventListener("touchmove", (e) => {
            if (e.touches.length > 1)
                return;
            isMove = true;
            e.preventDefault();
            if (longTapTimer) {
                window.clearTimeout(longTapTimer);
                longTapTimer = null;
            }
        });
        ctx.addEventListener("touchend", (e) => {
            if (e.touches.length > 1)
                return;
            let interval = Date.now() - startTime;
            if (longTapTimer) {
                window.clearTimeout(longTapTimer);
                longTapTimer = null;
            }
            if (interval < 150 && !isMove) {
                if (event === "singleTap" && isDoubleTap === false) {
                    tapTimer = window.setTimeout(() => {
                        let ev = Object.assign(Object.assign({}, e), { interval });
                        if (listener instanceof Function) {
                            listener(ev);
                        }
                        else {
                            listener.handleEvent(ev);
                        }
                    }, 150);
                }
                else if (event === "doubleTap" && isDoubleTap === true) {
                    tapTimer = window.setTimeout(() => {
                        let ev = Object.assign(Object.assign({}, e), { interval: betweenTime });
                        if (listener instanceof Function) {
                            listener(ev);
                        }
                        else {
                            listener.handleEvent(ev);
                        }
                    });
                }
                lastTapEndTime = Date.now();
            }
            isMove = false;
            isDoubleTap = false;
        });
    }
    function moveOrSwipe() {
        let isMove = false;
        let pos = {
            x: 0,
            y: 0,
        };
        let dx = 0, dy = 0;
        ctx.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1)
                return;
            pos.x = e.touches[0].clientX;
            pos.y = e.touches[0].clientY;
        });
        ctx.addEventListener("touchmove", (e) => {
            if (e.touches.length > 1)
                return;
            isMove = true;
            e.preventDefault();
            let x = e.touches[0].clientX;
            let y = e.touches[0].clientY;
            dx = x - pos.x;
            dy = y - pos.y;
            if ((event === "moveLeft" && dx < 0) ||
                (event === "moveRight" && dx > 0) ||
                (event === "moveTop" && dy < 0) ||
                (event === "moveDown" && dy > 0) ||
                event === "move") {
                let ev = Object.assign(Object.assign({}, e), { startPos: pos, deltaX: dx, deltaY: dy });
                if (listener instanceof Function) {
                    listener(ev);
                }
                else {
                    listener.handleEvent(ev);
                }
            }
        });
        ctx.addEventListener("touchend", (e) => {
            if (e.touches.length > 1)
                return;
            let end = {
                x: pos.x + dx,
                y: pos.y + dy,
            };
            if (isMove &&
                ((event === "swipeLeft" && dx < 0) ||
                    (event === "swipeRight" && dx > 0) ||
                    (event === "swipeTop" && dy < 0) ||
                    (event === "swipeDown" && dy > 0) ||
                    event === "swipe")) {
                let ev = Object.assign(Object.assign({}, e), { startPos: pos, endPos: end });
                if (listener instanceof Function) {
                    listener(ev);
                }
                else {
                    listener.handleEvent(ev);
                }
            }
            isMove = false;
        });
    }
    function fastSlide() {
        let lastTime = 0;
        let startTime = 0;
        // 初始的x,y坐标
        let x = 0, y = 0;
        let lastPos = { x: 0, y: 0 };
        let startPos = { x: 0, y: 0 };
        let speed = [];
        ctx.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1)
                return;
            lastTime = Date.now();
            startTime = Date.now();
            startPos = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            };
            lastPos = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            };
            (x = lastPos.x), (y = lastPos.y);
        });
        ctx.addEventListener("touchmove", (e) => {
            if (e.touches.length > 1)
                return;
            e.preventDefault();
            let now = Date.now();
            if (now - lastTime >= 10) {
                let distance = computeDistance(e.touches[0].clientX, lastPos.x, e.touches[0].clientY, lastPos.y);
                speed.push(distance / (now - lastTime));
                lastPos = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                };
                lastTime = now;
            }
        });
        ctx.addEventListener("touchend", (e) => {
            if (e.touches.length > 1)
                return;
            let sum = 0;
            let index = 1;
            lastTime = Date.now();
            console.log(speed);
            for (let i = speed.length - 1; i >= 0; i--) {
                if (speed[i] > speed[i - 1]) {
                    sum += speed[i] - speed[i - 1];
                    index++;
                }
                else
                    break;
            }
            let dx = lastPos.x - x;
            let dy = lastPos.y - y;
            if ((sum / index) * 100 >= 10 && speed[speed.length - 1] >= 20) {
                if ((dx <= 0 && event === "fastSlideLeft") ||
                    (dx >= 0 && event === "fastSlideRight") ||
                    (dy >= 0 && event === "fastSlideDown") ||
                    (dy <= 0 && event === "fastSlideTop") ||
                    event === "fastSlide") {
                    let ev = Object.assign(Object.assign({}, e), { startPos: startPos, endPos: lastPos, interval: lastTime - startTime, lastSpeed: speed[speed.length - 1] });
                    if (listener instanceof Function) {
                        listener(ev);
                    }
                    else {
                        listener.handleEvent(ev);
                    }
                }
            }
            speed = [];
            lastPos = { x: 0, y: 0 };
            startPos = { x: 0, y: 0 };
            lastTime = 0;
            startTime = 0;
        });
    }
    function pintchOrRotate() {
        let prevV = { x: 0, y: 0 };
        ctx.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1) {
                let v1 = e.touches[0];
                let v2 = e.touches[1];
                prevV = {
                    x: v2.clientX - v1.clientX,
                    y: v2.clientY - v1.clientY,
                };
            }
        });
        ctx.addEventListener("touchmove", (e) => {
            e.preventDefault();
            if (e.touches.length > 1) {
                let v1 = e.touches[0];
                let v2 = e.touches[1];
                let V = {
                    x: v2.clientX - v1.clientX,
                    y: v2.clientY - v1.clientY,
                };
                //利用前后的向量模比计算放大或缩小的倍数
                let scale = computeVectorLen(V) / computeVectorLen(prevV);
                if (event === "pintch") {
                    let ev = Object.assign(Object.assign({}, e), { scale: scale });
                    if (listener instanceof Function) {
                        listener(ev);
                    }
                    else {
                        listener.handleEvent(ev);
                    }
                }
                // 计算出拖动时旋转的角度
                let angle = computeAngle(prevV, V);
                if (event === "rotate") {
                    let ev = Object.assign(Object.assign({}, e), { angle });
                    if (listener instanceof Function) {
                        listener(ev);
                    }
                    else {
                        listener.handleEvent(ev);
                    }
                }
            }
        });
        ctx.addEventListener("touchend", (e) => {
            //ToDo
            prevV = { x: 0, y: 0 };
        });
    }
    switch (event) {
        case "singleTap":
        case "doubleTap":
        case "longTap":
            singleOrDoubleOrLongTap();
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
            moveOrSwipe();
            break;
        case "fastSlide":
        case "fastSlideLeft":
        case "fastSlideRight":
        case "fastSlideTop":
        case "fastSlideDown":
            fastSlide();
            break;
        case "pintch":
        case "rotate":
            pintchOrRotate();
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
//# sourceMappingURL=index.js.map