import document from "../package/index"
import { SingleTapEvent, DoubleTapEvent, MoveEvent, SwipeEvent } from "../package/types"
import "./main.less"

let box = document.getElementById("box")!;

box.addEventListener("singleTap",(e: SingleTapEvent) => {
    console.log(e.interval,"单击成功");
})
box.addEventListener("doubleTap",(e: DoubleTapEvent) => {
    console.log(e.interval, "双击成功")
})

let left = box.getBoundingClientRect().left;
let top = box.getBoundingClientRect().top;
box.addEventListener("move",(e :MoveEvent) => {
    let dx = e.deltaX;
    let dy = e.deltaY;
    console.log(dx,dy,left,top);
    box.style.left = left + dx  + "px";
    box.style.top = top + dy  + "px";
    console.log(box.style.left,box.style.top)
})

box.addEventListener("swipe",(e: SwipeEvent) => {
    console.log("滑动结束", e.endPos)
    left = box.getBoundingClientRect().left;
    top = box.getBoundingClientRect().top;
})

