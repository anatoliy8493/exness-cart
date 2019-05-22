import { WHITE } from '../styles/colors';

const hexToRgb = (hex = WHITE, alpha?: string): string => {
  const result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return `rgb(${r}, ${g}, ${b})`;
};

export default hexToRgb;
