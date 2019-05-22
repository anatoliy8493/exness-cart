import styled from 'styled-components';

import { hexToRgb } from '../../utils';
import { title17, resetButton } from '../../styles/mixins';
import { WHITE, ECSTASY, PUMPKIN, BLACK } from '../../styles/colors';

export const Wrapper = styled.button`
  ${title17}
  ${resetButton}
  position: relative;
  min-height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  overflow: hidden;
  color: ${WHITE};
  transition: background-color .2s, box-shadow .2s;
  background-color: ${PUMPKIN};
  box-shadow: 0 1px 0 0 ${ECSTASY}, 0 1px 5px 0 ${hexToRgb(BLACK, '.25')};
  cursor: pointer;

  ${props => props.disabled && `
    opacity: .5;
    cursor: default;
  `}
`;
