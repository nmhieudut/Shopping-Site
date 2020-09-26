import { combineReducers, createStore } from "redux";
import counterReducers from "../features/CountersApp/reducers";
import shoppingCartReducers from "../features/ShoppingCartApp/reducers"

export const rootReducer = combineReducers({
  counterReducers,
  shoppingCartReducers
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;
