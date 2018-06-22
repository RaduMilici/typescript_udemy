import Vector from '../triangulation_classes/Vector';
import boundingBox from '../interfaces/bounding_box';

const int = (min: number, max: number): number => {
  return Math.round(float(min, max));
};

const float = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const color = (): string => {
  const r = int(0, 255);
  const g = 0; //int(0, 255);
  const b = 0; //int(0, 255);
  return `rgb(${r},${g},${b})`;
};

const point = ({ top, bottom, left, right }: boundingBox): Vector => {
  const x = int(left, right);
  const y = int(top, bottom);

  return new Vector({ x, y });
};

const points = (count: number, box: boundingBox): Vector[] => {
  const points: Vector[] = [];

  for (let i = 0; i < count; i++) {
    points.push(point(box));
  }

  return points;
};

export { int, float, color, point, points };
