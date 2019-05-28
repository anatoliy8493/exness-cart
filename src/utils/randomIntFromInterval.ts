const randomIntFromInterval = (min: number, max: number): number => {
  if (min > max) return min;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomIntFromInterval;
