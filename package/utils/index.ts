import { ListenerConfig, Vector } from "../types";

export function computeDistance(x1: number,y1: number,x2: number,y2: number): number {
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

export function computeVectorLen(v:Vector): number {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

// 计算两个向量之间的角度
export function computeAngle(v1:Vector,v2:Vector): number {
    let lv1 = computeVectorLen(v1);
    let lv2 = computeVectorLen(v2);
    let angle = 0;
    let l = (lv1 * lv2)
    if(l) {
        let cosVal = (v1.x * v2.x + v1.y * v2.y) / l;
        angle = Math.acos(Math.min(cosVal,1))//得到两个向量的夹角
        angle = v1.x * v2.y - v2.x * v1.y > 0 ? -angle : angle; //得到夹角的方向（顺时针逆时针）
        return angle * 180 / Math.PI;
    }
    return 0;
}

export function isListenerConfig(value: any): value is ListenerConfig {
    return typeof value === "object" && value.stopPropagation !== null;
}