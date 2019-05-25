import React from 'react';

import CartContainer from './CartContainer';
import { StyledPage } from '../styles/primitives';
import ProductsContainer from './ProductsContainer';

const App: React.FC = () => {
  return (
    <StyledPage>
      <ProductsContainer />
      <br/>
      <hr/>
      <br/>
      <CartContainer />
    </StyledPage>
  );
}

export default App;
