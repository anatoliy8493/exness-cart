import Ink from 'react-ink';
import { noop } from 'lodash';
import React from 'react';

import * as S from './styles';

type P = {
  type?: 'button' | 'reset' | 'submit';
  theme?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default class extends React.PureComponent<P> {
  static defaultProps = {
    theme: 'orange',
    type: 'button',
    onClick: noop,
    disabled: false,
  };

  render() {
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
