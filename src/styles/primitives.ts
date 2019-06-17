import styled from 'styled-components';
import {
  title32,
  title24,
  title17,
  title13,
  body15,
  body13,
  caption13,
  caption11,
  badge10,
  container,
} from './mixins';

export const Page = styled.div`
  ${container}
  flex: 1;
  padding-top: 32px;
  padding-bottom: 32px;
`;

// Flex
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img`
  width: 100%;
  border-style: none;
`;

// Fonts
export const Title32 = styled.h1`
  ${title32};
`;

export const Title24 = styled.h2`
  ${title24};
`;

export const Title17 = styled.h3`
  ${title17};
`;

export const Title13 = styled.h4`
  ${title13};
`;

export const Body15 = styled.div`
  ${body15};
`;

export const Body13 = styled.div`
  ${body13};
`;

export const Caption13 = styled.div`
  ${caption13};
`;

export const Caption11 = styled.div`
  ${caption11};
`;

export const Badge10 = styled.div`
  ${badge10};
`;
