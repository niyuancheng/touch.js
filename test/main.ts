import document from "../package/index"
import { SingleTapEvent, DoubleTapEvent } from "../package/types"
import "./main.less"

let pos = document.getElementById("pos")
let size = document.getElementById("size");
let angles = document.getElementById("angle");
(angles?.children[0] as HTMLElement).innerText = "default";
let box = document.getElementById("box")!;

box.addEventListener("singleTap",(e: SingleTapEvent) => {
    console.log(e.interval,"单击成功");
})
box.addEventListener("doubleTap",(e: DoubleTapEvent) => {
    console.log(e.interval, "双击成功")
})

let left = box.getBoundingClientRect().left;
let top = box.getBoundingClientRect().top;

(pos?.children[0].children[0] as HTMLElement).innerText = left + "";
(pos?.children[1].children[0] as HTMLElement).innerText = top + "";

(size?.children[0] as HTMLElement).innerText = box.clientWidth + "";
(size?.children[1] as HTMLElement).innerText = box.clientHeight + "";
let width = box.clientWidth;
let height = box.clientHeight;

box.addEventListener("move",(e) => {
    let dx = e.deltaX;
    let dy = e.deltaY;
    box.style.left = left + dx  + "px";
    box.style.top = top + dy  + "px";

    (pos?.children[0].children[0] as HTMLElement).innerText = left + dx + "";
    (pos?.children[1].children[0] as HTMLElement).innerText = top + dy + "";
})

box.addEventListener("swipe",(e) => {
    console.log("滑动结束", e.endPos)
    left = box.getBoundingClientRect().left;
    top = box.getBoundingClientRect().top;
})

box.addEventListener("pintch",(e) => {
    let scale = e.scale;
    box.style.width = width * scale + "px";
    box.style.height = height * scale  + "px";
    (document.getElementById("scale")?.children[0] as HTMLElement).innerText = scale + "";
    (size?.children[0] as HTMLElement).innerText = box.clientWidth + "";
    (size?.children[1] as HTMLElement).innerText = box.clientHeight + "";

})

box.addEventListener("pintchOver",(e)=>{
    width = box.clientWidth;
    height = box.clientHeight;
})

box.addEventListener("rotate",(e)=>{
    let angle = e.angle;
    (angles?.children[0] as HTMLElement).innerText = angle + "";
    let center = e.touches[0];
    let dx = center.clientX - parseInt(box.style.left);
    let dy = center.clientY - parseInt(box.style.top);
    // box.style.transformOrigin = `${dx/box.clientWidth*100}% ${dy/box.clientHeight*100}%`
    box.style.transform = `rotate${angle}deg`

})