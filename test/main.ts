import document from "../package/index"
import { SingleTapEvent, DoubleTapEvent } from "../package/types"
import "./main.less"

let pos = document.getElementById("pos")
let size = document.getElementById("size");


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
// box.addEventListener("touchstart",(e) => {
//     document.body.addEventListener("move",(e)=>{
//         console.log(e.deltaX,e.deltaY);
//         let dx = e.deltaX;
//         let dy = e.deltaY;
//         box.style.left = left + dx  + "px";
//         box.style.top = top + dy  + "px";
//     })
// })
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
    box.style.width = box.clientWidth * scale + "px";
    box.style.height = box.clientHeight * scale + "px";

})

