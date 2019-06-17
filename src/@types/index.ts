export interface IProduct {
  id: number
  title: string;
  price: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IProductsStore {
  byId: { [key: number]: IProduct };
  visibleIds: number[];
}

export interface ICartStore {
  addedIds: number[];
  quantityById: { [key: number]: number };
}

export interface ISortsStore {
  [key: string]: {
    column: string | null;
    sortOrder: string | null;
  };
}

export interface IStore {
  cart: ICartStore;
  sorts: ISortsStore;
  products: IProductsStore;
}
