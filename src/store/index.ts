import shoppingCartReducers from "store/ShoppingCart/reducer";
import VouchersReducers from "store/Vouchers/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// Saga (root)
import rootSagas from "store/rootSagas";
// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // SAGA
  sagaMiddleware
];
export const rootReducer = combineReducers({
  shoppingCartReducers,
  VouchersReducers
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// Saga (run)
sagaMiddleware.run(rootSagas);
export default store;
