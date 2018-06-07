const int = (min: number, max: number): number => {
  return Math.round(float(min, max));
};

const float = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export { int, float };
