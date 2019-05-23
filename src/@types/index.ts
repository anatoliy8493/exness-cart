export interface InterfaceProduct {
  id: number
  title: string;
  price: number;
  quantity: number;
}

export interface InterfaceStore {
  cart: {
    addedIds: number[];
    quantityById: { [key: number]: number };
  };
  products: {
    byId: { [key: number]: InterfaceProduct };
    visibleIds: number[];
  }
}