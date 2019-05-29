import Ink from 'react-ink';
import { noop } from 'lodash';
import React, { ReactNode } from 'react';

import * as S from './styles';

interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  theme?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  theme = 'orange',
  type = 'button',
  onClick = noop,
  disabled = false,
}: IButtonProps) => (
  <S.Wrapper onClick={onClick} type={type} theme={theme} disabled={disabled}>
    {!disabled && <Ink opacity={0.12} />}
    {children}
  </S.Wrapper>
);

export default Button;
