import { AddedProducts } from "store/Cart";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
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

export type ShoppingCartActionType =
  | AddItemAction
  | RemoveItemAction
  | AdjustItemAction;
