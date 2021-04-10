export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_SUB_ITEM = "ADD_SUB_ITEM";
export interface Products {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}
export interface AddedProducts {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}
interface AddItemAction {
  type: typeof ADD_ITEM;
  product: AddedProducts;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: string;
}

interface AddOrSubQuantity {
  type: typeof ADD_SUB_ITEM;
  id: string;
  quantity: number;
}

interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  page: number;
  count: number;
}

interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  products: Products[];
  isFetching: boolean;
  total: number;
}

export type ShoppingCartActionType =
  | AddItemAction
  | RemoveItemAction
  | FetchProductsAction
  | AddOrSubQuantity
  | SetProductsAction;
