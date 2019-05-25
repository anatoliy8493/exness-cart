import React from 'react';

import * as S from '../styles/primitives';
import CartContainer from './CartContainer';
import ProductsContainer from './ProductsContainer';

const App: React.FC = () => {
  return (
    <S.Page>
      <ProductsContainer />
      <br/>
      <hr/>
      <br/>
      <CartContainer />
    </S.Page>
  );
}

export default App;
