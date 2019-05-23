import styled from 'styled-components';

import { hexToRgb } from '../../utils';
import { LOCHMARA } from '../../styles/colors';
import { row, column, paper, title24, title17, flexAlign } from '../../styles/mixins';

export const Wrapper = styled.div`
  ${column}
  ${paper}
  border-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 80px;
  background-color: ${hexToRgb(LOCHMARA, '.64')};
`;

export const Body = styled.div`
  ${column}
  padding: 16px;
`;

export const Footer = styled.div`
  ${row}
  ${flexAlign('space-between', 'center')}
  margin-bottom: 24px;
`;

export const Title = styled.div`
  ${title17}
  margin-bottom: 8px;
`;

export const Price = styled.div`
  ${title24}
  font-weight: 600;
`;
