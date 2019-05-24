import styled, { css } from 'styled-components';

import { hexToRgb } from '../../utils';
import { row, flexAlign, round } from '../../styles/mixins';
import { BLACK, LOCHMARA } from '../../styles/colors';

const buttonCss = css`
  ${round('12px')}
  ${row}
  ${flexAlign('center')}
  padding: 8px;
  box-shadow: 0 0 8px ${hexToRgb(BLACK, '.24')};
  transition: box-shadow .2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 16px ${hexToRgb(BLACK, '.24')};
  }
`;

export const TRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 100px;
  box-shadow: 0 1px 1px 0 ${hexToRgb(BLACK, '.24')};

  ${(props: { header?: boolean }) => props.header && `
    background-color: ${hexToRgb(LOCHMARA, '.24')};
    box-shadow:
      inset 0 -1px 0 0 ${BLACK},
      inset 0 1px 0 0 ${BLACK},
      inset -1px 0 0 0 ${BLACK},
      inset 1px 0px 0 0 ${BLACK};
  `}
`;

export const TCell = styled.div`
  ${row}
  ${flexAlign('flex-start', 'center')}
  padding: 8px 12px;
`;

export const IncrementButton = styled.div`
  ${buttonCss}
  margin-left: 8px;
`;

export const DecrementButton = styled.div`
  ${buttonCss}
  margin-right: 8px;
`;

export const CartIconWrapper = styled.div`
  ${row}
  ${flexAlign('center')}
  ${round('24px')}
  padding: 8px;
  transition: background-color .2s;

  &:hover {
    cursor: pointer;
    background-color: ${hexToRgb(LOCHMARA, '.12')};
  }
`;
