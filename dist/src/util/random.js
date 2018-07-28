import { Vector } from 'pulsar-pathfinding';
const int = (min, max) => {
    return Math.round(float(min, max));
};
const float = (min, max) => {
    return Math.random() * (max - min) + min;
};
const color = () => {
    const r = int(0, 255);
    const g = 0; //int(0, 255);
    const b = 0; //int(0, 255);
    return `rgb(${r},${g},${b})`;
};
const point = ({ top, bottom, left, right }) => {
    const x = int(left, right);
    const y = int(top, bottom);
    return new Vector({ x, y });
};
const points = (count, box) => {
    const points = [];
    for (let i = 0; i < count; i++) {
        points.push(point(box));
    }
    return points;
};
export { int, float, color, point, points };
//# sourceMappingURL=random.js.map