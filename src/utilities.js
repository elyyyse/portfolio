export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const clamp = (num, min, max) => {
  if (num < min) {
    return min;
  }
  if (num > max) {
    return max;
  }
  return num;
  // num = Math.min(num, max);
  // return Math.max(num, min);
};

export const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // First, normalize the value between 0 and 1
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};
