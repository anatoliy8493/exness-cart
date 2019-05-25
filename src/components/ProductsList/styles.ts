import styled from 'styled-components';

import { media } from '../../styles/mixins';

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;
