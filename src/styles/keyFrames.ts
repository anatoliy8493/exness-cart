import { keyframes } from 'styled-components';

export const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .64;
  }
  100% {
    opacity: 1;
  }
`;
