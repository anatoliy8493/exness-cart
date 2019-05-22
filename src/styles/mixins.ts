import { css, ThemedCssFunction } from 'styled-components';

import { hexToRgb } from '../utils';
import { WHITE, BLACK } from './colors';

const sizes: { [key: string]: number } = {
  phone: 320,
  tablet: 768,
  desktop: 1024,
};

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<any> },
);

export const normalizeLink = css`
  color: inherit;
  text-decoration: none;
`;

export const column = css`
  display: flex;
  flex-direction: column;
`;

export const row = css`
  display: flex;
  flex-direction: row;
`;

export const flexAlign = (mainAxis = 'flex-start', crossAxis?: string) => css`
  justify-content: ${mainAxis};
  align-items: ${crossAxis || mainAxis};
`;

export const wh = (width: string, height?: string) => css`
  width: ${width};
  height: ${height || width};
`;

export const round = (size: string) => css`
  ${wh(size)}
  border-radius: 50%;
  overflow: hidden;
`;

export const container = css`
  width: 100%;
  max-width: 1376px;
  padding-right: 16px;
  padding-left: 16px;
  margin: 0 auto;

  ${media.desktop`
    padding-left: 32px;
    padding-right: 32px;
  `};
`;

export const paper = css`
  position: relative;
  background-color: ${WHITE};
  box-shadow: 0 2px 4px 0 ${hexToRgb(BLACK, '.12')};

  &:hover {
    box-shadow: 0 4px 8px 0 ${hexToRgb(BLACK, '.12')};
  }
`;

export const font = (fontSize: string, lineHeight?: string, fontWeight?: number) => css`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
`;

export const title32 = () => css`
  ${font('24px', '36px', 500)}

  ${media.desktop`
    ${font('32px', '48px')}
  `};
`;

export const title24 = () => css`
  ${font('17px', '28px', 500)}

  ${media.desktop`
    ${font('24px', '36px')}
  `};
`;

export const title17 = () => css`
  ${font('17px', '28px', 500)}
`;

export const title13 = () => css`
  ${font('13px', '20px', 500)}
`;

export const body15 = () => css`
  ${font('15px', '24px', 400)}
`;

export const body13 = () => css`
  ${font('13px', '20px', 400)}
`;

export const caption13 = () => css`
  ${font('13px', '20px', 400)}
`;

export const caption11 = () => css`
  ${font('11px', '20px', 400)}
`;

export const badge10 = () => css`
  ${font('10px', '12px', 700)}
  letter-spacing: 12%;
`;

export const resetButton = css`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;
`;
