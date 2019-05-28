export interface ProductInterface {
  id: number
  title: string;
  price: number;
}

export interface CartProductInterface extends ProductInterface {
  quantity: number;
}

export interface ProductInterfacesState {
  byId: { [key: number]: ProductInterface };
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
  products: ProductInterfacesState;
}
