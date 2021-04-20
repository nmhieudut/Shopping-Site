import {
  ShoppingCartActionType,
  ADD_ITEM,
  REMOVE_ITEM,
  ADJUST_ITEM
} from "@types";

export interface AddedProducts {
  id: string;
  name: string;
  image: string;
  price: string;
  star: number;
  quantity: number;
}
export interface CartState {
  addedProducts: AddedProducts[];
}
const initialState: CartState = {
  addedProducts: []
};

export default function shoppingCartReducers(
  state = initialState,
  action: ShoppingCartActionType
): CartState {
  switch (action.type) {
    case ADD_ITEM:
      let found = [...state.addedProducts].find(
        item => item.id === action.product.id
      );
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedProducts: [...state.addedProducts]
        };
      }
      var newAddedProducts = [...state.addedProducts];
      newAddedProducts.push(action.product);
      return {
        ...state,
        addedProducts: newAddedProducts
      };

    case REMOVE_ITEM:
      var addedProducts = [...state.addedProducts].filter(
        e => e.id !== action.id
      );
      return {
        ...state,
        addedProducts: addedProducts
      };
    case ADJUST_ITEM:
      for (let i = 0; i < state.addedProducts.length; i++) {
        if (state.addedProducts[i].id === action.id) {
          state.addedProducts[i].quantity =
            state.addedProducts[i].quantity + action.quantity;
        }
        if (state.addedProducts[i].quantity < 1) {
          var remainingProducts = [...state.addedProducts].filter(
            e => e.id !== state.addedProducts[i].id
          );
          return {
            ...state,
            addedProducts: remainingProducts
          };
        }
      }
      var newProductsList = [...state.addedProducts];
      return {
        ...state,
        addedProducts: newProductsList
      };
    default:
      return state;
  }
}
