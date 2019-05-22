import Ink from 'react-ink';
import { noop } from 'lodash';
import React from 'react';

import * as S from './styles';

type P = {
  type?: 'button' | 'reset' | 'submit';
  theme?: string;
  onClick?: () => void;
}

export default class extends React.PureComponent<P> {
  static defaultProps = {
    theme: 'orange',
    type: 'button',
    onClick: noop,
  };

  render() {
    const { theme, children, type, onClick } = this.props;

    return (
      <S.Wrapper onClick={onClick} type={type} theme={theme}>
        <React.Fragment>
          <Ink opacity={0.12} />
          {children}
        </React.Fragment>
      </S.Wrapper>
    )
  }  
}
