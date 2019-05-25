export interface InterfaceProduct {
  id: number
  title: string;
  price: number;
}

export interface InterfaceCartProduct extends InterfaceProduct {
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
  };
  sorts: {
    [key: string]: {
      column: string | null;
      sortOrder: string | null;
    };
  };
}
