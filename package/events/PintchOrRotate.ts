import {
  ExternalHTMLElement,
  ListenerConfig,
  PintchEvent,
  RotateEvent,
  Vector,
} from "../types";
import { computeAngle, computeVectorLen, isListenerConfig } from "../utils";

export function pintchOrRotate(
  ctx: ExternalHTMLElement,
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions | ListenerConfig
) {
  let prevV: Vector = { x: 0, y: 0 };
  let v1, v2;
  let scale = 1;

  let ifStop = false;
  if(isListenerConfig(options)) {
    ifStop = options.stopPropagation;
  }
  ctx.addEventListener("touchstart", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation()
    if (e.touches.length > 1) {
      v1 = e.touches[0];
      v2 = e.touches[1];
      prevV = {
        x: v2.clientX - v1.clientX,
        y: v2.clientY - v1.clientY,
      };
    }
  });

  ctx.addEventListener("touchmove", (e: TouchEvent) => {
    if(ifStop) e.stopPropagation()
    e.preventDefault();
    if (e.touches.length > 1) {
      let v1 = e.touches[0];
      let v2 = e.touches[1];
      let V = {
        x: v2.clientX - v1.clientX,
        y: v2.clientY - v1.clientY,
      };
      //利用前后的向量模比计算放大或缩小的倍数
      scale = computeVectorLen(V) / computeVectorLen(prevV);
      if (event === "pintch") {
        let ev: PintchEvent = { ...e, scale, e };
        if (listener instanceof Function) {
          listener(ev);
        } else {
          listener.handleEvent(ev);
        }
      }
      // 计算出拖动时旋转的角度
      let angle = computeAngle(prevV, V);
      if (event === "rotate") {
        let ev: RotateEvent = { ...e, angle,e };
        if (listener instanceof Function) {
          listener(ev);
        } else {
          listener.handleEvent(ev);
        }
      }
    }
  });

  ctx.addEventListener("touchend", (e: TouchEvent) => {
    //ToDo
    if(ifStop) e.stopPropagation()
    // 只要最初的两个手指离开一个就行
    if (
      [...e.touches].indexOf(v1) === -1 ||
      [...e.touches].indexOf(v2) === -1
    ) {
      if (event === "pintchOver") {
        let ev: PintchEvent = { ...e, scale,e };
        if (listener instanceof Function) {
          listener(ev);
        } else {
          listener.handleEvent(ev);
        }
      }
    }
    prevV = { x: 0, y: 0 };
  });
}
