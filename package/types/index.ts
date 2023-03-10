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
export interface ExternalElement extends Element {
  addEventListener: typeof addEventListener;
}

export interface ExternalHTMLElement extends HTMLElement{
  addEventListener: typeof addEventListener;
};

export interface ExternalDocument extends Document {
  createElement: typeof createElement;
  getElementById: typeof getElementById;
  getElementsByClassName: typeof getElementsByClassName;
  getElementsByTagName: typeof getElementsByTagName;
  body: ExternalHTMLElement;
}

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

export interface ExternalTouchEvent extends HTMLElementEventMap {
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
  pintchOver: PintchEvent;
  rotate: RotateEvent;
};

export interface SingleTapEvent extends TouchEvent {
  // ???????????????????????????????????????????????????
  interval: number;
  e: TouchEvent
}

export interface DoubleTapEvent extends TouchEvent {
  // ?????????????????????
  interval: number;
  e: TouchEvent
}

export interface MoveEvent extends TouchEvent {
  startPos: Point;
  // dx ,x??????????????????
  deltaX: number;
  // dy,y??????????????????
  deltaY: number;
  e: TouchEvent
}

// extends???TouchEvent??????????????????
export interface SwipeEvent extends TouchEvent {
  // ?????????????????????????????????
  startPos: Point;
  endPos: Point;
  e: TouchEvent
}

export interface FastSlideEvent extends TouchEvent {
  startPos: Point;
  endPos: Point;
  interval: number;
  //???????????????????????????????????? px/100ms
  lastSpeed: number;
  e: TouchEvent
}

export interface PintchEvent extends TouchEvent {
  scale: number;
  e: TouchEvent
}

export interface RotateEvent extends TouchEvent {
  angle: number;
  e: TouchEvent
}


export interface ListenerConfig {
  stopPropagation: boolean;
}