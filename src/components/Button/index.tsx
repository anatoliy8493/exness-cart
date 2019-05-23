import Ink from 'react-ink';
import { noop } from 'lodash';
import React, { ReactNode } from 'react';

import * as S from './styles';

interface Props {
  type?: 'button' | 'reset' | 'submit';
  theme?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export default class extends React.PureComponent<Props> {
  private static defaultProps = {
    theme: 'orange',
    type: 'button',
    onClick: noop,
    disabled: false,
  };

  public render() {
    const { theme, children, type, onClick, disabled } = this.props;

    return (
      <S.Wrapper onClick={onClick} type={type} theme={theme} disabled={disabled}>
        <React.Fragment>
          {!disabled && <Ink opacity={0.12} />}
          {children}
        </React.Fragment>
      </S.Wrapper>
    )
  }  
}
