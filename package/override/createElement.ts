import {
  ExternalHTMLElement,
  ExternalHTMLElementDeprecatedTagNameMap,
  ExternalHTMLElementTagNameMap,
} from "../types";
import { addEventListener } from "..";
let fn1 = Document.prototype.createElement;

// 前两个函数为重载声明
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions
): ExternalHTMLElementTagNameMap[K];
export function createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions
): ExternalHTMLElementDeprecatedTagNameMap[K];

// 此函数为重载实现
export function createElement(
  tagName: string,
  options?: ElementCreationOptions
): ExternalHTMLElement {
  let dom = fn1.call(window.document, tagName, options);
  let prototype = (dom as any).__proto__;
  let proto = Object.create(prototype);
  proto.addEventListener = addEventListener;
  Object.setPrototypeOf(dom, proto);
  Object.setPrototypeOf(proto, prototype);
  return dom;
}
