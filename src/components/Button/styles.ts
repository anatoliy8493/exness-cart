import styled from 'styled-components';

import { BLACK, SUPERNOVA } from '../../styles/colors';
import { title17, resetButton } from '../../styles/mixins';

export const Wrapper = styled.button`
  ${title17}
  ${resetButton}
  position: relative;
  min-height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  overflow: hidden;
  color: ${BLACK};
  transition: background-color .2s, box-shadow .2s;
  background-color: ${SUPERNOVA};
  cursor: pointer;

  ${props => props.disabled && `
    opacity: .5;
    cursor: default;
  `}
`;
