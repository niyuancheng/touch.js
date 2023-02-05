import doc from "../package/index"
import { SingleTapEvent, DoubleTapEvent, MoveEvent, SwipeEvent } from "../package/types"
import "./main.less"

let box = doc.getElementById("box")!;
console.log((box as any).__proto__, doc.getElementById)
box.addEventListener("singleTap",(e: SingleTapEvent) => {
    console.log(e.interval,"单击成功");
})
box.addEventListener("doubleTap",(e: DoubleTapEvent) => {
    console.log(e.interval, "双击成功")
})

let left = box.getBoundingClientRect().left;
let top = box.getBoundingClientRect().top;
console.log(left,top);
box.addEventListener("move",(e :MoveEvent) => {
    let dx = e.deltaX;
    let dy = e.deltaY;
    console.log(dx,dy);
    box.style.left = left + dx  + "px";
    box.style.top = top + dy  + "px";
})

box.addEventListener("swipe",(e: SwipeEvent) => {
    console.log("滑动结束", e.endPos)
})