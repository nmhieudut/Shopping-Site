import { Product, AddedProducts } from "store/ShoppingCart";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADJUST_ITEM = "ADJUST_ITEM";

export interface AddItemAction {
  type: typeof ADD_ITEM;
  product: AddedProducts;
}

export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: string;
}

export interface AdjustItemAction {
  type: typeof ADJUST_ITEM;
  id: string;
  quantity: number;
}

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  page: number;
  count: number;
  q: string;
}

export interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  products: Product[];
  isFetching: boolean;
  total: number;
  hasSearched: boolean;
}

export type ShoppingCartActionType =
  | AddItemAction
  | RemoveItemAction
  | FetchProductsAction
  | AdjustItemAction
  | SetProductsAction;
