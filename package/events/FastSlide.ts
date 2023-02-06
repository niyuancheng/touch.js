import { ExternalHTMLElement, FastSlideEvent } from "../types";
import { computeDistance } from "../utils";

export function fastSlide(
  ctx: ExternalHTMLElement,
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  let lastTime = 0;
  let startTime = 0;
  // 初始的x,y坐标
  let x = 0,
    y = 0;
  let lastPos = { x: 0, y: 0 };
  let startPos = { x: 0, y: 0 };
  let speed = [];
  ctx.addEventListener("touchstart", (e: TouchEvent) => {
    if (e.touches.length > 1) return;
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

  ctx.addEventListener("touchmove", (e: TouchEvent) => {
    if (e.touches.length > 1) return;
    e.preventDefault();
    let now = Date.now();
    if (now - lastTime >= 10) {
      let distance = computeDistance(
        e.touches[0].clientX,
        lastPos.x,
        e.touches[0].clientY,
        lastPos.y
      );
      speed.push(distance / (now - lastTime));
      lastPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      lastTime = now;
    }
  });

  ctx.addEventListener("touchend", (e: TouchEvent) => {
    if (e.touches.length > 1) return;
    let sum = 0;
    let index = 1;
    lastTime = Date.now();
    console.log(speed);
    for (let i = speed.length - 1; i >= 0; i--) {
      if (speed[i] > speed[i - 1]) {
        sum += speed[i] - speed[i - 1];
        index++;
      } else break;
    }
    let dx = lastPos.x - x;
    let dy = lastPos.y - y;
    if ((sum / index) * 100 >= 10 && speed[speed.length - 1] >= 20) {
      if (
        (dx <= 0 && event === "fastSlideLeft") ||
        (dx >= 0 && event === "fastSlideRight") ||
        (dy >= 0 && event === "fastSlideDown") ||
        (dy <= 0 && event === "fastSlideTop") ||
        event === "fastSlide"
      ) {
        let ev: FastSlideEvent = {
          ...e,
          startPos: startPos,
          endPos: lastPos,
          interval: lastTime - startTime,
          lastSpeed: speed[speed.length - 1],
        };
        if (listener instanceof Function) {
          listener(ev);
        } else {
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
