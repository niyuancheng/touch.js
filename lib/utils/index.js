export function computeDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
export function computeVectorLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
// 计算两个向量之间的角度
export function computeAngle(v1, v2) {
    let lv1 = computeVectorLen(v1);
    let lv2 = computeVectorLen(v2);
    let angle = 0;
    let l = (lv1 * lv2);
    if (l) {
        let cosVal = (v1.x * v2.x + v1.y * v2.y) / l;
        angle = Math.acos(Math.min(cosVal, 1)); //得到两个向量的夹角
        angle = v1.x * v2.y - v2.x * v1.y > 0 ? -angle : angle; //得到夹角的方向（顺时针逆时针）
        return angle * 180 / Math.PI;
    }
    return 0;
}
//# sourceMappingURL=index.js.map