import { createElement } from "../override/createElement";
import { addEventListener } from "..";
import { getElementById } from "../override/getElementById";
import { getElementsByClassName } from "../override/getElementsByClassName";
import { getElementsByTagName } from "../override/getElementsByTagName";

export type MoblieEvent =
  | "singleTap"
  | "doubleTap"
  | "longTap"
  | "move"
  | "moveLeft"
  | "moveRight"
  | "moveTop"
  | "moveDown"
  | "swipe"
  | "swipeLeft"
  | "swipeRight"
  | "swipeTop"
  | "swipeDown"
  | "fastSlide"
  | "fastSlideLeft"
  | "fastSlideRight"
  | "fastSlideTop"
  | "fastSlideDown"
  | "pintch"
  | "rotate";

export type ExternalHTMLElement = {
  [P in keyof HTMLElement]: HTMLElement[P];
} & {
  addEventListener: typeof addEventListener;
};

export type ExternalHTMLElementTagNameMap = {
  [K in keyof HTMLElementTagNameMap]: HTMLElementTagNameMap[K] & {
    addEventListener: typeof addEventListener;
  };
};

export type ExternalHTMLElementDeprecatedTagNameMap = {
  [K in keyof HTMLElementDeprecatedTagNameMap]: HTMLElementDeprecatedTagNameMap[K] & {
    addEventListener: typeof addEventListener;
  };
};

export type ExternalSVGElementTagNameMap = {
  [K in keyof SVGElementTagNameMap]: SVGElementTagNameMap[K] & {
    addEventListener: typeof addEventListener;
  }
}

export type ExternalElement = Element & {addEventListener: typeof addEventListener}

export interface ExternalDocument extends Document{
  createElement: typeof createElement;
  getElementById: typeof getElementById;
  getElementsByClassName: typeof getElementsByClassName;
  getElementsByTagName: typeof getElementsByTagName;
}

// export type ExternalEventListenerOrEventListenerObject = EventListenerOrEventListenerObject |

export type Point = {
  x: number;
  y: number;
};
export type Vector = {
  x: number;
  y: number;
  z?: number;
};

export type ExternalTouchEvent = {
  singleTap: SingleTapEvent;
  doubleTap: DoubleTapEvent;
  longTap: null;
  move: MoveEvent;
  moveLeft: MoveEvent;
  moveRight: MoveEvent;
  moveTop: MoveEvent;
  moveDown: MoveEvent;
  swipe: SwipeEvent;
  swipeLeft: SwipeEvent;
  swipeRight: SwipeEvent;
  swipeTop: SwipeEvent;
  swipeDown: SwipeEvent;
  fastSlide: FastSlideEvent;
  fastSlideLeft: FastSlideEvent;
  fastSlideRight: FastSlideEvent;
  fastSlideTop: FastSlideEvent;
  fastSlideDown: FastSlideEvent;
  pintch: PintchEvent;
  rotate: RotateEvent;
};

export interface SingleTapEvent extends TouchEvent {
  // 单击中从触摸开始到触摸结束持续时间
  interval: number;
}

export interface DoubleTapEvent extends TouchEvent {
  // 两次之间的时长
  interval: number;
}

export interface MoveEvent extends TouchEvent {
  startPos: Point;
  // dx ,x坐标的变化值
  deltaX: number;
  // dy,y坐标的变化值
  deltaY: number;
}

export interface SwipeEvent extends TouchEvent {
  // 开始的坐标和结束的坐标
  startPos: Point;
  endPos: Point;
}

export interface FastSlideEvent extends TouchEvent {
  startPos: Point;
  endPos: Point;
}

export interface PintchEvent extends TouchEvent {
  scale: number;
}

export interface RotateEvent extends TouchEvent {
  angle: number;
}
