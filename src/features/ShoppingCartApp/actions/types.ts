export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

// export interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// }
export interface AddedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
export interface ProductState {
  // products: Product[];
  addedProducts: AddedProduct[];
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  product: AddedProduct;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: number;
}
export type ShoppingCartActionType = AddItemAction | RemoveItemAction;
