export interface InterfaceProduct {
  id: number
  title: string;
  price: number;
}

export interface InterfaceCartProduct extends InterfaceProduct {
  quantity: number;
}

export interface InterfaceProductsState {
  byId: { [key: number]: InterfaceProduct };
  visibleIds: number[];
}

export interface InterfaceCartState {
  addedIds: number[];
  quantityById: { [key: number]: number };
}

export interface InterfaceSortsState {
  [key: string]: {
    column: string | null;
    sortOrder: string | null;
  };
}

export interface InterfaceStore {
  cart: InterfaceCartState;
  sorts: InterfaceSortsState;
  products: InterfaceProductsState;
}
