export function moveOrSwipe(ctx, event, listener, options) {
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
//# sourceMappingURL=MoveOrSwipe.js.map