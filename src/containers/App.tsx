import React from 'react';

import CartContainer from './CartContainer';
import ProductsContainer from './ProductsContainer';

const App: React.FC = () => {
  return (
    <div>
      <ProductsContainer />
      <br/>
      <hr/>
      <br/>
      <CartContainer />
    </div>
  );
}

export default App;
