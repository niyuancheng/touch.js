import { ExternalHTMLElement, ListenerConfig, MoveEvent, SwipeEvent } from "../types";
import { isListenerConfig } from "../utils";

export function moveOrSwipe(
  ctx: ExternalHTMLElement,
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | ListenerConfig
) {
  let isMove = false;
  let pos = {
    x: 0,
    y: 0,
  };
  let dx = 0,
    dy = 0;
    let ifStop = false;

  if(isListenerConfig(options)) {
    ifStop = options.stopPropagation;
  }
  ctx.addEventListener("touchstart", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation()
    if (e.touches.length > 1) return;
    pos.x = e.touches[0].clientX;
    pos.y = e.touches[0].clientY;
  });

  ctx.addEventListener("touchmove", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation()
    if (e.touches.length > 1) return;
    isMove = true;
    e.preventDefault();
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    dx = x - pos.x;
    dy = y - pos.y;
    if (
      (event === "moveLeft" && dx < 0) ||
      (event === "moveRight" && dx > 0) ||
      (event === "moveTop" && dy < 0) ||
      (event === "moveDown" && dy > 0) ||
      event === "move"
    ) {
      let ev: MoveEvent = { ...e, startPos: pos, deltaX: dx, deltaY: dy, e };
      if (listener instanceof Function) {
        listener(ev);
      } else {
        listener.handleEvent(ev);
      }
    }
  });

  ctx.addEventListener("touchend", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation()
    if (e.touches.length > 1) return;
    let end = {
      x: pos.x + dx,
      y: pos.y + dy,
    };
    if (
      isMove &&
      ((event === "swipeLeft" && dx < 0) ||
        (event === "swipeRight" && dx > 0) ||
        (event === "swipeTop" && dy < 0) ||
        (event === "swipeDown" && dy > 0) ||
        event === "swipe")
    ) {
      let ev: SwipeEvent = { ...e, startPos: pos, endPos: end, e };
      if (listener instanceof Function) {
        listener(ev);
      } else {
        listener.handleEvent(ev);
      }
    }
    isMove = false;
  });
}
