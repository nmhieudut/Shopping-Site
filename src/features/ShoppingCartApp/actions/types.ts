export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export interface Product {
  id: string;
  name: string;
  price: number;
}
export interface ProductState {
  products: Product[];
  addedProducts: Product[];
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  product: Product;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: string;
}
export type ShoppingCartActionType = AddItemAction | RemoveItemAction;
