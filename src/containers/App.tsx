import React from 'react';

import CartContainer from './CartContainer';
import FillCartButton from './FillCartButton';
import ProductsContainer from './ProductsContainer';

const App: React.FC = () => {
  return (
    <div>
      <ProductsContainer />
      <br/>
      <FillCartButton />
      <br/>
      <hr/>
      <br/>
      <CartContainer />
    </div>
  );
}

export default App;
