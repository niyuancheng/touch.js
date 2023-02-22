import { DoubleTapEvent, ExternalHTMLElement, ListenerConfig, SingleTapEvent } from "../types";
import { isListenerConfig } from "../utils";

export function singleOrDoubleOrLongTap(
  ctx: ExternalHTMLElement,
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | ListenerConfig
) {
  let tapTimer: number | null = null;
  let longTapTimer: number | null = null;
  let lastTapEndTime = -1;
  let isMove = false;
  let startTime = 0;
  let isDoubleTap = false;
  let betweenTime = 0;
  let ifStop = false;
  if(isListenerConfig(options)) {
    ifStop = options.stopPropagation;
  }
  ctx.addEventListener("touchstart", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation();
    if (e.touches.length > 1) return;
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
  ctx.addEventListener("touchmove", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation();
    if (e.touches.length > 1) return;
    isMove = true;
    e.preventDefault();
    if (longTapTimer) {
      window.clearTimeout(longTapTimer);
      longTapTimer = null;
    }
  });
  ctx.addEventListener("touchend", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation();
    if (e.touches.length > 1) return;
    let interval = Date.now() - startTime;
    if (longTapTimer) {
      window.clearTimeout(longTapTimer);
      longTapTimer = null;
    }
    if (interval < 150 && !isMove) {
      if (event === "singleTap" && isDoubleTap === false) {
        tapTimer = window.setTimeout(() => {
          let ev: SingleTapEvent = { ...e, interval, e };
          if (listener instanceof Function) {
            listener(ev);
          } else {
            listener.handleEvent(ev);
          }
        }, 150);
      } else if (event === "doubleTap" && isDoubleTap === true) {
        tapTimer = window.setTimeout(() => {
          let ev: DoubleTapEvent = { ...e, interval: betweenTime, e };
          if (listener instanceof Function) {
            listener(ev);
          } else {
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
