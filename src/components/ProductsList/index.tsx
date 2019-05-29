import React, { ReactNode } from 'react';

import * as S from './styles';

interface IProductsListProps {
  children: ReactNode;
}

const ProductsList: React.FC = ({ children }: IProductsListProps) => (
  <S.ProductsList>
    {children}
  </S.ProductsList>
)

export default ProductsList;
