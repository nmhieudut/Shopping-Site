import { ADD_ITEM, REMOVE_ITEM, ADJUST_ITEM } from "constant/actions";
import { AddedProducts } from "store/Cart";
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
