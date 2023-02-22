import { ListenerConfig, Vector } from "../types";
export declare function computeDistance(x1: number, y1: number, x2: number, y2: number): number;
export declare function computeVectorLen(v: Vector): number;
export declare function computeAngle(v1: Vector, v2: Vector): number;
export declare function isListenerConfig(value: any): value is ListenerConfig;
